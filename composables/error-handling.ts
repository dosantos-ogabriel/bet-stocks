import { H3Event } from "h3";
export const handleApiErrors = (event: H3Event) => {
  const statusCode = event.node.res.statusCode;

  if (statusCode == 401) {
    throw createError({
      statusCode: 401,
      statusMessage: "Authorization failed",
    });
  }
};
