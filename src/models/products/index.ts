import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dbProduct = {
  createProduct: async (body: any): Promise<any> => {
    const product = await prisma.product.create({ data: body });

    return product;
  },
  getAllProduct: async (): Promise<any> => {
    return await prisma.product.findMany();
  },
  findProductById: async (id: string): Promise<any> => {
    return await prisma.product.findFirst({ where: { id } });
  },
  findProductByRecipienId: async (id: string): Promise<any> => {
    const products = await prisma.product.findMany({
      where: { recipientId: id },
    });
    return products;
  },
};
