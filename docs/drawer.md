---
id: drawer
title: '侧边栏'
sidebar_label: 侧边栏
slug: 
---
用 React 简单实现了一下 侧边栏。

项目地址：[React](https://github.com/plusmultiply0/app-ideas-exercise/tree/master/Drawer)

### 基本思路
点击显示的某块区域时，应该显示出侧边栏。当点击侧边栏中关闭或非侧边栏区域时，侧边栏应该关闭。

当然，为了做的相对完善一些。
侧边栏的出现消失可以加上动画，未被侧边栏覆盖的区域可以加上一层半透明的黑色背景。

**具体** 就是通过点击事件控制 class 的有无，来增加/去掉相应的样式。并且，为了方便状态管理，将状态提升至 App 组件，向下传递方法以方便控制状态（开关侧边栏）。

**细节**方面，可能要注意组件间的层叠关系。

### 参考链接
- [react-music](https://github.com/maomao1996/react-music)
- [drawer](https://github.com/search?l=JavaScript&p=2&q=drawer&type=Repositories)