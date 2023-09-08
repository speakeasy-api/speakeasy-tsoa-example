import { Drink, DrinkType } from "./drink";

export const drinks: Drink[] = [
  {
    name: "Laphroaig 10",
    type: DrinkType.SPIRIT,
    price: 1000,
    stock: 102,
    productCode: "SP-001",
  },
  {
    name: "Negroni",
    type: DrinkType.COCKTAIL,
    price: 1200,
    stock: 10,
    productCode: "CK-001",
  },
  {
    name: "Manhattan",
    type: DrinkType.COCKTAIL,
    price: 1200,
    stock: 10,
    productCode: "CK-002",
  },
  {
    name: "La Chouffe",
    type: DrinkType.BEER,
    price: 600,
    stock: 10,
    productCode: "BE-001",
  },
];
