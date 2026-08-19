"use client";

import { useEffect } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { MenuItem } from "@/lib/cartaData";

interface DishQuickViewModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function DishQuickViewModal({
  item,
  onClose,
}: DishQuickViewModalProps) {
  // Lock body scroll and handle ESC key
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-dish-title"
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF9F7] rounded-2xl shadow-2xl border border-[#2A282A]/10 overflow-hidden transform transition-all animate-scaleUp text-[#2A282A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (X) */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar vista rápida"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 border border-[#2A282A]/10 text-[#2A282A] hover:bg-[#BC1C19] hover:text-white transition-colors flex items-center justify-center cursor-pointer shadow-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Dish Image Placeholder / Photo */}
        <div className="relative w-full h-56 sm:h-64 bg-[#F2EFE8]">
          <ImagePlaceholder
            key={item.id}
            src={item.imageSlot}
            alt={item.name}
            recommendedSize="800x600px"
            aspectRatio="4:3"
            label={`Foto: ${item.name}`}
            className="w-full h-full rounded-none border-b border-[#2A282A]/10"
          />

          {/* Badge if any */}
          {item.badge && (
            <div className="absolute bottom-3 left-3 bg-[#BC1C19] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md">
              {item.badge}
            </div>
          )}
        </div>

        {/* Dish Details */}
        <div className="p-6 sm:p-7 space-y-4">
          <div className="flex items-baseline justify-between gap-4 border-b border-[#2A282A]/10 pb-3">
            <h3 id="modal-dish-title" className="text-xl sm:text-2xl font-extrabold text-[#2A282A] tracking-tight">
              {item.name}
            </h3>
            <span className="text-xl sm:text-2xl font-black text-[#BC1C19] shrink-0">
              S/ {item.price}
            </span>
          </div>

          {/* Description */}
          {item.description ? (
            <p className="text-[14px] sm:text-[15px] text-[#2A282A]/80 leading-relaxed">
              {item.description}
            </p>
          ) : (
            <p className="text-[13px] text-[#2A282A]/50 italic">
              Plato preparado al momento con los mejores ingredientes de nuestra cocina.
            </p>
          )}

          {/* Options / Customizations if any */}
          {item.options && item.options.length > 0 && (
            <div className="pt-2 space-y-2.5">
              {item.options.map((optGroup, idx) => (
                <div key={idx} className="space-y-1.5">
                  {optGroup.title && (
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#BC1C19] block">
                      {optGroup.title}
                    </span>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {optGroup.items.map((opt, oIdx) => (
                      <span
                        key={oIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[12px] font-medium bg-white border border-[#2A282A]/15 text-[#2A282A]"
                      >
                        <span>{opt.name}</span>
                        {opt.priceExtra !== undefined && (
                          <strong className="text-[#BC1C19] font-bold">
                            +S/ {opt.priceExtra}
                          </strong>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Informational Footer note */}
          <div className="pt-3 border-t border-[#2A282A]/10 flex items-center justify-between text-[11px] text-[#2A282A]/60">
            <span>Carta informativa de Lynch Café</span>
            <button
              type="button"
              onClick={onClose}
              className="text-[#BC1C19] font-bold hover:underline cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
