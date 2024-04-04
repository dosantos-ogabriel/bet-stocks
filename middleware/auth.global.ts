export default defineNuxtRouteMiddleware((to) => {
  if (!(to.name == "login")) console.log("Rota interna");
});
