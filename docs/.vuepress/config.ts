import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import path from 'path'

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  base: '/line-pay-merchant/',
  lang: 'en-US',
  title: 'LINE Pay Merchant',
  description: 'LINE Pay V3 Online APIs library for Node.js',

  markdown: {
    importCode: {
      handleImportPath: str =>
        str.replace(/^@/, path.resolve(__dirname, '../../src'))
    }
  },

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    navbar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/introduction'
      },
      {
        text: 'API Reference',
        link: '/api-reference/request'
      },
      {
        text: 'Resources',
        children: [
          {
            text: 'Official Online API V3 Guide',
            link: 'https://pay.line.me/tw/developers/apis/onlineApis?locale=en_US'
          }
        ]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/enylin/line-pay-merchant'
      }
    ],
    sidebar: {
      '/': [],
      '/guide/': [
        {
          text: 'Guide',
          children: [
            '/guide/introduction.md',
            '/guide/getting-started.md',
            '/guide/sandbox-account-creation.md',
            '/guide/basic-usage.md',
            '/guide/handlers.md'
          ]
        }
      ],
      '/api-reference/': [
        {
          text: 'Reference',
          children: [
            '/api-reference/request.md',
            '/api-reference/confirm.md',
            '/api-reference/capture.md',
            '/api-reference/void.md',
            '/api-reference/refund.md',
            '/api-reference/payment-details.md',
            '/api-reference/check-payment-status.md',
            '/api-reference/check-regkey.md',
            '/api-reference/pay-preapproved.md',
            '/api-reference/expire-regkey.md'
          ]
        }
      ]
    }
  }
})
