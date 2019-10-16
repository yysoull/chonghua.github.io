---
id: 1220
title: 恢复Chrome的老式右键菜单
date: 2013-04-10T23:04:59+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1220
permalink: /get-back-chrome-old-style-context-menu/
categories:
  - 其他资源
tags:
  - chrome
---
有没有发现Chrome升级后，右键菜单变了样，反正我是很不习惯，还是那种老的样式比较顺眼，难道我应该安装以前的版本吗，其实不用那么复杂。

<!--more-->

很多软件都有所谓的启动参数，Chrome也不例外。比如以前Chrome正式版还不支持扩展的时候，我们也曾经加过启动参数来使它支持扩展，现在我们同样可以这么做。

在Chrome的快捷方式的目标栏添加下面的参数：

<pre class="prettyprint">-disable-new-menu-style
</pre></p> 

完整的路径应该类似于下面这样：

<pre class="prettyprint">C:GoogleChromeApplicationchrome.exe -disable-new-menu-style
</pre>

注意exe后面有个空格。

然后，通过这个快捷方式启动的Chrome就恢复了老式的右键菜单了。

[via <a href="http://techdows.com/2013/04/dont-like-chromes-new-menus-here-is-how-to-disable-them.html" target="_blank">Techdows</a>]