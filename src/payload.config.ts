// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import configPromise from '@payload-config'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { devUI } from './plugins/dev-ui'
import CustomDevPage from './plugins/dev-ui/CustomDevPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts],

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    // client: {
    //   url: process.env.DATABASE_URI!,
    //   authToken: process.env.AUTHTOKEN,
    // },
    client: {
      url: 'file:payload-lite.db',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    devUI({}),
    // storage-adapter-placeholder
  ],
})
