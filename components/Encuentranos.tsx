"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Encuentranos() {
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

  const googleMapsDirectionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Av.+del+Pinar+135,+Santiago+de+Surco,+Lima,+Peru";
  const whatsappUrl = "https://api.whatsapp.com/send?phone=51978800039";

  return (
    <section
      id="contactanos"
      ref={sectionRef}
      className="relative bg-white text-[#2A282A] py-24 sm:py-32 md:py-36 overflow-hidden select-none border-t border-[#2A282A]/8"
    >
      {/* Background subtle light ambient effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#BC1C19]/[0.015] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#65584A]/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        
        {/* Section Header */}
        <div
          className={`max-w-3xl mb-14 sm:mb-16 transform transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className={`h-[1.5px] bg-[#BC1C19] transition-all duration-700 delay-300 ${isVisible ? "w-6" : "w-0"}`} />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] uppercase text-[#BC1C19]">
              Nuestro Local en Surco
            </span>
          </div>

          <h2 className="flex items-center flex-wrap gap-3 sm:gap-4 text-[36px] sm:text-[46px] md:text-[54px] font-bold text-[#2A282A] leading-[1.05] tracking-[-0.03em]">
            <span>Encuéntranos</span>
            <svg
              viewBox="0 0 58 45.5"
              className="h-[0.72em] w-auto shrink-0 fill-[#BC1C19]"
              aria-hidden="true"
            >
              <path d="M44.56,14.18c2.2,0,7.33-1.64,9.33-2.58,0,0-1.39,6.45-14.56,10.1,2.46.37,4.65-.35,7.13-.47-4.59,6.42-8.45,4.25-11.17,5.69l-3.34,5.14V45.5H25.87V32l-3.12-5c-2.73-1.48-6.6.74-11.21-5.71,2.48.11,4.67.84,7.13.47C5.49,18,4.11,11.59,4.11,11.59c2,.95,7.13,2.6,9.33,2.58C9.16,12.92-1,7,.09,0,3.73,4.54,9.64,6.66,14.35,8.23c1.67.56,5.33,2.57,6.38,4.48h.16l8,13.78L37.12,13c.79-2,4.76-4.2,6.53-4.78C48.35,6.66,54.27,4.54,57.91,0,59,7,48.83,12.92,44.56,14.18" />
            </svg>
          </h2>

          <p className="mt-4 text-[#2A282A]/75 text-[15px] sm:text-[16px] leading-relaxed">
            Visítanos y vive la experiencia del café de especialidad y nuestra cocina en un ambiente diseñado para disfrutar.
          </p>
        </div>

        {/* 2-Column Asymmetric Layout: Info Card (~38%) + Google Map (~62%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Column Left: Information Card (~38% / 5 cols) - Pure White Style */}
          <div
            className={`lg:col-span-5 bg-white text-[#2A282A] rounded-2xl p-7 sm:p-9 md:p-10 border border-[#2A282A]/12 shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex flex-col justify-between relative overflow-hidden group hover:border-[#BC1C19]/30 transition-all duration-500 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Subtle Watermark Wings in Corner */}
            <div className="absolute -bottom-6 -right-6 w-44 h-44 opacity-[0.035] pointer-events-none fill-[#BC1C19]">
              <svg viewBox="0 0 58 45.5" className="w-full h-full fill-[#BC1C19]">
                <path d="M44.56,14.18c2.2,0,7.33-1.64,9.33-2.58,0,0-1.39,6.45-14.56,10.1,2.46.37,4.65-.35,7.13-.47-4.59,6.42-8.45,4.25-11.17,5.69l-3.34,5.14V45.5H25.87V32l-3.12-5c-2.73-1.48-6.6.74-11.21-5.71,2.48.11,4.67.84,7.13.47C5.49,18,4.11,11.59,4.11,11.59c2,.95,7.13,2.6,9.33,2.58C9.16,12.92-1,7,.09,0,3.73,4.54,9.64,6.66,14.35,8.23c1.67.56,5.33,2.57,6.38,4.48h.16l8,13.78L37.12,13c.79-2,4.76-4.2,6.53-4.78C48.35,6.66,54.27,4.54,57.91,0,59,7,48.83,12.92,44.56,14.18" />
              </svg>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#BC1C19]" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#BC1C19]">
                  Lynch Chacarilla
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2A282A] tracking-tight mb-2">
                Tienda Chacarilla
              </h3>
              <p className="text-[14px] text-[#2A282A]/70 font-medium mb-8">
                Av. del Pinar 135, Chacarilla – Surco, Lima
              </p>

              {/* Data Items List */}
              <div className="space-y-6">
                
                {/* 1. Schedule */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#BC1C19]/10 border border-[#BC1C19]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#BC1C19]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#BC1C19] block mb-1">
                      Horario de Atención
                    </span>
                    <div className="flex justify-between items-center text-[14px] text-[#2A282A] font-semibold border-b border-[#2A282A]/10 pb-1.5 pt-0.5">
                      <span className="font-medium text-[#2A282A]/80">Lunes – Domingo</span>
                      <span>7:30am – 11:00pm</span>
                    </div>
                  </div>
                </div>

                {/* 2. Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#BC1C19]/10 border border-[#BC1C19]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#BC1C19]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#BC1C19] block mb-1">
                      Teléfono Directo
                    </span>
                    <a
                      href="tel:978800039"
                      className="text-[15px] text-[#2A282A] font-bold hover:text-[#BC1C19] transition-colors inline-block"
                    >
                      978-800-039
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons in Card */}
            <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:978800039"
                className="flex-1 inline-flex items-center justify-center bg-white border border-[#2A282A]/15 text-[#2A282A] font-bold text-[12px] sm:text-[13px] tracking-[0.12em] uppercase py-3.5 px-4 rounded-lg shadow-sm hover:border-[#BC1C19] hover:text-[#BC1C19] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                978 800 039
              </a>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#BC1C19] text-[#FCFBFB] font-bold text-[12px] sm:text-[13px] tracking-[0.14em] uppercase py-3.5 px-4 rounded-lg shadow-[0_4px_16px_rgba(188,28,25,0.25)] hover:bg-[#a01614] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Cómo llegar</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

          </div>

          {/* Column Right: Google Maps Embed (~62% / 7 cols) */}
          <div
            className={`lg:col-span-7 rounded-2xl overflow-hidden border border-[#2A282A]/10 shadow-[0_12px_40px_rgba(0,0,0,0.06)] min-h-[420px] sm:min-h-[480px] lg:min-h-full relative bg-[#EBE9E6] group hover:border-[#BC1C19]/30 transition-all duration-500 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <iframe
              title="Ubicación de Lynch Café en Google Maps"
              src="https://www.google.com/maps?q=Av.+del+Pinar+135,+Santiago+de+Surco,+Lima,+Peru&z=16&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "420px",
                filter: "contrast(1.03) saturate(0.88)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
