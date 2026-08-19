"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getRecommendedTabs, FlatDish, RecommendedTab } from "@/lib/cartaHelpers";
import ImagePlaceholder from "./ImagePlaceholder";

interface CartaRecommendedTabsProps {
  onItemClick: (item: FlatDish) => void;
}

export default function CartaRecommendedTabs({
  onItemClick,
}: CartaRecommendedTabsProps) {
  const tabs: RecommendedTab[] = getRecommendedTabs();
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0]?.id || "favoritos");

  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section className="py-6 sm:py-10 space-y-6 sm:space-y-8">
      {/* Header & Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2A282A]/10 pb-3">
        
        {/* Title */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A282A] tracking-tight">
            Recomendados para ti
          </h2>
        </div>

        {/* Tabs with Smooth Animated Red Underline (layoutId) */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTabId === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`relative px-3.5 sm:px-4 py-2 text-[12px] sm:text-[13px] font-bold transition-colors shrink-0 cursor-pointer ${
                  isActive ? "text-[#BC1C19]" : "text-[#2A282A]/70 hover:text-[#2A282A]"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="recommendedActiveTabUnderline"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#BC1C19] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

      </div>

      {/* Grid of Product Cards with Fluid Entrance / Exit Animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTabId}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5"
        >
          {currentTab.items.map((dish) => (
            <motion.div
              key={dish.id}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => onItemClick(dish)}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-[#2A282A]/8 p-3 shadow-xs hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Image Container with Eye Icon */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#FAF7F2] mb-3">
                <ImagePlaceholder
                  src={dish.imageSlot}
                  alt={dish.name}
                  recommendedSize="500x500px"
                  aspectRatio="1:1"
                  label={dish.name}
                  className="w-full h-full rounded-none"
                />

                {/* Quick View Eye Icon (Solo visible en hover del producto, resalta rojo al posar sobre el botón) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onItemClick(dish);
                  }}
                  aria-label="Ver detalle rápido"
                  className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs text-[#2A282A] opacity-0 group-hover:opacity-100 hover:bg-[#BC1C19] hover:text-white transition-all duration-200 flex items-center justify-center shadow-md cursor-pointer transform hover:scale-110 active:scale-95"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>

                {/* Tag / Badge if any */}
                {dish.badge && (
                  <div className="absolute bottom-2 left-2 bg-[#BC1C19] text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md shadow-xs">
                    {dish.badge}
                  </div>
                )}
              </div>

              {/* Dish Info (Centrado limpio: solo nombre y precio en rojo) */}
              <div className="space-y-1 text-center px-1 pb-1">
                <h3 className="text-[13px] sm:text-[14px] font-bold text-[#2A282A] group-hover:text-[#BC1C19] transition-colors leading-snug line-clamp-2">
                  {dish.name}
                </h3>
                <div className="pt-0.5">
                  <span className="text-[14px] sm:text-[15px] font-black text-[#BC1C19]">
                    S/ {dish.price}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
