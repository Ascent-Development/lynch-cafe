import { CARTA_DATA, MenuItem, SubCategory } from "./cartaData";

export interface FlatDish extends MenuItem {
  macroId: "desayunos" | "salados" | "postres" | "bebidas";
  macroName: string;
  subcategoryId: string;
  subcategoryName: string;
  image?: string;
  tags?: string[];
  numericPrice: number;
}

export interface FeaturedCategory {
  id: string;
  name: string;
  description: string;
  macroId: "desayunos" | "salados" | "postres" | "bebidas";
  subcategoryId: string;
  image: string;
  bgColor: string;
}

// 6 Featured visual categories for "¿Qué estás buscando hoy?"
export const FEATURED_CATEGORIES: FeaturedCategory[] = [
  {
    id: "cat-desayunos",
    name: "Desayunos & Tostas",
    description: "Huachano, Chicharrón, Tostas y Pancakes",
    macroId: "desayunos",
    subcategoryId: "desayunos-completos",
    image: "/carta/Cappuccino-web.png",
    bgColor: "#F1EAE0",
  },
  {
    id: "cat-sandwiches",
    name: "Sándwiches & Piqueos",
    description: "Triple Lynch, Butifarra y Alitas",
    macroId: "salados",
    subcategoryId: "sandwiches",
    image: "/carta/hamburguesa-con-guacamole.jpg",
    bgColor: "#EBE3D7",
  },
  {
    id: "cat-criollitos",
    name: "Criollitos & Fondos",
    description: "Lomo Saltado, Ají de Gallina y Chaufas",
    macroId: "salados",
    subcategoryId: "platos-criollitos",
    image: "/carta/LOMO-SALTADO.jpg",
    bgColor: "#E5ECE2",
  },
  {
    id: "cat-pastas",
    name: "Pastas & Pizzas",
    description: "Ravioles, Lasagnas y Pizzas Artesanales",
    macroId: "salados",
    subcategoryId: "pastas",
    image: "/carta/hamburguesa-con-guacamole.jpg",
    bgColor: "#F4E3DD",
  },
  {
    id: "cat-postres",
    name: "Postres & Gelato",
    description: "Grand Volcán, Tiramisú y Cheesecakes",
    macroId: "postres",
    subcategoryId: "postres-especiales",
    image: "/carta/grand-volcan.jpg",
    bgColor: "#F6E8DA",
  },
  {
    id: "cat-cafes",
    name: "Cafés de Especialidad & Bebidas",
    description: "V60, Chemex, Cold Brew y Smoothies",
    macroId: "bebidas",
    subcategoryId: "metodos-artesanales",
    image: "/carta/frappe.jpg",
    bgColor: "#E7E2DB",
  },
];

// Helper to extract numeric price
function parsePrice(price: number | string): number {
  if (typeof price === "number") return price;
  const match = price.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

// Generate tags based on dish name, description, badge, options
function generateTags(dish: MenuItem, macroId: string): string[] {
  const tags: string[] = [];
  const text = `${dish.name} ${dish.description || ""} ${dish.badge || ""}`.toLowerCase();

  if (text.includes("sin gluten") || dish.badge?.toLowerCase().includes("sin gluten")) tags.push("Sin Gluten");
  if (text.includes("panela") || dish.badge?.toLowerCase().includes("panela")) tags.push("Con Panela");
  if (text.includes("compartir") || dish.badge?.toLowerCase().includes("compartir") || dish.badge?.toLowerCase().includes("2 personas")) tags.push("Para Compartir");
  if (text.includes("fit") || text.includes("saludable") || text.includes("proteico") || text.includes("avena") || text.includes("quinua")) tags.push("Fit / Saludable");
  if (text.includes("iced") || text.includes("cold") || text.includes("frozen") || text.includes("smoothie") || text.includes("frappuccino") || text.includes("gelato")) tags.push("Iced / Frío");
  if (macroId === "bebidas" && !text.includes("iced") && !text.includes("cold") && !text.includes("frozen")) tags.push("Caliente");
  if (text.includes("veggie") || text.includes("vegetal") || text.includes("avena")) tags.push("Vegetariano");

  return tags;
}

// Flatten all dishes
export function getAllDishes(): FlatDish[] {
  const list: FlatDish[] = [];

  const macros = [
    CARTA_DATA.desayunos,
    CARTA_DATA.salados,
    CARTA_DATA.postres,
    CARTA_DATA.bebidas,
  ].filter(Boolean);

  macros.forEach((macro) => {
    if (!macro) return;
    macro.subcategories.forEach((sub: SubCategory) => {
      sub.items.forEach((item: MenuItem) => {
        list.push({
          ...item,
          macroId: macro.id,
          macroName: macro.name,
          subcategoryId: sub.id,
          subcategoryName: sub.name,
          numericPrice: parsePrice(item.price),
          tags: generateTags(item, macro.id),
        });
      });
    });
  });

  return list;
}

// Recommended tabs for "Recomendados para ti"
export interface RecommendedTab {
  id: string;
  label: string;
  items: FlatDish[];
}

export function getRecommendedTabs(): RecommendedTab[] {
  const all = getAllDishes();

  const getByIds = (ids: string[]) =>
    ids
      .map((id) => all.find((d) => d.id === id))
      .filter(Boolean) as FlatDish[];

  return [
    {
      id: "favoritos",
      label: "Favoritos de la Casa",
      items: getByIds([
        "lomo-saltado",
        "huachano",
        "grand-volcan",
        "cappuccino",
        "triple-lynch-salados",
        "alitas-crocantes",
        "poke-bowl-salmon",
        "hamburguesa-de-la-casa",
        "cold-brew-naranja",
        "tiramisu-pistacho",
      ]),
    },
    {
      id: "desayunos",
      label: "Desayunos & Mañanas",
      items: getByIds([
        "huachano",
        "chicharron-desayuno",
        "duo-matutino",
        "tosta-de-salmon",
        "pancakes-con-frutas",
        "chicken-pesto-omelette",
        "keto",
        "empanada-de-carne",
      ]),
    },
    {
      id: "cocina",
      label: "Criollitos & Fondos",
      items: getByIds([
        "lomo-saltado",
        "aji-gallina",
        "asado-pure",
        "salmon-plancha",
        "chaufa-pobre",
        "spaghetti-pesto-bistec",
        "hamburguesa-plato",
        "lasagna-bolognesa",
      ]),
    },
    {
      id: "postres",
      label: "Postres de Autor",
      items: getByIds([
        "grand-volcan",
        "tiramisu-pistacho",
        "cheesecake-maracumango",
        "tres-leches-sin-azucar",
        "pie-de-limon",
        "crema-volteada",
        "tartaleta-frutos-rojos",
        "mousse-chocolate",
      ]),
    },
    {
      id: "barra",
      label: "Barra de Especialidad",
      items: getByIds([
        "chemex",
        "v60",
        "cold-brew-naranja",
        "selfieccino",
        "cappuccino-hazelnut",
        "strawberry-matcha",
        "chocolate-lynch",
        "irish-coffee",
      ]),
    },
  ];
}
