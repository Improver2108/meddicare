import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

const home = z.object({
  points: z.string().min(10).max(50).array().length(5),
  about: z.string().min(10).max(500),
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
    await db.home.upsert({
      where: {
        id: 1,
      },
      update: {
        points: home.points,
        about: home.about,
        aboutImage: home.aboutImage,
      },
      create: {
        points: [
          "Loremqawjeksdlsajdlsadjsaldkjsaldsadas",
          "Loremqawjeksdlsajdlsadjsaldkjsaldsadas",
          "Loremqawjeksdlsajdlsadjsaldkjsaldsadas",
          "Loremqawjeksdlsajdlsadjsaldkjsaldsadas",
          "Loremqawjeksdlsajdlsadjsaldkjsaldsadas",
        ],
        about:
          "asdsadsadfkjhdsabgfkjdeasbgjkfdsabgfjk.dsafghbdsjka.fbdsajk.fbdsakjfbdsakjfbdsakj.fbdsak",
        aboutImage:
          "https://thumbs.dreamstime.com/b/good-health-good-life-female-hand-chalk-writing-text-blue-background-97044786.jpg",
      },
    });
  }),
});
