import type { Bet } from "@prisma/client";

export const useBetStore = defineStore("bet", () => {
  const bets = ref<Bet[]>([]);

  async function getActiveBets() {
    const data = await $api<Bet[]>("/api/bet/active");
    bets.value = data;
  }

  return { bets, getActiveBets };
});
