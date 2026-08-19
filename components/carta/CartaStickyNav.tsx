"use client";

import { useEffect, useState, useRef } from "react";
import { SubCategory } from "@/lib/cartaData";

export interface MacroTab {
  id: "desayunos" | "salados" | "postres" | "bebidas";
  name: string;
  subcategories: SubCategory[];
  available: boolean;
}

interface CartaStickyNavProps {
  macroTabs: MacroTab[];
  activeMacroId: "desayunos" | "salados" | "postres" | "bebidas";
  onSelectMacro: (id: "desayunos" | "salados" | "postres" | "bebidas") => void;
  activeSubcategory?: string;
}

export default function CartaStickyNav({
  macroTabs,
  activeMacroId,
  onSelectMacro,
  activeSubcategory,
}: CartaStickyNavProps) {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const subNavRef = useRef<HTMLDivElement>(null);

  // Detect stickiness
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const top = navRef.current.getBoundingClientRect().top;
        setIsSticky(top <= 75);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeMacro = macroTabs.find((m) => m.id === activeMacroId);

  const handleSubCategoryClick = (anchorId: string) => {
    const element = document.getElementById(anchorId);
    if (element) {
      const yOffset = -140; // Offset for sticky headers
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleMacroClick = (tab: MacroTab) => {
    onSelectMacro(tab.id);
    const element = document.getElementById(tab.id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={navRef}
      className={`sticky top-[58px] sm:top-[68px] z-30 transition-all duration-300 ${
        isSticky
          ? "bg-[#FAF9F7]/95 backdrop-blur-md shadow-md border-b border-[#2A282A]/10 py-2.5 sm:py-3"
          : "bg-[#FAF9F7] border-b border-[#2A282A]/10 py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* ── 1. Macro-Sections Navigation Pills ── */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
          {macroTabs.map((tab) => {
            const isActive = activeMacroId === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleMacroClick(tab)}
                className={`shrink-0 px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-[12px] sm:text-[13px] font-extrabold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#BC1C19] text-white shadow-[0_4px_12px_rgba(188,28,25,0.3)] scale-[1.02]"
                    : "bg-white border border-[#2A282A]/15 text-[#2A282A]/80 hover:border-[#BC1C19] hover:text-[#BC1C19] hover:bg-[#FAF9F7]"
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* ── 2. Horizontal Subcategories Chips (Scrollable) ── */}
        {activeMacro && activeMacro.subcategories.length > 0 && (
          <div
            ref={subNavRef}
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pt-2.5 pb-0.5 scrollbar-none no-scrollbar"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#2A282A]/50 shrink-0 mr-1 hidden sm:inline">
              Ir a:
            </span>
            {activeMacro.subcategories.map((sub) => {
              const isSubActive = activeSubcategory === sub.anchorId;
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => handleSubCategoryClick(sub.anchorId)}
                  className={`shrink-0 px-3 py-1 rounded-lg text-[11px] font-bold tracking-wide transition-colors cursor-pointer ${
                    isSubActive
                      ? "bg-[#2A282A] text-white"
                      : "bg-[#F2EFE8] text-[#2A282A]/85 hover:bg-[#BC1C19]/10 hover:text-[#BC1C19] border border-[#2A282A]/5"
                  }`}
                >
                  {sub.name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
