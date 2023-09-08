/**
 * The type of drink.
 */
export enum DrinkType {
  COCKTAIL = "cocktail",
  NON_ALCOHOLIC = "non-alcoholic",
  BEER = "beer",
  WINE = "wine",
  SPIRIT = "spirit",
  OTHER = "other",
}

export interface Drink {
  /**
   * The name of the drink.
   * @example "Old Fashioned"
   * @example "Manhattan"
   * @example "Negroni"
   */
  name: string;
  type?: DrinkType;

  /**
   * The price of one unit of the drink in US cents.
   * @isInt
   * @example 1000
   * @example 1200
   * @example 1500
   */
  price: number;

  /**
   * The number of units of the drink in stock, only available when authenticated.
   * @isInt
   * @example 102
   * @example 10
   * @example 0
   */
  stock?: number;

  /**
   * The product code of the drink, only available when authenticated.
   * @example "SP-001"
   * @example "CK-001"
   * @example "CK-002"
   */
  productCode?: string;
}

export interface DrinkUpdateParams
  extends Partial<Pick<Drink, "name" | "price" | "stock" | "type">> {}
