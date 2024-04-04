import { Prisma } from "@prisma/client";
import { generateToken } from "~/composables/useAuthentication";
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

    const token = await generateToken(user.id);
    return { token };
  }
  async login(data: LoginInput) {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!user)
      throw createError({ statusCode: 400, statusMessage: "Usuário não encontrado" });

    const isCorrectPassword = await bcrypt.compare(data.password, user.password);

    if (isCorrectPassword) {
      const token = await generateToken(user.id);
      return { token };
    }

    throw createError({ statusCode: 400, statusMessage: "Usuário não encontrado" });
  }
}

export default new User();
