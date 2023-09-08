import {
  Controller,
  Get,
  Path,
  Route,
  Res,
  TsoaResponse,
  Put,
  Body,
  OperationId,
  Tags,
  Extension,
} from "tsoa";

import { Drink, DrinkUpdateParams } from "./drink";
import { DrinksService } from "./drinksService";

@Route("drinks")
export class DrinksController extends Controller {
  @Get()
  public async listDrinks(): Promise<Drink[]> {
    return new DrinksService().listDrinks();
  }
}

@Route("drink")
@Tags("drinks", "bar")
export class DrinkController extends Controller {
  @Get("{productCode}")
  public async getDrink(
    @Path() productCode: string,
    @Res() notFoundResponse: TsoaResponse<404, { reason: string }>
  ): Promise<Drink> {
    const drink = new DrinksService().getDrink(productCode);

    if (!drink) {
      return notFoundResponse(404, { reason: "Drink not found" });
    }

    return drink;
  }

  @OperationId("updateDrinkNameOrPrice")
  @Put("{productCode}")
  @Tags("update")
  @Extension("x-speakeasy-retries", {
    strategy: "backoff",
    backoff: {
      initialInterval: 500,
      maxInterval: 60000,
      maxElapsedTime: 3600000,
      exponent: 1.5,
    },
    statusCodes: ["5XX"],
    retryConnectionErrors: true,
  })
  public async updateDrink(
    @Path() productCode: string,
    @Body() requestBody: DrinkUpdateParams,
    @Res() notFoundResponse: TsoaResponse<404, { reason: string }>
  ): Promise<Drink> {
    const drink = new DrinksService().updateDrink(productCode, requestBody);

    if (!drink) {
      return notFoundResponse(404, { reason: "Drink not found" });
    }

    return drink;
  }
}
