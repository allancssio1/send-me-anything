import { Router } from "express";
import { controllerProducts } from "../controllers/Products";
import { controllerUsers } from "../controllers/Users";
import { ValidationBody } from "../middlewares/validationBody";

const routes = Router();
try {
  routes.get("/products/all", controllerProducts.getAll);
  routes.post("/products/create", ValidationBody, controllerProducts.create);
  routes.get("/products/:id", controllerProducts.findProductById);
  routes.get(
    "/products/recipient/:id",
    controllerProducts.findProductByRecipientId,
  );
  routes.get("/products/sender/:id", controllerProducts.findProductBySendedId);
  routes.patch("/products/:id", ValidationBody, controllerProducts.update);
  routes.delete("/products/:id", controllerProducts.delete);

  routes.patch("/users/:id", ValidationBody, controllerUsers.getAll);
  routes.post("/users/create", ValidationBody, controllerUsers.create);
  routes.delete("/users/:id", controllerUsers.delete);
  routes.get("/users/all", controllerUsers.getAll);
} catch (error) {}
export { routes };
