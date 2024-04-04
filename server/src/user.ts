import { Prisma } from "@prisma/client";
import { generateToken } from "~/composables/jwt";
import bcrypt from "~/utils/bcrypt";
import prisma from "./db";

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput extends Prisma.UserCreateInput {}

class User {
  async register(data: Prisma.UserCreateInput) {
    const passwordHash = await bcrypt.hash(data.password);

    data.password = passwordHash;

    const user = await prisma.user.create({ data });

    const token = await generateToken(user);
    return { token };
  }
  async login(data: LoginInput) {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!user)
      throw createError({ statusCode: 400, message: "Usuário não encontrado" });

    const isCorrectPassword = await bcrypt.compare(data.password, user.password);

    if (isCorrectPassword) {
      const token = await generateToken(user);
      return { token };
    }

    throw createError({ statusCode: 400, message: "Usuário não encontrado" });
  }
}

export default new User();
