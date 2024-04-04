export default defineEventHandler((e) => {
  // return e.context.user;
  return createError({ statusCode: 401, message: "Authorization error" });
});
