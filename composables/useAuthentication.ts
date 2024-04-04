import { jwtVerify, SignJWT } from "jose";
export const generateToken = async (id: number) => {
  const secretKey = process.env["SECRET_KEY"];

  if (!secretKey) {
    console.log("Missing secret key");
    throw createError({ statusCode: 500, statusMessage: "Erro interno" });
  }

  const secret = new TextEncoder().encode(secretKey);

  const token = await new SignJWT({ id })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(secret);

  return token;
};

export const verifyToken = async (token: string) => {
  const secretKey = process.env["SECRET_KEY"];

  if (!secretKey) {
    console.log("Missing secret key");
    throw createError({ statusCode: 500, statusMessage: "Erro interno" });
  }

  const secret = new TextEncoder().encode(secretKey);

  const { payload } = await jwtVerify(token, secret);

  if (!payload)
    throw createError({ statusCode: 401, statusMessage: "Falha na autenticação" });

  return payload;
};
