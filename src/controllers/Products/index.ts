import { Request, Response } from "express";
import { dbProduct } from "../../models/products";

export const controllerProducts = {
  create: async (req: Request, res: Response) => {
    const { body } = req;

    return res.send("create");
  },
  getAll: async (req: Request, res: Response) => {
    const productis = await dbProduct.getAllProduct();
    return res.json(productis);
  },
  findProductById: (req: Request, res: Response) => {
    const { id } = req.params;
    return res.send("findOne");
  },
  findProductByRecipientId: (req: Request, res: Response) => {
    const { id } = req.params;
    return res.send("findOne");
  },
  findProductBySendedId: (req: Request, res: Response) => {
    const { id } = req.params;
    return res.send("findOne");
  },
  update: (req: Request, res: Response) => {
    const { id } = req.params;
    return res.send("update");
  },
  delete: (req: Request, res: Response) => {
    const { id } = req.params;
    return res.send("delete");
  },
};
