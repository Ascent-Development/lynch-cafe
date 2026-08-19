"use client";

import Image from "next/image";

interface CartaHeroCardProps {
  onExploreClick: () => void;
}

export default function CartaHeroCard({ onExploreClick }: CartaHeroCardProps) {
  return (
    <section className="w-full relative overflow-hidden bg-[#EADCCB]">
      {/* Full-width curved banner container - Compact height */}
      <div className="w-full relative overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[350px] flex items-center">
        
        {/* Sparkle icon on the left (Image 1) */}
        <div className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none">
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 text-white/90 drop-shadow-sm"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
          </svg>
        </div>

        {/* ── Stylized Lynch Wings Shape (shape.svg) on the Right ── */}
        <div className="absolute right-[-10px] sm:right-6 md:right-12 top-1/2 -translate-y-1/2 w-[240px] sm:w-[320px] md:w-[380px] h-auto pointer-events-none opacity-20 sm:opacity-25 select-none z-0">
          <Image
            src="/shape.svg"
            alt="Lynch Shape"
            width={380}
            height={298}
            className="w-full h-auto object-contain drop-shadow-[0_4px_20px_rgba(188,28,25,0.2)]"
          />
        </div>

        {/* Content container */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-6 sm:py-8">
          
          {/* Left Column: Headline & Button */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-[#2A282A] tracking-tight leading-[1.1]">
              ¿Día intenso? <br />
              <span className="text-[#2A282A]">Date un gusto</span>
            </h2>

            <p className="text-[14px] sm:text-[15px] text-[#2A282A]/80 font-medium leading-relaxed max-w-md">
              Tu esfuerzo es valioso. ¡Ven y disfruta!
            </p>

            <div className="pt-1">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center bg-white hover:bg-[#BC1C19] hover:text-white text-[#2A282A] font-extrabold text-[11px] sm:text-[12px] tracking-[0.14em] uppercase px-8 py-3 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                VER CARTA COMPLETA
              </button>
            </div>
          </div>

          {/* Right Column: Hero Dish on White Plate */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80">
              
              {/* White scalloped plate / shadow effect */}
              <div className="absolute inset-2 sm:inset-3 rounded-full bg-white/95 shadow-[0_20px_50px_rgba(0,0,0,0.12)] -z-0" />

              <Image
                src="/carta/LOMO-SALTADO.jpg"
                alt="Plato estrella Lynch Café"
                fill
                priority
                sizes="(max-width: 768px) 240px, 340px"
                className="object-cover rounded-full p-4 sm:p-5 drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)] transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
