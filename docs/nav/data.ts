import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '我的世界开服相关',
    items: [
      {
        icon: '/icons/book.png',
        title: 'NitWikit',
        desc: '我的世界笨蛋级开服教程',
        link: 'https://yizhan.wiki/NitWikit/',
      },
      {
        icon: 'https://www.minebbs.com/data/assets/logo/MB1-.png',
        title: 'MineBBS',
        desc: '继 MCBBS 后最大的 MC 论坛',
        link: 'https://www.minebbs.com',
      },
      {
        icon: 'https://www.mcmod.cn/images/favicon.ico',
        title: 'MCMOD',
        desc: '我的世界国内最大的 Mod 社区',
        link: 'https://www.mcmod.cn',
      },
      {
        icon: 'https://www.tinksp.com/data/assets/logo/T.png',
        title: 'TinkSP',
        desc: '黑插件或付费插件在这找',
        link: 'https://www.tinksp.com/',
      },
      {
        icon: 'https://mcbbs2.net/template/mcbbs/image/special_photo_bg.png',
        title: 'MCBBS2',
        desc: 'MCBBS...2???',
        link: 'https://mcbbs2.net',
      },
      {
        icon: 'https://www.spigotmc.org/favicon.ico',
        title: 'SpigotMC',
        desc: '全球最大的 MC 插件论坛，建议在这里下插件',
        link: 'https://www.spigotmc.org',
      },
    ],
  },{
    title: '常用小工具',
    items: [
      {
        icon: 'https://img.fastmirror.net/s/2024/08/17/66c09f5a95a46.png',
        title: '菜鸟教程',
        desc: '编程菜鸟必备网站',
        link: 'https://www.runoob.com/',
      },
    ],
  }
]
