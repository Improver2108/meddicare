import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

const contact = z.object({
  location: z.string(),
  phone: z.string(),
  email: z.string(),
});

export const ContactRouter = createTRPCRouter({
  get: publicProcedure.query(
    async () =>
      await db.contact.findUnique({
        where: {
          id: 1,
        },
      }),
  ),
  upsert: protectedProcedure.input(contact).mutation(
    async ({ input: contact }) =>
      await db.contact.upsert({
        where: {
          id: 1,
        },
        update: {
          ...contact,
        },
        create: {
          ...contact,
        },
      }),
  ),
});
