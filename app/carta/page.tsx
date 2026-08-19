"use client";

import { useState } from "react";
import Image from "next/image";
import IntroLoader from "@/components/IntroLoader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartaCategoryFinder from "@/components/carta/CartaCategoryFinder";
import CartaRecommendedTabs from "@/components/carta/CartaRecommendedTabs";
import CartaPromoDuoBanners from "@/components/carta/CartaPromoDuoBanners";
import CartaCatalogView from "@/components/carta/CartaCatalogView";
import DishQuickViewModal from "@/components/carta/DishQuickViewModal";
import { MenuItem } from "@/lib/cartaData";
import { FlatDish } from "@/lib/cartaHelpers";

export default function CartaPage() {
  // Navigation Mode: 'hub' (Home with Hero, Finder, Recommended) or 'catalog' (Category view with Sidebar)
  const [viewMode, setViewMode] = useState<"hub" | "catalog">("hub");
  
  // Selected category / subcategory when switching to catalog
  const [selectedMacroId, setSelectedMacroId] = useState<string>("all");
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<string>("all");

  // Selected item for Quick-View modal
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Switch to catalog view when clicking a category from "¿Qué estás buscando hoy?"
  const handleSelectCategory = (macroId: string, subcategoryId?: string) => {
    setSelectedMacroId(macroId);
    setSelectedSubcategoryId(subcategoryId || "all");
    setViewMode("catalog");
    window.scrollTo({ top: 320, behavior: "smooth" });
  };

  // Switch to catalog view from Hero button
  const handleExploreAll = () => {
    setSelectedMacroId("all");
    setSelectedSubcategoryId("all");
    setViewMode("catalog");
    window.scrollTo({ top: 320, behavior: "smooth" });
  };

  // Back to hub view
  const handleBackToHub = () => {
    setViewMode("hub");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white text-[#2A282A] selection:bg-[#BC1C19] selection:text-white select-none">
      {/* ── 0. ENTRANCE INTRO LOADER ANIMATION (Igual al Home) ── */}
      <IntroLoader />

      {/* ── 1. GLOBAL HEADER (Original del sitio) ── */}
      <Header />

      {/* ── 2. HERO BANNER PRINCIPAL (Igual a /reservas) ── */}
      <section className="relative h-[300px] sm:h-[360px] md:h-[380px] w-full flex items-center justify-center overflow-hidden bg-[#181618]">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-lynch.jpg"
            alt="Ambiente Lynch Café Chacarilla"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#181618]" />
        </div>

        {/* Centered Hero Title */}
        <div className="relative z-10 text-center px-6 pt-14">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase leading-none">
            Nuestra <span className="text-[#BC1C19]">Carta</span>
          </h1>
          <div className="w-14 sm:w-16 h-1 bg-[#BC1C19] mx-auto mt-3 rounded-full" />
        </div>
      </section>

      {/* ── 3. MAIN CONTENT CONTAINER ── */}
      <div className="w-full">
        
        {/* ── MODE 1: HUB PRINCIPAL (Imágenes 1, 2, 3 y 4) ── */}
        {viewMode === "hub" && (
          <div className="animate-fadeIn">
            {/* A. "¿Qué estás buscando hoy?" Category Finder Slider con 4 cards y flechas (Image 4) */}
            <div className="bg-white">
              <CartaCategoryFinder onSelectCategory={handleSelectCategory} />
            </div>

            {/* B. "Recomendados para ti" with interactive category tabs (Image 2 & 3) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <CartaRecommendedTabs onItemClick={(item: FlatDish) => setSelectedItem(item)} />
            </div>

            {/* C. Dual Promo Banners (Image 3) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-16 sm:pb-24">
              <CartaPromoDuoBanners onSelectCategory={handleSelectCategory} />
            </div>

          </div>
        )}

        {/* ── MODE 2: CATÁLOGO CON SIDEBAR DE FILTROS (Imágenes 4 y 5) ── */}
        {viewMode === "catalog" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
            <CartaCatalogView
              initialMacroId={selectedMacroId}
              initialSubcategoryId={selectedSubcategoryId}
              onItemClick={(item: FlatDish) => setSelectedItem(item)}
              onBackToHome={handleBackToHub}
            />
          </div>
        )}

      </div>

      {/* ── 4. QUICK-VIEW MODAL (Available in both modes) ── */}
      <DishQuickViewModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* ── 5. GLOBAL FOOTER ── */}
      <Footer />
    </main>
  );
}
