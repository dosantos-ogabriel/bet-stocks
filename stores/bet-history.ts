import { type BetHistory } from "@prisma/client";

export const useBetHistoryStore = defineStore("bet-history", () => {
  const history = ref<BetHistory[]>([]);

  const getBetHistory = async () => {
    const data = await $fetch<BetHistory[]>("/api/bet-history");

    history.value = data;
  };

  return { getBetHistory, history };
});
