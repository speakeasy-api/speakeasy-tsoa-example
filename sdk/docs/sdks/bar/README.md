# bar

## Overview

Operations related to the bar

### Available Operations

* [getDrink](#getdrink)
* [updateDrinkNameOrPrice](#updatedrinknameorprice)

## getDrink

### Example Usage

```typescript
import { SDK } from "openapi";
import { GetDrinkResponse } from "openapi/dist/sdk/models/operations";

const sdk = new SDK();

sdk.bar.getDrink({
  productCode: "corrupti",
}).then((res: GetDrinkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetDrinkRequest](../../models/operations/getdrinkrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `retries`                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                   | :heavy_minus_sign:                                                       | Configuration to override the default retry behavior of the client.      |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetDrinkResponse](../../models/operations/getdrinkresponse.md)>**


## updateDrinkNameOrPrice

### Example Usage

```typescript
import { SDK } from "openapi";
import { UpdateDrinkNameOrPriceResponse } from "openapi/dist/sdk/models/operations";
import { DrinkType } from "openapi/dist/sdk/models/shared";

const sdk = new SDK();

sdk.bar.updateDrinkNameOrPrice({
  drinkUpdateParams: {
    name: "Old Fashioned",
    price: 1000,
    stock: 102,
    type: DrinkType.Wine,
  },
  productCode: "distinctio",
}).then((res: UpdateDrinkNameOrPriceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateDrinkNameOrPriceRequest](../../models/operations/updatedrinknameorpricerequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateDrinkNameOrPriceResponse](../../models/operations/updatedrinknameorpriceresponse.md)>**

