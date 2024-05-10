import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

const blog = z.object({
  name: z.string(),
  image: z.string(),
  content: z.string(),
});

export const BlogRouter = createTRPCRouter({
  get: publicProcedure.query(
    async () =>
      await db.blog.findFirst({
        select: {
          name: true,
          image: true,
          content: true,
        },
      }),
  ),
  post: publicProcedure.input(blog).mutation(async ({ input: blog }) => {
    await db.blog.create({
      data: {
        ...blog,
      },
    });
  }),
});
