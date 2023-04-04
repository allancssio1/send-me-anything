import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dbUsers = {
  createUser: async (body: any): Promise<any> => {
    const user = await prisma.user.create({
      data: body,
    });

    return user;
  },
  findUsers: async (): Promise<any> => {
    const user = await prisma.user.findMany();

    return user;
  },
  findAllUsers: async () => {
    return prisma.user.findMany();
  },
};
