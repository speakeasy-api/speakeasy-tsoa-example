<div align="center">
 <a href="https://www.speakeasy.com/" target="_blank">
   <picture>
       <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/21dd5d3a-aefc-4cd3-abee-5e17ef1d4dad">
       <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/0a747f98-d228-462d-9964-fd87bf93adc5">
       <img width="100px" src="https://github.com/user-attachments/assets/21dd5d3a-aefc-4cd3-abee-5e17ef1d4dad#gh-light-mode-only" alt="Speakeasy">
   </picture>
 </a>
  <h1>Speakeasy</h1>
  <p>Build APIs your users love ❤️ with Speakeasy</p>
  <div>
   <a href="https://speakeasy.com/docs/create-client-sdks/" target="_blank"><b>Docs Quickstart</b></a>&nbsp;&nbsp;//&nbsp;&nbsp;<a href="https://join.slack.com/t/speakeasy-dev/shared_invite/zt-1cwb3flxz-lS5SyZxAsF_3NOq5xc8Cjw" target="_blank"><b>Join us on Slack</b></a>
  </div>
 <br />

</div>

<hr />

<h2>Speakeasy tsoa OpenAPI Example</h2>



This example tsoa app demonstrates Speakeasy-recommended practices for generating clear OpenAPI specifications and SDKs.

## Prerequisites

You need to have Node.js and Yarn installed on your system to run this project. If you don't have these installed, you can download them from [here](https://nodejs.org/) and [here](https://yarnpkg.com/).

To generate an SDK, you'll also need the Speakeasy CLI installed, or use the Speakeasy dashboard.

## Installation

To install the application on your local machine:

1. Clone the repository:
```bash
git clone https://github.com/ritza-co/speakeasy-bar-tsoa.git
```

2. Navigate into the directory:
```bash
cd speakeasy-bar-tsoa
```

3. Install all dependencies for the application using Yarn:
```bash
yarn install
```

4. [Install Speakeasy CLI](https://github.com/speakeasy-api/speakeasy#installation):
```bash
brew install speakeasy-api/homebrew-tap/speakeasy
```

## Running the application

1. Compile the TypeScript files:
```bash
yarn build
```

2. Start the server:
```bash
yarn start
```

### For development

You can use the provided script to run the application in development mode. It will watch for any changes in the source code and automatically restart the server and update the routes and OpenAPI definition.

```bash
yarn dev
```

### Working with the OpenAPI specification

If you want to have a separate OpenAPI specification file in YAML format, run:

```bash
yarn spec
```

Additionally, you can generate both the specification file and a TypeScript SDK for your API using:

```bash
yarn spec-and-sdk
```

## License

This project is licensed under the terms of the Apache 2.0 license.
