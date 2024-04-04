import { type LoginInput, type RegisterInput } from "~/server/src/user";

export const useAuthStore = defineStore("auth", {
  actions: {
    async login(data: LoginInput) {
      const { token } = await $fetch("/api/auth/login", { method: "post", body: data });

      this.setAuthentication(token);
      return navigateTo("");
    },

    async register(data: RegisterInput) {
      const { token } = await $fetch("/api/auth/register", {
        method: "post",
        body: data,
      });

      this.setAuthentication(token);
      return navigateTo("");
    },

    logout() {
      this.setAuthentication(null);
      navigateTo("/login");
    },

    setAuthentication(token: string | null) {
      const logged = useCookie("token");
      logged.value = token;
    },
  },
});
