---
id: 804
title: Firefox 4安装不兼容扩展
date: 2011-04-03T11:46:31+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/incompatible-extensions-installed-firefox-4/
permalink: /incompatible-extensions-installed-firefox-4/
categories:
  - 软件资源
tags:
  - firefox
  - 兼容
  - 扩展
---
在Firefox 3中我们可以按照下面的方法来安装一些不兼容的扩展:

1.首先打开Firefox浏览器，在地址栏内输入about:config，点击“我保证会小心”，进入Firefox的设置页面。这里为Firefox用户提供了一些高级设置选项以便让大家可以更加详细地控制火狐的运行方式.

2.在此页面中的任何地方，点击右键->新建->布尔->首选项名称为“`extensions.checkCompatibility`”（不含双引号），并将其值设为“false”（双击即可实现false和true之间的转换）.

3.按照步骤二新建另一个布尔值，名称为“extensions.checkUpdateSecurity”，并将其值设置为“false”。其实，这样做得目的是禁用扩展的兼容性检查.

但是在Firefox4中,貌似这种方法也不行,通过搜索,解决方法有点小差异,同样新建布尔值,**extensions.checkCompatibility.4.0**,设为false.

当然,我们也可以使用一些专门解决兼容性的扩展来解决这个烦恼!只是,能不用扩展,尽量不要用.