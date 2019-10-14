---
id: 2977
title: 改善Linux的字体渲染
date: 2015-04-01T18:59:00+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2977
permalink: /linux-font-config-infinality/
categories:
  - Linux
tags:
  - infinality
  - 字体
---
众所周知，Linux 下的字体是个很大的问题，不管你使用什么字体，Windows 下的“微软雅黑“、”宋体“也好，”文泉驿“也好，其实并不是这些字体的问题，而是 Linux 下的字体渲染问题，同样的字体在 Windows 或者 Mac OS 下却很漂亮，因为它们的字体渲染很出色。

<!--more-->

虽然对于字体渲染这种高端科技咱不太理解，不过好在有人理解并给出了解决的方法，重华试用了一下，效果还是非常好的。配置文件来自<a href="http://www.lulinux.com/" target="_blank">撸linux</a>，名字感觉好那个……作者给出了两大Linux发行版系列- rpm 和 deb 的一键设置 infinality 脚本，非常简单。对所有字体均有效果。

截图就不贴了，大家可以直接到作者的博客页面查看效果，或者直接自己下载一键设置脚本，直接查看效果，如果不满意也可以很方便的卸载。

<span style="color: #ff0000;">更新：</span>

关于使用此字体渲染脚本或者其它方式使用 infinality 补丁后无法登录系统或者无法启用硬件加速只能使用软件渲染方式运行的提示，尤其是使用 MDM 桌面显示管理器的情况下。您可以使用下面的方法尝试进行修复：

Ubuntu:

    sudo update-rc.d -f lightdm remove
    sudo update-rc.d lightdm defaults
    

Linux Mint:

    sudo update-rc.d -f mdm remove
    sudo update-rc.d mdm defaults
    

来源：<a href="https://github.com/achaphiv/ppa-fonts/blob/master/ppa/README.md" target="_blank">https://github.com/achaphiv/ppa-fonts/blob/master/ppa/README.md</a>

或者尝试下面的方法：

<a href="http://forums.linuxmint.com/viewtopic.php?f=208&t=136307" target="_blank">http://forums.linuxmint.com/viewtopic.php?f=208&t=136307</a>