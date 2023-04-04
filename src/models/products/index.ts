import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dbProduct = {
  createProduct: async (body: any): Promise<any> => {},
  getAllProduct: () => {
    return prisma.product.findMany();
  },
};
