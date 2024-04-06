import { handleApiErrors } from "~/composables/error-handling";
import betHistory from "~/server/src/bet-history";

export default defineEventHandler(async (e) => {
  handleApiErrors(e);

  const history = await betHistory.list();

  return history;
});
