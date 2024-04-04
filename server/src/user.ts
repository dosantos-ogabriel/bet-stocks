import { Prisma } from "@prisma/client";
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

    return user;
  }
  async login(data: LoginInput) {
    const user = await prisma.user.findUniqueOrThrow({
      where: { email: data.email },
    });

    const isCorrectPassword = await bcrypt.compare(data.password, user.password);

    if (isCorrectPassword) return user;

    throw "Senha incorreta";
  }
}

export default new User();
