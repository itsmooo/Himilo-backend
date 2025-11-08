import { app } from "./app";

const port = process.env.PORT ?? 9000;

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server listening on port ${port}`);
  /* eslint-enable no-console */
});

