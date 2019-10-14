---
id: 1115
title: 如何找出快播和百度影音的播放地址
date: 2013-01-08T22:52:18+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1115
permalink: /how-to-find-out-fast-broadcast-and-video-playback-address-baidu/
categories:
  - 软件资源
tags:
  - ryBDown
  - 快播
  - 百度影音
---
现在很多人网上看电影、看连续剧或者看x片都喜欢使用快播或者百度影音，几乎是无限的资源啊，如果你下载的是安装版的软件，那么它们会自动安装浏览器的支持插件，在你进入网页的播放页面时会自动嗅探到播放地址，开始缓存播放。不过如果你安装的是第三方修改过的版本的所谓绿色版，或者你不喜欢安装第三方的浏览器插件，那么浏览器就无法自动嗅探到影片的地址了。

<!--more-->

其实，和迅雷、快车等专用链接一样，快播和百度影音的播放链接也可以想办法来得到，这里有两种方法可供选择。

#### 1.手工提取

我们以tom365网站为例：

打开一个节目的页面

<img style="display: inline; margin-left: 0px; margin-right: 0px" align="right" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/kb.png" width="520" height="297"/ alt="如何找出快播和百度影音的播放地址" > 

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

我们可以看到上面有三个播放的链接，我们把鼠标放到链接的上面，可以看到分别是如下的链接：

http://www.tom365.net/movie\_2004/index/p2ps.htm?630804505%2FE3D93467E89232DAD36FCE7693DD5262A643C925%2F%E6%96%B0%E7%89%B9%E8%AD%A6%E5%88%A4%E5%AE%98\_TOM365.rmvb?14055?105?20110826

http://www.tom365.net/movie\_2004/index/vods.htm?qvod%3A%2F%2F630804505%7C142767B7CD03B16B25DD92245EFA97D59E139C32%7C%E6%96%B0%E7%89%B9%E8%AD%A6%E5%88%A4%E5%AE%98\_TOM365.rmvb%7C?14055?08268

http://www.tom365.net/movie_2004/index/baidus.htm?bdhd%3A%2F%2F630804505%7CA61B812349C1BC169087D7DE6D0490FE%7CDredd.2012.BluRay.1080p.DTS.x264-CHD.rmvb?14055?0826

两种播放器的地址是以qvod和bdhd开头的，第一个咱么就不管了，第二和第三个很容易看到这两个开始的字母。不过这个链接使用Escape_Encode加了密，我们只需要找个解密工具就可以看到真实的地址

http://www.tom365.net/movie_2004/index/vods.htm?<font color="#ff0000">qvod://630804505|142767B7CD03B16B25DD92245EFA97D59E139C32|æ°ç¹è&shy;¦å¤å®_TOM365.rmvb|</font>?14055?08268

红色部分就是真实的播放地址了，注意是以|结尾的。没有这个|是不行的哦。百度影音也是类似的。

这个是非常明显的，很容易可以找出来的，有的则比较难找出来。比如下面这种就比较常见。以html后缀结尾。

http://www.xxx.com/player/73967-0-1.html

没有明显的链接地址，我们先查看一下该页面的源代码，可以找到如下的部分

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/kb1.png" width="520" height="85"/ alt="如何找出快播和百度影音的播放地址" > 

&nbsp;

高亮部分是一个js文件，我们打开该js文件

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/kb2.png" width="520" height="43"/ alt="如何找出快播和百度影音的播放地址" > 

ok，我们可以看到qvod开头的字样了，地址也找到了。至于这个js文件在什么位置，重华只能说尽量靠近播放器的调入代码的地方去找！

#### 2.使用软件工具

是不是觉得很麻烦，确实很麻烦，不过有人写了一个分析这两种播放器地址的软件-ryBDown，只要将播放页面地址填进去分析一下，就可以直接得到播放地址。

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/kb3_zpsec899e47.png" width="520" height="415"/ alt="如何找出快播和百度影音的播放地址" > 

软件的官方页面：<a title="http://www.itrycn.com/freeView_id_515.html" href="http://www.itrycn.com/freeView_id_515.html" target="_blank">http://www.itrycn.com/freeView_id_515.html</a>

从此以后你就可以尽情享受第三方精简去广告的绿色版本了，再也不必担心浏览器被这些插件拖慢速度！尽情看片无烦恼！