import { type LoginInput, type RegisterInput } from "~/server/src/user";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
  }),

  actions: {
    async login(data: LoginInput) {
      const userData = await $fetch("/api/auth/login", { method: "post", body: data });

      return userData;
    },

    async register(data: RegisterInput) {
      const userData = await $fetch("/api/auth/register", {
        method: "post",
        body: data,
      });

      return userData;
    },
  },
});
