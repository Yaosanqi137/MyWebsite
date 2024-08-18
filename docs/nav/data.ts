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
      {
        icon: 'https://www.planetminecraft.com/favicon.ico',
        title: 'PlanetMinecraft',
        desc: '可以来这里下载地图',
        link: 'https://www.planetminecraft.com/',
      },
      {
        icon: 'https://www.fastmirror.net/favicon.ico',
        title: '无极镜像',
        desc: '官网下服务端很慢？来这里下载!',
        link: 'https://www.fastmirror.net/',
      },
      {
        icon: 'https://builds.guizhanss.com/favicon.ico',
        title: '鬼斩构建站',
        desc: '来这里下载粘液科技及其附属插件!',
        link: 'https://builds.guizhanss.com/',
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
      {
        icon: 'https://img.fastmirror.net/s/2024/08/18/66c1a102cf567.png',
        title: '茂茂导航站',
        desc: '本网站模板的作者的网站',
        link: 'https://fe-nav.netlify.app/nav/',
      },
      {
        icon: 'https://img.fastmirror.net/favicon.ico',
        title: '无极图床',
        desc: '一个好用的图床工具,限额 100 MB',
        link: 'https://img.fastmirror.net/',
      },
      {
        icon: 'https://greasyfork.org/vite/assets/blacklogo16-DftkYuVe.png',
        title: '油猴脚本',
        desc: '网上冲浪必备',
        link: 'https://greasyfork.org/',
      },
      {
        icon: 'https://ai.ashuiai.com/favicon.ico',
        title: '阿水 AI',
        desc: '好用的 AI 在线工具',
        link: 'https://ai.ashuiai.com/home',
      },
      {
        icon: 'https://yandex.com/favicon.ico',
        title: 'Yandex',
        desc: '俄罗斯老大哥的搜索引擎,搜图好用',
        link: 'https://yandex.com/',
      },
      {
        icon: 'https://mirrors.tuna.tsinghua.edu.cn/static/img/favicon.png',
        title: '清华大学软件镜像站',
        desc: '虽然我不是这个学校的，但是我还是照样用(乐',
        link: 'https://mirrors.tuna.tsinghua.edu.cn',
      },
      {
        icon: 'https://zi.tools/favicon.ico',
        title: '字统网',
        desc: '你甚至可以在这里造字',
        link: 'https://zi.tools',
      },
      {
        icon: 'https://img.fastmirror.net/s/2024/08/18/66c1a6d72c830.png',
        title: 'MOOC',
        desc: '大学生必备',
        link: 'https://www.icourse163.org/',
      },
      {
        icon: 'https://ikuuu.pw/favicon.ico',
        title: 'IKUUU',
        desc: '好用的梯子，挺便宜的',
        link: 'https://ikuuu.pw/',
      },
      {
        icon: 'https://www.netlify.com/favicon.ico',
        title: 'Netlify',
        desc: '可以把你的个人网站挂载在这里,还不用钱',
        link: 'https://www.netlify.com/',
      },
    ],
  }
]
