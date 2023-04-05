import { Request, Response } from "express";
import { dbProduct } from "../../models/products";

export const controllerProducts = {
  create: async (req: Request, res: Response) => {
    const { body } = req;

    if (!body)
      return res.status(400).json({
        message: "Corpo da requisição incorreto!",
        data: {},
      });

    try {
      const product = await dbProduct.createProduct(body);

      return res.status(201).json({
        message: "Produto criado com sucesso",
        data: product,
      });
    } catch (error: any) {
      console.log("🚀 ~ file: index.ts:22 ~ create: ~ error:", error);
      return res.status(500).json({
        message: `Erro ao criar usuário!`,
        data: {},
      });
    }
  },
  getAll: async (req: Request, res: Response) => {
    try {
      const products = await dbProduct.getAllProduct();

      if (!products[0])
        return res.status(404).json({
          message: "Não foram encontrados usuários!",
          data: {},
        });

      return res.status(200).json({
        message: "Usuários encontrados com sucesso!",
        data: products,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar usuários!",
        data: {},
      });
    }
  },
  findProductById: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const product = await dbProduct.findProductById(id);

      if (!product)
        return res.status(404).json({
          message: "Não foram encontrados produdos!",
          data: {},
        });

      return res.status(200).json({
        message: "Produtos encontrados com sucesso!",
        data: product,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar produtos!",
        data: {},
      });
    }
  },
  findProductByRecipientId: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const products = await dbProduct.findProductByRecipienId(id);

      if (!products[0])
        return res.status(404).json({
          message: "Não foram encontrados produdos!",
          data: {},
        });

      return res.status(200).json({
        message: "Produtos encontrados com sucesso!",
        data: products,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar produtos!",
        data: {},
      });
    }
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
