import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { HomeRouter } from "./routers/home";
import { BlogRouter } from "./routers/blog";
import { PlanRouter } from "./routers/plan";
import { ContactRouter } from "./routers/contact";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  home: HomeRouter,
  plan: PlanRouter,
  blog: BlogRouter,
  contact: ContactRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
