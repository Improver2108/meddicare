import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

const home = z.object({
  points: z.string().min(10).max(500).array().length(5),
  about: z.string().min(10).max(1000),
  aboutImage: z.string(),
});

export const HomeRouter = createTRPCRouter({
  get: publicProcedure.query(
    async () =>
      await db.home.findFirst({
        select: {
          about: true,
          points: true,
          aboutImage: true,
        },
      }),
  ),
  upsert: publicProcedure.input(home).mutation(async ({ input: home }) => {
    console.log("home->", home);
    await db.home.upsert({
      where: {
        id: 1,
      },
      update: {
        ...home,
      },
      create: {
        points: home.points,
        about: home.about,
        aboutImage: home.aboutImage,
      },
    });
  }),
});
