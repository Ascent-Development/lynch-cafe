import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lynch Café | Café para Volar - Chacarilla, Surco",
  description: "Café de especialidad, barra y cocina en Chacarilla - Surco, Lima, Perú.",
  icons: {
    icon: "/shape.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={`${manrope.variable} h-full antialiased overflow-x-hidden max-w-full`}>
      <body className="min-h-full flex flex-col bg-black text-[#FCFBFB] selection:bg-[#BC1C19] selection:text-[#FCFBFB] overflow-x-hidden w-full max-w-full">
        {children}
      </body>
    </html>
  );
}

