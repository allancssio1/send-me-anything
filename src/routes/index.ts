import { Router } from "express";
import { controllerProducts } from "../controllers/Products";
import { controllerUsers } from "../controllers/Users";
import { ValidationBody } from "../middlewares/validationBody";

const routes = Router();
routes.get("/products/all", controllerProducts.getAll);
routes.post("/products/create", ValidationBody, controllerProducts.create);
routes.get("/products/:id", controllerProducts.findProductById);
routes.get(
  "/products/recipient/:id",
  controllerProducts.findProductByRecipientId,
);
routes.get("/products/sender/:id", controllerProducts.findProductBySendedId);
routes.put("/products/:id", ValidationBody, controllerProducts.update);
routes.delete("/products/:id", controllerProducts.delete);

routes.post("/users/create", ValidationBody, controllerUsers.create);
routes.put("/users/:id", ValidationBody, controllerUsers.update);
routes.get("/users/all", controllerUsers.getAll);
routes.delete("/users/:id", controllerUsers.delete);
export { routes };
