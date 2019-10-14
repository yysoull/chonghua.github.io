---
id: 1042
title: Windows xp下快速修复wubi启动项
date: 2012-11-10T22:42:03+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1042
permalink: /windows-xp-quick-fix-wubi-start/
categories:
  - 其他资源
tags:
  - wubi
  - 修复ubuntu
  - 启动菜单
---
假如您使用Windows下安装ubuntu系统后,那么在您重装xp系统后,wubi的启动菜单将会消失,也就无法进入ubuntu系统了!难道还要重新再安装一次ubuntu吗?或者是使用什么启动项修复工具?其实大可不必,很简单的就可以修复.

<!--more-->

按照下面的方法,完全不会超过一分钟.

1.在windows中打开ubuntu的安装光盘，寻找wubildr和wubildr.mbr这两个文件，将它们复制到windows的启动分区下,一般就是C盘的根目录;

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2012-11-10_222325.png" width="520" height="390"/ alt="Windows xp下快速修复wubi启动项" > </p> 

2.编辑boot.ini文件,在最后一行加入

<pre><p>
  C:wubildr.mbr="ubuntu"
</p></pre>

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2012-11-10_222549.png" width="520" height="390"/ alt="Windows xp下快速修复wubi启动项" > 

其中C就是您的系统盘符,然后保存此文件.

3.重启电脑,不出意外您就可以看到ubuntu的菜单了!

<font color="#ff0000">注意</font>:

  1. 此文件是系统的启动配置文件,默认是受到系统保护的,无法直接编辑,您可以在我的电脑-属性-高级-启动和恢复中进行编辑.
  2. 仅适用于xp系统下使用wubi安装的ubuntu,win7和直接安装的ubuntu无效.