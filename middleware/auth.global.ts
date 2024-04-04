export default defineNuxtRouteMiddleware(async (to) => {
  const token = useCookie("token");
  const { logout } = useAuthStore();

  if (!token.value) {
    if (to.name !== "login") {
      abortNavigation();
      logout();
      return navigateTo("/login");
    }
  } else {
    if (to.name == "login") {
      abortNavigation();
      return navigateTo("");
    }
  }
});
