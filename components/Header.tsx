"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  heroActive?: boolean;
}

function LynchLogo({ isScrolled }: { isScrolled: boolean }) {
  const letterColor = "#BC1C19";
  const subtextColor = isScrolled ? "#2A282A" : "#FCFBFB";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 182.24 56.49"
      className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
    >
      <g>
        {/* CAFÉ */}
        <path fill={subtextColor} className="transition-colors duration-500" d="M51.88,55.48a1.28,1.28,0,0,1-.69.19,1.31,1.31,0,0,1-.56-.12,1.5,1.5,0,0,1-.45-.32,1.54,1.54,0,0,1-.31-.47,1.47,1.47,0,0,1-.11-.57,1.49,1.49,0,0,1,.11-.58,1.54,1.54,0,0,1,.31-.47,1.48,1.48,0,0,1,.45-.32,1.35,1.35,0,0,1,1.23.06,1.52,1.52,0,0,1,.5.48l.56-.61a2.31,2.31,0,0,0-.75-.62,2.07,2.07,0,0,0-1-.24,2.18,2.18,0,0,0-1.59.67,2.4,2.4,0,0,0-.48,2.55,2.3,2.3,0,0,0,.48.73,2.26,2.26,0,0,0,.71.49,2.16,2.16,0,0,0,.88.18,2.06,2.06,0,0,0,1-.24,2.35,2.35,0,0,0,.77-.65L52.38,55A1.62,1.62,0,0,1,51.88,55.48Z"/>
        <path fill={subtextColor} className="transition-colors duration-500" d="M57.1,51.95l-2,4.46H56l.4-.89h2l.39.89h.89l-2-4.46Zm-.39,2.85.71-1.6.7,1.6Z"/>
        <polygon fill={subtextColor} className="transition-colors duration-500" points="62.24 56.41 63.04 56.41 63.04 54.44 64.99 54.44 64.99 53.73 63.04 53.73 63.04 52.7 65.02 52.7 65.02 51.96 62.24 51.96 62.24 56.41"/>
        <polygon fill={subtextColor} className="transition-colors duration-500" points="69.94 50.48 69.1 50.48 68.63 51.55 69.19 51.55 69.94 50.48"/>
        <polygon fill={subtextColor} className="transition-colors duration-500" points="67.64 56.41 70.42 56.41 70.42 55.66 68.44 55.66 68.44 54.43 70.39 54.43 70.39 53.73 68.44 53.73 68.44 52.67 70.42 52.67 70.42 51.96 67.64 51.96 67.64 56.41"/>
        
        {/* PARA */}
        <path fill={subtextColor} className="transition-colors duration-500" d="M79.44,52.38a1.42,1.42,0,0,0-.46-.31,1.39,1.39,0,0,0-.56-.11H76.91v4.46h.82V55h.7a1.4,1.4,0,0,0,1-.43,1.51,1.51,0,0,0,.31-.48,1.54,1.54,0,0,0,.11-.59,1.52,1.52,0,0,0-.11-.59A1.51,1.51,0,0,0,79.44,52.38ZM79,53.76a.88.88,0,0,1-.16.27.79.79,0,0,1-.25.19.69.69,0,0,1-.3.07h-.54V52.61h.54a.71.71,0,0,1,.3.07.81.81,0,0,1,.25.18.82.82,0,0,1,.16.26.85.85,0,0,1,.06.32A.87.87,0,0,1,79,53.76Z"/>
        <path fill={subtextColor} className="transition-colors duration-500" d="M83.45,51.95l-2,4.46h.89l.4-.89h2l.39.89h.89l-2-4.46Zm-.39,2.85.71-1.6.7,1.6Z"/>
        <path fill={subtextColor} className="transition-colors duration-500" d="M91.54,55.86l-.09-.27-.07-.22-.07-.2L91.25,55a1.12,1.12,0,0,0-.2-.35.78.78,0,0,0-.32-.23,1.06,1.06,0,0,0,.32-.18,1.33,1.33,0,0,0,.25-.28,1.36,1.36,0,0,0,.16-.34,1.28,1.28,0,0,0,.06-.38,1.37,1.37,0,0,0-.09-.51,1.27,1.27,0,0,0-.26-.41,1.18,1.18,0,0,0-.4-.27,1.26,1.26,0,0,0-.5-.1H88.6v4.46h.8V54.64h.3a.9.9,0,0,1,.33.06.7.7,0,0,1,.24.16,1,1,0,0,1,.17.24,1.71,1.71,0,0,1,.12.31l.3,1h.9a1.56,1.56,0,0,1-.11-.23C91.62,56.09,91.58,56,91.54,55.86Zm-.9-2.29a.65.65,0,0,1-.15.21.63.63,0,0,1-.22.14A.79.79,0,0,1,90,54H89.4V52.59H90a.7.7,0,0,1,.28.05.67.67,0,0,1,.22.15.71.71,0,0,1,.15.22.73.73,0,0,1,.06.28A.71.71,0,0,1,90.64,53.58Z"/>
        <path fill={subtextColor} className="transition-colors duration-500" d="M96,51.95l-2,4.46h.89l.39-.89h2l.39.89h.89l-2-4.46ZM95.6,54.8l.71-1.6.7,1.6Z"/>

        {/* VOLAR */}
        <polygon fill={subtextColor} className="transition-colors duration-500" points="106.54 55.08 105.45 51.95 104.55 51.95 106.18 56.41 106.92 56.41 108.52 51.95 107.62 51.95 106.54 55.08"/>
        <path fill={subtextColor} className="transition-colors duration-500" d="M114.48,52.54a2.23,2.23,0,0,0-.71-.49A2.17,2.17,0,0,0,112,52a2.25,2.25,0,0,0-.71.49,2.31,2.31,0,0,0-.48.74,2.43,2.43,0,0,0,0,1.81,2.3,2.3,0,0,0,.48.73,2.27,2.27,0,0,0,.71.49,2.14,2.14,0,0,0,1.72,0,2.28,2.28,0,0,0,.71-.49,2.31,2.31,0,0,0,.48-.74,2.43,2.43,0,0,0,0-1.81A2.36,2.36,0,0,0,114.48,52.54Zm-.27,2.22a1.52,1.52,0,0,1-.3.48,1.48,1.48,0,0,1-.45.32,1.28,1.28,0,0,1-.55.12,1.3,1.3,0,0,1-.55-.12,1.46,1.46,0,0,1-.45-.32,1.5,1.5,0,0,1-.3-.48,1.56,1.56,0,0,1,0-1.15,1.5,1.5,0,0,1,.3-.47,1.47,1.47,0,0,1,.45-.32,1.31,1.31,0,0,1,.55-.12,1.29,1.29,0,0,1,.55.12,1.49,1.49,0,0,1,.45.32,1.55,1.55,0,0,1,.3,1.63Z"/>
        <polygon fill={subtextColor} className="transition-colors duration-500" points="118.7 51.96 117.87 51.96 117.87 56.41 120.71 56.41 120.71 55.57 118.7 55.57 118.7 51.96"/>
        <path fill={subtextColor} className="transition-colors duration-500" d="M124.91,51.95l-2,4.46h.89l.39-.89h2l.39.89h.89l-2-4.46Zm-.39,2.85.71-1.6.7,1.6Z"/>
        <path fill={subtextColor} className="transition-colors duration-500" d="M133,55.86l-.09-.27-.07-.22-.07-.2L132.7,55a1.13,1.13,0,0,0-.2-.35.78.78,0,0,0-.32-.23,1.06,1.06,0,0,0,.32-.18,1.33,1.33,0,0,0,.25-.28,1.36,1.36,0,0,0,.16-.34,1.28,1.28,0,0,0,.06-.38,1.37,1.37,0,0,0-.09-.51,1.27,1.27,0,0,0-.26-.41,1.19,1.19,0,0,0-.4-.27,1.26,1.26,0,0,0-.5-.1h-1.66v4.46h.8V54.64h.3a.9.9,0,0,1,.33.06.7.7,0,0,1,.24.16,1,1,0,0,1,.17.24,1.71,1.71,0,0,1,.12.31l.3,1h.9a1.56,1.56,0,0,1-.11-.23C133.07,56.09,133,56,133,55.86Zm-.9-2.29a.65.65,0,0,1-.15.21.63.63,0,0,1-.22.14.79.79,0,0,1-.28,0h-.59V52.59h.59a.7.7,0,0,1,.28.05.67.67,0,0,1,.22.15.7.7,0,0,1,.21.51A.69.69,0,0,1,132.09,53.58Z"/>

        {/* L */}
        <polygon fill={letterColor} points="5.68 11.82 0 11.82 0 42.31 19.46 42.31 19.46 36.59 5.68 36.59 5.68 11.82"/>

        {/* N */}
        <polygon fill={letterColor} points="77.94 20.9 90.92 42.31 96.39 42.31 96.39 11.78 90.92 11.78 90.92 31.7 78.73 11.78 72.47 11.78 72.47 42.31 77.94 42.31 77.94 20.9"/>

        {/* C */}
        <path fill={letterColor} d="M135.16,36a8.71,8.71,0,0,1-4.71,1.28,9,9,0,0,1-3.79-.82,10.12,10.12,0,0,1-3.11-2.21,10.49,10.49,0,0,1-2.1-3.24,10,10,0,0,1-.77-3.91,10.14,10.14,0,0,1,.77-4,10.52,10.52,0,0,1,2.1-3.24,10.16,10.16,0,0,1,3.11-2.21,9.2,9.2,0,0,1,8.41.42,10.34,10.34,0,0,1,3.44,3.26l3.85-4.2a15.86,15.86,0,0,0-5.12-4.27,14.18,14.18,0,0,0-6.78-1.64,15,15,0,0,0-10.89,4.6,16.46,16.46,0,0,0-3.27,17.44,15.82,15.82,0,0,0,3.27,5,15.44,15.44,0,0,0,4.88,3.38,14.72,14.72,0,0,0,6,1.24,14.19,14.19,0,0,0,6.78-1.64,16.2,16.2,0,0,0,5.23-4.43l-3.89-4.23A11,11,0,0,1,135.16,36Z"/>

        {/* H */}
        <polygon fill={letterColor} points="176.66 11.82 176.66 23.92 165.34 23.92 165.34 11.82 159.76 11.82 159.76 42.31 165.34 42.31 165.34 28.8 176.66 28.8 176.66 42.31 182.24 42.31 182.24 11.82 176.66 11.82"/>

        {/* Y - WINGS EMBLEM (ROJO LYNCH #BC1C19) */}
        <path fill="#BC1C19" d="M54.2,7.66c-1.64.55-5.34,2.6-6.07,4.45L40.5,24.64,33,11.82h-.15c-1-1.77-4.38-3.65-5.94-4.17C22.56,6.2,17,4.23,13.66,0,12.6,6.49,22.11,12,26.08,13.19c-2,0-6.82-1.52-8.68-2.4,0,0,1.29,6,13.55,9.4-2.29.34-4.33-.33-6.64-.44,4.29,6,7.9,3.94,10.43,5.31l2.9,4.69V42.35H43.3V29.83l3.11-4.78c2.54-1.34,6.13.68,10.4-5.3-2.31.11-4.35.78-6.64.44,12.26-3.4,13.55-9.4,13.55-9.4-1.86.88-6.64,2.42-8.68,2.4C59,12,68.53,6.49,67.47,0,64.08,4.23,58.58,6.2,54.2,7.66Z"/>
      </g>
    </svg>
  );
}

export default function Header({ heroActive = true }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      setIsScrolled(currentScroll > 30);

      if (totalScroll > 0) {
        const progress = (currentScroll / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      } else {
        setScrollProgress(0);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("/#") && typeof window !== "undefined" && window.location.pathname === "/") {
      const hash = href.replace("/", "");
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLeft = [
    { label: "HOME", href: "/", isRed: isHome },
    { label: "NOSOTROS", href: "/#nosotros", isRed: false },
    { label: "CARTA", href: "/#carta", isRed: false, hasChevron: true },
  ];

  const navRight = [
    { label: "RESERVAS", href: "/reservas", isRed: pathname === "/reservas" },
    { label: "CONTÁCTANOS", href: "/#contactanos", isRed: false },
  ];

  const allNavLinks = [
    { label: "HOME", href: "/" },
    { label: "NOSOTROS", href: "/#nosotros" },
    { label: "CARTA", href: "/#carta" },
    { label: "RESERVAS", href: "/reservas" },
    { label: "CONTÁCTANOS", href: "/#contactanos" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-out ${
          isScrolled
            ? "bg-[#FCFBFB]/98 backdrop-blur-md border-b border-[#2A282A]/10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-3 sm:py-3.5"
            : mobileMenuOpen
            ? "bg-black/98 border-b border-[#FCFBFB]/10 py-5 sm:py-6"
            : "bg-gradient-to-b from-black/90 via-black/55 to-transparent pt-7 pb-5 sm:pt-9 sm:pb-7 md:pt-11 md:pb-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between">
          
          {/* ── DESKTOP LEFT MENU ── */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-7 flex-1 justify-end pr-6 lg:pr-10" aria-label="Navegación izquierda">
            {navLeft.map((link) => (
              <div key={link.label} className="flex items-center gap-4 lg:gap-7">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-[13px] lg:text-[14px] font-bold tracking-[0.16em] uppercase transition-colors duration-300 py-1 flex items-center gap-1 ${
                    link.isRed
                      ? "text-[#BC1C19]"
                      : isScrolled
                      ? "text-[#2A282A]/90 hover:text-[#BC1C19]"
                      : "text-[#FCFBFB] hover:text-[#BC1C19]"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.hasChevron && (
                    <svg className="w-3.5 h-3.5 -mt-0.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                <span className="text-[#BC1C19] text-xs select-none">•</span>
              </div>
            ))}
          </nav>

          {/* ── CENTER / MOBILE LEFT: PROMINENT LYNCH LOGO ── */}
          <div className="flex-shrink-0 flex items-center justify-start md:justify-center">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="group relative inline-flex items-center transition-transform duration-200 hover:scale-[1.03]"
              aria-label="Lynch Café - Inicio"
            >
              <div className="relative h-10 sm:h-12 md:h-13 w-34 sm:w-44 md:w-48 flex items-center justify-center">
                <LynchLogo isScrolled={isScrolled} />
              </div>
            </Link>
          </div>

          {/* ── DESKTOP RIGHT MENU ── */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-7 flex-1 justify-start pl-6 lg:pl-10" aria-label="Navegación derecha">
            <span className="text-[#BC1C19] text-xs select-none">•</span>
            {navRight.map((link, idx) => (
              <div key={link.label} className="flex items-center gap-4 lg:gap-7">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-[13px] lg:text-[14px] font-bold tracking-[0.16em] uppercase transition-colors duration-300 py-1 ${
                    link.isRed
                      ? "text-[#BC1C19]"
                      : isScrolled
                      ? "text-[#2A282A]/90 hover:text-[#BC1C19]"
                      : "text-[#FCFBFB] hover:text-[#BC1C19]"
                  }`}
                >
                  {link.label}
                </a>
                {idx < navRight.length - 1 && (
                  <span className="text-[#BC1C19] text-xs select-none">•</span>
                )}
              </div>
            ))}
          </nav>

          {/* ── MOBILE HAMBURGER BUTTON (Always fully visible on mobile) ── */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden relative z-50 flex flex-col justify-center items-center w-11 h-11 rounded-lg focus:outline-hidden cursor-pointer transition-colors bg-black/20 backdrop-blur-xs border border-white/10 ${
              isScrolled && !mobileMenuOpen ? "text-[#2A282A] border-[#2A282A]/20 bg-black/5" : "text-[#FCFBFB]"
            }`}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-4 relative flex flex-col justify-between pointer-events-none">
              <span
                className={`w-full h-0.5 transition-all duration-300 transform origin-left ${
                  isScrolled && !mobileMenuOpen ? "bg-[#2A282A]" : "bg-[#FCFBFB]"
                } ${
                  mobileMenuOpen ? "rotate-45 translate-x-0.5 translate-y-0.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 transition-all duration-200 ${
                  isScrolled && !mobileMenuOpen ? "bg-[#2A282A]" : "bg-[#FCFBFB]"
                } ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-0.5 transition-all duration-300 transform origin-left ${
                  isScrolled && !mobileMenuOpen ? "bg-[#2A282A]" : "bg-[#FCFBFB]"
                } ${
                  mobileMenuOpen ? "-rotate-45 translate-x-0.5 -translate-y-0.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* ── MOBILE DRAWER MENU DROPDOWN ── */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden z-50 ${
            isScrolled
              ? "bg-[#FCFBFB]/98 backdrop-blur-2xl border-b border-[#2A282A]/10 text-[#2A282A]"
              : "bg-[#181618]/98 backdrop-blur-2xl border-b border-[#FCFBFB]/10 text-[#FCFBFB]"
          } ${
            mobileMenuOpen ? "max-h-[460px] opacity-100 py-6" : "max-h-0 opacity-0 py-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col px-8 gap-3" aria-label="Menú móvil">
            {allNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[13px] font-bold tracking-[0.16em] uppercase transition-colors py-2.5 flex items-center justify-between ${
                  (link.href === "/" && isHome) || (link.href === "/reservas" && pathname === "/reservas")
                    ? "text-[#BC1C19]"
                    : isScrolled
                    ? "text-[#2A282A]/90 hover:text-[#BC1C19] border-b border-[#2A282A]/5"
                    : "text-[#FCFBFB]/90 hover:text-[#BC1C19] border-b border-[#FCFBFB]/5"
                }`}
              >
                <span>{link.label}</span>
                <span className="text-[#BC1C19] text-xs font-bold">→</span>
              </a>
            ))}

            {/* Mobile Social Links in Red */}
            <div className="flex items-center justify-center gap-6 pt-4 mt-2 border-t border-white/10">
              <a href="tel:978800039" aria-label="Llamar" className="text-[#BC1C19] p-2 hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/lynchcafeperu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#BC1C19] p-2 hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={3} strokeLinecap="round" />
                </svg>
              </a>
              <a href="https://www.facebook.com/lynchcafeperu/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#BC1C19] p-2 hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>

        {/* Thin Lynch Red Scroll Progress Line at Bottom of Header */}
        <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-transparent overflow-hidden pointer-events-none">
          <div
            className="h-full bg-[#BC1C19] transition-[width] duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Backdrop overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-xs z-40"
          aria-hidden="true"
        />
      )}
    </>
  );
}
