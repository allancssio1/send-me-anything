import { Request, Response } from "express";
import { dbUsers } from "../../models/users";

export const controllerUsers = {
  create: async (req: Request, res: Response) => {
    const { body } = req;

    if (!body)
      return res.status(400).json({
        message: "Corpo da requisição incorreto!",
        data: {},
      });

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
        message: "Erro ao criar usuário!",
        data: {},
      });
    }
  },
  getAll: async (req: Request, res: Response) => {
    try {
      const users = await dbUsers.findUsers();

      if (!users[0])
        return res.status(404).json({
          message: "Não foram encontrados usuários!",
          data: {},
        });

      return res.status(200).json({
        message: "Usuários encontrados com sucesso!",
        data: users,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar usuários!",
        data: {},
      });
    }
  },
  findUserById: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const user = await dbUsers.findUserById(id);

      return res.status(200).json({
        message: "Usuário encontrado com sucesso!",
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar usuário!",
        data: {},
      });
    }
  },
  findUserByEmail: async (req: Request, res: Response) => {
    const { email } = req.body;

    try {
      const user = await dbUsers.findUserByEmail(email);

      return res.status(200).json({
        message: "Usuário encontrado com sucesso!",
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar usuário!",
        data: {},
      });
    }
  },
  update: async (req: Request, res: Response) => {
    const {
      params: { id },
      body,
    } = req;

    if (!body) {
      return res.status(400).json({
        message: "Corpo da requisição incorreto!",
        data: {},
      });
    }

    try {
      const user = await dbUsers.findUserById(id);

      if (!user[0])
        return res.status(404).json({
          message: "Usuário não encontrado!",
          data: {},
        });

      const updatedUser = {
        ...user[0],
        name: body && body.name ? body.name : user.name,
        email: body && body.email ? body.email : user.email,
        address: body && body.address ? body.address : user.address,
        code: body && body.code ? body.code : user.code,
      };

      await dbUsers.updateUser(updatedUser);

      return res.status(200).json({
        message: "Sucesso ao atualizar o usuário!",
        data: updatedUser,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao atualizar usuário!",
        data: {},
      });
    }
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const user = await dbUsers.findUserById(id);

      if (!user[0]) {
        return res.status(404).json({
          message: "Usuário não encontrado!",
          data: {},
        });
      }

      await dbUsers.deleteUser(id);

      return res.status(200).json({
        message: "Usuário deletado com sucesso!",
        data: {},
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao deletar usuário!",
        data: {},
      });
    }

    return res.send("delete");
  },
};
