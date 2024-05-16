import { string, z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

const plan = z.object({
  name: string(),
  content: string().array().min(1).max(5),
  price: z.number().min(0),
});

export const PlanRouter = createTRPCRouter({
  get: publicProcedure.query(
    async () =>
      await db.plan.findMany({
        select: {
          name: true,
          content: true,
          price: true,
        },
      }),
  ),
  post: protectedProcedure.input(plan).mutation(
    async ({ input: plan }) =>
      await db.plan.create({
        data: {
          ...plan,
        },
      }),
  ),
});
