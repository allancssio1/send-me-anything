import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const db = {
  createProduct: async (body: any): Promise<any> => {},
  getAllProduct: () => {
    return prisma.product.findMany();
  },
  createUser: async (body: any): Promise<any> => {
    const user = await prisma.user.create({
      data: body,
    });

    console.log(user);
    return user;
  },
};
