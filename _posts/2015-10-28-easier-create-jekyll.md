---
id: 3007
title: Jekyll Now-快速部署Jekyll到Github
date: 2015-10-28T23:07:33+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=3007
permalink: /easier-create-jekyll/
categories:
  - 网络资源
tags:
  - Jekyll
---
通常搭建类似 Jekyll 这样的静态博客，你必须在本地电脑安装一大堆的东西，比如安装ruby以及各种插件，还得使用git命令推送。只有少数几个支持直接 Fork。例如：<a href="http://hubpress.io/index.html" target="_blank">HubPress</a>、<a href="http://isnowfy.github.io/simple" target="_blank">Simple</a>。

<!--more-->

<a href="http://www.jekyllnow.com/" target="_blank">Jekyll Now</a> 是一个可以让你很方便的部署 Jekyll 博客的程序，而无须下载安装任何配置环境。

![Jekyll Now-快速部署Jekyll到Github](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/config.png) 

主要功能：  
✓ 响应式以及移动客户端优化的主题  
✓ Markdown 支持  
✓ 语法高亮  
✓ 集成 Disqus 评论  
✓ 集成 Google Analytics 统计  
✓ 底部提供 SVG 格式的社会化图标  
✓ 极少的 http 请求  
✘ 无需安装依赖  
✘ 无需设置本地开发环境  
✘ 无需配置插件  
✘ 无需花费时间在主题上 

如果你不喜欢折腾或者不想在本地安装一大堆的东西的话，这是个不错的选择。

另外，再推荐一个 Jekyll 的离线文章编辑器 <a href="https://github.com/Simpleyyt/jekyll-editor" target="_blank">Jekyll Editor</a>。

![Jekyll Now-快速部署Jekyll到Github](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/jekylleditor.png) 

这是一个 Chrome 浏览器的一个应用，可以很方便的发布文章到 Jekyll。而无须在本地编辑好文章后推送。

本应用基于以下两个项目：

<a href="https://github.com/pandao/editor.md" target="_blank">Editor.md</a>（是一款开源的、可嵌入的 Markdown 在线编辑器（组件），基于 CodeMirror、jQuery 和 Marked 构建。）

<a href="https://github.com/shinemoon/jekyller" target="_blank">jekyller</a>