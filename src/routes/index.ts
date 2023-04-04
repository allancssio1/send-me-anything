import { Router } from "express";
import { controllerProducts } from "../controllers/Products";
import { controllerUsers } from "../controllers/Users";

const routes = Router();

routes.get("/products/all", controllerProducts.getAll);
routes.post("/products/create", controllerProducts.create);
routes.get("/products/:id", controllerProducts.findProductById);
routes.get(
  "/products/recipient/:id",
  controllerProducts.findProductByRecipientId,
);
routes.get("/products/sender/:id", controllerProducts.findProductBySendedId);
routes.patch("/products/:id", controllerProducts.update);
routes.delete("/products/:id", controllerProducts.delete);

routes.patch("/users/:id", controllerUsers.getAll);
routes.post("/users/create", controllerUsers.create);
routes.delete("/users/:id", controllerUsers.delete);
routes.get("/users/all", controllerUsers.getAll);

export { routes };
