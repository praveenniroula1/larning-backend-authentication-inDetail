import express from "express";
import cors from "cors";
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// database Configuration
import { dbConfig } from "./src/dbConfig/dbConfig.js";
dbConfig();

// apis
import registerRouter from "./src/router/registerRouter.js";
app.use("/api/v1/register", registerRouter);

// listeng the port
const port = 8000;
app.listen(port, () => {
  console.log(`Your app is listening in port ${port}`);
});
