<!-- Start SDK Example Usage -->


```typescript
import { SDK } from "openapi";
import { ListDrinksResponse } from "openapi/dist/sdk/models/operations";

const sdk = new SDK();

sdk.listDrinks().then((res: ListDrinksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->