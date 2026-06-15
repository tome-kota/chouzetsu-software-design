import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "輪読会",
  description: "ちょうぜつソフトウェア設計入門輪読会の要約記事です",
  lang: 'ja-JP',
  srcDir: './docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '第1章', link: '/chapter-1' }
    ],

    sidebar: [
      {
        text: '輪読まとめ',
        items: [
          { text: '第1章 クリーンアーキテクチャ', link: '/chapter-1' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
