---
id: 1203
title: ubuntu下修改hosts文件
date: 2013-03-10T22:15:00+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1203
permalink: /ubuntu-modify-hosts-file/
categories:
  - Linux
tags:
  - hosts
  - ubuntu
---
在Windows下面，我们修改hosts文件都知道在哪里，就在C:WINDOWSsystem32driversetc这个目录下面，通过修改hosts文件，我们可以实现一些特殊的作用，比如说一个不可告人的目的。除了手工编辑这个文件之外，我们还有很多小软件可供使用。

<!--more-->

但是在**ubuntu**系统中呢，还有其它的系统，比如安卓手机，或许就没那么多的小软件可供你简单的修改了，其实在ubuntu的系统中修改同样很简单。

首先，打开**hosts**文件

<pre class="prettyprint">sudo gedit /etc/hosts</pre>

这个是调用系统默认的编辑器，你当然可以使用其它的文本编辑器编辑。

格式

<pre class="prettyprint">216.239.37.99 www.google.com</pre>

<pre class="prettyprint">127.0.0.1 localhost</pre></p> 

<font face="Courier New"></font>

和Windows系统下面是一样的。不过需要生效的话，还有一个步骤，重启一下网络

<pre class="prettyprint">sudo /etc/init.d/networking restart</pre>

&nbsp;

此文纯粹纪念重华部落格被Google管理员工具查出的404页面，原来的几百篇文章也不知道哪一年全部丢失了。