import { Prisma } from "@prisma/client";
import { handleApiErrors } from "~/composables/error-handling";
import bet from "~/server/src/bet";

export default defineEventHandler(async (e) => {
  handleApiErrors(e);

  const body: Prisma.BetCreateInput = await readBody(e);

  const data = await bet.create(body);

  return data;
});
