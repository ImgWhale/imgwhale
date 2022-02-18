import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'imgwhale',
  description: 'imgwhale usage documentation.',
  shouldPrefetch: true,
  themeConfig: {
    logo: '/imgwhale.png',
    locales: {
      '/': {
        navbar: [
          { text: "Introduction", link: "/guide/" },
          {
            text: "Endpoints",
            children: [
              {
                text: "Endpoints",
                children: [
                  {
                    text: "New Storage",
                    link: "/guide/new.md",
                  },
                  {
                    text: "Get Storage",
                    link: "/guide/get.md",
                  },
                ],
              },
            ],
          },
          { text: 'Examples', link: '/examples/', },
        ],
      },
    },
    sidebar: {
      '/examples': [
        {
          text: 'Examples',
          collapsible: false,
          children: [
            '/examples/readme.md',
            '/examples/python.md',
            '/examples/dart.md',
          ],
        },
      ],
    },
    repo: 'https://github.com/BLUE-DEVIL1134/imgwhale',
    docsRepo: 'https://github.com/BLUE-DEVIL1134/imgwhale',
    docsBranch: 'gh-pages',
    editLink: true,
    editLinkPattern: ":repo/edit/:branch/docs/:path",
    repoLabel: "GitHub",
  },
});
