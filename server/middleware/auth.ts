import { verifyToken } from "~/composables/jwt";

export default defineEventHandler(async (event) => {
  const url = event.node.req.url;
  if (url && url.indexOf("login") > 0) return;

  const token = getCookie(event, "token");

  if (token) {
    try {
      const user = await verifyToken(token);
      event.context.user = user;
      return;
    } catch (error) {
      setResponseStatus(event, 401);
    }
  }
  setResponseStatus(event, 401);
});
