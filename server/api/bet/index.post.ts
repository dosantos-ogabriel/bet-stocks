import { Prisma } from "@prisma/client";
import bet from "~/server/src/bet";

export default defineEventHandler(async (e) => {
  const body: Prisma.BetCreateInput = await readBody(e);

  const data = await bet.create(body);

  return data;
});
