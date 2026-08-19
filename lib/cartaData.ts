export interface CustomOption {
  name: string;
  priceExtra?: number; // e.g. 6 for +S/ 6
}

export interface OptionGroup {
  title?: string;
  type?: "single" | "multiple" | "chips";
  items: CustomOption[];
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number | string; // e.g. 32 or "32" or "6.50 / 9.00"
  badge?: string; // e.g. "Para 2 personas", "Sin gluten", "Para compartir", "Con panela"
  options?: OptionGroup[];
  imageSlot?: string;
}

export interface ImageSlotMeta {
  path: string;
  alt: string;
  recommendedSize: string;
  aspectRatio: string;
}

export interface SubCategory {
  id: string;
  name: string;
  anchorId: string;
  description?: string;
  highlightBanner?: {
    title?: string;
    schedule?: string;
    badge?: string;
    includes?: string;
    exchange?: string;
    notes?: string[];
  };
  note?: string;
  imageSlot: ImageSlotMeta;
  items: MenuItem[];
}

export interface MacroSection {
  id: "desayunos" | "salados" | "postres" | "bebidas";
  name: string;
  shortName: string;
  badge?: string;
  bannerImageSlot?: ImageSlotMeta;
  subcategories: SubCategory[];
}

export const CARTA_DATA: {
  desayunos: MacroSection;
  salados?: MacroSection;
  postres?: MacroSection;
  bebidas?: MacroSection;
} = {
  desayunos: {
    id: "desayunos",
    name: "Desayunos",
    shortName: "DESAYUNOS",
    badge: "Todos los días 7:30 am a 11:30 am",
    bannerImageSlot: {
      path: "/images/carta/desayunos/banner-desayunos.jpg",
      alt: "Banner Desayunos Lynch Café",
      recommendedSize: "1600x600px",
      aspectRatio: "16:9",
    },
    subcategories: [
      {
        id: "desayunos-completos",
        name: "Desayunos Completos",
        anchorId: "desayunos-completos",
        highlightBanner: {
          title: "DESAYUNOS LYNCH",
          schedule: "Todos los días · 7:30 am a 11:30 am",
          badge: "No válido en feriados. No acumulable con descuentos.",
          includes: "INCLUYE JUGO Y CAFÉ AMERICANO",
          exchange: "Cambio: Cappuccino +S/ 2 / Latte +S/ 4",
        },
        imageSlot: {
          path: "/images/carta/desayunos/desayunos-completos.jpg",
          alt: "Desayunos Completos Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "huachano",
            name: "Huachano",
            description: "Pan ciabatta con salchicha huachana revuelta con huevo y queso cheddar.",
            price: 32,
            imageSlot: "/images/carta/desayunos/huachano.jpg",
          },
          {
            id: "chicharron-desayuno",
            name: "Chicharrón",
            description: "Pan francés con chicharrón de cerdo crocante, camote frito y sarsa criolla.",
            price: 36,
            imageSlot: "/images/carta/desayunos/chicharron.jpg",
          },
          {
            id: "lynch-desayuno",
            name: "Lynch",
            description: "Pancakes con miel de abeja o miel de maple, con dos huevos revueltos o fritos y tocino.",
            price: 34,
            imageSlot: "/images/carta/desayunos/lynch.jpg",
          },
          {
            id: "keto",
            name: "Keto",
            description: "Tres huevos fritos, dos tiras de tocino, palta, champiñones salteados y pan multigrano.",
            price: 36,
            badge: "Keto",
            imageSlot: "/images/carta/desayunos/keto.jpg",
          },
          {
            id: "duo-matutino",
            name: "Dúo Matutino",
            description: "Dos mini chicharrón, dos mini croissant de pollo, dos mini triple, dos jugos y dos cafés americano.",
            price: 55,
            badge: "Para 2 personas",
            imageSlot: "/images/carta/desayunos/duo-matutino.jpg",
          },
          {
            id: "triple-lynch-desayuno",
            name: "Triple Lynch",
            description: "½ triple Lynch, pan de molde a la plancha, palta, pollo con mayonesa y huevo.",
            price: 27,
            imageSlot: "/images/carta/desayunos/triple-lynch.jpg",
          },
          {
            id: "americano-desayuno",
            name: "Americano",
            description: "Dos huevos revueltos o fritos con tostadas.",
            price: 24,
            imageSlot: "/images/carta/desayunos/americano.jpg",
          },
          {
            id: "ligero",
            name: "Ligero",
            description: "Tosta de palta con dos huevos fritos o revueltos.",
            price: 36,
            imageSlot: "/images/carta/desayunos/ligero.jpg",
          },
        ],
      },
      {
        id: "tostas",
        name: "Tostas",
        anchorId: "tostas",
        imageSlot: {
          path: "/images/carta/desayunos/tostas.jpg",
          alt: "Tostas Artesanales Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "tosta-de-palta",
            name: "Tosta de Palta",
            description: "Pan multigrano, palta, mayonesa de la casa, mayonesa de apio y aceite de oliva.",
            price: 22,
            imageSlot: "/images/carta/desayunos/tosta-palta.jpg",
          },
          {
            id: "tosta-completa",
            name: "Tosta Completa",
            description: "Pan multigrano, palta, mayonesa de la casa, mayonesa de apio, aceite de oliva y huevos.",
            price: 27,
            imageSlot: "/images/carta/desayunos/tosta-completa.jpg",
          },
          {
            id: "tosta-de-salmon",
            name: "Tosta de Salmón",
            description: "Pan multigrano con palta guacamole, salmón y mayonesa agria.",
            price: 38,
            imageSlot: "/images/carta/desayunos/tosta-salmon.jpg",
          },
        ],
      },
      {
        id: "panaderia-despertar",
        name: "Panadería & Despertar",
        anchorId: "panaderia-despertar",
        imageSlot: {
          path: "/images/carta/desayunos/panaderia.jpg",
          alt: "Panadería y Horneados Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "empanada-de-carne",
            name: "Empanada de Carne",
            price: 9,
            imageSlot: "/images/carta/desayunos/empanada-carne.jpg",
          },
          {
            id: "empanada-de-pollo-portobello",
            name: "Empanada de Pollo con Portobello",
            price: 10,
            imageSlot: "/images/carta/desayunos/empanada-pollo-portobello.jpg",
          },
          {
            id: "quiche-de-poro-con-tocino",
            name: "Quiche de Poro con Tocino",
            price: 20,
            imageSlot: "/images/carta/desayunos/quiche-poro-tocino.jpg",
          },
          {
            id: "pastel-de-acelga",
            name: "Pastel de Acelga",
            price: 18,
            imageSlot: "/images/carta/desayunos/pastel-acelga.jpg",
          },
          {
            id: "avena-con-frutas",
            name: "Avena con Frutas de Estación",
            price: 18,
            imageSlot: "/images/carta/desayunos/avena-frutas.jpg",
          },
          {
            id: "croissant",
            name: "Croissant",
            price: 8,
            imageSlot: "/images/carta/desayunos/croissant.jpg",
          },
          {
            id: "pancitos-de-carretera",
            name: "Pancitos de Carretera",
            price: 8,
            options: [
              {
                title: "Variedades disponibles:",
                type: "chips",
                items: [
                  { name: "Queso paría" },
                  { name: "Jamón y queso" },
                  { name: "Cabanossi y orégano" },
                ],
              },
            ],
            imageSlot: "/images/carta/desayunos/pancitos-carretera.jpg",
          },
          {
            id: "parfait-con-granola",
            name: "Parfait con Granola",
            price: 15,
            imageSlot: "/images/carta/desayunos/parfait-granola.jpg",
          },
        ],
      },
      {
        id: "huevos-omelettes",
        name: "Huevos y Omelettes",
        anchorId: "huevos-omelettes",
        imageSlot: {
          path: "/images/carta/desayunos/huevos-omelettes.jpg",
          alt: "Huevos y Omelettes Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "omelette-fit",
            name: "Omelette Fit",
            description: "Tres claras y una yema.",
            price: 18,
            badge: "Fit",
            imageSlot: "/images/carta/desayunos/omelette-fit.jpg",
          },
          {
            id: "huevos-sin-tostadas",
            name: "Huevos sin Tostadas",
            description: "Tres unidades fritos, revueltos, duros o pasados.",
            price: 12,
            imageSlot: "/images/carta/desayunos/huevos-sin-tostadas.jpg",
          },
          {
            id: "huevos-con-tostadas",
            name: "Huevos con Tostadas",
            description: "Tres unidades fritos, revueltos, duros o pasados.",
            price: 15,
            imageSlot: "/images/carta/desayunos/huevos-con-tostadas.jpg",
          },
          {
            id: "huevos-rotos",
            name: "Huevos Rotos",
            description: "Papas rústicas, dos huevos fritos, tocino, alioli y mayonesa de ajíes peruanos.",
            price: 25,
            imageSlot: "/images/carta/desayunos/huevos-rotos.jpg",
          },
          {
            id: "chicken-pesto-omelette",
            name: "Chicken Pesto Omelette",
            description: "Omelette de tres huevos y queso coronado con láminas de pollo, salsa pesto y queso parmesano.",
            price: 29,
            imageSlot: "/images/carta/desayunos/chicken-pesto-omelette.jpg",
          },
          {
            id: "arma-tu-omelette",
            name: "Arma tu Omelette",
            description: "Acompañados de tostadas blancas o integrales.",
            price: 25,
            options: [
              {
                title: "Escoger hasta 3 toppings:",
                type: "chips",
                items: [
                  { name: "Tomate" },
                  { name: "Champiñones" },
                  { name: "Jamón" },
                  { name: "Queso" },
                  { name: "Tocino" },
                  { name: "Cebolla" },
                  { name: "Brócoli" },
                  { name: "Zanahoria" },
                ],
              },
            ],
            imageSlot: "/images/carta/desayunos/arma-tu-omelette.jpg",
          },
        ],
      },
      {
        id: "pancakes",
        name: "Pancakes",
        anchorId: "pancakes",
        imageSlot: {
          path: "/images/carta/desayunos/pancakes.jpg",
          alt: "Pancakes Lynch Café",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "pancakes-clasicos",
            name: "Pancakes",
            description: "Diez mini pancakes servidos con miel de abeja, miel de maple o crema de avellanas.",
            price: 19,
            imageSlot: "/images/carta/desayunos/pancakes-clasicos.jpg",
          },
          {
            id: "pancakes-con-frutas",
            name: "Pancakes con Frutas",
            description: "Seis mini pancakes servidos con plátano, arándanos y fresas. Acompañado con miel de maple.",
            price: 22,
            imageSlot: "/images/carta/desayunos/pancakes-frutas.jpg",
          },
          {
            id: "pancakes-avena-frutas",
            name: "Pancakes de Avena con Frutas",
            description: "Seis mini pancakes de avena servidos con plátano, arándanos, fresas y hojas de hierba buena, acompañados con miel de maple o crema de avellanas.",
            price: 22,
            badge: "Saludable",
            imageSlot: "/images/carta/desayunos/pancakes-avena.jpg",
          },
        ],
      },
      {
        id: "wraps",
        name: "Wraps",
        anchorId: "wraps",
        imageSlot: {
          path: "/images/carta/desayunos/wraps.jpg",
          alt: "Wraps Lynch Café",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "wrap-caprese",
            name: "Caprese",
            description: "Mozzarella gratinada sobre salsa de pomodoro casera, tomate cherry, salsa al pesto y reducción de balsámico.",
            price: 30,
            imageSlot: "/images/carta/desayunos/wrap-caprese.jpg",
          },
          {
            id: "wrap-salmon",
            name: "Salmón",
            description: "Lechuga americana, salmón, aliño, mayonesa de jalapeño, crema agria y palta, acompañado de chips de papas.",
            price: 39,
            imageSlot: "/images/carta/desayunos/wrap-salmon.jpg",
          },
          {
            id: "wrap-pollo",
            name: "Pollo",
            description: "Pollo marinado, palta, tocino, croutons, parmesano, lechuga y aliño césar, acompañado de chips de papas.",
            price: 34,
            imageSlot: "/images/carta/desayunos/wrap-pollo.jpg",
          },
        ],
      },
      {
        id: "burgers-desayuno",
        name: "Burgers",
        anchorId: "burgers-desayuno",
        imageSlot: {
          path: "/images/carta/desayunos/burgers.jpg",
          alt: "Hamburguesas Lynch Café",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "hamburguesa-de-la-casa",
            name: "Hamburguesa de la Casa",
            description: "Pan brioche acompañado de tomate, lechuga, queso cheddar, mayonesa de la casa y papas fritas.",
            price: 36,
            options: [
              {
                title: "Agrega a tu hamburguesa:",
                type: "chips",
                items: [
                  { name: "Bacon", priceExtra: 6 },
                  { name: "Huevo", priceExtra: 3 },
                  { name: "BBQ", priceExtra: 3 },
                ],
              },
            ],
            imageSlot: "/images/carta/desayunos/hamburguesa-casa.jpg",
          },
        ],
      },
    ],
  },
  salados: {
    id: "salados",
    name: "Salados",
    shortName: "SALADOS",
    bannerImageSlot: {
      path: "/images/carta/salados/banner-salados.jpg",
      alt: "Banner Platos Salados Lynch Café",
      recommendedSize: "1600x600px",
      aspectRatio: "16:9",
    },
    subcategories: [
      {
        id: "sandwiches",
        name: "Sándwiches",
        anchorId: "sandwiches",
        imageSlot: {
          path: "/images/carta/salados/sandwiches.jpg",
          alt: "Sándwiches Artesanales Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "triple-lynch-salados",
            name: "Triple Lynch",
            description: "Pan de molde a la plancha, palta, pollo con mayonesa y huevo.",
            price: 26,
            imageSlot: "/images/carta/salados/triple-lynch.jpg",
          },
          {
            id: "medio-triple-lynch",
            name: "½ Triple Lynch",
            description: "Pan de molde a la plancha, palta, pollo con mayonesa y huevo.",
            price: 16,
            imageSlot: "/images/carta/salados/medio-triple-lynch.jpg",
          },
          {
            id: "butifarra-lynch",
            name: "Butifarra Lynch",
            description: "Pan francés, jamón campestre, lechuga, sarsa criolla y mayonesa de la casa.",
            price: 24,
            imageSlot: "/images/carta/salados/butifarra.jpg",
          },
          {
            id: "croissant-pollo",
            name: "Croissant de Pollo",
            description: "Croissant, pollo deshilachado con apio, mayonesa y palta.",
            price: 24,
            imageSlot: "/images/carta/salados/croissant-pollo.jpg",
          },
          {
            id: "chicken-ciabatta",
            name: "Chicken Ciabatta",
            description: "Pan ciabatta relleno de pollo deshilachado con apio y mayonesa.",
            price: 24,
            imageSlot: "/images/carta/salados/chicken-ciabatta.jpg",
          },
          {
            id: "mixto-clasico",
            name: "Mixto Clásico",
            description: "Pan de molde, jamón inglés y queso edam.",
            price: 19,
            imageSlot: "/images/carta/salados/mixto-clasico.jpg",
          },
          {
            id: "mixto-completo",
            name: "Mixto Completo",
            description: "Pan de molde blanco o integral, jamón inglés, queso edam y huevo.",
            price: 22,
            imageSlot: "/images/carta/salados/mixto-completo.jpg",
          },
          {
            id: "salchicha-huachana-sandwich",
            name: "Salchicha Huachana",
            description: "Pan ciabatta con salchicha revuelta con huevo y queso cheddar.",
            price: 22,
            imageSlot: "/images/carta/salados/salchicha-huachana.jpg",
          },
          {
            id: "pechuga-pollo-sandwich",
            name: "Pechuga de Pollo",
            description: "Pan francés, pollo marinado en trozos, lechuga, tomate y mayonesa de la casa.",
            price: 25,
            imageSlot: "/images/carta/salados/pechuga-pollo.jpg",
          },
          {
            id: "chicharron-sandwich",
            name: "Chicharrón",
            description: "Pan francés, chicharrón de cerdo, camote frito, sarsa criolla y mayonesa de la casa.",
            price: 26,
            imageSlot: "/images/carta/salados/chicharron.jpg",
          },
          {
            id: "sandwich-crocante-cerdo",
            name: "Sándwich Crocante de Cerdo",
            description: "Pan francés, chicharrón crocante de cerdo, camote frito, sarsa criolla y mayonesa de la casa.",
            price: 24,
            imageSlot: "/images/carta/salados/crocante-cerdo.jpg",
          },
          {
            id: "club-lynch",
            name: "Club Lynch",
            description: "Para compartir: Pan de molde, jamón inglés, queso edam, salsa pomodoro casera, huevo frito, tocino, tomate, pollo marinado, lechuga y queso mozzarella, acompañado de papas fritas.",
            price: 52,
            badge: "Para compartir",
            imageSlot: "/images/carta/salados/club-lynch.jpg",
          },
        ],
      },
      {
        id: "entradas",
        name: "Entradas",
        anchorId: "entradas",
        imageSlot: {
          path: "/images/carta/salados/entradas.jpg",
          alt: "Entradas Gourmet Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "hummus-pita-chips",
            name: "Hummus con Pita Chips",
            description: "Servido con bastones de apio y zanahoria.",
            price: 25,
            imageSlot: "/images/carta/salados/hummus.jpg",
          },
          {
            id: "carpaccio-lomo",
            name: "Carpaccio de Lomo",
            description: "Delicado carpaccio de lomo fino con salsa de alcaparras y queso parmesano.",
            price: 45,
            imageSlot: "/images/carta/salados/carpaccio-lomo.jpg",
          },
          {
            id: "tiradito-salmon",
            name: "Tiradito de Salmón",
            description: "Láminas de salmón con salsa huancaína acevichada.",
            price: 45,
            imageSlot: "/images/carta/salados/tiradito-salmon.jpg",
          },
          {
            id: "tartar-salmon",
            name: "Tartar de Salmón",
            description: "Salmón en cubos, pico de gallo, alcaparras, culantro, sal de maras y toques de limón. Acompañado de palta y pita chips.",
            price: 45,
            imageSlot: "/images/carta/salados/tartar-salmon.jpg",
          },
          {
            id: "burrata-pesto",
            name: "Burrata Salsa Pesto",
            description: "Servida sobre stracciatella, salsa pesto con tomates y duraznos confitados.",
            price: 45,
            imageSlot: "/images/carta/salados/burrata-pesto.jpg",
          },
          {
            id: "burrata-jamon-serrano",
            name: "Burrata Jamón Serrano",
            description: "Servida sobre stracciatella con jamón serrano y mermelada de frutos rojos.",
            price: 49,
            imageSlot: "/images/carta/salados/burrata-serrano.jpg",
          },
        ],
      },
      {
        id: "piqueos",
        name: "Piqueos",
        anchorId: "piqueos",
        imageSlot: {
          path: "/images/carta/salados/piqueos.jpg",
          alt: "Piqueos para Compartir Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "rollitos-lomo",
            name: "Rollitos de Lomo",
            description: "Seis unidades. Relleno tradicional de lomo saltado acompañado de salsa de pimiento.",
            price: 32,
            badge: "6 unidades",
            imageSlot: "/images/carta/salados/rollitos-lomo.jpg",
          },
          {
            id: "tequenos-queso",
            name: "Tequeños de Queso",
            description: "Diez unidades. Rellenos de queso mozzarella, acompañados con guacamole.",
            price: 30,
            badge: "10 unidades",
            imageSlot: "/images/carta/salados/tequenos.jpg",
          },
          {
            id: "salchipapa-lynch",
            name: "Salchipapa Lynch",
            description: "Para compartir: Bandeja de papas fritas, frankfurter en láminas y tocino picado con salsa parrillera.",
            price: 45,
            badge: "Para compartir",
            imageSlot: "/images/carta/salados/salchipapa.jpg",
          },
          {
            id: "langostinos-panko",
            name: "Langostinos al Panko",
            description: "Seis unidades de crocante tempura con panko y salsa de maracuyá.",
            price: 35,
            badge: "6 unidades",
            imageSlot: "/images/carta/salados/langostinos-panko.jpg",
          },
          {
            id: "chicken-strips",
            name: "Chicken Strips",
            description: "Tiras de pollo apanado acompañados con papas fritas.",
            price: 35,
            imageSlot: "/images/carta/salados/chicken-strips.jpg",
          },
          {
            id: "alitas-crocantes",
            name: "Alitas Crocantes",
            description: "Ocho unidades de alitas crocantes servidas con una salsa a elección.",
            price: 34,
            badge: "8 unidades",
            options: [
              {
                title: "Salsa a elección:",
                type: "chips",
                items: [
                  { name: "Acevichada" },
                  { name: "Teriyaki" },
                  { name: "BBQ tradicional" },
                  { name: "BBQ picante" },
                  { name: "Maracuyá" },
                ],
              },
            ],
            imageSlot: "/images/carta/salados/alitas-crocantes.jpg",
          },
          {
            id: "sliders-hamburguesa",
            name: "Sliders Hamburguesa",
            description: "Tres mini hamburguesas de la casa, bacon y BBQ. Acompañado de porción de papas fritas.",
            price: 35,
            badge: "3 unidades",
            imageSlot: "/images/carta/salados/sliders-hamburguesa.jpg",
          },
        ],
      },
      {
        id: "bowls",
        name: "Bowls",
        anchorId: "bowls",
        imageSlot: {
          path: "/images/carta/salados/bowls.jpg",
          alt: "Bowls y Poke Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "poke-bowl-salmon",
            name: "Poke Bowl de Salmón",
            description: "Salmón fresco, palta, cebolla china, semilla de ajonjolí, col morada, zanahoria, tomate Cherry sobre una cama de arroz shari coronado con hilos crocantes.",
            price: 40,
            imageSlot: "/images/carta/salados/poke-salmon.jpg",
          },
          {
            id: "poke-bowl-quinua-salmon",
            name: "Poke Bowl de Quinua y Salmón",
            description: "Salmón fresco, quinua, palta, tomate cherry y kyuri con salsa acevichada.",
            price: 42,
            imageSlot: "/images/carta/salados/poke-quinua-salmon.jpg",
          },
          {
            id: "steak-bowl",
            name: "Steak Bowl",
            description: "Carne salteada con brócoli, champiñones, cebolla, tomate, pimientos, sobre arroz blanco y papitas al hilo.",
            price: 34,
            imageSlot: "/images/carta/salados/steak-bowl.jpg",
          },
          {
            id: "quinua-pollo-bowl",
            name: "Quinua y Pollo Bowl",
            description: "Chaufa de quinua con verduras salteadas, brócoli y pollo en trozos.",
            price: 35,
            imageSlot: "/images/carta/salados/quinua-pollo-bowl.jpg",
          },
          {
            id: "tex-mex-bowl",
            name: "Tex-Mex Bowl",
            description: "Pollo marinado, arroz blanco, frijoles negros, lechuga americana y tomates cherry.",
            price: 35,
            imageSlot: "/images/carta/salados/tex-mex-bowl.jpg",
          },
          {
            id: "chanchito-lynch-bowl",
            name: "Chanchito Lynch Bowl",
            description: "Chanchito agridulce, arroz blanco, pico de gallo, camote en cuadraditos, tomate en cuadraditos y palta en trozos.",
            price: 38,
            imageSlot: "/images/carta/salados/chanchito-bowl.jpg",
          },
        ],
      },
      {
        id: "ensaladas",
        name: "Ensaladas",
        anchorId: "ensaladas",
        highlightBanner: {
          title: "ESCOGE TU ALIÑO",
          includes: "Apio · Dos Mostazas · César · Italian Dressing · Teriyaki",
        },
        imageSlot: {
          path: "/images/carta/salados/ensaladas.jpg",
          alt: "Ensaladas Frescas Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "ensalada-cesar",
            name: "César",
            description: "Lechuga romana, croutons, queso parmesano y tocino.",
            price: 22,
            imageSlot: "/images/carta/salados/ensalada-cesar.jpg",
          },
          {
            id: "ensalada-cesar-pollo",
            name: "César con Pollo",
            description: "Lechuga romana, pollo a la plancha, croutons, queso parmesano y tocino.",
            price: 32,
            imageSlot: "/images/carta/salados/cesar-pollo.jpg",
          },
          {
            id: "ensalada-thai",
            name: "Thai",
            description: "Mix de lechugas, pollo crocante, zanahoria glaseada, pimiento morrón, brócoli, durazno, maní, hilos de wantán con aliño de salsa teriyaki y semillas de ajonjolí.",
            price: 35,
            imageSlot: "/images/carta/salados/ensalada-thai.jpg",
          },
          {
            id: "ensalada-lynch",
            name: "Lynch",
            description: "Mix de lechugas, jamón inglés, palta, granos de choclo, tocino, huevo duro, tomate y queso andino.",
            price: 28,
            options: [
              {
                title: "Adicional:",
                type: "chips",
                items: [
                  { name: "Agregar pollo", priceExtra: 12 },
                ],
              },
            ],
            imageSlot: "/images/carta/salados/ensalada-lynch.jpg",
          },
          {
            id: "ensalada-atun",
            name: "Atún",
            description: "Mix de lechugas, atún, aceitunas negras, palta, cebolla blanca y huevo duro.",
            price: 32,
            imageSlot: "/images/carta/salados/ensalada-atun.jpg",
          },
        ],
      },
      {
        id: "platos-criollitos",
        name: "Platos, Fondos & Criollitos",
        anchorId: "platos-criollitos",
        highlightBanner: {
          title: "GUARNICIONES ADICIONALES (+S/ 12)",
          includes: "Puré de papa · Verduras salteadas · Arroz blanco · Papas fritas · Ensalada fresca",
          exchange: "Cambia una guarnición por papas fritas clásicas +S/ 5 en fondos seleccionados",
        },
        imageSlot: {
          path: "/images/carta/salados/platos.jpg",
          alt: "Platos Criollos y Fondos Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "pollo-abuela",
            name: "Pollo de la Abuela",
            price: 35,
            imageSlot: "/images/carta/salados/pollo-abuela.jpg",
          },
          {
            id: "aji-gallina",
            name: "Ají de Gallina",
            price: 35,
            imageSlot: "/images/carta/salados/aji-gallina.jpg",
          },
          {
            id: "lomo-saltado",
            name: "Lomo Saltado",
            price: 52,
            imageSlot: "/images/carta/salados/lomo-saltado.jpg",
          },
          {
            id: "asado-pure",
            name: "Asado con Puré",
            price: 40,
            imageSlot: "/images/carta/salados/asado-pure.jpg",
          },
          {
            id: "hamburguesa-plato",
            name: "Hamburguesa al Plato",
            description: "Hamburguesa de la casa coronada con guacamole. Acompañada de mini ensalada César y papas rústicas.",
            price: 44,
            imageSlot: "/images/carta/salados/hamburguesa-plato.jpg",
          },
          {
            id: "chaufa-quinua",
            name: "Chaufa de Quinua",
            description: "Quinua roja, champiñones, brócoli, pimiento, zanahoria, huevo, cebolla china y hilos de wantán, salteado con aceite de ajonjolí.",
            price: 29,
            imageSlot: "/images/carta/salados/chaufa-quinua.jpg",
          },
          {
            id: "chaufa-lynch",
            name: "Chaufa Lynch",
            description: "Arroz salteado al wok, acompañado de chanchito agridulce y sarsa criolla.",
            price: 42,
            imageSlot: "/images/carta/salados/chaufa-lynch.jpg",
          },
          {
            id: "chaufa-pobre",
            name: "Chaufa a lo Pobre",
            description: "Arroz salteado al wok, acompañado de lomo fino, plátano bellaco, hilos de wantán y huevo frito.",
            price: 52,
            imageSlot: "/images/carta/salados/chaufa-pobre.jpg",
          },
          {
            id: "pechuga-plancha",
            name: "Pechuga a la Plancha",
            description: "Servido con arroz y ensalada fresca. Cambia una guarnición por papas fritas clásicas +S/ 5.",
            price: 32,
            imageSlot: "/images/carta/salados/pechuga-plancha.jpg",
          },
          {
            id: "milanesa-pollo",
            name: "Milanesa de Pollo",
            description: "Servido con arroz y ensalada fresca. Cambia una guarnición por papas fritas clásicas +S/ 5.",
            price: 35,
            imageSlot: "/images/carta/salados/milanesa-pollo.jpg",
          },
          {
            id: "apanado-carne",
            name: "Apanado de Carne",
            description: "Servido con arroz y ensalada fresca. Cambia una guarnición por papas fritas clásicas +S/ 5.",
            price: 39,
            imageSlot: "/images/carta/salados/apanado-carne.jpg",
          },
          {
            id: "salmon-plancha",
            name: "Salmón a la Plancha",
            description: "Acompañado de dos guarniciones a elección.",
            price: 65,
            imageSlot: "/images/carta/salados/salmon-plancha.jpg",
          },
          {
            id: "salmon-menier",
            name: "Salmón a la Menier",
            description: "Acompañado de dos guarniciones a elección.",
            price: 65,
            imageSlot: "/images/carta/salados/salmon-menier.jpg",
          },
        ],
      },
      {
        id: "pastas",
        name: "Pastas",
        anchorId: "pastas",
        imageSlot: {
          path: "/images/carta/salados/pastas.jpg",
          alt: "Pastas Artesanales Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "spaghetti-fetuccini-fusilli",
            name: "Spaghetti, Fetuccini o Fusilli",
            description: "Elige tu pasta con salsa Pesto, Boloñesa o Pomodoro (S/ 30) o salsa Alfredo (+S/ 3).",
            price: 30,
            options: [
              {
                title: "Salsas disponibles:",
                type: "chips",
                items: [
                  { name: "Pesto" },
                  { name: "Boloñesa" },
                  { name: "Pomodoro" },
                  { name: "Alfredo", priceExtra: 3 },
                ],
              },
            ],
            imageSlot: "/images/carta/salados/pasta-clasica.jpg",
          },
          {
            id: "spaghetti-bolognesa",
            name: "Spaghetti Bolognesa",
            price: 30,
            imageSlot: "/images/carta/salados/spaghetti-bolognesa.jpg",
          },
          {
            id: "fusilli-alfredo",
            name: "Fusilli a lo Alfredo",
            price: 33,
            imageSlot: "/images/carta/salados/fusilli-alfredo.jpg",
          },
          {
            id: "spaghetti-pesto-bistec",
            name: "Spaghetti en Salsa Pesto con Bistec Apanado",
            price: 49,
            imageSlot: "/images/carta/salados/spaghetti-pesto-apanado.jpg",
          },
          {
            id: "ravioles-pesto",
            name: "Ravioles en Salsa Pesto",
            description: "Ravioles rellenos de queso ricotta, servidos en salsa pesto.",
            price: 38,
            imageSlot: "/images/carta/salados/ravioles-pesto.jpg",
          },
          {
            id: "ravioles-asado",
            name: "Ravioles en Salsa de Asado",
            description: "Ravioles rellenos de carne, servidos en salsa de asado de la casa.",
            price: 39,
            imageSlot: "/images/carta/salados/ravioles-asado.jpg",
          },
          {
            id: "lasagna-bolognesa",
            name: "Lasagna Bolognesa",
            price: 42,
            imageSlot: "/images/carta/salados/lasagna-bolognesa.jpg",
          },
        ],
      },
      {
        id: "pizzas",
        name: "Pizzas",
        anchorId: "pizzas",
        imageSlot: {
          path: "/images/carta/salados/pizzas.jpg",
          alt: "Pizzas Artesanales Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "pizza-veggie",
            name: "Pizza Veggie",
            description: "Aceitunas verdes y negras, pimientos braseados y aros de cebolla.",
            price: 32,
            imageSlot: "/images/carta/salados/pizza-veggie.jpg",
          },
          {
            id: "pizza-margarita",
            name: "Pizza Margarita",
            price: 30,
            imageSlot: "/images/carta/salados/pizza-margarita.jpg",
          },
          {
            id: "pizza-jamon-funghi",
            name: "Pizza Jamón y Funghi",
            price: 38,
            imageSlot: "/images/carta/salados/pizza-jamon-funghi.jpg",
          },
          {
            id: "pizza-hawaiana",
            name: "Pizza Hawaiana",
            description: "Jamón inglés, piña braceada en miel de especias, mozzarella y salsa de tomate.",
            price: 34,
            imageSlot: "/images/carta/salados/pizza-hawaiana.jpg",
          },
        ],
      },
    ],
  },
  postres: {
    id: "postres",
    name: "Postres",
    shortName: "POSTRES",
    bannerImageSlot: {
      path: "/images/carta/postres/banner-postres.jpg",
      alt: "Banner Postres Lynch Café",
      recommendedSize: "1600x600px",
      aspectRatio: "16:9",
    },
    subcategories: [
      {
        id: "dulces",
        name: "Dulces & Horneados",
        anchorId: "dulces",
        imageSlot: {
          path: "/images/carta/postres/dulces.jpg",
          alt: "Dulces y Horneados Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "alfajor",
            name: "Alfajor",
            price: 7,
            imageSlot: "/images/carta/postres/alfajor.jpg",
          },
          {
            id: "medialuna-argentina",
            name: "Medialuna Argentina",
            price: 8,
            imageSlot: "/images/carta/postres/medialuna-argentina.jpg",
          },
          {
            id: "muffin-limon-blueberries",
            name: "Muffin de Limón con Blueberries",
            price: 9,
            imageSlot: "/images/carta/postres/muffin-limon.jpg",
          },
          {
            id: "medialuna-manjar",
            name: "Medialuna con Manjar",
            price: 9,
            imageSlot: "/images/carta/postres/medialuna-manjar.jpg",
          },
          {
            id: "churro-artesanal",
            name: "Churro Artesanal",
            price: 8,
            imageSlot: "/images/carta/postres/churro-artesanal.jpg",
          },
          {
            id: "brownie-fudge",
            name: "Brownie con Fudge",
            price: 10,
            imageSlot: "/images/carta/postres/brownie-fudge.jpg",
          },
        ],
      },
      {
        id: "postres-especiales",
        name: "Postres Especiales",
        anchorId: "postres-especiales",
        imageSlot: {
          path: "/images/carta/postres/postres-especiales.jpg",
          alt: "Postres Especiales Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "tiramisu",
            name: "Tiramisú",
            price: 18,
            imageSlot: "/images/carta/postres/tiramisu.jpg",
          },
          {
            id: "tiramisu-pistacho",
            name: "Tiramisú de Pistacho",
            price: 22,
            imageSlot: "/images/carta/postres/tiramisu-pistacho.jpg",
          },
          {
            id: "mousse-chocolate",
            name: "Mousse de Chocolate",
            price: 18,
            imageSlot: "/images/carta/postres/mousse-chocolate.jpg",
          },
          {
            id: "grand-volcan",
            name: "Grand Volcán",
            description: "Keke de chocolate con centro líquido caliente, pecanas caramelizadas y fresas frescas. Servido en ramekin.",
            price: 25,
            imageSlot: "/images/carta/postres/grand-volcan.jpg",
          },
          {
            id: "mousse-frutos-rojos",
            name: "Mousse de Frutos Rojos",
            description: "Mousse de frutos rojos con centro de coulis de fresa, arándanos y frambuesas, coronado con chantilly y frutas de estación.",
            price: 18,
            imageSlot: "/images/carta/postres/mousse-frutos-rojos.jpg",
          },
          {
            id: "cheesecake-maracumango",
            name: "Cheesecake de Maracumango",
            description: "Cheesecake horneado con base de galleta de vainilla, topping de chantilly, mango fresco y sirope de maracuyá.",
            price: 18,
            imageSlot: "/images/carta/postres/cheesecake-maracumango.jpg",
          },
          {
            id: "tartaleta-frutos-rojos",
            name: "Tartaleta de Frutos Rojos",
            description: "Tartaleta con ganache de frutos rojos, topping de chantilly y frutas frescas.",
            price: 18,
            imageSlot: "/images/carta/postres/tartaleta-frutos-rojos.jpg",
          },
        ],
      },
      {
        id: "postres-sin-azucar",
        name: "Postres Sin Azúcar & Saludables",
        anchorId: "postres-sin-azucar",
        imageSlot: {
          path: "/images/carta/postres/postres-sin-azucar.jpg",
          alt: "Postres Saludables Sin Azúcar Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "tres-leches-sin-azucar",
            name: "Tres Leches Sin Azúcar",
            description: "Bizcocho de vainilla sin gluten embebido en mezcla de tres leches sin lactosa y sin azúcar, con topping de chantilly, canela y frutas frescas.",
            price: 16,
            badge: "Sin Azúcar · Sin Gluten",
            imageSlot: "/images/carta/postres/tres-leches-sin-azucar.jpg",
          },
          {
            id: "keke-chocolate-panela",
            name: "Keke de Chocolate",
            description: "Preparado con panela orgánica.",
            price: 12,
            badge: "Con Panela",
            imageSlot: "/images/carta/postres/keke-chocolate.jpg",
          },
          {
            id: "keke-zanahoria-panela",
            name: "Keke de Zanahoria",
            description: "Preparado con panela orgánica.",
            price: 13,
            badge: "Con Panela",
            imageSlot: "/images/carta/postres/keke-zanahoria.jpg",
          },
          {
            id: "muffin-proteico-manzana",
            name: "Muffin Proteico de Manzana",
            description: "Elaborado sin gluten.",
            price: 15,
            badge: "Proteico · Sin Gluten",
            imageSlot: "/images/carta/postres/muffin-manzana.jpg",
          },
          {
            id: "muffin-proteico-chocolate",
            name: "Muffin Proteico de Chocolate",
            description: "Elaborado sin gluten.",
            price: 15,
            badge: "Proteico · Sin Gluten",
            imageSlot: "/images/carta/postres/muffin-chocolate.jpg",
          },
        ],
      },
      {
        id: "postres-artesanales",
        name: "Postres Artesanales & Cuchareables",
        anchorId: "postres-artesanales",
        imageSlot: {
          path: "/images/carta/postres/postres-artesanales.jpg",
          alt: "Postres Artesanales Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "crema-volteada",
            name: "Crema Volteada",
            price: 14,
            imageSlot: "/images/carta/postres/crema-volteada.jpg",
          },
          {
            id: "pie-de-limon",
            name: "Pie de Limón",
            price: 16,
            imageSlot: "/images/carta/postres/pie-limon.jpg",
          },
          {
            id: "pie-de-manzana",
            name: "Pie de Manzana",
            price: 16,
            imageSlot: "/images/carta/postres/pie-manzana.jpg",
          },
          {
            id: "carrot-cake-frosting",
            name: "Carrot Cake con Frosting",
            price: 16,
            imageSlot: "/images/carta/postres/carrot-cake.jpg",
          },
          {
            id: "chocolynch",
            name: "Chocolynch",
            price: 16,
            imageSlot: "/images/carta/postres/chocolynch.jpg",
          },
          {
            id: "cheesecake-frutos-rojos",
            name: "Cheesecake de Frutos Rojos",
            price: 16,
            imageSlot: "/images/carta/postres/cheesecake-frutos-rojos.jpg",
          },
          {
            id: "cheesecake-avellanas-brownie",
            name: "Cheesecake de Crema de Avellanas y Brownie",
            price: 16,
            imageSlot: "/images/carta/postres/cheesecake-avellanas.jpg",
          },
          {
            id: "chocolucuma",
            name: "Chocolúcuma",
            price: 16,
            imageSlot: "/images/carta/postres/chocolucuma.jpg",
          },
        ],
      },
      {
        id: "gelato",
        name: "Gelato Artesanal",
        anchorId: "gelato",
        highlightBanner: {
          title: "GELATO EN COPA",
          includes: "Helado artesanal servido en copa, coronado con barquillo.",
          notes: ["Sabores: Stracciatella y Vainilla"],
        },
        imageSlot: {
          path: "/images/carta/postres/gelato.jpg",
          alt: "Gelato Artesanal Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "gelato-1-bola",
            name: "Gelato 1 Bola",
            description: "Servido en copa con barquillo. Sabores: Stracciatella o Vainilla.",
            price: 14,
            imageSlot: "/images/carta/postres/gelato-1-bola.jpg",
          },
          {
            id: "gelato-2-bolas",
            name: "Gelato 2 Bolas",
            description: "Servido en copa con barquillo. Sabores: Stracciatella y/o Vainilla.",
            price: 20,
            imageSlot: "/images/carta/postres/gelato-2-bolas.jpg",
          },
        ],
      },
      {
        id: "petit",
        name: "Petit",
        anchorId: "petit",
        imageSlot: {
          path: "/images/carta/postres/petit.jpg",
          alt: "Petit Postres Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "mini-alfajor",
            name: "Mini Alfajor",
            price: 3,
            imageSlot: "/images/carta/postres/mini-alfajor.jpg",
          },
          {
            id: "mini-brownie",
            name: "Mini Brownie",
            price: 3,
            imageSlot: "/images/carta/postres/mini-brownie.jpg",
          },
          {
            id: "mini-cuchareable",
            name: "Mini Cuchareable",
            price: 4,
            imageSlot: "/images/carta/postres/mini-cuchareable.jpg",
          },
        ],
      },
    ],
  },
  bebidas: {
    id: "bebidas",
    name: "Bebidas",
    shortName: "BEBIDAS",
    bannerImageSlot: {
      path: "/images/carta/bebidas/banner-bebidas.jpg",
      alt: "Banner Bebidas y Cafés Lynch",
      recommendedSize: "1600x600px",
      aspectRatio: "16:9",
    },
    subcategories: [
      {
        id: "metodos-artesanales",
        name: "Café Lynch · Métodos Artesanales",
        anchorId: "metodos-artesanales",
        imageSlot: {
          path: "/images/carta/bebidas/metodos-artesanales.jpg",
          alt: "Métodos Artesanales de Café Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "chemex",
            name: "Chemex",
            description: "Infusión por goteo famosa por su sabor excepcionalmente limpio, ligero y aromático, libre de sedimentos y amargor.",
            price: 14,
            imageSlot: "/images/carta/bebidas/chemex.jpg",
          },
          {
            id: "v60",
            name: "V60",
            description: "Método japonés de goteo manual de 60º con estrías espirales, perfecto para resaltar notas florales, frutales y acidez en cafés de especialidad.",
            price: 14,
            imageSlot: "/images/carta/bebidas/v60.jpg",
          },
          {
            id: "prensa-francesa",
            name: "Prensa Francesa",
            description: "Infusión de cuerpo completo, densa y con gran intensidad.",
            price: 14,
            imageSlot: "/images/carta/bebidas/prensa-francesa.jpg",
          },
        ],
      },
      {
        id: "cafes-clasicos",
        name: "Cafés Clásicos",
        anchorId: "cafes-clasicos",
        highlightBanner: {
          title: "PERSONALIZA TU CAFÉ",
          includes: "Descafeinado +S/ 2 · Pídelo Iced +S/ 3 · Leche Vegetal +S/ 3",
        },
        imageSlot: {
          path: "/images/carta/bebidas/cafes-clasicos.jpg",
          alt: "Cafés Clásicos de Especialidad Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "espresso",
            name: "Espresso",
            price: 8,
            imageSlot: "/images/carta/bebidas/espresso.jpg",
          },
          {
            id: "americano",
            name: "Americano",
            price: 9,
            imageSlot: "/images/carta/bebidas/americano.jpg",
          },
          {
            id: "americano-lynch",
            name: "Americano Lynch",
            price: 9,
            imageSlot: "/images/carta/bebidas/americano-lynch.jpg",
          },
          {
            id: "cortado",
            name: "Cortado",
            price: 10,
            imageSlot: "/images/carta/bebidas/cortado.jpg",
          },
          {
            id: "macchiato",
            name: "Macchiato",
            price: 10,
            imageSlot: "/images/carta/bebidas/macchiato.jpg",
          },
          {
            id: "latte",
            name: "Latte",
            price: 12,
            imageSlot: "/images/carta/bebidas/latte.jpg",
          },
          {
            id: "flat-white",
            name: "Flat White",
            price: 10,
            imageSlot: "/images/carta/bebidas/flat-white.jpg",
          },
          {
            id: "cappuccino",
            name: "Cappuccino",
            price: 10,
            imageSlot: "/images/carta/bebidas/cappuccino.jpg",
          },
          {
            id: "mocca",
            name: "Mocca",
            price: 14,
            imageSlot: "/images/carta/bebidas/mocca.jpg",
          },
          {
            id: "cinnamon-cappuccino",
            name: "Cinnamon Cappuccino",
            price: 14,
            imageSlot: "/images/carta/bebidas/cinnamon-cappuccino.jpg",
          },
          {
            id: "affogato",
            name: "Affogato",
            description: "Espresso y helado de vainilla o chocolate.",
            price: 14,
            imageSlot: "/images/carta/bebidas/affogato.jpg",
          },
          {
            id: "frappuccino",
            name: "Frappuccino",
            description: "Dark chocolate, caramelo o cinnamon.",
            price: 15,
            options: [
              {
                title: "Sabores & Opciones:",
                type: "chips",
                items: [
                  { name: "Dark chocolate" },
                  { name: "Caramelo" },
                  { name: "Cinnamon" },
                  { name: "Proteico", priceExtra: 9 },
                ],
              },
            ],
            imageSlot: "/images/carta/bebidas/frappuccino.jpg",
          },
        ],
      },
      {
        id: "cold-brew",
        name: "Cold Brew",
        anchorId: "cold-brew",
        imageSlot: {
          path: "/images/carta/bebidas/cold-brew.jpg",
          alt: "Cold Brew Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "cold-brew-original",
            name: "Original",
            price: 12,
            imageSlot: "/images/carta/bebidas/cold-brew-original.jpg",
          },
          {
            id: "cold-brew-naranja",
            name: "Naranja",
            price: 14,
            imageSlot: "/images/carta/bebidas/cold-brew-naranja.jpg",
          },
          {
            id: "cold-brew-latte",
            name: "Latte",
            price: 14,
            imageSlot: "/images/carta/bebidas/cold-brew-latte.jpg",
          },
          {
            id: "cold-brew-frutos-rojos",
            name: "Frutos Rojos",
            price: 14,
            imageSlot: "/images/carta/bebidas/cold-brew-frutos-rojos.jpg",
          },
        ],
      },
      {
        id: "especiales-chocolate",
        name: "Especiales de Chocolate",
        anchorId: "especiales-chocolate",
        imageSlot: {
          path: "/images/carta/bebidas/especiales-chocolate.jpg",
          alt: "Chocolates Especiales Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "chocolate-caliente",
            name: "Chocolate Caliente",
            price: 12,
            imageSlot: "/images/carta/bebidas/chocolate-caliente.jpg",
          },
          {
            id: "iced-chocolate",
            name: "Iced Chocolate",
            price: 14,
            imageSlot: "/images/carta/bebidas/iced-chocolate.jpg",
          },
          {
            id: "mocca-menta",
            name: "Mocca Menta",
            price: 18,
            imageSlot: "/images/carta/bebidas/mocca-menta.jpg",
          },
          {
            id: "chocolate-glaseado-nyc",
            name: "Chocolate Glaseado NYC",
            description: "Chocolate caliente, coronado con marshmallow flameado y una bola de helado de vainilla.",
            price: 20,
            imageSlot: "/images/carta/bebidas/chocolate-nyc.jpg",
          },
          {
            id: "chocolate-lynch",
            name: "Chocolate Lynch",
            description: "Chocolate caliente coronado con crema chantilly, marshmallow y galleta oreo.",
            price: 16,
            imageSlot: "/images/carta/bebidas/chocolate-lynch.jpg",
          },
        ],
      },
      {
        id: "experiencias-lynch",
        name: "Experiencias Lynch",
        anchorId: "experiencias-lynch",
        imageSlot: {
          path: "/images/carta/bebidas/experiencias-lynch.jpg",
          alt: "Experiencias de Café Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "irish-coffee",
            name: "Irish Coffee",
            description: "Mezcla de café caliente y whisky, coronado con crema de chantilly.",
            price: 33,
            imageSlot: "/images/carta/bebidas/irish-coffee.jpg",
          },
          {
            id: "selfieccino",
            name: "Selfieccino",
            description: "Cappuccino con crema chantilly y tu foto favorita impresa sobre la espuma.",
            price: 18,
            imageSlot: "/images/carta/bebidas/selfieccino.jpg",
          },
          {
            id: "cappuccino-hazelnut",
            name: "Cappuccino Hazelnut",
            description: "Cappuccino servido en una taza untada de crema de avellana.",
            price: 15,
            imageSlot: "/images/carta/bebidas/cappuccino-hazelnut.jpg",
          },
          {
            id: "cappuccino-creme-brulee",
            name: "Cappuccino Crème Brûlée",
            price: 15,
            imageSlot: "/images/carta/bebidas/cappuccino-creme-brulee.jpg",
          },
        ],
      },
      {
        id: "infusiones",
        name: "Infusiones",
        anchorId: "infusiones",
        imageSlot: {
          path: "/images/carta/bebidas/infusiones.jpg",
          alt: "Infusiones y Tés Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "berry-berry",
            name: "Berry Berry",
            description: "Flor de jamaica, zarzamoras y pasas.",
            price: 8,
            imageSlot: "/images/carta/bebidas/berry-berry.jpg",
          },
          {
            id: "casablanca",
            name: "Casablanca",
            description: "Pétalos de hibiscus, rose hips, manzana, zarzamoras y fresas.",
            price: 8,
            imageSlot: "/images/carta/bebidas/casablanca.jpg",
          },
          {
            id: "hierba-luisa",
            name: "Hierba Luisa",
            price: 8,
            imageSlot: "/images/carta/bebidas/hierba-luisa.jpg",
          },
          {
            id: "indian-chai",
            name: "Indian Chai",
            description: "Té negro, cardamomo, jengibre, canela, clavo de olor, anís estrella, pimienta negra, pimienta rosa e hinojo.",
            price: 8,
            imageSlot: "/images/carta/bebidas/indian-chai.jpg",
          },
          {
            id: "bora-bora",
            name: "Bora Bora",
            description: "Té negro, pétalos de flor de Jamaica, cascarilla de rosa mosqueta, manzana, zarzamoras y fresas.",
            price: 8,
            imageSlot: "/images/carta/bebidas/bora-bora.jpg",
          },
          {
            id: "dulce-atardecer",
            name: "Dulce Atardecer",
            description: "Anís, hinojo y canela.",
            price: 8,
            imageSlot: "/images/carta/bebidas/dulce-atardecer.jpg",
          },
          {
            id: "sunny-day",
            name: "Sunny Day",
            description: "Manzanilla, aciano, hierba luisa y menta.",
            price: 8,
            imageSlot: "/images/carta/bebidas/sunny-day.jpg",
          },
        ],
      },
      {
        id: "bebidas-refrescos",
        name: "Bebidas & Refrescos",
        anchorId: "bebidas-refrescos",
        imageSlot: {
          path: "/images/carta/bebidas/bebidas.jpg",
          alt: "Bebidas y Refrescos Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "agua-munay",
            name: "Agua Munay",
            description: "Con o sin gas. Envase retornable.",
            price: "6.50 / 9.00",
            options: [
              {
                title: "Tamaños:",
                type: "chips",
                items: [
                  { name: "500ml: S/ 6.50" },
                  { name: "700ml: S/ 9.00" },
                ],
              },
            ],
            imageSlot: "/images/carta/bebidas/agua-munay.jpg",
          },
          {
            id: "gaseosa-personal",
            name: "Gaseosa Personal",
            price: 7,
            imageSlot: "/images/carta/bebidas/gaseosa.jpg",
          },
          {
            id: "limonada",
            name: "Limonada",
            price: 12,
            options: [
              {
                title: "Variación:",
                type: "chips",
                items: [
                  { name: "Clásica" },
                  { name: "Pídela Frozen", priceExtra: 3 },
                ],
              },
            ],
            imageSlot: "/images/carta/bebidas/limonada.jpg",
          },
          {
            id: "limonada-hierba-luisa",
            name: "Limonada con Hierba Luisa",
            price: 14,
            options: [
              {
                title: "Variación:",
                type: "chips",
                items: [
                  { name: "Clásica" },
                  { name: "Pídela Frozen", priceExtra: 3 },
                ],
              },
            ],
            imageSlot: "/images/carta/bebidas/limonada-hierba-luisa.jpg",
          },
          {
            id: "limonada-frozen",
            name: "Limonada Frozen",
            price: 15,
            imageSlot: "/images/carta/bebidas/limonada-frozen.jpg",
          },
          {
            id: "chicha",
            name: "Chicha",
            price: 13,
            options: [
              {
                title: "Variación:",
                type: "chips",
                items: [
                  { name: "Clásica" },
                  { name: "Pídela Frozen", priceExtra: 3 },
                ],
              },
            ],
            imageSlot: "/images/carta/bebidas/chicha.jpg",
          },
        ],
      },
      {
        id: "sparkling-soda",
        name: "Sparkling Soda",
        anchorId: "sparkling-soda",
        highlightBanner: {
          title: "SPARKLING SODA",
          includes: "Agua gasificada infusionada con frutas naturales.",
        },
        imageSlot: {
          path: "/images/carta/bebidas/sparkling-soda.jpg",
          alt: "Sparkling Soda Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "sparkling-coco-pina-naranja",
            name: "Coco, Piña y Naranja",
            price: 15,
            imageSlot: "/images/carta/bebidas/sparkling-coco.jpg",
          },
          {
            id: "sparkling-maracuya-naranja",
            name: "Maracuyá y Naranja",
            price: 15,
            imageSlot: "/images/carta/bebidas/sparkling-maracuya.jpg",
          },
          {
            id: "sparkling-naranja-frutos-rojos",
            name: "Naranja y Frutos Rojos",
            price: 15,
            imageSlot: "/images/carta/bebidas/sparkling-naranja.jpg",
          },
          {
            id: "sparkling-menta-hierba-luisa-limon",
            name: "Menta, Hierba Luisa y Limón",
            price: 15,
            imageSlot: "/images/carta/bebidas/sparkling-menta.jpg",
          },
        ],
      },
      {
        id: "smoothies",
        name: "Smoothies",
        anchorId: "smoothies",
        imageSlot: {
          path: "/images/carta/bebidas/smoothies.jpg",
          alt: "Smoothies Naturales Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "smoothie-fresa",
            name: "Fresa",
            price: 14,
            imageSlot: "/images/carta/bebidas/smoothie-fresa.jpg",
          },
          {
            id: "smoothie-frutos-rojos",
            name: "Frutos Rojos",
            price: 14,
            imageSlot: "/images/carta/bebidas/smoothie-frutos-rojos.jpg",
          },
          {
            id: "smoothie-maracuya",
            name: "Maracuyá",
            price: 14,
            imageSlot: "/images/carta/bebidas/smoothie-maracuya.jpg",
          },
        ],
      },
      {
        id: "matcha",
        name: "Matcha",
        anchorId: "matcha",
        imageSlot: {
          path: "/images/carta/bebidas/matcha.jpg",
          alt: "Matcha de Especialidad Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "matcha-latte",
            name: "Matcha Latte",
            price: 16,
            imageSlot: "/images/carta/bebidas/matcha-latte.jpg",
          },
          {
            id: "iced-matcha",
            name: "Iced Matcha",
            price: 17,
            imageSlot: "/images/carta/bebidas/iced-matcha.jpg",
          },
          {
            id: "strawberry-matcha",
            name: "Strawberry Matcha",
            price: 19,
            imageSlot: "/images/carta/bebidas/strawberry-matcha.jpg",
          },
        ],
      },
      {
        id: "jugos",
        name: "Jugos Naturales",
        anchorId: "jugos",
        imageSlot: {
          path: "/images/carta/bebidas/jugos.jpg",
          alt: "Jugos Naturales Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "jugo-verde",
            name: "Jugo Verde",
            description: "Zanahoria, apio, naranja y manzana verde.",
            price: 14,
            imageSlot: "/images/carta/bebidas/jugo-verde.jpg",
          },
          {
            id: "jugo-maracuya",
            name: "Maracuyá",
            price: 12,
            imageSlot: "/images/carta/bebidas/jugo-maracuya.jpg",
          },
          {
            id: "jugo-papaya",
            name: "Papaya",
            price: 12,
            imageSlot: "/images/carta/bebidas/jugo-papaya.jpg",
          },
          {
            id: "jugo-pina",
            name: "Piña",
            price: 12,
            imageSlot: "/images/carta/bebidas/jugo-pina.jpg",
          },
          {
            id: "jugo-naranja",
            name: "Naranja",
            price: 13,
            imageSlot: "/images/carta/bebidas/jugo-naranja.jpg",
          },
          {
            id: "jugo-fresa",
            name: "Fresa",
            price: 14,
            imageSlot: "/images/carta/bebidas/jugo-fresa.jpg",
          },
          {
            id: "jugo-fresa-arandanos",
            name: "Fresa con Arándanos",
            price: 16,
            imageSlot: "/images/carta/bebidas/jugo-fresa-arandanos.jpg",
          },
          {
            id: "jugo-surtidos",
            name: "Surtidos",
            description: "Papaya, piña y fresa.",
            price: 15,
            imageSlot: "/images/carta/bebidas/jugo-surtidos.jpg",
          },
        ],
      },
      {
        id: "milkshakes",
        name: "Milkshakes",
        anchorId: "milkshakes",
        highlightBanner: {
          title: "MILKSHAKES",
          includes: "Coronados con abundante crema chantilly.",
        },
        imageSlot: {
          path: "/images/carta/bebidas/milkshakes.jpg",
          alt: "Milkshakes Lynch",
          recommendedSize: "800x600px",
          aspectRatio: "4:3",
        },
        items: [
          {
            id: "milkshake-vainilla",
            name: "Vainilla",
            price: 16,
            imageSlot: "/images/carta/bebidas/milkshake-vainilla.jpg",
          },
          {
            id: "milkshake-chocolate",
            name: "Chocolate",
            price: 16,
            imageSlot: "/images/carta/bebidas/milkshake-chocolate.jpg",
          },
          {
            id: "milkshake-fresa",
            name: "Fresa",
            price: 20,
            imageSlot: "/images/carta/bebidas/milkshake-fresa.jpg",
          },
          {
            id: "milkshake-oreo",
            name: "Oreo",
            price: 20,
            imageSlot: "/images/carta/bebidas/milkshake-oreo.jpg",
          },
        ],
      },
    ],
  },
};
