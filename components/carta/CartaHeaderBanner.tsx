"use client";

import Image from "next/image";

export default function CartaHeaderBanner() {
  return (
    <section className="relative h-[280px] sm:h-[340px] md:h-[380px] w-full flex items-center justify-center overflow-hidden bg-[#181618]">
      {/* Background Image with Dark Overlay (Stock / Atmospheric Lynch background) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-lynch.jpg"
          alt="Lynch Café - Nuestra Carta"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-[#181618]" />
      </div>

      {/* Centered Title */}
      <div className="relative z-10 text-center px-6 pt-16 sm:pt-20">
        <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.25em] uppercase text-[#BC1C19] block mb-2">
          CAFETERÍA · RESTAURANTE · BARRA
        </span>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase leading-none">
          Nuestra <span className="text-[#BC1C19]">Carta</span>
        </h1>

        {/* Lynch Red Line */}
        <div className="w-16 sm:w-20 h-1 bg-[#BC1C19] mx-auto mt-3 sm:mt-4 rounded-full" />

        <p className="mt-3 text-[#FCFBFB]/75 text-[13px] sm:text-[14px] max-w-md mx-auto leading-relaxed">
          Disfruta de nuestros desayunos, platos, postres y cafés de especialidad.
        </p>
      </div>
    </section>
  );
}
