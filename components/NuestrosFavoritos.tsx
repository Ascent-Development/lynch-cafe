"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function NuestrosFavoritos() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const favoritos = [
    {
      id: "pollo-saltado",
      name: "Pollo Saltado",
      tag: "CRIOLLO & FUSIÓN",
      image: "/favoritos/Pollo-saltado-min-2-scaled.jpg",
      description:
        "Trozos de pechuga salteados al wok con cebolla crujiente, tomate, ají amarillo, papas doradas y arroz con choclo.",
    },
    {
      id: "cesar-con-pollo",
      name: "César de Lima",
      tag: "ENSALADA",
      image: "/favoritos/CESAR-con-pollo.png",
      description:
        "Pechuga de pollo a la plancha, lechuga romana, arúgula fresca, crutones crocantes, tomates cherry y queso Grana Padano.",
    },
    {
      id: "pizza-jamon-funghi",
      name: "Pizza Jamón y Funghi",
      tag: "PIZZA ARTESANAL",
      image: "/favoritos/jamon-y-fungih-scaled.jpg",
      description:
        "Masa madre de larga fermentación, salsa pomodoro, mozzarella fundida, jamón artesanal, champiñones y arúgula.",
    },
    {
      id: "sanguche-roast-beef",
      name: "Sánguche de Roast Beef",
      tag: "SÁNGUCHE DE AUTOR",
      image: "/favoritos/G26A5353.jpg",
      description:
        "Pan ciabatta rústico, finas láminas de roast beef a baja temperatura, alioli de ajos confitados, lechuga y tomate.",
    },
    {
      id: "fettuccine-lomo",
      name: "Fettuccine con Lomo Saltado",
      tag: "PASTAS & FUSIÓN",
      image: "/favoritos/fetuccini-con-lo-mac-scaled.jpg",
      description:
        "Fettuccine al dente en cremosa salsa a la huancaína tradicional, coronado con jugoso lomo fino salteado al wok.",
    },
    {
      id: "tequenos",
      name: "Tequeños con Guacamole",
      tag: "PIQUEOS & ENTRADAS",
      image: "/favoritos/pequenos.jpg",
      description:
        "Crujientes deditos artesanales rellenos de abundante queso andino derretido, servidos con guacamole fresco de la casa.",
    },
    {
      id: "grand-volcan",
      name: "Grand Volcán",
      tag: "POSTRE DE AUTOR",
      image: "/favoritos/grand-volcan.jpg",
      description:
        "Bizcocho de chocolate tibio con centro líquido fundente, fresas frescas y lluvia de cacao de especialidad.",
    },
    {
      id: "torta-chocolate",
      name: "Torta de Chocolate Lynch",
      tag: "PASTELERÍA",
      image: "/favoritos/torta-choco-lynch.jpg",
      description:
        "Bizcocho húmedo de puro cacao peruano, relleno y cubierto con generoso fudge artesanal elaborado en casa.",
    },
  ];

  return (
    <section
      id="favoritos"
      ref={sectionRef}
      className="relative bg-[#FCFBFB] text-[#2A282A] py-24 sm:py-32 md:py-36 overflow-hidden border-t border-[#2A282A]/8 select-none"
    >
      {/* Background subtle light ambient effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#BC1C19]/[0.015] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#65584A]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          
          <div
            className={`max-w-2xl transform transition-all duration-800 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className={`h-[1.5px] bg-[#BC1C19] transition-all duration-700 delay-300 ${isVisible ? "w-6" : "w-0"}`} />
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] uppercase text-[#BC1C19]">
                Lo que más piden
              </span>
            </div>

            <h2 className="flex items-center flex-wrap gap-3 sm:gap-4 text-[36px] sm:text-[46px] md:text-[54px] font-bold text-[#2A282A] leading-[1.05] tracking-[-0.03em]">
              <span>Nuestros Favoritos</span>
              <svg
                viewBox="0 0 58 45.5"
                className="h-[0.72em] w-auto shrink-0 fill-[#BC1C19]"
                aria-hidden="true"
              >
                <path d="M44.56,14.18c2.2,0,7.33-1.64,9.33-2.58,0,0-1.39,6.45-14.56,10.1,2.46.37,4.65-.35,7.13-.47-4.59,6.42-8.45,4.25-11.17,5.69l-3.34,5.14V45.5H25.87V32l-3.12-5c-2.73-1.48-6.6.74-11.21-5.71,2.48.11,4.67.84,7.13.47C5.49,18,4.11,11.59,4.11,11.59c2,.95,7.13,2.6,9.33,2.58C9.16,12.92-1,7,.09,0,3.73,4.54,9.64,6.66,14.35,8.23c1.67.56,5.33,2.57,6.38,4.48h.16l8,13.78L37.12,13c.79-2,4.76-4.2,6.53-4.78C48.35,6.66,54.27,4.54,57.91,0,59,7,48.83,12.92,44.56,14.18" />
              </svg>
            </h2>
          </div>

          {/* Top Right Action: VER CARTA COMPLETA */}
          <div
            className={`transform transition-all duration-800 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="/carta-salon.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#2A282A] hover:text-[#BC1C19] transition-colors pb-1 border-b-2 border-[#2A282A] hover:border-[#BC1C19] group"
            >
              <span>VER CARTA COMPLETA</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>

        {/* 8 Products Grid: 4 columns on desktop, 2 on tablet and mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 gap-y-6 sm:gap-y-12">
          {favoritos.map((item, idx) => (
            <div
              key={item.id}
              style={{ transitionDelay: `${150 + idx * 75}ms` }}
              className={`group flex flex-col justify-between bg-white rounded-xl overflow-hidden border border-[#2A282A]/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:border-[#BC1C19]/30 transition-all duration-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-[0.98]"
              }`}
            >
              <div>
                {/* Product Image Frame */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#2A282A]/5">
                  <Image
                    src={item.image}
                    alt={`${item.name} - Lynch Café`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Category Pill Tag */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                    <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.14em] uppercase text-white bg-black/75 backdrop-blur-md px-2 sm:px-2.5 py-0.5 sm:py-1 rounded border border-white/15">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-3.5 sm:p-6">
                  <h3 className="text-[14px] sm:text-[18px] font-bold text-[#2A282A] tracking-tight group-hover:text-[#BC1C19] transition-colors leading-snug mb-1 sm:mb-2">
                    {item.name}
                  </h3>

                  <p className="text-[11px] sm:text-[13px] text-[#2A282A]/70 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="px-3.5 sm:px-5 pb-3.5 sm:pb-5 pt-0">
                <div className="w-full h-px bg-[#2A282A]/5 group-hover:bg-[#BC1C19]/30 transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
