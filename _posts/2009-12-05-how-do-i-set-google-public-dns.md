---
id: 459
title: 如何设置Google公共DNS
date: 2009-12-05T12:55:15+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/how-do-i-set-google-public-dns/
permalink: /how-do-i-set-google-public-dns/
categories:
  - 网络资源
tags:
  - 公共DNS
  - OpenDns
---
首先明白一点google的服务大多是免费的,但是google的免费服务都能为google带来不菲的收入!

众所周知第三方的DNS服务OPENDNS是最为出名的,用户数也最多!功能也最为全面!相比而言google的DNS服务没有任何控制面板!

那么Google能从中获得什么呢?Google借免费DNS解析服务可以获得海量的数据，从分析DNS请求日志可以得到很多隐私数据，Google公司就可以更方便的有目标的投放广告，总而言之一句话，免费的DNS解析服务能给Google公司带来大量潜在的收入.

怎么设置呢?如果您用过OpenDNS那么就不用看了!以win xp为例!

<!--more-->

首先右击您的本地连接--tcp/ip-使用下面的DNS服务器地址-把那两个超级ip填进去就可以了!

生效的话可能要重启一下!</p> 

确认是否已经生效的话,可以再命令提示符中输入"nslookup"命令!

如果类似于下面的字符,就说明OK了!

C:Documents and SettingsAdministrator>nslookup  
Default Server:&#160; google-public-dns-a.google.com  
Address:&#160; 8.8.8.8 

不知道google的这两个ip花了多少钱哦!