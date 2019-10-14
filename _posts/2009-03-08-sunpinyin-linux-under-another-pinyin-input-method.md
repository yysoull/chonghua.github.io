---
id: 71
title: 'SunPinyin: Linux下又一拼音输入法'
date: 2009-03-08T12:50:12+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/sunpinyin-linux-under-another-pinyin-input-method/
permalink: /sunpinyin-linux-under-another-pinyin-input-method/
categories:
  - Linux
tags:
  - 拼音输入法，sunpinyin
---
目前现有的Linux下的拼音输入法没有一款真正好用的，极大的打击了使用Linux的积极性。Sun拼音，linux下的又一款拼音输入法。体验尚可，总体来说，应该是目前Linux下最好用的拼音输入法了。并且还有mac版本，本人未曾试过。

<!--more-->

编译安装： 

  1. 去http://mentors.debian.net/debian/pool/main/s/sunpinyin/ 把三个包包下下来。 
  2. $ dpkg-source -x sunpinyin_1.0~hg20090201-1.dsc 
  3. $ cd sunpinyin-1.0~hg20090201/ 
  4. $ sudo dpkg-buildpackage 

最后得到：  
iiimf-le-sunpinyin-chinese\_1.0~hg20090201-1\_i386.deb  
scim-sunpinyin\_1.0~hg20090201-1\_i386.deb  
sunpinyin-data-be\_1.0~hg20090201-1\_all.deb  
sunpinyin-data-le\_1.0~hg20090201-1\_all.deb  
四个deb包。其中scim开头那个是scim用的，sunpinyin-data-le开头那个是x86这样 little-endian的平台用的。安装它们两个就可以了。  
可以下载编译好的deb包包：  
scim-sunpinyin\_1.0~hg20090201-1\_i386.deb：下载  
sunpinyin-data-le\_1.0~hg20090201-1\_all.deb：下载  
开发者博客：[Yong Sun](http://blogs.sun.com/yongsun/)  
项目主页：<http://www.opensolaris.org/os/project/input-method/>