import { Request, Response } from "express";
import { db } from "../../models/products";

export const controllerUsers = {
  create: async (req: Request, res: Response) => {
    const { body } = req;

    const user = await db.createUser(body);
    console.log("controller ~ user:", user);

    return res.json(user);
  },
  getAll: (req: Request, res: Response) => {
    return res.send("all");
  },
  findUserById: (req: Request, res: Response) => {
    const { id } = req.params;
    return res.send("findOne");
  },
  update: (req: Request, res: Response) => {
    const {
      params: { id },
      body,
    } = req;
    return res.send("update");
  },
  delete: (req: Request, res: Response) => {
    const { id } = req.params;
    return res.send("delete");
  },
};
