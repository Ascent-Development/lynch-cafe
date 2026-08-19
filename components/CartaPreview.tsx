"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function CartaPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [slideWidth, setSlideWidth] = useState(240);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const baseProducts = [
    {
      id: "cappuccino",
      number: "01",
      name: "CAPPUCCINO",
      image: "/carta/Cappuccino-web.png",
    },
    {
      id: "hamburguesa",
      number: "02",
      name: "HAMBURGUESA AL PLATO",
      image: "/carta/hamburguesa-con-guacamole.jpg",
    },
    {
      id: "grand-volcan",
      number: "03",
      name: "GRAND VOLCÁN",
      image: "/carta/grand-volcan.jpg",
    },
    {
      id: "frappe",
      number: "04",
      name: "FRAPPÉ",
      image: "/carta/frappe.jpg",
    },
    {
      id: "lomo-saltado",
      number: "05",
      name: "LOMO SALTADO",
      image: "/carta/LOMO-SALTADO.jpg",
    },
  ];

  // Tripled array to support seamless infinite wrapping
  const products = [...baseProducts, ...baseProducts, ...baseProducts];
  const [currentIndex, setCurrentIndex] = useState(baseProducts.length); // start in middle block (index 5)

  // Scroll entrance animation
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

  // Calculate slide dimensions dynamically
  const updateDimensions = useCallback(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    const gap = 16;

    let visibleCards = 1.3;
    if (width >= 1200) {
      visibleCards = 4.5;
    } else if (width >= 960) {
      visibleCards = 3.5;
    } else if (width >= 640) {
      visibleCards = 2.5;
    } else if (width >= 480) {
      visibleCards = 1.8;
    }

    const calculatedSlideWidth = (width - gap * (Math.floor(visibleCards) - 1)) / visibleCards;
    setSlideWidth(Math.min(260, Math.max(180, calculatedSlideWidth)));
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  // Seamless infinite loop normalization on transition end
  const handleTransitionEnd = () => {
    if (currentIndex >= baseProducts.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - baseProducts.length);
    } else if (currentIndex < baseProducts.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + baseProducts.length);
    }
  };

  // Re-enable smooth transition after instant reset
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // Auto-slide animation - Faster speed as requested (every 1800ms)
  useEffect(() => {
    if (isDragging || isHovered) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 1800);

    return () => clearInterval(interval);
  }, [isDragging, isHovered]);

  // Pointer / Drag Event Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    setIsDragging(true);
    setIsTransitioning(false);
    setStartX(e.clientX);
    setDragOffset(0);
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsTransitioning(true);

    const diff = dragOffset;
    const threshold = 35;

    if (diff < -threshold) {
      setCurrentIndex((prev) => prev + 1);
    } else if (diff > threshold) {
      setCurrentIndex((prev) => prev - 1);
    }

    setDragOffset(0);

    if (containerRef.current && containerRef.current.hasPointerCapture(e.pointerId)) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }
  };

  const gap = 16;
  const currentTranslate = -(currentIndex * (slideWidth + gap)) + dragOffset;
  const activeDotIndex = currentIndex % baseProducts.length;

  return (
    <section
      id="carta"
      ref={sectionRef}
      className="relative bg-[#1a181a] text-[#FCFBFB] py-16 sm:py-22 md:py-26 overflow-hidden w-full max-w-full border-t border-b border-white/5 select-none"
    >
      {/* Background Image: imagen-cartaatras.jpg with blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full max-w-full">
        <Image
          src="/imagen-cartaatras.jpg"
          alt="Gastronomía Lynch Café"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105 opacity-35"
          style={{ filter: "blur(6px)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a181a] via-[#1a181a]/65 to-[#1a181a]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 relative z-10 text-center w-full max-w-full overflow-hidden">
        
        {/* Section Header: Centered */}
        <div
          className={`max-w-2xl mx-auto mb-10 sm:mb-12 transform transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3.5 text-[28px] sm:text-[36px] md:text-[42px] font-bold text-[#FCFBFB] leading-[1.08] tracking-[-0.03em]">
            <span>Cafetería <span className="text-[#BC1C19]">Restaurante</span></span>
            <svg
              viewBox="0 0 58 45.5"
              className="h-[0.72em] w-auto shrink-0 fill-[#BC1C19]"
              aria-hidden="true"
            >
              <path d="M44.56,14.18c2.2,0,7.33-1.64,9.33-2.58,0,0-1.39,6.45-14.56,10.1,2.46.37,4.65-.35,7.13-.47-4.59,6.42-8.45,4.25-11.17,5.69l-3.34,5.14V45.5H25.87V32l-3.12-5c-2.73-1.48-6.6.74-11.21-5.71,2.48.11,4.67.84,7.13.47C5.49,18,4.11,11.59,4.11,11.59c2,.95,7.13,2.6,9.33,2.58C9.16,12.92-1,7,.09,0,3.73,4.54,9.64,6.66,14.35,8.23c1.67.56,5.33,2.57,6.38,4.48h.16l8,13.78L37.12,13c.79-2,4.76-4.2,6.53-4.78C48.35,6.66,54.27,4.54,57.91,0,59,7,48.83,12.92,44.56,14.18" />
            </svg>
          </h2>

          <p className="mt-2.5 text-[#FCFBFB]/75 text-[13px] sm:text-[15px] leading-relaxed max-w-xl mx-auto">
            Disfruta lo mejor de nuestra cocina y barra, conociendo un poco más de la gastronomía de Lynch y su café de especialidad.
          </p>
        </div>

        {/* Seamless Infinite Carousel Drag Container */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y py-2"
          style={{ userSelect: "none" }}
        >
          <div
            onTransitionEnd={handleTransitionEnd}
            className="flex"
            style={{
              gap: `${gap}px`,
              transform: `translate3d(${currentTranslate}px, 0, 0)`,
              transition: isTransitioning && !isDragging ? "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)" : "none",
            }}
          >
            {products.map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                style={{ width: `${slideWidth}px` }}
                className="shrink-0 rounded-none overflow-hidden bg-black border border-white/10 shadow-lg flex flex-col justify-between group transition-all duration-300"
              >
                {/* Upper Portion: Compact Square Image Frame */}
                <div className="relative w-full aspect-square overflow-hidden bg-[#242224]">
                  <Image
                    src={product.image}
                    alt={`${product.name} - Lynch Café`}
                    fill
                    draggable={false}
                    sizes="(max-width: 640px) 180px, 260px"
                    className="object-cover object-center pointer-events-none select-none transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Number Badge (01, 02, 03, 04, 05) */}
                  <div className="absolute top-2.5 left-2.5 font-mono text-[9px] sm:text-[10px] font-bold tracking-widest text-white bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/15">
                    {product.number}
                  </div>
                </div>

                {/* Lower Portion: Clean solid white block with centered uppercase title */}
                <div className="bg-[#FCFBFB] py-3 px-2.5 text-center flex items-center justify-center min-h-[48px]">
                  <h3 className="text-[11px] sm:text-[12px] font-bold tracking-[0.1em] uppercase text-[#2A282A] group-hover:text-[#BC1C19] transition-colors leading-tight">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centered Controls: Pagination indicators & CTA Button in the middle */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-6 text-center">
          
          {/* Pagination Dash Indicators (Centered) */}
          <div className="flex items-center justify-center gap-2">
            {baseProducts.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(baseProducts.length + idx);
                }}
                aria-label={`Ir al producto ${idx + 1}`}
                className={`h-1 rounded-full transition-all duration-400 cursor-pointer ${
                  activeDotIndex === idx
                    ? "w-8 bg-[#BC1C19]"
                    : "w-4 bg-white/20 hover:bg-white/45"
                }`}
              />
            ))}
          </div>

          {/* Primary CTA Button (Centered) */}
          <div>
            <a
              href="/carta-salon.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#BC1C19] text-[#FCFBFB] font-semibold text-[11px] sm:text-[12px] tracking-[0.16em] uppercase px-8 py-3.5 transition-all duration-300 hover:bg-[#a01614] hover:shadow-[0_8px_25px_rgba(188,28,25,0.35)] transform hover:-translate-y-0.5 active:translate-y-0"
            >
              CONOCE NUESTRA CARTA
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
