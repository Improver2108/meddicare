import { string, z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

const plan = z.object({
  name: string(),
  points: string().array().min(1).max(5),
  price: z.number().min(0),
  id: z.number().optional(),
});

export const PlanRouter = createTRPCRouter({
  get: publicProcedure.query(
    async () =>
      await db.plan.findMany({
        select: {
          id: true,
          name: true,
          points: true,
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
  update: protectedProcedure.input(plan).mutation(
    async ({ input: plan }) =>
      await db.plan.update({
        where: {
          id: plan.id,
        },
        data: {
          ...plan,
        },
      }),
  ),
  delete: protectedProcedure.input(z.object({ id: z.number() })).mutation(
    async ({ input: { id } }) =>
      await db.plan.delete({
        where: {
          id: id,
        },
      }),
  ),
});
