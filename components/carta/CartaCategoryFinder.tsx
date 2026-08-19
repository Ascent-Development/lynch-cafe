"use client";

import { useState, useRef } from "react";
import { FEATURED_CATEGORIES } from "@/lib/cartaHelpers";
import ImagePlaceholder from "./ImagePlaceholder";

interface CartaCategoryFinderProps {
  onSelectCategory: (macroId: string, subcategoryId?: string) => void;
}

export default function CartaCategoryFinder({
  onSelectCategory,
}: CartaCategoryFinderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reuse the canonical featured categories (with real, existing photo paths)
  // instead of a duplicate local list, so this slider never drifts out of sync.
  const categories = FEATURED_CATEGORIES;

  const maxIndex = Math.max(0, categories.length - 4);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-8 sm:py-14 space-y-6 sm:space-y-8 relative bg-white group/slider">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2A282A] tracking-tight">
          ¿Qué estás buscando hoy?
        </h2>
      </div>

      {/* Carousel Container with Left/Right Navigation Arrows that appear on section hover */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Left Arrow Button (Appears smoothly on section hover) */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Anterior categoría"
          className={`absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#2A282A]/15 shadow-xl flex items-center justify-center text-[#2A282A] cursor-pointer transition-all duration-300 ${
            currentIndex === 0
              ? "opacity-0 pointer-events-none"
              : "opacity-0 -translate-x-3 group-hover/slider:opacity-100 group-hover/slider:translate-x-0"
          } hover:bg-[#BC1C19] hover:text-white hover:border-[#BC1C19] hover:scale-110 active:scale-95`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow Button (Appears smoothly on section hover) */}
        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          aria-label="Siguiente categoría"
          className={`absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#2A282A]/15 shadow-xl flex items-center justify-center text-[#2A282A] cursor-pointer transition-all duration-300 ${
            currentIndex >= maxIndex
              ? "opacity-0 pointer-events-none"
              : "opacity-0 translate-x-3 group-hover/slider:opacity-100 group-hover/slider:translate-x-0"
          } hover:bg-[#BC1C19] hover:text-white hover:border-[#BC1C19] hover:scale-110 active:scale-95`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Overflow Track for 4 Cards */}
        <div ref={containerRef} className="overflow-hidden px-4 sm:px-6">
          <div
            className="flex transition-transform duration-500 ease-out gap-4 sm:gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / 4 + 1.5)}%)`,
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.macroId, cat.subcategoryId)}
                className="w-[calc(100%-16px)] sm:w-[calc(50%-16px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] shrink-0 group flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-[1.02] focus:outline-none"
              >
                {/* Full Card Container without inner borders (Image 3) */}
                <div
                  style={{ backgroundColor: cat.bgColor }}
                  className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden p-0 flex items-center justify-center shadow-xs transition-all duration-300 group-hover:shadow-lg"
                >
                  <ImagePlaceholder
                    src={cat.image}
                    alt={cat.name}
                    recommendedSize="800x600px"
                    aspectRatio="4:3"
                    label={cat.name}
                    noBorder={true}
                    className="w-full h-full"
                  />
                </div>

                {/* Subtitle Underneath (Image 3) */}
                <h3 className="mt-4 text-[12px] sm:text-[13px] font-extrabold tracking-wider uppercase text-[#2A282A] group-hover:text-[#BC1C19] transition-colors leading-tight">
                  {cat.name}
                </h3>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
