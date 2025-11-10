import { useEffect, useState, useRef, memo } from 'react';

export const CursorGlow = memo(function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rafId = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth 60fps updates
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      
      rafId.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(180px circle at ${position.x}px ${position.y}px, rgba(93, 173, 226, 0.12), transparent 45%)`,
        zIndex: 3,
        mixBlendMode: 'screen',
      }}
    />
  );
});
