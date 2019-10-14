---
id: 1127
title: 摩托罗拉MotoBlur账户问题
date: 2013-01-21T11:50:41+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1127
permalink: /motorola-motoblur-account-problems/
categories:
  - 其他资源
tags:
  - blur
  - 摩托罗拉
---
MotoBlur是摩托罗拉的一款定制的社交平台，集成了国内外众多的社交网站的应用，此外还拥有云备份和远程销毁手机数据的功能，但是这个Blur的账户问题比较复杂，经常会令用户感到无所适从。

<!--more-->

忘记了密码怎么办？

你可以访问[https://portal-moto.svcmot.com/moto-web-portal/](https://portal-moto.svcmot.com/moto-web-portal/ "https://portal-moto.svcmot.com/moto-web-portal/")页面进行密码重置，前提是你记得你的用户名邮件地址。

假如你连用户名都忘记了，怎么办呢？我们还有方法。前提是你的手机是ROOT过的。1.用RE文件管理器打开系统data/system下的accounts.db数据库文件；

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/blur_zpsa5c96790.png"/ alt="摩托罗拉MotoBlur账户问题" > 

2.查看accounts项目，看到摩托罗拉字样后面的就是你的Blur密码了。

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/blur2_zps0026797f.png"/ alt="摩托罗拉MotoBlur账户问题" > 

话说安卓也太那个了，密码居然就这么明文保存！

另外开启关闭Blur，也是很简单的，只需要修改system目录下build.prop文件的几行配置就可以了！

打开build.prop文件，大概在第140行左右。

ro.mot.setuptype=2（0和2代表启用，3是deblur，4是自动注册功能还在）

ro.mot.deblur=true表示是否deblur

ro.blur.setup.silent=false是否隐藏设置，true表示你看不到，相反就表示你能看到

按照你的需要增加或者修改删除几行配置！然后保存，重启。最好是wipe一下！理论上，你应该可以看到你想要的效果了！