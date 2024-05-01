import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

const about = z.object({
  content: z.string().min(10).max(200),
});

export const AboutRouter = createTRPCRouter({
  get: publicProcedure.query(
    async () =>
      await db.about.findFirst({
        select: {
          content: true,
        },
      }),
  ),
  create: publicProcedure.input(about).mutation(
    async ({ input: about }) =>
      await db.about.create({
        data: {
          ...about,
        },
      }),
  ),
});
