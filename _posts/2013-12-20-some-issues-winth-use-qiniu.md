---
id: 2359
title: 使用七牛镜像存储 WordPress 插件遇到的问题
date: 2013-12-20T13:34:01+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2359
permalink: /some-issues-winth-use-qiniu/
categories:
  - wordpress插件
tags:
  - CDN
  - 七牛
---
<a href="http://portal.qiniu.com/signup?code=3lno9u3pfcwgi" target="_blank">七牛</a>现在很流行的，重华也使用了一番，不管它到底起到多少作用，只要有机会使用CDN，还是一定要试试看的，能提升多少算多少。其实国内也有很多变相的可供使用的类似的CDN服务，比如SAE/BAE等等。但到底它们不是专门为此设立的，多少使用起来有点麻烦，而七牛，可以说，使用基本无门槛。

<!--more-->

但是重华在使用过程中也遇到了一些小问题。

由于重华经过长时间的思考和比对，最终在WP Super Cache 和W3 Total Cache中选择了W3 Total Cache，但是当我使用**七牛**的CDN服务时遇到了麻烦，我不知道如何在W3 Total Cache中设置七牛，而使用WP Super Cache时，可以有很方便的设置选项。

于是只能借助水煮鱼的“七牛镜像存储 WordPress 插件”，但是启用后，我发现我使用的主题中的一些CSS和JS文件并未被同步到七牛。

<img width="560" height="61" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2013-12-15_090309.png" alt="使用七牛镜像存储 WordPress 插件遇到的问题" /> 

可以看到，主题下的文件并没有同步到七牛的空间中。

到底是什么原因呢？问了许多人，都没有回答，也搜索不到什么答案，不过最后还是让重华找到了原因。

找到水煮鱼插件的后台设置界面

<img width="560" height="228" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2013-12-17_213247.png" alt="使用七牛镜像存储 WordPress 插件遇到的问题" /> 

有一个“静态文件域名”的输入框，我不知道是我输入的还是插件默认填写的。如果你没有使用其它的二级域名做为静态文件的访问地址的话，这个输入框一定要留空。否则，加速不会生效。

话说W3 Total Cache到底如何设置七牛呢，有谁会的话也教教我撒。