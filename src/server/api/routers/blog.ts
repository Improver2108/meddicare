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
  highlight: z.string().optional(),
});

const id = z.number();

export const BlogRouter = createTRPCRouter({
  getList: publicProcedure.query(
    async () =>
      await db.blog.findMany({
        select: {
          id: true,
          name: true,
          image: true,
          highlight: true,
        },
      }),
  ),
  getContent: publicProcedure.input(id).query(
    async ({ input: id }) =>
      await db.blog.findUnique({
        where: {
          id: id,
        },
        select: {
          content: true,
          name: true,
          image: true,
          highlight: true,
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
