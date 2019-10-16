---
id: 289
title: 摆脱ISP的DNS劫持和摆脱本地DNS故障
date: 2009-08-29T22:10:44+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/from-the-isps-dns-hijacking-and-get-rid-of-the-local-dns-failure/
permalink: /from-the-isps-dns-hijacking-and-get-rid-of-the-local-dns-failure/
categories:
  - 其他资源
tags:
  - DNS
  - OpenDns
  - TreeWalk
---
<img title="图片引用自维基" style="display: inline; margin-left: 0px; margin-right: 0px" alt="图片引用自维基" src="http://upload.wikimedia.org/wikipedia/commons/e/ea/Crystal\_128\_yast_dns.png" align="right" / alt="摆脱ISP的DNS劫持和摆脱本地DNS故障" > DNS劫持是什么呢,先看一下维基百科的解释:

> **域名劫持**就是在劫持的网络范围内拦截域名解析的请求，分析请求的域名，把审查范围以外的请求放行，否则直接返回假的IP地址或者什么也不做使得请求失去响应，其效果就是对特定的网址不能访问或访问的是假网址。

比如你在访问某个网站时,会弹出电信的广告之类,或者你在地址栏输入的是:hechonghua.com,但是浏览器打开的是百度的页面,这就是所谓的DNS劫持,也就是域名劫持!

DNS故障会怎么样呢,让你直接不能访问网站,就是说当你输入hechonghua.com时无法浏览,只能用ip地址访问,因为此时DNS服务器,无法帮你转换ip地址到对应的域名!

<!--more-->

解决这些问题有两个方法:

1.<img src="http://upload.wikimedia.org/wikipedia/commons/f/f0/Opendns\_logo\_100.gif" / alt="摆脱ISP的DNS劫持和摆脱本地DNS故障" > 

不用当地的DNS服务器,换成<a href="http://www.opendns.com/" target="_blank">OpenDns</a>一类的DNS服务,具体的设置方法,OpenDns官方有详细的教程!但是因为OpenDns服务器在国外,所以解析的速度不是很满意!

2. 

与其他DNS服务不同的是**_TreeWalk_**是在你本地计算机进行的DNS解析服务,不受第三方服务的影响!所以解析的速度很快!**_TreeWalk_**安装成功后会以系统服务的方式为你服务!某些安全软件会报警,请注意放行!

只要下载后一路按下一步,就OK了,XP下无需你任何的设置,你可以再命令行中输入"nslookup"看看结果,如果显示下面的字样,证明已经成功了!

> C:Documents and SettingsAdministrator>nslookup  
> Default Server:&#160; localhost  
> Address:&#160; 127.0.0.1</p> 

最新版

#### TreeWalk DNS 8.21 - Hawk 下载地址

ZIP压缩包

exe安装包

官方主页