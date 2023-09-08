import { app } from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(`Find docs at http://localhost:${port}/docs/`);
});
