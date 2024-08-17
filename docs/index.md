---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: Yao37の
  text: 个人资源网站
  tagline: 随便啦
  image:
    src: /logo.png
    alt: Yao37
  actions:
    - text: Yao37的小屋
      link: /myhouse
    - text: 功能导航
      link: /nav/
      theme: alt
    - text: 关于本站
      link: /test
      theme: alt
features:
  - icon: 📕
    title: Minecraft
    details: 我整理些一下开服常用的资源和站点 <br>什么? 你看不懂英文不会用电脑?赶紧滚!</br>
    link: working
    linkText: 我的世界开服相关
  - icon: 🖊
    title: 我的故事
    details: 有时候我心血来潮的时候可能会在里面塞点东西 <br>可以没事当乐子看 :(</br>
    link: myhouse
    linkText: 去看我的故事
  - icon: 🤔
    title: 一些知识
    details: 有时候我学到了什么知识或者想转载一些文章可能会放在这里
    link: working
    linkText: 去康康
  - icon: 🔧
    title: 我常用的小工具
    details: 我觉得好用的工具会放在这里<br>大家觉得有需要可以去看看
    link: working
    linkText: 去使用小工具
  - icon: 😅
    title: 乐子 Wiki
    details: 集成了互联网中，尤其是 MC 开服圈中的一些乐子
    link: https://yizhan.wiki/lezi-wiki/
    linkText: 去看乐子
  - icon: 🍚
    title: 看 fufu
    details: 康康我的雪 fufu 和大傻</br>还有一只小傻
    link: fufu
    linkText: 去看 fufu
  - icon: 🏫
    title: 中国海洋大学
    details: 汇总了一些新生须知的信息<br>以及学校里面的一些好玩的地方
    link: nav/index
    linkText: 去看 fufu
  - icon: 🧰
    title: Changelog
    details: 网站的更新内容我会写在这里</br>只写大概更新了什么，详细的去看 GitHub 里面的 commit
    link: changelog
    linkText: 去看更新记录
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
