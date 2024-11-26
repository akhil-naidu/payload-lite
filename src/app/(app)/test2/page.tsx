import { serverClient } from '@/trpc/serverClient'
import React from 'react'

const Test2 = async () => {
  const data = await serverClient.test.getAllPosts()
  console.log(data)
  return <div>Test2</div>
}

export default Test2
