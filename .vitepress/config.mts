import { defineConfigWithTheme } from 'vitepress'
// @ts-ignore
import mdItCustomAttrs from 'markdown-it-custom-attrs'
export interface ThemeConfig {
  //navBar
  menuList: { name: string; url: string }[]

  //banner
  videoBanner: boolean
  name: string
  welcomeText: string
  motto: string[]
  social: { icon: string; url: string }[]

  //spine
  spineVoiceLang: 'zh' | 'jp'

  //footer
  footerName: string
  poweredList: { name: string; url: string }[]

  //giscus
  giscusRepo: string
  giscusRepoId: string
  giscusCategory: string
  giscusCategoryId: string
  giscusMapping: string
  giscusStrict: string
  giscusReactionsEnabled: string
  giscusEmitMetadata: string
  giscusInputPosition: string
  giscusTheme: string
}

export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    // bluearchive font
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka/Blueaka.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka_Bold/Blueaka_Bold.css',
      },
    ],
    // 图片灯箱
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js',
      },
    ],
  ],
  ignoreDeadLinks: true,
  // 生成站点地图
  // sitemap: {
  //   hostname: 'https://hb-ba-blog.pages.dev/'
  // },
  title: "Sensei HoshinoHB",
  description: "Sensei HoshinoHB",
  themeConfig: {
    // navBar
    menuList: [
      { name: '首页', url: '' },
      { name: '标签', url: 'tags/' },
    ],

    //banner区配置
    videoBanner: false,
    name: "Sensei HoshinoHB",
    welcomeText: '身份认证已通过，沙勒欢迎你',
    motto: ['和你的日常，就是奇迹', '何気ない日常で、ほんの少しの奇跡を見つける物語。'],
    social: [
      { icon: 'github', url: 'https://github.com/HoshinoHB' },
      { icon: 'bilibili', url: 'https://b23.tv/is2z37Y' },
      { icon: 'qq', url: 'https://im.qq.com/index/' },
      { icon: 'douyin', url: 'https://v.douyin.com/EWF0B9tiWWU/' },
    ],

    //spine语音配置，可选zh/jp
    spineVoiceLang: 'jp',

    //footer配置
    footerName: 'Sensei',
    poweredList: [
      { name: 'VitePress', url: 'https://github.com/vuejs/vitepress' },
      { name: 'GitHub Pages', url: 'https://docs.github.com/zh/pages' },
    ],

    //giscus配置
    giscusRepo: 'HoshinoHB/hb.ba.blog',
    giscusRepoId: 'R_kgDOTMEI6A',
    giscusCategory: 'Announcements',
    giscusCategoryId: 'DIC_kwDOTMEI6M4CltSJ',
    giscusMapping: 'pathname',
    giscusStrict: '0',
    giscusReactionsEnabled: '1',
    giscusEmitMetadata: '0',
    giscusInputPosition: 'bottom',
    giscusTheme: 'auto',
  },
  markdown: {
    theme: 'solarized-dark',
    lineNumbers: true,
    math: true,
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': 'gallery',
      })
    },
  },
})
