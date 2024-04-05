import { handleApiErrors } from "~/composables/error-handling";
import bet from "~/server/src/bet";

export default defineEventHandler(async (e) => {
  handleApiErrors(e);

  const activeBets = await bet.list({
    where: {
      finishedAt: null,
    },
  });
  return activeBets;
});
