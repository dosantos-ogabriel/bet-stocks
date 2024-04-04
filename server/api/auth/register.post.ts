import user, { type RegisterInput } from "~/server/src/user";
export default defineEventHandler(async (e) => {
  const body: RegisterInput = await readBody(e);

  const data = await user.register(body);

  return data;
});
