"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CARTA_DATA, MacroSection } from "@/lib/cartaData";
import { getAllDishes, FlatDish } from "@/lib/cartaHelpers";
import ImagePlaceholder from "./ImagePlaceholder";

interface CartaCatalogViewProps {
  initialMacroId?: string;
  initialSubcategoryId?: string;
  onItemClick: (dish: FlatDish) => void;
  onBackToHome: () => void;
}

const PAGE_SIZE = 12;

export default function CartaCatalogView({
  initialMacroId,
  initialSubcategoryId,
  onItemClick,
  onBackToHome,
}: CartaCatalogViewProps) {
  const allDishes = useMemo(() => getAllDishes(), []);

  // Filter States
  const [selectedMacro, setSelectedMacro] = useState<string>(initialMacroId || "all");
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<string>(initialSubcategoryId || "all");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(65);
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "name-asc">("default");
  const [viewMode, setViewMode] = useState<"grid-4" | "grid-6" | "list">("grid-4");
  const [showFilters, setShowFilters] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);

  // Available tags
  const filterTags = [
    "Todos",
    "Sin Gluten",
    "Con Panela",
    "Para Compartir",
    "Fit / Saludable",
    "Iced / Frío",
    "Caliente",
    "Vegetariano",
  ];

  // Macros list for sidebar
  const macroSections: MacroSection[] = [
    CARTA_DATA.desayunos,
    CARTA_DATA.salados,
    CARTA_DATA.postres,
    CARTA_DATA.bebidas,
  ].filter(Boolean) as MacroSection[];

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [selectedMacro, selectedSubcategoryId, selectedTag, searchQuery, maxPrice, sortBy]);

  // Filtered & Sorted dishes
  const filteredDishes = useMemo(() => {
    let list = [...allDishes];

    // Filter by Macro
    if (selectedMacro !== "all") {
      list = list.filter((d) => d.macroId === selectedMacro);
    }

    // Filter by Subcategory
    if (selectedSubcategoryId !== "all") {
      list = list.filter((d) => d.subcategoryId === selectedSubcategoryId);
    }

    // Filter by Tag
    if (selectedTag !== "all" && selectedTag !== "Todos") {
      list = list.filter((d) => d.tags && d.tags.includes(selectedTag));
    }

    // Filter by Price
    list = list.filter((d) => d.numericPrice <= maxPrice);

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          (d.description && d.description.toLowerCase().includes(q)) ||
          d.subcategoryName.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === "price-asc") {
      list.sort((a, b) => a.numericPrice - b.numericPrice);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.numericPrice - a.numericPrice);
    } else if (sortBy === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [allDishes, selectedMacro, selectedSubcategoryId, selectedTag, maxPrice, searchQuery, sortBy]);

  // Visible sliced dishes
  const displayedDishes = useMemo(() => {
    return filteredDishes.slice(0, visibleCount);
  }, [filteredDishes, visibleCount]);

  const handleSelectMacro = (macroId: string) => {
    setSelectedMacro(macroId);
    setSelectedSubcategoryId("all");
  };

  const handleSelectSubcategory = (macroId: string, subId: string) => {
    setSelectedMacro(macroId);
    setSelectedSubcategoryId(subId);
  };

  const handleResetFilters = () => {
    setSelectedMacro("all");
    setSelectedSubcategoryId("all");
    setSelectedTag("all");
    setSearchQuery("");
    setMaxPrice(65);
    setSortBy("default");
  };

  // Determine current active title
  const currentTitle = useMemo(() => {
    if (selectedSubcategoryId !== "all") {
      for (const m of macroSections) {
        const sub = m.subcategories.find((s) => s.id === selectedSubcategoryId);
        if (sub) return sub.name;
      }
    }
    if (selectedMacro !== "all") {
      const m = macroSections.find((m) => m.id === selectedMacro);
      if (m) return m.name;
    }
    return "Toda Nuestra Carta";
  }, [selectedMacro, selectedSubcategoryId, macroSections]);

  return (
    <div className="space-y-6 sm:space-y-8">
      
      {/* ── 1. Clean Category Header (Breadcrumb + Title) ── */}
      <div className="space-y-1.5 text-left pt-1 pb-1">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] sm:text-[13px] font-bold text-[#2A282A]/70">
          <button
            type="button"
            onClick={onBackToHome}
            className="hover:text-[#BC1C19] transition-colors cursor-pointer"
          >
            Inicio Carta
          </button>
          <span>/</span>
          {selectedMacro !== "all" ? (
            <button
              type="button"
              onClick={() => setSelectedSubcategoryId("all")}
              className="hover:text-[#BC1C19] transition-colors capitalize cursor-pointer"
            >
              {selectedMacro}
            </button>
          ) : (
            <span>Catálogo</span>
          )}
          {selectedSubcategoryId !== "all" && (
            <>
              <span>/</span>
              <span className="text-[#BC1C19]">{currentTitle}</span>
            </>
          )}
        </nav>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2A282A] tracking-tight">
          {currentTitle}
        </h1>
      </div>

      {/* ── 2. Mobile Filter Toggle Button ── */}
      <div className="lg:hidden flex items-center justify-between gap-3 bg-white p-3 rounded-xl border border-[#2A282A]/10 shadow-xs">
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="flex items-center gap-2 text-[13px] font-extrabold text-[#2A282A] cursor-pointer"
        >
          <svg className="w-4 h-4 text-[#BC1C19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span>Filtros & Categorías</span>
          <span className="text-xs bg-[#BC1C19] text-white px-2 py-0.5 rounded-full">
            {filteredDishes.length}
          </span>
        </button>

        <button
          type="button"
          onClick={onBackToHome}
          className="text-[12px] font-bold text-[#BC1C19] hover:underline cursor-pointer"
        >
          ‹ Volver al Hub
        </button>
      </div>

      {/* ── 3. Main Layout with Smooth Collapsible Sidebar (Image 1 & 2) ── */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start relative">
        
        {/* ── LEFT SIDEBAR (Smooth Gentle Animation) ── */}
        <AnimatePresence initial={false}>
          {showFilters && (
            <motion.aside
              key="sidebar-filters"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`w-full lg:w-72 shrink-0 ${
                mobileFiltersOpen ? "block" : "hidden lg:block"
              }`}
            >
              <div className="space-y-6 bg-white p-5 sm:p-6 rounded-2xl border border-[#2A282A]/10 shadow-xs">
                
                {/* Sidebar Header with 'filtros —' Button (Image 1) */}
                <div className="flex items-center justify-between pb-3 border-b border-[#2A282A]/10">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowFilters(false)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#2A282A]/20 text-[11px] font-bold text-[#2A282A] hover:border-[#BC1C19] hover:text-[#BC1C19] transition-colors cursor-pointer bg-white active:scale-95"
                    >
                      <span>Filtros</span>
                      <span>—</span>
                    </button>
                    <span className="text-[11px] font-bold text-[#BC1C19]">
                      ({filteredDishes.length})
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="text-[11px] font-bold text-[#BC1C19] hover:underline cursor-pointer"
                  >
                    Limpiar
                  </button>
                </div>

                {/* Search Box */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#2A282A]/70 mb-1.5">
                    Buscar plato o bebida
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Ej. Huachano, Lomo, V60..."
                      className="w-full bg-[#FAF9F7] border border-[#2A282A]/15 rounded-xl pl-8 pr-8 py-2 text-[13px] text-[#2A282A] placeholder:text-[#2A282A]/40 focus:outline-none focus:border-[#BC1C19] transition-colors"
                    />
                    <svg className="w-4 h-4 text-[#2A282A]/40 absolute left-2.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#2A282A]/50 hover:text-[#BC1C19]"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                {/* Hierarchical Categories List (Image 5) */}
                <div className="space-y-3">
                  <h4 className="text-[12px] font-black uppercase tracking-wider text-[#2A282A]">
                    Categorías
                  </h4>

                  {/* "Todos" Option */}
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedMacro("all");
                        setSelectedSubcategoryId("all");
                      }}
                      className={`w-full text-left py-1 text-[13px] font-bold transition-colors flex items-center justify-between cursor-pointer ${
                        selectedMacro === "all" ? "text-[#BC1C19]" : "text-[#2A282A]/80 hover:text-[#BC1C19]"
                      }`}
                    >
                      <span>Toda la Carta</span>
                      {selectedMacro === "all" && <span className="text-xs">›</span>}
                    </button>
                  </div>

                  {/* Macro sections and nested subcategories */}
                  <div className="space-y-2 pt-1 border-t border-[#2A282A]/8">
                    {macroSections.map((macro) => {
                      const isMacroActive = selectedMacro === macro.id;
                      return (
                        <div key={macro.id} className="space-y-1">
                          <button
                            type="button"
                            onClick={() => handleSelectMacro(macro.id)}
                            className={`w-full text-left py-1 text-[13px] font-bold transition-colors flex items-center justify-between cursor-pointer ${
                              isMacroActive && selectedSubcategoryId === "all"
                                ? "text-[#BC1C19]"
                                : "text-[#2A282A] hover:text-[#BC1C19]"
                            }`}
                          >
                            <span className="uppercase tracking-wide">{macro.name}</span>
                            <span className="text-xs text-[#2A282A]/40">›</span>
                          </button>

                          {/* Subcategories list */}
                          {isMacroActive && (
                            <div className="pl-3 space-y-1 border-l-2 border-[#BC1C19]/20 pt-1 pb-1">
                              {macro.subcategories.map((sub) => {
                                const isSubActive = selectedSubcategoryId === sub.id;
                                return (
                                  <button
                                    key={sub.id}
                                    type="button"
                                    onClick={() => handleSelectSubcategory(macro.id, sub.id)}
                                    className={`w-full text-left py-1 text-[12px] transition-colors flex items-center gap-1.5 cursor-pointer ${
                                      isSubActive
                                        ? "text-[#BC1C19] font-extrabold"
                                        : "text-[#2A282A]/70 hover:text-[#BC1C19] font-medium"
                                    }`}
                                  >
                                    <span className="text-[#BC1C19] text-[10px]">{isSubActive ? "›" : "•"}</span>
                                    <span className="line-clamp-1">{sub.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Preferencias / Tags Chips (Image 5) */}
                <div className="space-y-2.5 pt-2 border-t border-[#2A282A]/8">
                  <h4 className="text-[12px] font-black uppercase tracking-wider text-[#2A282A]">
                    Preferencias / Tipo
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {filterTags.map((tag) => {
                      const isTagActive = selectedTag === tag || (tag === "Todos" && selectedTag === "all");
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => setSelectedTag(tag === "Todos" ? "all" : tag)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors cursor-pointer ${
                            isTagActive
                              ? "bg-[#BC1C19] text-white shadow-xs"
                              : "bg-[#FAF7F2] text-[#2A282A]/80 hover:bg-[#BC1C19]/10 hover:text-[#BC1C19] border border-[#2A282A]/10"
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price Range Slider (Image 5) */}
                <div className="space-y-2.5 pt-2 border-t border-[#2A282A]/8">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[12px] font-black uppercase tracking-wider text-[#2A282A]">
                      Precio Máximo
                    </h4>
                    <span className="text-[12px] font-extrabold text-[#BC1C19]">
                      Hasta S/ {maxPrice}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="7"
                    max="65"
                    step="1"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[#BC1C19] cursor-pointer"
                  />

                  <div className="flex justify-between text-[10px] text-[#2A282A]/50 font-bold">
                    <span>S/ 7</span>
                    <span>S/ 35</span>
                    <span>S/ 65</span>
                  </div>
                </div>

              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* ── RIGHT MAIN PRODUCTS AREA ── */}
        <div className="flex-1 w-full space-y-6">
          
          {/* Top Bar: Show Filters Toggle, Counter, View Mode with Tooltips & Sort Dropdown */}
          <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#2A282A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            
            {/* Left: Button to show filters if hidden + Results count */}
            <div className="flex items-center gap-3">
              {!showFilters && (
                <button
                  type="button"
                  onClick={() => setShowFilters(true)}
                  className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#2A282A]/20 text-[11px] font-bold text-[#2A282A] hover:border-[#BC1C19] hover:text-[#BC1C19] transition-colors cursor-pointer bg-[#FAF7F2] active:scale-95 shadow-2xs"
                >
                  <span>filtros</span>
                  <span>+</span>
                </button>
              )}

              <button
                type="button"
                onClick={onBackToHome}
                className="text-[12px] font-bold text-[#BC1C19] hover:underline flex items-center gap-1 cursor-pointer"
              >
                ‹ Volver
              </button>
              <span className="text-[#2A282A]/30">|</span>
              <span className="text-[12px] sm:text-[13px] text-[#2A282A]/70 font-semibold">
                Mostrando <strong className="text-[#2A282A]">{displayedDishes.length}</strong> de <strong className="text-[#2A282A]">{filteredDishes.length}</strong> platos
              </span>
            </div>

            {/* Controls: View Mode with Tooltips (Image 2) & Sort */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              
              {/* View Mode Switcher with Tooltips on Hover (Image 2) */}
              <div className="flex items-center gap-1 bg-[#FAF7F2] p-1 rounded-xl border border-[#2A282A]/10">
                
                {/* 4 Columnas Button */}
                <div className="relative group/tooltip">
                  <button
                    type="button"
                    onClick={() => setViewMode("grid-4")}
                    aria-label="4 columnas"
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      viewMode === "grid-4" ? "bg-white shadow-xs text-[#BC1C19]" : "text-[#2A282A]/50 hover:text-[#2A282A]"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h7v7H3zm11 0h7v7h-7zm-11 11h7v7H3zm11 0h7v7h-7z" />
                    </svg>
                  </button>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#2A282A] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
                    4 columnas
                  </span>
                </div>

                {/* 6 Columnas Button */}
                <div className="relative group/tooltip">
                  <button
                    type="button"
                    onClick={() => setViewMode("grid-6")}
                    aria-label="6 columnas"
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      viewMode === "grid-6" ? "bg-white shadow-xs text-[#BC1C19]" : "text-[#2A282A]/50 hover:text-[#2A282A]"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 2h4v4H2zm6 0h4v4H8zm6 0h4v4h-4zm6 0h4v4h-4zM2 8h4v4H2zm6 0h4v4H8zm6 0h4v4h-4zm6 0h4v4h-4zM2 14h4v4H2zm6 0h4v4H8zm6 0h4v4h-4zm6 0h4v4h-4zM2 20h4v4H2zm6 0h4v4H8zm6 0h4v4h-4zm6 0h4v4h-4z" />
                    </svg>
                  </button>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#2A282A] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
                    6 columnas
                  </span>
                </div>

                {/* Vista Lista Button */}
                <div className="relative group/tooltip">
                  <button
                    type="button"
                    onClick={() => setViewMode("list")}
                    aria-label="Vista lista"
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      viewMode === "list" ? "bg-white shadow-xs text-[#BC1C19]" : "text-[#2A282A]/50 hover:text-[#2A282A]"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z" />
                    </svg>
                  </button>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#2A282A] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
                    Vista lista
                  </span>
                </div>

              </div>

              {/* Sort dropdown */}
              <div className="flex items-center gap-1.5 text-[12px]">
                <label className="text-[#2A282A]/60 font-semibold hidden sm:inline">Ordenar:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#FAF7F2] border border-[#2A282A]/15 rounded-xl px-2.5 py-1.5 text-[12px] font-bold text-[#2A282A] focus:outline-none focus:border-[#BC1C19] cursor-pointer"
                >
                  <option value="default">Recomendados</option>
                  <option value="price-asc">Menor precio</option>
                  <option value="price-desc">Mayor precio</option>
                  <option value="name-asc">Nombre A-Z</option>
                </select>
              </div>

            </div>

          </div>

          {/* ── Products Display (Smooth Entry) ── */}
          {filteredDishes.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#2A282A]/10 p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#BC1C19]/10 text-[#BC1C19] flex items-center justify-center mx-auto text-2xl font-black">
                ☕
              </div>
              <h3 className="text-xl font-extrabold text-[#2A282A]">
                No encontramos platos con estos filtros
              </h3>
              <p className="text-[13px] text-[#2A282A]/60 max-w-sm mx-auto">
                Prueba ajustando el rango de precio, el término de búsqueda o seleccionando otra categoría.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#BC1C19] text-white font-extrabold text-[11px] tracking-wider uppercase shadow-xs hover:bg-[#a01614] transition-colors cursor-pointer"
              >
                Restablecer Filtros
              </button>
            </div>
          ) : viewMode === "list" ? (
            /* ── Detailed List Layout with Photo, Real Description and Options (Image 3) ── */
            <div className="space-y-4">
              {displayedDishes.map((dish) => (
                <div
                  key={dish.id}
                  onClick={() => onItemClick(dish)}
                  className="bg-white rounded-2xl border border-[#2A282A]/10 p-4 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 group cursor-pointer"
                >
                  {/* Left Product Image with Badge */}
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 shrink-0 rounded-2xl overflow-hidden bg-[#FAF7F2]">
                    <ImagePlaceholder
                      src={dish.imageSlot}
                      alt={dish.name}
                      recommendedSize="500x500px"
                      aspectRatio="1:1"
                      label={dish.name}
                      className="w-full h-full rounded-none"
                    />

                    {dish.badge && (
                      <div className="absolute top-2 left-2 bg-[#BC1C19] text-white text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-md shadow-xs">
                        {dish.badge}
                      </div>
                    )}
                  </div>

                  {/* Middle: Dish Name, Real Description & Options */}
                  <div className="flex-1 space-y-2 text-left">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#2A282A] group-hover:text-[#BC1C19] transition-colors leading-snug">
                      {dish.name}
                    </h3>

                    {dish.description && (
                      <p className="text-[13px] sm:text-[14px] text-[#2A282A]/75 leading-relaxed">
                        {dish.description}
                      </p>
                    )}

                    {/* Real Options / Customizations from lib/cartaData.ts */}
                    {dish.options && dish.options.length > 0 && (
                      <div className="pt-1 flex flex-wrap gap-1.5 items-center">
                        {dish.options.map((grp, gIdx) => (
                          <div key={grp.title || gIdx} className="flex flex-wrap gap-1 items-center">
                            {grp.title && (
                              <span className="text-[11px] font-bold text-[#2A282A]/60 mr-1">
                                {grp.title}:
                              </span>
                            )}
                            {grp.items.map((opt, oIdx) => (
                              <span
                                key={opt.name || oIdx}
                                className="text-[10px] font-semibold bg-[#FAF7F2] text-[#2A282A]/80 border border-[#2A282A]/10 px-2 py-0.5 rounded-md"
                              >
                                {opt.name}
                                {opt.priceExtra ? ` (+S/ ${opt.priceExtra})` : ""}
                              </span>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: Price & Quick-View Action */}
                  <div className="w-full md:w-auto shrink-0 flex md:flex-col items-center md:items-end justify-between gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-[#2A282A]/10">
                    <span className="text-xl sm:text-2xl font-black text-[#BC1C19]">
                      S/ {dish.price}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onItemClick(dish);
                      }}
                      className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#2A282A]/70 hover:text-[#BC1C19] transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4 text-[#BC1C19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>Vista rápida</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ── Responsive Grid Layout (Clean & Gentle) ── */
            <div
              className={`grid gap-3 sm:gap-4 md:gap-5 ${
                viewMode === "grid-6"
                  ? showFilters
                    ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"
                    : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
                  : showFilters
                  ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4"
              }`}
            >
              {displayedDishes.map((dish) => (
                <div
                  key={dish.id}
                  onClick={() => onItemClick(dish)}
                  className="group flex flex-col justify-between bg-white rounded-2xl border border-[#2A282A]/8 p-3 shadow-xs hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 cursor-pointer"
                >
                  {/* Image Frame with Eye Icon */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#FAF7F2] mb-3">
                    <ImagePlaceholder
                      src={dish.imageSlot}
                      alt={dish.name}
                      recommendedSize="600x600px"
                      aspectRatio="1:1"
                      label={dish.name}
                      className="w-full h-full rounded-none"
                    />

                    {/* Quick view eye icon (Hover reveal + hover red highlight) */}
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

                    {/* Tag badge */}
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

                </div>
              ))}
            </div>
          )}

          {/* ── "VER MÁS" PAGINATION BUTTON ── */}
          {filteredDishes.length > visibleCount && (
            <div className="pt-8 pb-4 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border-2 border-[#BC1C19] text-[#BC1C19] hover:bg-[#BC1C19] hover:text-white font-extrabold text-[12px] uppercase tracking-wider shadow-xs transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>VER MÁS PLATOS</span>
                <span className="text-[11px] font-semibold opacity-85">
                  ({displayedDishes.length} de {filteredDishes.length})
                </span>
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
