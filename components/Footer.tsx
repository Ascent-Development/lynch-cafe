"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const mainNavLinks = [
    { label: "Home", href: "/" },
    { label: "SOBRE NOSOTROS", href: "#nosotros" },
    { label: "Métodos", href: "#metodos" },
    { label: "Reservas", href: "#reservas" },
    { label: "Contáctanos", href: "#contactanos" },
  ];

  const legalLinks = [
    { label: "Políticas de Privacidad", href: "#privacidad" },
    { label: "Políticas de Cookies", href: "#cookies" },
    { label: "Políticas de Privacidad de Redes Sociales", href: "#redes-sociales" },
    { label: "Aviso y Política de Vigilancia", href: "#vigilancia" },
    { label: "Formulario Virtual de Atención Derechos ARCO", href: "#arco-formulario" },
    { label: "Manual de Atención de Derechos ARCO", href: "#arco-manual" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#1a181a] text-[#FCFBFB] pt-20 sm:pt-24 md:pt-28 pb-12 overflow-hidden border-t border-white/5"
    >
      {/* Subtle background red glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BC1C19]/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14 pb-16">
          
          {/* Column 1: Logo & Brand Description (lg: 4 cols) */}
          <div
            className={`lg:col-span-4 space-y-6 transform transition-all duration-700 ease-out delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              href="/"
              className="inline-block transition-transform duration-200 hover:scale-[1.02]"
              aria-label="Lynch Café"
            >
              <div className="relative h-10 sm:h-11 w-36 sm:w-40 flex items-center">
                <Image
                  src="/logo-lynch.svg"
                  alt="Lynch Café"
                  width={182}
                  height={56}
                  className="h-full w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
                />
              </div>
            </Link>

            <p className="text-[13px] sm:text-[14px] text-[#FCFBFB]/65 font-normal leading-relaxed max-w-sm">
              Café de especialidad, barra y cocina. Un espacio diseñado para disfrutar del auténtico café peruano en un ambiente cálido, minimalista y acogedor.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#BC1C19]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FCFBFB]/80">
                Café para Volar
              </span>
            </div>

            {/* Social Media Links */}
            <div className="pt-3 flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href="https://api.whatsapp.com/send?phone=51978800039"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar a Lynch Café por WhatsApp"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#FCFBFB]/75 hover:text-[#FCFBFB] hover:border-[#BC1C19] hover:bg-[#BC1C19]/10 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/lynchcafeparavolaroficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil oficial de Lynch Café en Instagram"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#FCFBFB]/75 hover:text-[#FCFBFB] hover:border-[#BC1C19] hover:bg-[#BC1C19]/10 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100064010743753#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil oficial de Lynch Café en Facebook"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#FCFBFB]/75 hover:text-[#FCFBFB] hover:border-[#BC1C19] hover:bg-[#BC1C19]/10 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Local CHACARILLA (lg: 3 cols) */}
          <div
            className={`lg:col-span-3 space-y-4 transform transition-all duration-700 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#BC1C19]">
              NUESTRO LOCAL
            </h3>

            <div className="space-y-3">
              <h4 className="text-[16px] sm:text-[17px] font-bold text-[#FCFBFB] tracking-wide">
                CHACARILLA
              </h4>

              {/* Address */}
              <div className="flex items-start gap-2.5 text-[13px] text-[#FCFBFB]/75 leading-snug">
                <svg
                  className="w-4 h-4 text-[#BC1C19] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Av. del Pinar 135<br />
                  Chacarilla – Surco
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5 text-[13px] text-[#FCFBFB]/75">
                <svg
                  className="w-4 h-4 text-[#BC1C19] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:978800039"
                  className="hover:text-[#FCFBFB] transition-colors underline-offset-4 hover:underline"
                >
                  978-800-039
                </a>
              </div>

              {/* Schedule */}
              <div className="flex items-start gap-2.5 text-[13px] text-[#FCFBFB]/75 pt-1">
                <svg
                  className="w-4 h-4 text-[#BC1C19] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Lun a Dom:<br />
                  <strong className="font-semibold text-[#FCFBFB]/90">7:30 am a 11:00 pm</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation Links (lg: 2 cols) */}
          <div
            className={`lg:col-span-2 space-y-4 transform transition-all duration-700 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#BC1C19]">
              SECCIONES
            </h3>

            <ul className="space-y-2.5">
              {mainNavLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[#FCFBFB]/70 hover:text-[#FCFBFB] transition-colors inline-block py-0.5 relative group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#BC1C19] group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Institutional Links (lg: 3 cols) */}
          <div
            className={`lg:col-span-3 space-y-4 transform transition-all duration-700 ease-out delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#BC1C19]">
              LEGAL & PRIVACIDAD
            </h3>

            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[12px] text-[#FCFBFB]/60 hover:text-[#FCFBFB]/90 transition-colors inline-block py-0.5 leading-snug"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar Separator */}
        <div
          className={`border-t border-white/10 pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[12px] text-[#FCFBFB]/50 font-normal transform transition-all duration-700 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p>
            Copyright © Lynch Café. Todos los Derechos Reservados.
          </p>

          <a
            href="#reclamaciones"
            className="inline-flex items-center gap-2 text-[#FCFBFB]/60 hover:text-[#FCFBFB] transition-colors group"
          >
            <svg
              className="w-4 h-4 text-[#BC1C19] group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span className="underline-offset-4 hover:underline">
              Libro de reclamaciones
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
