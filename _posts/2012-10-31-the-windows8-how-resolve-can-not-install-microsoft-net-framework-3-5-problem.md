---
id: 1029
title: Windows8如何解决不能安装Microsoft .NET Framework 3.5的问题
date: 2012-10-31T23:43:19+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1029
permalink: /the-windows8-how-resolve-can-not-install-microsoft-net-framework-3-5-problem/
categories:
  - 其他资源
tags:
  - Microsoft .NET Framework
  - windows8
---
某些同志可能安装Windows8后无法安装使用Microsoft .NET Framework 3.5，虽然Windows8已经内置了4.0，但是某些程序仍然会要求你必须使用Microsoft .NET Framework 3.5，但是由于人品以及其它的一些原因，无论是在线还是完整包都始终无法安装，甚为恼火!但是Windows8的镜像中已经包含了所2.0,3.0和3.5的版本,您需要做的仅仅是输入一个命令就可以解决!

<!--more-->

<img style="float: none; margin-left: auto; display: block; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2fdda3cc7cd98d108812c8ab213fb80e7ae.jpg"/ alt="Windows8如何解决不能安装Microsoft .NET Framework 3.5的问题" >

一般来说，您只要在控制面板中的“启用或关闭windows功能”中勾选就可以了，但是有可能在你选择后还会在线去搜索下载，问题依旧！

<img style="float: none; margin-left: auto; display: block; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/b151f8198618367accb1bd472e738bd4b31.png"/ alt="Windows8如何解决不能安装Microsoft .NET Framework 3.5的问题" >

重华猜测有可能和你安装系统的方式有关系！仅仅是猜测而已！

* * *

怎么解决呢！

1.解压缩或者使用windows8自带的加载ISO镜像功能，会自动加载为一个虚拟光驱，比如重华的是盘符“G”；

2.使用“win+x”\---命令提示符（管理员），输入以下命令，注意替换为您的实际盘符。

> dism.exe /online /enable-feature /featurename:NetFx3 /Source:G:sourcessxs

3.等待完成！

<img style="float: none; margin-left: auto; display: block; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2012-10-31_230843.png" width="520" height="341"/ alt="Windows8如何解决不能安装Microsoft .NET Framework 3.5的问题" >