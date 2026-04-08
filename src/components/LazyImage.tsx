import { useState, useRef, useEffect, type CSSProperties } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean; // true for above-fold images
  style?: CSSProperties;
}

/**
 * LazyImage — performant image with:
 * - Native lazy loading
 * - Async decoding (non-blocking)
 * - Smooth fade-in once loaded
 * - Blur placeholder until load
 * - fetchpriority="high" for eager (above-fold) images
 */
const LazyImage = ({ src, alt, className = '', eager = false, style }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Already cached / complete before mount
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      style={{
        ...style,
        transition: 'opacity 0.5s ease, filter 0.5s ease',
        opacity: loaded ? 1 : 0,
        filter: loaded ? 'blur(0px)' : 'blur(8px)',
        willChange: 'opacity, filter',
      }}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : 'low'}
      onLoad={() => setLoaded(true)}
    />
  );
};

export default LazyImage;
