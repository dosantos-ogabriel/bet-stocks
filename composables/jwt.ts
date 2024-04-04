import type { User } from "@prisma/client";
import { jwtVerify, SignJWT } from "jose";

export const generateToken = async (data: User) => {
  const secretKey = process.env["SECRET_KEY"];

  if (!secretKey) {
    throw createError({ statusCode: 500, message: "Erro interno" });
  }

  const secret = new TextEncoder().encode(secretKey);

  const { id, name, email } = data;
  const tokenData = { id, name, email };

  const token = await new SignJWT(tokenData)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(secret);

  return token;
};

export const verifyToken = async (token: string) => {
  const secretKey = process.env["SECRET_KEY"];

  if (!secretKey) {
    throw createError({ statusCode: 500, message: "Erro interno" });
  }

  const secret = new TextEncoder().encode(secretKey);

  const { payload } = await jwtVerify(token, secret);

  return payload;
};
