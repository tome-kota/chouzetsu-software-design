import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "輪読会",
  description: "ちょうぜつソフトウェア設計入門輪読会の要約記事です",
  base: '/chouzetsu-software-design/',
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
      { text: '第1章', link: '/chapter-1' },
      { text: '第2章', link: '/chapter-2' },
      { text: '第3章', link: '/chapter-3' },
      { text: '第4章', link: '/chapter-4' },
      { text: '第5章', link: '/chapter-5' }
    ],

    sidebar: [
      {
        text: '輪読まとめ',
        items: [
          { text: '第1章 クリーンアーキテクチャ', link: '/chapter-1' },
          { text: '第2章 パッケージ原則', link: '/chapter-2' },
          { text: '第3章 オブジェクト指向', link: '/chapter-3' },
          { text: '第4章 UML（統一モデリング言語）', link: '/chapter-4' },
          { text: '第5章 オブジェクト指向 SOLID', link: '/chapter-5' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tome-kota/chouzetsu-software-design' }
    ]
  }
})
