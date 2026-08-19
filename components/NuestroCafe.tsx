"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NuestroCafe() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative bg-[#FCFBFB] text-[#2A282A] py-24 sm:py-32 md:py-40 overflow-hidden"
    >
      {/* Subtle background ambient watermarks / light accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#BC1C19]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#65584A]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Editorial Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Section Eyebrow Tag */}
            <div
              className={`inline-flex items-center gap-2.5 transform transition-all duration-700 ease-out delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className={`h-[1.5px] bg-[#BC1C19] transition-all duration-700 delay-300 ${isVisible ? "w-6" : "w-0"}`} />
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] uppercase text-[#BC1C19]">
                Origen & Especialidad
              </span>
            </div>

            {/* Main Section Title */}
            <h2
              className={`flex items-center flex-wrap gap-3 sm:gap-4 text-[38px] sm:text-[48px] md:text-[56px] lg:text-[62px] font-bold text-[#2A282A] leading-[1.05] tracking-[-0.03em] transform transition-all duration-800 ease-out delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span>Nuestro café</span>
              <svg
                viewBox="0 0 58 45.5"
                className="h-[0.72em] w-auto shrink-0 fill-[#BC1C19]"
                aria-hidden="true"
              >
                <path d="M44.56,14.18c2.2,0,7.33-1.64,9.33-2.58,0,0-1.39,6.45-14.56,10.1,2.46.37,4.65-.35,7.13-.47-4.59,6.42-8.45,4.25-11.17,5.69l-3.34,5.14V45.5H25.87V32l-3.12-5c-2.73-1.48-6.6.74-11.21-5.71,2.48.11,4.67.84,7.13.47C5.49,18,4.11,11.59,4.11,11.59c2,.95,7.13,2.6,9.33,2.58C9.16,12.92-1,7,.09,0,3.73,4.54,9.64,6.66,14.35,8.23c1.67.56,5.33,2.57,6.38,4.48h.16l8,13.78L37.12,13c.79-2,4.76-4.2,6.53-4.78C48.35,6.66,54.27,4.54,57.91,0,59,7,48.83,12.92,44.56,14.18" />
              </svg>
            </h2>

            {/* Paragraph 1 & 2: Blends Description */}
            <div
              className={`space-y-6 text-[#2A282A]/85 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed font-normal transform transition-all duration-800 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="border-l-2 border-[#BC1C19]/30 pl-4 sm:pl-5 py-0.5">
                El café Lynch para espresso es un blend que viene directamente desde Cusco - Perú, tiene un tostado medio oscuro con un perfil de chocolate, pasas oscuras y cuerpo cremoso. Tiene una puntuación de 84 puntos considerándolo dentro del rango de café de especialidad.
              </p>

              <p className="border-l-2 border-[#2A282A]/10 pl-4 sm:pl-5 py-0.5 text-[#2A282A]/75">
                Blend especial de Huánuco y Villa Rica. Café balanceado con notas de chocolate peruano, roble, nueces, mandarina y tangerino. Variedades Catuai, Bourbon y Caturras, cultivadas a 1,600 m y con puntaje SCA +82. Tostado medio.
              </p>
            </div>

            {/* Specialty Coffee Quick Facts / Flavor Highlights with Staggered Delays */}
            <div className="pt-6 border-t border-[#2A282A]/10 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              <div
                className={`bg-[#E0DFDF]/30 rounded-lg p-3.5 border border-[#2A282A]/5 transform transition-all duration-600 ease-out delay-400 ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                }`}
              >
                <span className="block text-[10px] font-bold tracking-[0.16em] uppercase text-[#BC1C19] mb-1">
                  Calidad SCA
                </span>
                <span className="text-base sm:text-lg font-bold text-[#2A282A]">
                  +84 Puntos
                </span>
              </div>

              <div
                className={`bg-[#E0DFDF]/30 rounded-lg p-3.5 border border-[#2A282A]/5 transform transition-all duration-600 ease-out delay-500 ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                }`}
              >
                <span className="block text-[10px] font-bold tracking-[0.16em] uppercase text-[#BC1C19] mb-1">
                  Altitud
                </span>
                <span className="text-base sm:text-lg font-bold text-[#2A282A]">
                  1,600 – 1,900 m
                </span>
              </div>

              <div
                className={`bg-[#E0DFDF]/30 rounded-lg p-3.5 border border-[#2A282A]/5 col-span-2 sm:col-span-1 transform transition-all duration-600 ease-out delay-600 ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                }`}
              >
                <span className="block text-[10px] font-bold tracking-[0.16em] uppercase text-[#BC1C19] mb-1">
                  Orígenes
                </span>
                <span className="text-base sm:text-lg font-bold text-[#2A282A] truncate block">
                  Cusco & Villa Rica
                </span>
              </div>
            </div>

            {/* Action Button: VER MÉTODOS */}
            <div
              className={`pt-2 transform transition-all duration-700 ease-out delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="#carta"
                className="inline-flex items-center gap-3 bg-[#BC1C19] text-[#FCFBFB] font-semibold text-[12px] sm:text-[13px] tracking-[0.16em] uppercase px-8 py-4 rounded-none transition-all duration-300 hover:bg-[#a01614] hover:shadow-[0_8px_25px_rgba(188,28,25,0.35)] transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>VER MÉTODOS</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Heroic Image Presentation (5 cols on lg) */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-[0.98]"
            }`}
          >
            <div className="relative group mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Accent Background Box */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#BC1C19]/10 via-transparent to-[#2A282A]/5 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
              
              {/* Main Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#2A282A]/10 bg-white aspect-[4/5]">
                <Image
                  src="/imagen-1.jpg"
                  alt="Café Lynch de Especialidad - Single Origin Inkawasi Cusco"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Image Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Floating Tag in Bottom Left of Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#BC1C19] animate-pulse" />
                    <span className="text-[11px] font-semibold tracking-wider text-white uppercase">
                      Single Origin • Cusco
                    </span>
                  </div>
                  <span className="text-[10px] font-medium tracking-widest text-white/70 uppercase">
                    100% Arábica
                  </span>
                </div>
              </div>

              {/* Discreet Brand Stamp in Top Right */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 rounded-full bg-[#BC1C19] text-[#FCFBFB] flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/shape.svg"
                  alt="Lynch Icon"
                  width={20}
                  height={16}
                  style={{ width: "auto", height: "auto" }}
                  className="brightness-0 invert object-contain"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
