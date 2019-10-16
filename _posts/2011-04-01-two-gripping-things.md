---
id: 803
title: 两件揪心事
date: 2011-04-01T23:12:43+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/two-gripping-things/
permalink: /two-gripping-things/
categories:
  - 其他资源
tags:
  - cpanel
  - rvskin
  - x3
  - 网站带宽
  - 网站流量
---
今天重华部落格终于还是出现了几个小时的离线,带宽使用超标,虽然前天给我增加了500M左右的带宽,无奈还是没有撑过三月的最后一天,然后离奇的事情发生了,_cPanel_后台无法进入，还有就是主题因为没有经验,换成了rvskin但是这个主题在这个主机上却没有更换主题的选项,于是只好Google加百度,终于解决了问题!在这里重华分享一下过程,为和重华遇到相似问题的朋友做个参考!

首先:

如果您无法进入后台,如果您的后台登录地址是IP形式的,那么尝试换成您的域名,比如说您的管理地址的前面是

**1.1.1.1:2082/frontend/x3/index.html**,

那么改成

**http://<font color="#000000">abc</font>.com:2082/frontend/x3/index.html**

这样的形式.或许能够成功进入后台.

而且你的现在的主题必须是rvskin.

现在您可以在地址栏输入Cpanel后台地址/frontend/rvskin/rvskin/dothemef.html?themename=x3回车后稍等片刻,成功的话就会出现x3的主题了,现在你就可以将英文改成中文了!

还是那句话,限制流量的主机,还是少去尝试一些会增加流量的服务!比如说使用机器人或者蜘蛛的服务,某些不良的机器人会把你的带宽直接拖垮!