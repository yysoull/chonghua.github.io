---
id: 277
title: 让ADSL自动拨号的几种方法
date: 2009-08-26T20:05:17+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/let-adsl-are-several-ways-to-auto-dial/
permalink: /let-adsl-are-several-ways-to-auto-dial/
categories:
  - 其他资源
tags:
  - ADSL自动拨号
---
有时候,你可能懒得每次上网都去手动拨号!你有几种方法可以解放出来,让系统自动为你拨号!

<!--more-->

1.买个路由器,只要在路由器中设置好了就一劳永逸了!但是此种方法也有其缺点,如果您的ADSL是限时的,那么您必须在关机后把路由器也一同关掉,否则,路由器还是一直会连线的!

2.把宽带拨号的快捷方式设置为开机启动,比如在开始菜单的启动目录中.但是这种方法需要注意的是,如果简单的直接拖进启动菜单,只会自动启动拨号连接,而不会自动拨上线,您需要做点小改动!

在宽带连接属性中找到选项,如下图:</p> 

这样就可以了!

3.刚刚看到<a href="http://www.kunshou.net/" target="_blank">困兽</a>同志贴出的方法:

  1. 将以下代码复制、粘贴到记事本 
  2. 把代码中的“宽带连接”修改为你建立的的拨号网络连接的名称，账号、密码分别修改为你的 ADSL 账号和密码 
  3. 将代码另存为：拨号.vbs，此时双击即可实现拨号 
  4. 把“拨号.vbs” 拖到开始菜单的启动项里 
  5. 完成。

> CreateObject("WScript.Shell").run"Rasdial 宽带连接 账号 密码",0

如果您有更好的方法,欢迎与大家分享!

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:0767317B-992E-4b12-91E0-4F059A8CECA8:b3f836a0-cbda-4d15-b712-22dc09e3759f" class="wlWriterEditableSmartContent">
  Technorati 标签: ADSL自动拨号
</div>