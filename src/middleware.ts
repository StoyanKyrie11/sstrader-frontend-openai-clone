import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

const options = {
  users: [
    {
      name: process.env.NEXT_AUTH_USERNAME as string,
      password: process.env.NEXT_AUTH_PASSWORD as string,
    },
  ],
};
export const middleware = createNextAuthMiddleware(options);

export const config = {
  matcher: ["/(.*)"],
};
