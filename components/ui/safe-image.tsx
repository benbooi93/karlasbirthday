"use client"

import React, { useState } from "react"
import Image, { ImageProps } from "next/image"

interface SafeImageProps extends Omit<ImageProps, 'src'> {
  src: string | undefined | null;
  fallbackSrc: string;
}

const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSrc,
  alt,
  onError,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImgSrc(fallbackSrc);
    if (onError) {
      onError(e); // Call original onError if provided
    }
  };

  // Use next/image for optimization, but handle errors manually
  // Note: next/image's built-in onError might behave differently
  // For simplicity here, we use a standard img tag logic wrapped in the component

  return (
    <img
      {...props} // Spread remaining props (like className, style, etc.)
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
};

export default SafeImage; 