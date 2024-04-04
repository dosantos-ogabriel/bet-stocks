import { type LoginInput, type RegisterInput } from "~/server/src/user";

export const useAuthStore = defineStore("auth", {
  actions: {
    async login(data: LoginInput) {
      await $fetch("/api/auth/login", { method: "post", body: data });

      this.setAuthentication(true);
      return navigateTo("");
    },
    async register(data: RegisterInput) {
      await $fetch("/api/auth/register", {
        method: "post",
        body: data,
      });

      this.setAuthentication(true);
      return navigateTo("");
    },
    logout() {
      this.setAuthentication(false);
      navigateTo("/login");
    },
    setAuthentication(value: boolean) {
      const logged = useCookie("logged");
      logged.value = value ? "logged" : null;
    },
  },
});
