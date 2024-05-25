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
  id: z.number().optional(),
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
  getLimitedList: publicProcedure.query(
    async () =>
      await db.blog.findMany({
        take: 5,
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
  post: protectedProcedure.input(blog).mutation(
    async ({ input: blog }) =>
      await db.blog.create({
        data: {
          ...blog,
        },
      }),
  ),
  update: protectedProcedure.input(blog).mutation(async ({ input: blog }) => {
    await db.blog.update({
      where: {
        id: blog.id,
      },
      data: {
        ...blog,
      },
    });
  }),
  delete: protectedProcedure.input(z.object({ id: z.number() })).mutation(
    async ({ input: { id } }) =>
      await db.blog.delete({
        where: {
          id: id,
        },
      }),
  ),
});
