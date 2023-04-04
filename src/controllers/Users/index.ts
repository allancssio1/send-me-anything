import { Request, Response } from "express";

export const controllerUsers = {
  create: (req: Request, res: Response) => {
    const { body } = req;
    return res.send("create");
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
