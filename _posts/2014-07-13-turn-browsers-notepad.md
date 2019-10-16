---
id: 2876
title: 开启浏览器的笔记功能
date: 2014-07-13T19:36:00+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2876
permalink: /turn-browsers-notepad/
categories:
  - 网络资源
tags:
  - Bookmarklet
---
有时候浏览物业的时候需要临时编辑一段文字，怎么办，打开一个文本编辑器，现在，你不需要这么麻烦，一段代码就可以搞定，让你的浏览器变身为一个文本编辑器。<!--more-->

比如Firefox，我们先打开一个页面，将下面的一段js代码复制到地址栏：

<pre class="prettyprint">data:text/html, &lt;body contenteditable style=”font: 2rem/1.5 monospace;max-width:60rem;margin:0 auto;padding:4rem;”&gt;</pre>

然后回车，你会发现出现了一个可以编辑文字的空白页面。

<img src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/notepadfirefox.png" alt="" width="620" height="500" /> 

你也可以将这个页面存为书签，需要的时候，直接在书签栏打开书签就可。是不是很方便。

话说，Linux下编辑真的很操蛋。