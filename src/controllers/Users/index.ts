import { Request, Response } from "express";
import { dbUsers } from "../../models/users";

export const controllerUsers = {
  create: async (req: Request, res: Response) => {
    const { body } = req;

    try {
      const user = await dbUsers.createUser(body);

      return res.status(201).json({
        message: "Usuário criado com sucesso",
        data: {
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao criar usuário",
        data: {},
      });
    }
  },
  getAll: async (req: Request, res: Response) => {
    try {
      const users = await dbUsers.findAllUsers();
    } catch (error) {}
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
