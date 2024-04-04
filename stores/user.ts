import { type User } from "@prisma/client";

export const useUserStore = defineStore("user", {
  state: () => ({ user: {} as User }),

  actions: {
    async getUser() {
      const user = await $api("/api/user");
      return user;
    },
  },
});
