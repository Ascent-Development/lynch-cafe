"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  onScrollToNext?: () => void;
}

export default function Hero({ onScrollToNext }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    if (onScrollToNext) {
      onScrollToNext();
      return;
    }
    const nextSection = document.getElementById("nosotros") || document.getElementById("siguiente");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="Hero Lynch Café"
      className="relative w-full h-screen min-h-[640px] flex flex-col justify-between overflow-hidden bg-black select-none"
    >
      {/* Background Image: hero-lynch.jpg with ~40% blur (4px) & rich dark overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/hero-lynch.jpg"
          alt="Lynch Café Terraza Chacarilla"
          fill
          priority
          sizes="100vw"
          style={{ filter: "blur(4px)" }}
          className={`object-cover object-center scale-105 transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-90"
          }`}
        />

        {/* Multi-layered dark overlays for optimal contrast and visual depth */}
        {/* Layer 1: Base dark tint across full image */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Layer 2: Left-weighted gradient to ensure maximum text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent w-full md:w-3/4 lg:w-3/5" />

        {/* Layer 3: Bottom gradient for subtle transition */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Layer 4: Top gradient for header integration */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
      </div>

      {/* Top-Right Social Icons Stack (Phone, Instagram, Facebook in Lynch Red #BC1C19) */}
      <div className="absolute top-20 sm:top-24 right-4 sm:right-8 md:right-12 z-20 hidden sm:flex flex-col items-center gap-3.5">
        {/* Phone */}
        <a
          href="tel:978800039"
          aria-label="Llamar a Lynch Café"
          className="text-[#BC1C19] hover:scale-120 transition-transform duration-200 p-1 drop-shadow-md"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/lynchcafeperu/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram de Lynch Café"
          className="text-[#BC1C19] hover:scale-120 transition-transform duration-200 p-1 drop-shadow-md"
        >
          <svg className="w-5 h-5 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={3} strokeLinecap="round" />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/lynchcafeperu/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook de Lynch Café"
          className="text-[#BC1C19] hover:scale-120 transition-transform duration-200 p-1 drop-shadow-md"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </div>

      {/* Main Content: Left-aligned, balanced and minimal with photographic breathing room */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 w-full flex-1 flex flex-col justify-center pt-32 sm:pt-36 pb-20">
        <div className="max-w-4xl">
          {/* Top Kicker Location: Surquillo · Lima · Perú */}
          <p
            className={`mb-3 sm:mb-4 text-[11px] sm:text-[13px] text-[#FCFBFB]/85 font-medium tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transform transition-all duration-700 ease-out delay-75 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            Surquillo · Lima · Perú
          </p>

          {/* Main Headline: Manrope Bold (700) with staggered line reveal */}
          <h1 className="font-bold text-[36px] xs:text-[42px] sm:text-[54px] md:text-[68px] lg:text-[80px] xl:text-[90px] leading-[1.02] tracking-[-0.03em] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            <span
              className={`block text-[#BC1C19] transform transition-all duration-800 ease-out delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              La vida comienza
            </span>
            <span
              className={`block text-[#FCFBFB] transform transition-all duration-800 ease-out delay-250 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              después de un café
            </span>
          </h1>

          {/* CTA Buttons: Manrope SemiBold (600) with smooth entrance */}
          <div
            className={`mt-8 sm:mt-10 flex flex-row items-center gap-3.5 sm:gap-4 flex-wrap transform transition-all duration-700 ease-out delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {/* Primary CTA: VER LA CARTA (Rojo Lynch #BC1C19) */}
            <Link
              href="/carta"
              className="inline-flex items-center justify-center bg-[#BC1C19] text-[#FCFBFB] font-semibold text-[11px] sm:text-[13px] tracking-[0.14em] uppercase px-7 sm:px-8 py-3.5 sm:py-4 transition-all duration-200 hover:bg-[#a01614] hover:shadow-[0_4px_24px_rgba(188,28,25,0.4)] transform hover:-translate-y-0.5 active:translate-y-0"
            >
              VER LA CARTA
            </Link>

            {/* Secondary CTA: RESERVAR (Blanco #FCFBFB Outline) */}
            <Link
              href="/reservas"
              className="inline-flex items-center justify-center border border-[#FCFBFB]/80 bg-black/25 backdrop-blur-xs text-[#FCFBFB] font-semibold text-[11px] sm:text-[13px] tracking-[0.14em] uppercase px-7 sm:px-8 py-3.5 sm:py-4 transition-all duration-200 hover:bg-[#FCFBFB] hover:text-[#2A282A] hover:shadow-[0_4px_20px_rgba(252,251,251,0.25)] transform hover:-translate-y-0.5 active:translate-y-0"
            >
              RESERVAR
            </Link>
          </div>

          {/* Secondary Subtitle Info: Manrope Regular / Medium (400/500) */}
          <p
            className={`mt-4 sm:mt-5 text-[11px] sm:text-[13px] text-[#FCFBFB]/85 font-medium tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transform transition-all duration-700 ease-out delay-550 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Reservas en Av. del Pinar 135 Chacarilla – Surco
          </p>
        </div>
      </div>

      {/* Bottom Scroll Indicator (Discreet, elegant, positioned bottom-left) */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 w-full pb-6 sm:pb-8 transform transition-all duration-700 ease-out delay-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <button
          type="button"
          onClick={handleScrollDown}
          className="group inline-flex items-center gap-2.5 text-[#FCFBFB]/75 hover:text-[#FCFBFB] transition-all duration-300 focus:outline-hidden cursor-pointer"
          aria-label="Desplazarse a la siguiente sección"
        >
          <div className="w-8 h-8 rounded-full border border-[#FCFBFB]/30 flex items-center justify-center group-hover:border-[#FCFBFB]/80 group-hover:bg-[#FCFBFB]/10 transition-all duration-300">
            <svg
              className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300 text-[#FCFBFB]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <span className="text-[10px] sm:text-[11px] font-normal tracking-[0.2em] uppercase text-[#FCFBFB]/60 group-hover:text-[#FCFBFB]/90 transition-colors">
            Descubrir
          </span>
        </button>
      </div>
    </section>
  );
}
