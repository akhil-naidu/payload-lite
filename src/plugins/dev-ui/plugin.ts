import type { Config, Plugin } from 'payload'
import CustomDevPage from './CustomDevPage'

export const devUI =
  (PluginOptions: any): Plugin =>
  (incomingConfig: Config): Config => {
    const { sharp, ...config } = incomingConfig
    // console.log(config)

    const extendedConfig: Config = {
      ...incomingConfig,
      // globals: [
      //   {
      //     slug: 'dev',
      //     admin: {
      //       components: {
      //         views: {
      //           edit: {
      //             root: {
      //               Component: {
      //                 path: './plugins/dev-ui/CustomDevPage.tsx',

      //                 clientProps: {
      //                   payloadConfig: config,
      //                 },
      //               },
      //             },
      //           },
      //         },
      //       },
      //     },

      //     fields: [
      //       {
      //         name: 'name',
      //         type: 'text',
      //         label: 'Name',
      //       },
      //     ],
      //   },
      // ],
    }

    return extendedConfig
  }
