import bet from "~/server/src/bet";

export default defineEventHandler(async () => {
  const activeBets = await bet.list({
    where: {
      finishedAt: null,
    },
  });
  return activeBets;
});
