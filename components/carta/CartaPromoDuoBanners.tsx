"use client";

import Image from "next/image";
import Link from "next/link";

interface CartaPromoDuoBannersProps {
  onSelectCategory: (macroId: string, subcategoryId?: string) => void;
}

export default function CartaPromoDuoBanners({
  onSelectCategory,
}: CartaPromoDuoBannersProps) {
  return (
    <section className="py-6 sm:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        
        {/* ── Banner 1: Desayunos & Café de Especialidad ── */}
        <div className="relative rounded-[28px] sm:rounded-[32px] bg-[#EFE8DE] border border-black/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
          
          <div className="space-y-3 text-left relative z-10 max-w-xs">
            <h3 className="text-2xl sm:text-3xl font-black text-[#2A282A] tracking-tight leading-tight">
              Alegra tus mañanas
            </h3>
            <p className="text-[13px] text-[#2A282A]/70 leading-relaxed">
              Con un delicioso desayuno Lynch y café recién tostado.
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={() => onSelectCategory("desayunos", "desayunos-completos")}
                className="inline-flex items-center justify-center bg-white hover:bg-[#BC1C19] hover:text-white text-[#2A282A] font-extrabold text-[11px] tracking-wider uppercase px-6 py-2.5 rounded-full border border-[#2A282A]/10 shadow-xs transition-all duration-300 cursor-pointer"
              >
                VER DESAYUNOS
              </button>
            </div>
          </div>

          <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0">
            <Image
              src="/carta/Cappuccino-web.png"
              alt="Desayunos Lynch Café"
              fill
              sizes="180px"
              className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>

        {/* ── Banner 2: Reservas en Local Chacarilla ── */}
        <div className="relative rounded-[28px] sm:rounded-[32px] bg-[#F5E2DA] border border-black/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
          
          <div className="space-y-3 text-left relative z-10 max-w-xs">
            <h3 className="text-2xl sm:text-3xl font-black text-[#2A282A] tracking-tight leading-tight">
              Ven y disfruta
            </h3>
            <p className="text-[13px] text-[#2A282A]/70 leading-relaxed">
              Reserva tu mesa con anticipación para almuerzos o tardes de café.
            </p>
            <div className="pt-1">
              <Link
                href="/reservas"
                className="inline-flex items-center justify-center bg-[#BC1C19] hover:bg-[#a01614] text-white font-extrabold text-[11px] tracking-wider uppercase px-6 py-2.5 rounded-full shadow-xs transition-all duration-300 cursor-pointer"
              >
                RESERVAR MESA
              </Link>
            </div>
          </div>

          <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0">
            <Image
              src="/carta/grand-volcan.jpg"
              alt="Reserva tu mesa en Lynch Café"
              fill
              sizes="180px"
              className="object-cover rounded-2xl drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
