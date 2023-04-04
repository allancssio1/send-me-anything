import { Request, Response } from "express";

export const controllerProducts = {
  create: (req: Request, res: Response) => {
    const { body } = req;
    return res.send("create");
  },
  getAll: (req: Request, res: Response) => {
    return res.send("all");
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
