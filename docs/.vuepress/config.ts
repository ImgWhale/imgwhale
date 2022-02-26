import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'imgwhale',
  description: 'imgwhale usage documentation.',
  shouldPrefetch: true,
  head: [
    ['link', { rel: 'icon', href: `/imgwhale.png` }],
    ['link', { rel: "apple-touch-icon", sizes: "512x512", href: "/ImgWhale.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/ImgWhale.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/ImgWhale.png"}],
    ['link', { rel: "mask-icon", href: "/ImgWhale.png", color: "#ffffff"}],
    ['link', { rel: "shortcut icon", href: "/ImgWhale.png"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
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
                  {
                    text: "List Uploads",
                    link: "/guide/get_all_uploads.md",
                  },
                  {
                    text: "Delete Uploads",
                    link: "/guide/delete.md",
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
