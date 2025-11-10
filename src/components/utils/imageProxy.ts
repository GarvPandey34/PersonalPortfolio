/**
 * Converts Google Drive image URLs to work around CORS restrictions
 * Uses multiple fallback strategies to ensure images load
 */

export function getProxiedImageUrl(googleDriveUrl: string | undefined): string {
  if (!googleDriveUrl) return "";

  // Extract the file ID from various Google Drive URL formats
  const extractFileId = (url: string): string | null => {
    // Format 1: https://drive.google.com/uc?export=view&id=FILE_ID
    const ucMatch = url.match(/[?&]id=([^&]+)/);
    if (ucMatch) return ucMatch[1];

    // Format 2: https://drive.google.com/file/d/FILE_ID/view
    const fileMatch = url.match(/\/file\/d\/([^/]+)/);
    if (fileMatch) return fileMatch[1];

    // Format 3: https://drive.google.com/open?id=FILE_ID
    const openMatch = url.match(/[?&]id=([^&]+)/);
    if (openMatch) return openMatch[1];

    return null;
  };

  const fileId = extractFileId(googleDriveUrl);
  if (!fileId) return googleDriveUrl;

  // Strategy 1: Use Google Drive's thumbnail API (more reliable, no auth needed)
  // This endpoint is designed for embedding and has fewer CORS restrictions
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
}

export function getMultipleImageFormats(googleDriveUrl: string | undefined): string[] {
  if (!googleDriveUrl) return [];

  const extractFileId = (url: string): string | null => {
    const ucMatch = url.match(/[?&]id=([^&]+)/);
    if (ucMatch) return ucMatch[1];
    const fileMatch = url.match(/\/file\/d\/([^/]+)/);
    if (fileMatch) return fileMatch[1];
    return null;
  };

  const fileId = extractFileId(googleDriveUrl);
  if (!fileId) return [googleDriveUrl];

  // Return multiple formats to try in order
  return [
    // Primary: Thumbnail API (most reliable)
    `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`,
    // Fallback 1: Direct uc endpoint
    `https://drive.google.com/uc?export=view&id=${fileId}`,
    // Fallback 2: Thumbnail with different size
    `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`,
  ];
}
