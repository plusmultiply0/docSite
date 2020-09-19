---
slug: build-docusaurus-site
title: Build Docusaurus Site
author: plusmultiply0
author_title: Undergraduate of HHU
author_url: https://github.com/plusmultiply0/
author_image_url: https://avatars0.githubusercontent.com/u/49120907?s=460&u=2e85146bc63952ab4910cd448b67b0a6a66f5e93&v=4
tags: [build,docusaurus,note]
---

This blog is to keep notes about how to build [**Docusaurus 2 alpha**](https://v2.docusaurus.io/) from the ground.

<!--truncate-->
9.8 根据文档，网站已成功部署在 Render 提供的静态主机上。

9.9 新建sidebar，修改文档配置和navbar，footer 内容

9.10 更新部分设置和修改主页部分样式

9.11 更新网站域名和部分设置

9.13 修改了网站的主页样式

9.14 修改了网站主页的高度响应式设计

todo:
- 修改主页，底边栏--[参考站点](https://messiahhh.github.io/blog/)--初步修改成功√
- 新域名(docsite.me?)--搞cpanel时，网站显示未发送任何数据？| 发了邮件，等待方案 | 需要一个主机/DNS/domain | 在 cloudFlare 上修改域名和对应的解析服务器--更换域名成功 √ --Render上免费有限制，又无法添加信用卡，故考虑更换部署站点| 暂时无需考虑更换站点，自定义域名可用，貌似是不熟悉 cloudflare 的问题。虽然信用卡仍然无法添加？发了邮件回了说可能是网络问题？|
- 找一下网站的logo，图片
- 搜索功能--后续做（algolia）/安装插件，组件引用？| 按了插件怎么用呢？
- 写 docusaurus 建站笔记
- 比较 docusaurus1 与 2 的区别
- 做文档翻译（可能）

记录一些建站过程的注意事项/待解决事项：
- 升级docusaurus版本的时候,需要注意一下。
因为，部署在render上是用yarn，也是用的yarn. lock，所以更新是应该使用yarn命令。
如果是用的npm install,yarn.lock不会更新而package更新了，部署构建的时候就会失败。

- 注意到，cloudflare上，设置域名的DNS时，代理状态设置为“代理”时，Render 上不会显示自定义域名成功，而且将代理状态设置为“仅限DNS“时，就没问题了。**这个地方需要再看看！**



**参考链接：**
- [关闭本地服务器被占用端口](https://stackoverflow.com/questions/49022731/keep-getting-something-is-already-running-on-port-3000-when-i-do-npm-start-o)