import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";
import prisma from "./db";

const saltRounds = 10;

interface LoginInput {
  email: string;
  password: string;
}

class User {
  async register(data: Prisma.UserCreateInput) {
    const passwordHash = await bcrypt.hash(data.password, saltRounds);
    data.password = passwordHash;

    const user = await prisma.user.create({ data });

    return user;
  }
  async login(data: LoginInput) {
    const user = await prisma.user.findUniqueOrThrow({ where: data });

    const isCorrectPassword = await bcrypt.compare(data.password, user.password);

    if (isCorrectPassword) return user;

    Promise.reject("Wrong password");
  }
}

export default new User();
