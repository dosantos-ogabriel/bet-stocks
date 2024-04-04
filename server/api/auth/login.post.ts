import user, { type LoginInput } from "~/server/src/user";
export default defineEventHandler(async (e) => {
  const body: LoginInput = await readBody(e);

  const data = await user.login(body);

  return data;
});
