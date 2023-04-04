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
    return await prisma.user.findMany();
  },
  findUserById: async (id: string): Promise<any> => {
    return prisma.user.findMany({
      where: {
        id,
      },
    });
  },
  updateUser: async (user: any): Promise<any> => {
    return prisma.user.update({
      where: {
        id: user.id,
      },
      data: user,
    });
  },
};
