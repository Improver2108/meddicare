import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

const about = z.object({
  about: z.string().min(10).max(200),
});

export const HomeRouter = createTRPCRouter({
  get: publicProcedure.query(
    async () =>
      await db.home.findFirst({
        select: {
          about: true,
          points: true,
        },
      }),
  ),
});
