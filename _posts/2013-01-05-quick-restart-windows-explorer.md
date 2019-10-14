---
id: 1112
title: 快速重启Windows资源管理器
date: 2013-01-05T20:57:10+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1112
permalink: /quick-restart-windows-explorer/
categories:
  - 软件资源
tags:
  - explorer
  - 资源管理器
---
有些时候我们不得不重启Windows的资源管理器,比如:资源管理器假死了，在那里一动不动没法操作,我们想删除一些文件，提示正在使用中，尤其是一些集成在右键菜单中的程序。这个时候最好的办法就是关闭资源管理器的进程**explorer.exe**。

我们可以在任务管理器中直接结束这个进程，然后通过资源管理器的新建任务，再次打开资源管理器的进程，但是，你不觉得这样很麻烦吗？

<!--more-->

我们现在有两种方法可以很方便的快速重启explorer进程，批处理和专门的小程序。

#### 1.批处理的方法

Windows是支持通过命令直接关闭和开启进程和程序的,那么很简单,我们只要写一个批处理就OK了。打开任意记事本或者代码编辑器,粘贴下面的命令:

<pre class="brush: c-sharp; toolbar: false">@echo off
echo.
echo Killing the explorer.exe process....
echo.
taskkill /f /im explorer.exe
echo.
echo.
echo. 
echo Waiting to restart explorer.exe.....
pause
start explorer.exe
echo.
echo.
echo explorer.exe has been restarted.
wait4
exit</pre>

文件另存为bat文件，打开后的效果如下

<p style="text-align: center;">
  <img class="aligncenter" alt="" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/rest.png" width="520" height="420" / alt="快速重启Windows资源管理器" >
</p>

如果你不希望出现上面的信息,那么只要输入下面的几行代码,另存为bat文件:

<pre class="brush: c-sharp; toolbar: false">taskkill /f /im explorer.exe & start explorer.exe</pre>

这样就不会有任何提示。你也可以将此命令集成到右键菜单之中。

#### 2.通过专门实现此功能的小软件

<a href="http://www.nirsoft.net/" target="_blank">NirSoft</a>众多的实用小软件中有一款Explorestart，专门为此而生，直接运行即可，不会有任何的显示。支持Windows98-xp之间版本的Windows系统。

下载地址：<a title="http://www.nirsoft.net/utils/restart_explorer.html" href="http://www.nirsoft.net/utils/restart_explorer.html" target="_blank">http://www.nirsoft.net/utils/restart_explorer.html</a>

在此<a href="http://hechonghua.com/" target="_blank">重华</a>也特别推荐一下NirSoft的一系列软件，短小精悍，个头不大，作用有时候却是非常的大。

其实Windows8下的任务管理器也可以非常快的重启资源管理器

<img style="display: block; float: none; margin-left: auto; margin-right: auto;" alt="" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/restart.png" width="520" height="557" / alt="快速重启Windows资源管理器" >