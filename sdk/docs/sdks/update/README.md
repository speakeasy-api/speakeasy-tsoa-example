# update

## Overview

Update operations

### Available Operations

* [updateDrinkNameOrPrice](#updatedrinknameorprice)

## updateDrinkNameOrPrice

### Example Usage

```typescript
import { SDK } from "openapi";
import { UpdateDrinkNameOrPriceResponse } from "openapi/dist/sdk/models/operations";
import { DrinkType } from "openapi/dist/sdk/models/shared";

const sdk = new SDK();

sdk.update.updateDrinkNameOrPrice({
  drinkUpdateParams: {
    name: "Old Fashioned",
    price: 1000,
    stock: 102,
    type: DrinkType.Wine,
  },
  productCode: "illum",
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

