---
id: carousel
title: '轮播图'
sidebar_label: 轮播图
slug: 
---
手写了一个原生 js 和用 react 做的**简单**轮播图，react 组件的具有一定的复用性。

项目地址：[Vanilla Js](https://github.com/plusmultiply0/app-ideas-exercise/tree/master/Carousel-pic/origin) ,[React 版](https://github.com/plusmultiply0/app-ideas-exercise/tree/master/Carousel-pic/react)。

### 基本思路
原生js：
- 实现基本的 HTML 结构
- 实现基本的 CSS 样式，使其具有完整轮播图的样式
- 添加逻辑：自动轮播，点击切换，随图变化的变色圆球，点击圆球切换对应图片，鼠标停留图片时，停止轮播，离开时再继续等

react组件：
- 将图片作为 props 传入组件，组件实现功能和样式
- 目前是用 class 组件写的，相应的方法都写在组件内，大体思路同上。

### 待解决
react：
- 使用 hook 实现
- 精简代码
- 根据[参考](https://github.com/search?l=JavaScript&o=desc&q=%E8%BD%AE%E6%92%AD%E5%9B%BE&s=stars&type=Repositories)，进一步优化


### 参考链接
- [原生js实现轮播图](https://www.cnblogs.com/zhuzhenwei918/p/6416880.html)
- [原生js实现轮播图2](https://juejin.im/post/6844903670618800136#heading-9)
- [网易云音乐](https://music.163.com/)