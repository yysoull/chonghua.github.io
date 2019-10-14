---
id: 2986
title: 网易云音乐Linux版
date: 2015-04-28T08:14:00+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2986
permalink: /neteasemusic-for-linux/
categories:
  - Linux
tags:
  - NetEaseMusic
  - 网易云音乐
---
网易云音乐应该是目前最流行的音乐服务了，不过依然没有 Linux 下的客户端，而仅有一个终端下的命令版本，或者使用一个封装的 Web 版本，没有一个正真意义上的客户端。<a href="http://www.cosven.com" target="_blank">Cosven</a> 为之套上了一个 GUI 界面，成了一个非常简单地客户端。<!--more-->NetEaseMusic for Linux 目前的功能很简单，只有搜索 、收藏功能，甚至连音量调节也没有，不过作者应该会在接下来的开发中进行完善。

![](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/netmusic.png) 

依赖：

Python 2.7, PyQt4, PyQt4-phonon

Ubuntu 和 Debian 下可以使用以下命令安装依赖：

<pre>sudo apt-get install python-qt4
sudo apt-get install python-qt4-phonon
</pre>

  * 运行generateDesktopIcon.sh，就可以在桌面上找到图标，也能在dash中搜索到程序，搜索关键字是neteasemusic
  * 下载源代码: 可以使用git，`git clone https://git.oschina.net/zjuysw/NetEaseMusic.git`。或者，直接下载代码压缩包。
  * 打开命令行，cd进入到NetEaseMusic文件夹，运行`chmod +x main.py`, 给main.py可执行权限。
  * 这时候，可以在文件管理器中直接双击运行。

项目地址：https://git.oschina.net/zjuysw/NetEaseMusic