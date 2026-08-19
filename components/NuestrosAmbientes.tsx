"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function NuestrosAmbientes() {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const images = [
    {
      id: "ambiente2",
      src: "/ambientes/ambiente2.jpg",
      title: "Fachada & Terraza Principal",
      subtitle: "Bienvenida a Lynch en Chacarilla",
      gridClass: "lg:col-span-2 lg:row-span-2 min-h-[320px] sm:min-h-[400px] lg:min-h-[460px]",
    },
    {
      id: "ambiente3",
      src: "/ambientes/ambiente3.jpg",
      title: "Terraza Nocturna",
      subtitle: "Iluminación cálida & veladas",
      gridClass: "lg:col-span-1 lg:row-span-1 min-h-[220px]",
    },
    {
      id: "ambiente8",
      src: "/ambientes/ambiente8.jpeg",
      title: "Terraza Verde Bistró",
      subtitle: "Espacio al aire libre con vegetación",
      gridClass: "lg:col-span-1 lg:row-span-2 min-h-[320px] sm:min-h-[400px] lg:min-h-[460px]",
    },
    {
      id: "ambiente1",
      src: "/ambientes/ambiente1.jpg",
      title: "Boutique & Merchandising",
      subtitle: "Café en grano & accesorios de especialidad",
      gridClass: "lg:col-span-1 lg:row-span-1 min-h-[220px]",
    },
    {
      id: "ambiente7",
      src: "/ambientes/ambiente7.jpeg",
      title: "Rincón Rústico de Terraza",
      subtitle: "Muros de ladrillo y detalles en madera",
      gridClass: "lg:col-span-1 lg:row-span-1 min-h-[220px]",
    },
    {
      id: "ambiente5",
      src: "/ambientes/ambiente5.jpg",
      title: "Barra Principal & Vitrinas",
      subtitle: "Repostería artesanal y preparaciones al momento",
      gridClass: "lg:col-span-1 lg:row-span-1 min-h-[220px]",
    },
    {
      id: "ambiente4",
      src: "/ambientes/ambiente4.jpg",
      title: "Salón Interior Lounge",
      subtitle: "Comodidad, arte y servicio de excelencia",
      gridClass: "lg:col-span-2 lg:row-span-2 min-h-[320px] sm:min-h-[400px] lg:min-h-[460px]",
    },
    {
      id: "ambiente6",
      src: "/ambientes/ambiente6.jpeg",
      title: "Zona Lounge & Galería",
      subtitle: "Sillones de lectura y cuadros andinos",
      gridClass: "lg:col-span-2 lg:row-span-1 min-h-[220px]",
    },
  ];

  // Scroll entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + images.length) % images.length : null
        );
      }
    },
    [lightboxIndex, images.length]
  );

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, handleKeyDown]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  };

  return (
    <section
      id="ambientes"
      ref={sectionRef}
      className="relative bg-[#1a181a] text-[#FCFBFB] py-16 sm:py-22 md:py-26 overflow-hidden w-full max-w-full select-none"
    >
      {/* Background Image: imagen-cartaatras.jpg with blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="/imagen-cartaatras.jpg"
          alt="Gastronomía Lynch Café"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105 opacity-35"
          style={{ filter: "blur(6px)" }}
        />
        {/* Dark overlay for contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a181a] via-[#1a181a]/65 to-[#1a181a]" />
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BC1C19]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 relative z-10 text-center w-full max-w-full">
        
        {/* Section Header: Centered */}
        <div
          className={`max-w-2xl mx-auto mb-10 sm:mb-12 transform transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3.5 text-[28px] sm:text-[36px] md:text-[42px] font-bold text-[#FCFBFB] leading-[1.08] tracking-[-0.03em]">
            <span>Nuestros <span className="text-[#BC1C19]">ambientes</span></span>
            <svg
              viewBox="0 0 58 45.5"
              className="h-[0.72em] w-auto shrink-0 fill-[#BC1C19]"
              aria-hidden="true"
            >
              <path d="M44.56,14.18c2.2,0,7.33-1.64,9.33-2.58,0,0-1.39,6.45-14.56,10.1,2.46.37,4.65-.35,7.13-.47-4.59,6.42-8.45,4.25-11.17,5.69l-3.34,5.14V45.5H25.87V32l-3.12-5c-2.73-1.48-6.6.74-11.21-5.71,2.48.11,4.67.84,7.13.47C5.49,18,4.11,11.59,4.11,11.59c2,.95,7.13,2.6,9.33,2.58C9.16,12.92-1,7,.09,0,3.73,4.54,9.64,6.66,14.35,8.23c1.67.56,5.33,2.57,6.38,4.48h.16l8,13.78L37.12,13c.79-2,4.76-4.2,6.53-4.78C48.35,6.66,54.27,4.54,57.91,0,59,7,48.83,12.92,44.56,14.18" />
            </svg>
          </h2>

          <p className="mt-2.5 text-[#FCFBFB]/75 text-[13px] sm:text-[15px] leading-relaxed max-w-xl mx-auto">
            Un diseño contemporáneo concebido para disfrutar de café de especialidad, buena gastronomía y momentos inolvidables en Chacarilla.
          </p>
        </div>

        {/* ── MOBILE / TABLET VIEW: Crisp 1-to-2 column gallery ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-3.5 sm:gap-4">
          {images.map((item, idx) => (
            <div
              key={`mob-${item.id}`}
              onClick={() => setLightboxIndex(idx)}
              style={{ transitionDelay: `${100 + idx * 50}ms` }}
              className={`group relative rounded-xl overflow-hidden bg-[#222022] border border-white/10 hover:border-[#BC1C19] shadow-[0_6px_25px_rgba(0,0,0,0.3)] transition-all duration-400 aspect-[16/11] cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-600 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4 text-left">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-white leading-tight tracking-tight drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP PC VIEW: Exact Original Bento Grid ── */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-3.5 sm:gap-4 auto-rows-[220px]">
          {images.map((item, idx) => (
            <div
              key={`dt-${item.id}`}
              onClick={() => setLightboxIndex(idx)}
              style={{ transitionDelay: `${120 + idx * 60}ms` }}
              className={`group relative rounded-xl overflow-hidden bg-[#222022] border border-white/10 hover:border-[#BC1C19] shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_40px_rgba(188,28,25,0.18)] transition-all duration-400 cursor-pointer ${
                item.gridClass
              } ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-[0.98]"
              }`}
            >
              {/* Photo Image */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-600 ease-out group-hover:scale-105"
              />

              {/* Bottom Dark Gradient Reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400" />

              {/* Red Accent Line on Hover (Brand Detail) */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#BC1C19] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              {/* Center Zoom / Expand Icon Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-xl">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>

              {/* Bottom Info Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-left transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-[15px] sm:text-[17px] font-bold text-white leading-tight tracking-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn select-none"
        >
          {/* Close Button (X) */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Cerrar modal"
            className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#BC1C19] hover:border-[#BC1C19] transition-all flex items-center justify-center focus:outline-hidden cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Foto anterior"
            className="absolute left-4 sm:left-8 z-50 w-12 h-12 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#BC1C19] hover:border-[#BC1C19] transition-all flex items-center justify-center focus:outline-hidden cursor-pointer"
          >
            <svg className="w-6 h-6 -translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image & Caption Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[70vh] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black">
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].title}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 80vw"
                className="object-contain object-center"
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-4 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {images[lightboxIndex].title}
              </h3>
              <p className="text-sm text-white/70 mt-1">
                {images[lightboxIndex].subtitle}
              </p>
              <div className="mt-2 text-xs text-[#BC1C19] font-mono tracking-widest uppercase">
                {lightboxIndex + 1} / {images.length}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Siguiente foto"
            className="absolute right-4 sm:right-8 z-50 w-12 h-12 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#BC1C19] hover:border-[#BC1C19] transition-all flex items-center justify-center focus:outline-hidden cursor-pointer"
          >
            <svg className="w-6 h-6 translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
