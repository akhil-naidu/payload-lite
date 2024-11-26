import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { TRPCError } from '@trpc/server'
import { cookies } from 'next/headers'

import { publicProcedure, router, userProcedure } from '@/trpc/'

const payload = await getPayload({
  config: configPromise,
})

export const testRouter = router({
  consoleTest: publicProcedure.query(async ({ ctx }) => {
    return { test: 'ok' }
  }),

  getAllPosts: publicProcedure.query(async ({ ctx }) => {
    const posts = await payload.find({
      collection: 'posts',
    })

    return posts.docs
  }),
})
