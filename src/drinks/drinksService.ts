import { Drink, DrinkUpdateParams } from "./drink";
import { drinks } from "./drinksFixtures";

export class DrinksService {
  public listDrinks(): Drink[] {
    return drinks;
  }

  public getDrink(productCode: string): Drink | undefined {
    const drink = drinks.find((drink) => drink.productCode === productCode);
    return drink;
  }

  public updateDrink(
    productCode: string,
    params: DrinkUpdateParams
  ): Drink | undefined {
    const drink = this.getDrink(productCode);

    if (!drink) {
      return;
    }

    Object.assign(drink, params);

    return drink;
  }

  public updateDrinkName(
    productCode: string,
    drinkName: string
  ): Drink | undefined {
    const drink = this.getDrink(productCode);

    if (!drink) {
      return;
    }

    Object.assign(drink, drinkName);

    return drink;
  }
}
