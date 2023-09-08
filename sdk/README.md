# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdks/sdk/README.md)

* [listDrinks](docs/sdks/sdk/README.md#listdrinks)

### [bar](docs/sdks/bar/README.md)

* [getDrink](docs/sdks/bar/README.md#getdrink)
* [updateDrinkNameOrPrice](docs/sdks/bar/README.md#updatedrinknameorprice)

### [drinks](docs/sdks/drinks/README.md)

* [getDrink](docs/sdks/drinks/README.md#getdrink)
* [updateDrinkNameOrPrice](docs/sdks/drinks/README.md#updatedrinknameorprice)

### [update](docs/sdks/update/README.md)

* [updateDrinkNameOrPrice](docs/sdks/update/README.md#updatedrinknameorprice)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
