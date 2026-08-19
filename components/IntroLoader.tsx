"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroLoader() {
  const [stage, setStage] = useState<"enter" | "visible" | "sliding" | "hidden">("enter");

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setStage("hidden");
      return;
    }

    // Step 1: Shape appears centered
    const timer1 = setTimeout(() => {
      setStage("visible");
    }, 50);

    // Step 2: Start sliding curtain upward animation (~1.2s)
    const timer2 = setTimeout(() => {
      setStage("sliding");
    }, 1200);

    // Step 3: Complete animation and remove from DOM (~2.2s)
    const timer3 = setTimeout(() => {
      setStage("hidden");
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (stage === "hidden") {
    return null;
  }

  const isSliding = stage === "sliding";

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] pointer-events-none overflow-hidden select-none"
    >
      {/* Layer 1: Red Curtain Layer (Slides upward following the black layer) */}
      <div
        className={`absolute inset-0 bg-[#BC1C19] transition-transform duration-[950ms] ease-[cubic-bezier(0.76,0,0.24,1)] delay-[120ms] ${
          isSliding ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Layer 2: Black Screen with Centered Red Lynch Shape & Brand Name */}
      <div
        className={`absolute inset-0 bg-[#000000] flex flex-col items-center justify-center transition-transform duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isSliding ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          className={`flex flex-col items-center justify-center transform transition-all duration-700 ease-out ${
            stage === "enter"
              ? "scale-90 opacity-0 translate-y-3"
              : isSliding
              ? "scale-100 opacity-90 -translate-y-12"
              : "scale-100 opacity-100 translate-y-0"
          }`}
        >
          {/* Lynch Red Wings Isotype */}
          <div className="relative w-24 h-20 sm:w-28 sm:h-24 md:w-32 md:h-26 flex items-center justify-center">
            <Image
              src="/shape.svg"
              alt="Lynch Café"
              width={130}
              height={100}
              priority
              style={{ width: "100%", height: "auto" }}
              className="object-contain drop-shadow-[0_4px_28px_rgba(188,28,25,0.5)]"
            />
          </div>

          {/* Subtitle / Brand Typography */}
          <div
            className={`mt-4 text-center transition-all duration-700 delay-150 ${
              stage === "enter" ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.28em] uppercase text-[#FCFBFB]/90 block">
              LYNCH CAFÉ
            </span>
            <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.32em] uppercase text-[#BC1C19] block mt-1">
              CAFÉ PARA VOLAR
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
