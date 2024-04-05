import betHistory from "~/server/src/bet-history";

export default defineEventHandler(async () => {
  const history = await betHistory.list();

  return history;
});
