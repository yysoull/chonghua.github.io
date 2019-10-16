---
id: 2406
title: 完全禁止trackback和pingback
date: 2014-01-26T09:29:38+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2406
permalink: /disable-trackback-and-pingback/
categories:
  - wordpress技巧
tags:
  - pingback
  - trackback
  - 垃圾评论
---
开启trackback和pingback虽然能够增强博客间的互动，但是但初设计的时候的初衷完全不是现在这个样子的。现在trackback和pingback已经演变成了垃圾评论的一条通道。所以，我们已经没有理由保留这两个多余的功能。

<!--more-->

在WordPress中如果要禁止trackback和pingback，一般的做法是：在管理界面的设置菜单的讨论>选项下，取消“接收来自外部博客的引用通告（trackback和pingback）”的选中状态。但是，你会发现你还是会收到通过trackback发送的垃圾评论。这是为什么呢，因为这只是禁止了人们对将来的文章使用引用通告。要完全禁止所有引用通告，就必须要在“编辑文章”子面板中编辑过去的每篇文章，取消**允许引用通告**的选中状态。或者可以在shell账号的命令行中或用PhpMyAdmin执行以下 MySQL语句：`UPDATE wp_posts SET ping_status="closed";`

如果目标是永久性禁止引用通告，还需要删除<tt>wp-trackback.php</tt>文件。