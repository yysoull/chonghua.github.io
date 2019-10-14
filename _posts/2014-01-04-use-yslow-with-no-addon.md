---
id: 2394
title: 无需安装插件使用YSlow
date: 2014-01-04T14:44:00+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2394
permalink: /use-yslow-with-no-addon/
categories:
  - 网络资源
tags:
  - Bookmarklet
  - YSlow
---
YSlow是一款站长朋友们非常喜欢的一款网站优化检查的浏览器扩展，通常情况下要是用这个工具，我们先需要安装Firebug扩展，然后再安装YSlow，非常麻烦，而且扩展多了对浏览器也有影响。其实我们可以不必安装也一样使用这个工具来分析我们的网站。

<!--more-->

**YSlow**发布了一个**Bookmarklet**书签工具来加载。什么是“Bookmarklet”大家可以维基或者百度，前面介绍的《[wordpress和zblog留言自动填写个人信息代码](http://hechonghua.com/of-wordpress-and-zblog-message-automatically-fill-in-personal-information-code/)》就是一个Bookmarklet。

很简单，把下面的链接直接拖到浏览器的书签栏就可以了。

<a href="javascript:(function(y,p,o){p=y.body.appendChild(y.createElement('iframe'));p.id='YSLOW-bookmarklet';p.style.cssText='display:none';o=p.contentWindow.document;o.open().write('<head><body%20onload=&quot;YUI_config={win:window.parent,doc:window.parent.document};var%20d=document;d.getElementsByTagName('head')[0].appendChild(d.createElement('script')).src='http://yslow.org/yslow-bookmarklet.js'&quot;>');o.close()}(document))" class="btn btn-primary btn-lg active" role="button" alt="无需安装插件使用YSlow" >YSlow</a> 

这个是不分浏览器的，大多数浏览器都可以直接使用，如果不满意速度，你也可以把之中的js文件上传到国内更快的空间中。

<img src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2014-01-04_144215.png" width="600" height="377" alt="无需安装插件使用YSlow" /> 

使用起来和插件版本并无太大的区别。一般加载的位置在靠近中间位置，而不是底部。