'use client'

import { trpc } from '@/trpc/client'
import React from 'react'

const HomePage = () => {
  const { data: consoleTest } = trpc.test.consoleTest.useQuery()
  console.log(consoleTest)

  const { data: posts } = trpc.test.getAllPosts.useQuery()
  console.log(posts)

  return (
    <div>
      {posts?.map((post) => {
        return <p key={post.id}>{post.title}</p>
      })}
    </div>
  )
}

export default HomePage
