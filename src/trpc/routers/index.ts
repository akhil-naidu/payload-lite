import { router } from '@/trpc'

import { testRouter } from './user/test-route'

export const appRouter = router({
  test: testRouter,
})

export type AppRouter = typeof appRouter
