import { serverClient } from '@/trpc/serverClient'
import React from 'react'

const Test1 = async () => {
  const data = await serverClient.test.consoleTest()
  console.log(data)
  return <div>Test1</div>
}

export default Test1
