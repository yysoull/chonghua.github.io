---
id: 3031
title: 删除Windows 10预安装的应用
date: 2015-12-05T12:02:24+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=3031
permalink: /uninstall-windows10-app/
categories:
  - 软件资源
tags:
  - Groove Music
  - Powershell
---
Windows 10 预先安装了一些应用，而这其中很多应用，在国内无法体验其全部功能或者你根本就不需要。但是有一部分应用你是无法删除的。有强迫症的人当然不能容忍。

<!--more-->

拿 **Groove Music** 来举例，登录功能在国内不可用，而且并无什么有点特色，留它何用。我们有几种方法来卸载掉。

![删除Windows 10预安装的应用](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/winapp.png) 

### 使用 Windows Powershell 手工卸载

使用管理员权限打开Windows Powershell，输入下面的命令，然后回车。

`Get-AppxPackage –AllUsers`

等待命令执行完毕，然后右键点击标题栏-编辑-搜索，使用搜索功能搜索关键词"**ZuneMusic**"，找到此应用的全名。比如我的是：

**Microsoft.ZuneMusic\_3.6.13821.0\_x64__8wekyb3d8bbwe**

然后回到 Windows Powershell，输入下面的命令，回车。

<pre>remove-AppxPackage Microsoft.ZuneMusic_3.6.13821.0_x64__8wekyb3d8bbwe</pre>

![删除Windows 10预安装的应用](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/winapp2.png) 

此时，**Groove Music** 已经被删除。你可以使用以上的步骤卸载任何你需要卸载掉的应用。

### 使用软件卸载

这类软件目前有很多，比如：<a href="http://www.thewindowsclub.com/10appsmanager-windows-10" target="_blank">10AppsManager for Windows 10</a> 以及前面介绍的 <a href="https://github.com/10se1ucgo/DisableWinTracking" target="_blank">DisableWinTracking</a>。而最新版的 **CCleaner** 现在也可以直接卸载。