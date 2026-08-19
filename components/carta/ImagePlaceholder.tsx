"use client";

import Image from "next/image";
import { useState } from "react";

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  recommendedSize?: string;
  aspectRatio?: string;
  className?: string;
  label?: string;
  noBorder?: boolean;
}

export default function ImagePlaceholder({
  src,
  alt = "Imagen de la carta",
  recommendedSize = "800x600px",
  aspectRatio = "4:3",
  className = "",
  label,
  noBorder = false,
}: ImagePlaceholderProps) {
  const [imgError, setImgError] = useState(false);

  // If a valid image source is provided and hasn't errored, render the Next.js Image
  if (src && !imgError) {
    return (
      <div className={`relative overflow-hidden bg-[#FAF9F7] ${noBorder ? "" : "rounded-xl"} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // Placeholder state: clean, intentional, editorial restaurant design
  return (
    <div
      className={`relative flex flex-col items-center justify-center p-4 text-[#2A282A]/50 transition-all duration-300 select-none ${
        noBorder
          ? "w-full h-full bg-transparent"
          : "rounded-xl border border-dashed border-[#2A282A]/20 bg-[#F7F5F0] hover:border-[#BC1C19]/40 hover:bg-[#F2EFE8]"
      } ${className}`}
    >
      {/* Subtle Lynch Wing / Camera Icon */}
      <div className="relative mb-2 flex items-center justify-center">
        <svg
          viewBox="0 0 58 45.5"
          className="w-10 h-8 fill-current text-[#BC1C19]/40 transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M44.56,14.18c2.2,0,7.33-1.64,9.33-2.58,0,0-1.39,6.45-14.56,10.1,2.46.37,4.65-.35,7.13-.47-4.59,6.42-8.45,4.25-11.17,5.69l-3.34,5.14V45.5H25.87V32l-3.12-5c-2.73-1.48-6.6.74-11.21-5.71,2.48.11,4.67.84,7.13.47C5.49,18,4.11,11.59,4.11,11.59c2,.95,7.13,2.6,9.33,2.58C9.16,12.92-1,7,.09,0,3.73,4.54,9.64,6.66,14.35,8.23c1.67.56,5.33,2.57,6.38,4.48h.16l8,13.78L37.12,13c.79-2,4.76-4.2,6.53-4.78C48.35,6.66,54.27,4.54,57.91,0,59,7,48.83,12.92,44.56,14.18" />
        </svg>
      </div>

      {/* Placeholder info */}
      <span className="text-[11px] font-bold tracking-wider uppercase text-[#2A282A]/70 text-center leading-tight">
        {label || "Espacio para fotografía"}
      </span>

      <span className="text-[10px] text-[#2A282A]/45 mt-1 font-mono tracking-tight">
        {recommendedSize} · {aspectRatio}
      </span>
    </div>
  );
}
