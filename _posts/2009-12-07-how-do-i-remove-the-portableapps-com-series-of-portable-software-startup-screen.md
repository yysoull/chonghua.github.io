---
id: 461
title: 如何去除PortableApps.com系列便携软件的启动画面
date: 2009-12-07T11:25:07+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/how-do-i-remove-the-portableapps-com-series-of-portable-software-startup-screen/
permalink: /remove-the-portableapps-com-series-of-portable-software-startup-screen/
categories:
  - 其他资源
tags:
  - PortableApps
---
<a href="http://PortableApps.com" target="_blank"><img style="display: inline; margin-left: 0px; margin-right: 0px" align="right" src="http://portableapps.com/sites/all/themes/portableappsnew/images/portable_apps_logo.png" width="222" height="66" / alt="如何去除PortableApps.com系列便携软件的启动画面" > PortableApps.com</a>出品的一系列便携软件是我的最爱,话说使用便携软件有诸多的好处!比如说你重装系统了,所有的配置都在,还可以放在移动硬盘或者U盘带到别的电脑上使用你自己定制的软件,还有比如你装了双系统(仅仅指windows),在另一个系统中只要创建一个快捷方式也可以使用原来的配置!

<!--more-->

现在切入正题!拿我们最常用的**<a href="http://portableapps.com/apps/internet/firefox_portable" target="_blank">Firefox Portable</a>**来说,你启动时会出现下面的启动画面,实在是有点讨厌!</p> 

不过<a href="http://PortableApps.com" target="_blank">PortableApps.com</a>的软件好在都是统一格式封装的,有其很方便的定制功能,不知道大家注意过没有在便携软件的安装目录下有一个Source目录,里面有个配置文件,名为"FirefoxPortable.ini"比如我的就在

D:FirefoxPortableOtherSource</p> 

用任何文本编辑器打开,找到

DisableSplashScreen这一行</p> 

将原来的值false改为true!保存!

还没完!

再将这份配置复制一份到FirefoxPortable的根目录!

更新：现在默认已经没有启动画面了。