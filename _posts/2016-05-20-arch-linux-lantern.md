---
id: 3093
title: Arch Linux安装Lantern
date: 2016-05-20T21:51:23+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=3093
permalink: /arch-linux-lantern/
categories:
  - Linux
tags:
  - Arch
---
Lantern 是一款非常简单的科学上网工具，多平台使用，相比较流行的 ss，免去了花钱或者寻找免费帐号的麻烦。一般情况下，在 Windows、安卓、Linux 下都可以很方便的下载到安装包安装，Arch Linux 的 AUR 里面也有，但是打包的时候会出现校验不通过而不能成功安装。

<!--more-->

所以我们还是需要手动打包，首先，我们到https://github.com/shiravand/aur-pkgbuild 下载打包配置文件，然后解压缩，文件夹内有amazon和Github两个文件夹，建议使用Github。

由于PKGBUILD文件默认是下载最新版的deb包进行解包打包，但是Github上面的二进制文件的sha1没有跟上，和deb包是不对应的，也正是这个原因，导致AUR里面打包不成功，所以我们需要做的是修改PKGBUILD文件里面的sha1sums，怎么知道sha1的值呢？在线的Hash值计算工具就可以满足你的需求，把配置文件里面的deb包计算一下sha1，同时修改PKGBUILD里面的sha1sums，目前来说，32位的正确，我们只需要改一下64位的即可。

然后使用makepkg -sri打包即可。  
图就不上了，有不明白的可以留言。