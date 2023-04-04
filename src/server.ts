import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
  return res.status(404).send("not found");
});

app.listen("3333", () => {
  console.log("rodando");
});
