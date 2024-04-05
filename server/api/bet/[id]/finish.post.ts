import { Prisma } from "@prisma/client";
import bet from "~/server/src/bet";

export default defineEventHandler(async (e) => {
  let id: string | undefined | number = getRouterParam(e, "id");
  const body = await readBody<Prisma.BetUpdateInput>(e);

  if (!id)
    throw createError({ statusCode: 404, statusMessage: "Aposta não encontrada" });

  id = parseInt(id);

  const data = await bet.finish({ id }, body);

  return data;
});
