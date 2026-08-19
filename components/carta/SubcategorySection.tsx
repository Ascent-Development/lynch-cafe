"use client";

import { useEffect, useRef, useState } from "react";
import { SubCategory, MenuItem } from "@/lib/cartaData";
import ImagePlaceholder from "./ImagePlaceholder";

interface SubcategorySectionProps {
  subcategory: SubCategory;
  onItemClick: (item: MenuItem) => void;
}

export default function SubcategorySection({
  subcategory,
  onItemClick,
}: SubcategorySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={subcategory.anchorId}
      ref={sectionRef}
      className={`scroll-mt-36 transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="bg-white rounded-2xl border border-[#2A282A]/8 p-5 sm:p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
        
        {/* ── Subcategory Header & Accent Image Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-6 pb-6 border-b border-[#2A282A]/10">
          
          {/* Header Title + Highlight Banner (lg: 8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#BC1C19]" />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2A282A] tracking-tight">
                  {subcategory.name}
                </h3>
              </div>
              <div className="w-12 h-1 bg-[#BC1C19] mt-2 rounded-full" />
            </div>

            {subcategory.description && (
              <p className="text-[13px] sm:text-[14px] text-[#2A282A]/70 leading-relaxed">
                {subcategory.description}
              </p>
            )}

            {/* ── Highlight Banner (e.g. Schedule, Included coffee/juice, promos) ── */}
            {subcategory.highlightBanner && (
              <div className="bg-[#FAF8F5] border-l-4 border-[#BC1C19] rounded-r-xl p-4 sm:p-5 space-y-2 text-[#2A282A] shadow-xs">
                {subcategory.highlightBanner.title && (
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-[12px] font-black uppercase tracking-wider text-[#BC1C19]">
                      {subcategory.highlightBanner.title}
                    </span>
                    {subcategory.highlightBanner.schedule && (
                      <span className="text-[11px] font-bold bg-[#2A282A] text-white px-2.5 py-0.5 rounded-full">
                        {subcategory.highlightBanner.schedule}
                      </span>
                    )}
                  </div>
                )}

                {subcategory.highlightBanner.includes && (
                  <div className="text-[13px] font-extrabold text-[#2A282A] flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#BC1C19] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{subcategory.highlightBanner.includes}</span>
                  </div>
                )}

                {subcategory.highlightBanner.exchange && (
                  <p className="text-[12px] text-[#2A282A]/85 font-semibold">
                    {subcategory.highlightBanner.exchange}
                  </p>
                )}

                {subcategory.highlightBanner.badge && (
                  <p className="text-[11px] text-[#2A282A]/60 italic">
                    * {subcategory.highlightBanner.badge}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Subcategory Accent Image Placeholder (lg: 4 cols) */}
          <div className="lg:col-span-4 w-full">
            <ImagePlaceholder
              src={subcategory.imageSlot.path}
              alt={subcategory.imageSlot.alt}
              recommendedSize={subcategory.imageSlot.recommendedSize}
              aspectRatio={subcategory.imageSlot.aspectRatio}
              label={`Foto: ${subcategory.name}`}
              className="h-44 sm:h-52 w-full"
            />
          </div>

        </div>

        {/* ── Editorial Menu Items List ── */}
        <div className="divide-y divide-[#2A282A]/8">
          {subcategory.items.map((item) => (
            <div
              key={item.id}
              onClick={() => onItemClick(item)}
              className="py-4 sm:py-5 first:pt-0 last:pb-0 group cursor-pointer transition-colors duration-200 hover:bg-[#FAF9F7]/80 rounded-xl px-2 sm:px-3 -mx-2 sm:-mx-3"
            >
              {/* Dish Top Row: Name, Dots line, Price */}
              <div className="flex items-baseline justify-between gap-3 sm:gap-4">
                
                {/* Dish Name & Badge */}
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-[15px] sm:text-[17px] font-bold text-[#2A282A] group-hover:text-[#BC1C19] transition-colors leading-snug">
                    {item.name}
                  </h4>
                  {item.badge && (
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#BC1C19]/10 text-[#BC1C19] border border-[#BC1C19]/25 px-2 py-0.5 rounded-md">
                      {item.badge}
                    </span>
                  )}
                  {/* Subtle click hint */}
                  <span className="text-[10px] text-[#2A282A]/30 group-hover:text-[#BC1C19] transition-colors opacity-0 group-hover:opacity-100 hidden sm:inline">
                    (Ver detalle)
                  </span>
                </div>

                {/* Dotted Leader Line (Restaurant Menu style) */}
                <div className="flex-1 border-b border-dotted border-[#2A282A]/25 mx-2 relative top-[-4px] hidden sm:block" />

                {/* Dish Price */}
                <div className="text-right shrink-0">
                  <span className="text-[16px] sm:text-[18px] font-black text-[#BC1C19] tracking-tight">
                    S/ {item.price}
                  </span>
                </div>

              </div>

              {/* Dish Description */}
              {item.description && (
                <p className="text-[13px] sm:text-[14px] text-[#2A282A]/70 mt-1 max-w-2xl leading-relaxed">
                  {item.description}
                </p>
              )}

              {/* Customization Options (Chips) */}
              {item.options && item.options.length > 0 && (
                <div className="mt-2.5 space-y-1.5">
                  {item.options.map((optGroup, optIdx) => (
                    <div key={optIdx} className="flex items-center gap-2 flex-wrap text-[11px]">
                      {optGroup.title && (
                        <span className="font-bold text-[#2A282A]/60 uppercase tracking-wider text-[10px]">
                          {optGroup.title}
                        </span>
                      )}
                      <div className="flex flex-wrap gap-1.5">
                        {optGroup.items.map((opt, oIdx) => (
                          <span
                            key={oIdx}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#FAF9F7] border border-[#2A282A]/15 text-[#2A282A]/90"
                          >
                            <span>{opt.name}</span>
                            {opt.priceExtra !== undefined && (
                              <strong className="text-[#BC1C19] font-bold">
                                +S/{opt.priceExtra}
                              </strong>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
