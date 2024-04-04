export default defineNuxtRouteMiddleware((to) => {
  const logged = useCookie("logged");
  const { setAuthentication } = useAuthStore();

  if (to.name !== "login" && !logged.value) {
    abortNavigation();
    setAuthentication(false);
    return navigateTo("/login");
  } else if (to.name == "login" && logged.value) {
    console.log(logged.value);
    abortNavigation();
    return navigateTo("");
  }
});
