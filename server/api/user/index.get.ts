import { handleApiErrors } from "~/composables/error-handling";

export default defineEventHandler((e) => {
  handleApiErrors(e);

  return e.context.user;
});
