import { useState, useEffect } from "react";
import { Award } from "lucide-react";

interface GoogleDriveImageProps {
  imageUrl: string | undefined;
  alt: string;
  className?: string;
  fallbackIcon?: boolean;
  onLoadSuccess?: () => void;
  onLoadError?: () => void;
}

/**
 * Component that handles Google Drive image loading with multiple fallback strategies
 * Tries different Google Drive endpoints to bypass CORS and authentication issues
 */
export function GoogleDriveImage({
  imageUrl,
  alt,
  className = "",
  fallbackIcon = true,
  onLoadSuccess,
  onLoadError,
}: GoogleDriveImageProps) {
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Extract file ID from Google Drive URL
  const extractFileId = (url: string): string | null => {
    const ucMatch = url.match(/[?&]id=([^&]+)/);
    if (ucMatch) return ucMatch[1];
    const fileMatch = url.match(/\/file\/d\/([^/]+)/);
    if (fileMatch) return fileMatch[1];
    return null;
  };

  // Generate multiple URL formats to try
  const getImageUrls = (url: string | undefined): string[] => {
    if (!url) return [];
    
    const fileId = extractFileId(url);
    if (!fileId) return [url];

    return [
      // Strategy 1: Thumbnail API (most reliable for public files)
      `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`,
      // Strategy 2: uc?export=view endpoint
      `https://drive.google.com/uc?export=view&id=${fileId}`,
      // Strategy 3: uc?export=download (sometimes works when view doesn't)
      `https://drive.google.com/uc?export=download&id=${fileId}`,
      // Strategy 4: Thumbnail with smaller size
      `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`,
      // Strategy 5: Direct file endpoint (last resort)
      `https://lh3.googleusercontent.com/d/${fileId}`,
    ];
  };

  const imageUrls = getImageUrls(imageUrl);
  const currentUrl = imageUrls[currentUrlIndex];

  useEffect(() => {
    setCurrentUrlIndex(0);
    setHasError(false);
    setIsLoading(true);
  }, [imageUrl]);

  const handleError = () => {
    // Try next URL format
    if (currentUrlIndex < imageUrls.length - 1) {
      setCurrentUrlIndex(currentUrlIndex + 1);
    } else {
      // All formats failed
      setHasError(true);
      setIsLoading(false);
      onLoadError?.();
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    onLoadSuccess?.();
  };

  // Show fallback if no URL or all attempts failed
  if (!imageUrl || hasError) {
    if (!fallbackIcon) return null;
    
    return (
      <div className="flex flex-col items-center justify-center h-full gap-3 opacity-40 group-hover:opacity-60 transition-all duration-500">
        <Award className="w-16 h-16 text-[#5DADE2]" />
        <div className="text-xs text-[#5DADE2] uppercase tracking-widest">
          Certificate
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && fallbackIcon && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-40">
          <Award className="w-16 h-16 text-[#5DADE2] animate-pulse" />
          <div className="text-xs text-[#5DADE2] uppercase tracking-widest">
            Loading...
          </div>
        </div>
      )}
      <img
        src={currentUrl}
        alt={alt}
        className={className}
        onError={handleError}
        onLoad={handleLoad}
        style={{ display: isLoading ? "none" : "block" }}
        crossOrigin="anonymous"
      />
    </>
  );
}
