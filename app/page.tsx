import IntroLoader from "@/components/IntroLoader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NuestroCafe from "@/components/NuestroCafe";
import CartaPreview from "@/components/CartaPreview";
import NuestrosFavoritos from "@/components/NuestrosFavoritos";
import NuestrosAmbientes from "@/components/NuestrosAmbientes";
import HeroDespegar from "@/components/HeroDespegar";
import Encuentranos from "@/components/Encuentranos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#2B2725] text-[#FCFBFB]">
      {/* 1. Animation / Intro Loader with shape.svg */}
      <IntroLoader />

      {/* 2. Overlaid & Scrolled Header */}
      <Header />

      {/* 3. Hero / Inicio Section */}
      <Hero />

      {/* 4. Second Section: Nuestro Café */}
      <NuestroCafe />

      {/* 5. Third Section: Muestra de Carta (Carrusel Drag / Swipe) */}
      <CartaPreview />

      {/* 6. Fourth Section: Nuestros Favoritos (Fondo Blanco) */}
      <NuestrosFavoritos />

      {/* 7. Fifth Section: Nuestros Ambientes (Bento Grid + Modal Lightbox) */}
      <NuestrosAmbientes />

      {/* 8. Sixth Section: Un Café para Despegar (Fondo Rojo Lynch + Vaso Flotante & Splash) */}
      <HeroDespegar />

      {/* 9. Seventh Section: Encuéntranos (Tarjeta Asimétrica + Google Maps) */}
      <Encuentranos />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}
