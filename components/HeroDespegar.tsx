"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroDespegar() {
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
      ref={sectionRef}
      className="relative z-20 bg-gradient-to-b from-[#BC1C19] via-[#BC1C19] to-[#a01614] text-[#FCFBFB] pt-20 sm:pt-28 md:pt-32 pb-24 sm:pb-32 overflow-x-clip overflow-y-visible w-full max-w-full select-none border-b border-black/10"
    >
      {/* Top Organic Curve Transition from the dark section above */}
      <div className="absolute -top-1 -left-[1px] -right-[1px] w-[calc(100%+2px)] overflow-hidden leading-none z-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-14 md:h-18 fill-[#1a181a]"
        >
          <path d="M0,0 L1440,0 L1440,25 C1080,105 360,105 0,25 Z" />
        </svg>
      </div>

      {/* Subtle ambient lighting depth on red background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-black/[0.08] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Vaso Lynch + Splash de Café con animación idle (~45% on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-1 pt-8 sm:pt-12 lg:pt-0">
            <div
              className={`relative flex flex-col items-center transform transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              {/* Floating Container (Levitación sutil 4s loop) */}
              <div className="relative animate-cup-float flex flex-col items-center">
                
                {/* 1. Coffee Splash (cafe.png) - Emerging from behind the cup rim */}
                <div className="absolute -top-[39%] sm:-top-[41%] left-1/2 -translate-x-[48%] w-[136%] z-20 pointer-events-none filter drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]">
                  <div className="relative w-full aspect-[536/302]">
                    <Image
                      src="/cafe.png"
                      alt="Splash de Café Lynch"
                      fill
                      priority
                      sizes="(max-width: 640px) 300px, 480px"
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>

                {/* 2. Lynch Coffee Cup (cafelynch.png) - Positioned in front (z-30) */}
                <div className="relative z-30 w-[240px] xs:w-[270px] sm:w-[310px] md:w-[340px] lg:w-[370px]">
                  <div className="relative w-full aspect-[396/498]">
                    <Image
                      src="/cafelynch.png"
                      alt="Vaso de Café Lynch para llevar"
                      fill
                      priority
                      sizes="(max-width: 640px) 270px, 370px"
                      className="object-contain object-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.3)]"
                    />
                  </div>
                </div>

                {/* 3. Elliptical Drop Shadow */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[75%] h-7 bg-black/35 rounded-full blur-md" />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Typography & CTA (~55% on lg) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-2">
            
            {/* Main Headline */}
            <div
              className={`transform transition-all duration-800 ease-out delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
            >
              {/* Line 1: UN CAFÉ [WING] PARA DESPEGAR */}
              <h2 className="text-[32px] xs:text-[38px] sm:text-[46px] md:text-[54px] lg:text-[58px] font-extrabold text-[#FCFBFB] tracking-[-0.02em] uppercase leading-[1.08] flex items-center justify-center lg:justify-start flex-wrap gap-2.5 sm:gap-3.5">
                <span>UN CAFÉ</span>
                <svg
                  viewBox="0 0 58 45.5"
                  className="h-[0.72em] w-auto shrink-0 fill-[#FCFBFB]"
                  aria-hidden="true"
                >
                  <path d="M44.56,14.18c2.2,0,7.33-1.64,9.33-2.58,0,0-1.39,6.45-14.56,10.1,2.46.37,4.65-.35,7.13-.47-4.59,6.42-8.45,4.25-11.17,5.69l-3.34,5.14V45.5H25.87V32l-3.12-5c-2.73-1.48-6.6.74-11.21-5.71,2.48.11,4.67.84,7.13.47C5.49,18,4.11,11.59,4.11,11.59c2,.95,7.13,2.6,9.33,2.58C9.16,12.92-1,7,.09,0,3.73,4.54,9.64,6.66,14.35,8.23c1.67.56,5.33,2.57,6.38,4.48h.16l8,13.78L37.12,13c.79-2,4.76-4.2,6.53-4.78C48.35,6.66,54.27,4.54,57.91,0,59,7,48.83,12.92,44.56,14.18" />
                </svg>
                <span>PARA DESPEGAR</span>
              </h2>

              {/* Line 2: Y TU ALMA PARA VOLAR */}
              <div className="text-[32px] xs:text-[38px] sm:text-[46px] md:text-[54px] lg:text-[58px] font-extrabold text-[#FCFBFB] tracking-[-0.02em] uppercase leading-[1.08] mt-1 sm:mt-2">
                Y TU ALMA PARA VOLAR
              </div>
            </div>

            {/* Supporting Copy */}
            <p
              className={`text-[#FCFBFB]/90 text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium transform transition-all duration-800 ease-out delay-350 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
            >
              Cada taza está pensada para acompañar tu día, desde el primer sorbo hasta el último vuelo. Especialidad, aroma y pasión en cada extracción.
            </p>

            {/* CTA Button */}
            <div
              className={`pt-3 sm:pt-4 transform transition-all duration-700 ease-out delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="#nosotros"
                className="inline-flex items-center justify-center bg-[#FCFBFB] text-[#BC1C19] font-bold text-[12px] sm:text-[13px] tracking-[0.18em] uppercase px-9 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:bg-[#1a181a] hover:text-[#FCFBFB] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                CONÓCENOS
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
