---
id: 379
title: Firefox优化参数
date: 2009-10-05T19:04:16+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/firefox-optimization-parameters/
permalink: /firefox-optimization-parameters/
categories:
  - 其他资源
tags:
  - about:config
  - firefox优化
---
或许你人热衷于为Firefox浏览器加速,那么下面的这些参数,你可以试一试,按理论来说那是可行的!

或许你自己在研究这些参数后,也许自己会发觉一些更好的设置!

<!--more-->

_1、安装[BleachBit](http://bleachbit.sourceforge.net/download)(选择下载多语言版，支持Linux和Windows，已包含在Ubuntu 和Debian软件仓库内)，专门用于释放磁盘空间的开源工具，可清除Firefox的缓存和历史，改进启动速度。  
2、在地址栏输入about:config，改变设置以更快的渲染网页：创建新的整数值content.notify.backoffcount，设定值为5；创建新的值nglayout.initialpaint.delay，设定为0。第一个值是让Firefox不要等到整个网页全部下载后再去渲染，第二个值是改进渲染速度，不要等待网页的布局信息全部下载后再渲染。  
3、优化历史：打开about:config，将储存的浏览历史过期天数browser.history\_expire\_days从默认的180天从改为7天，browser.history\_expire\_days\_min从默认的90天改为7天（两个值也可以该为14或其它较低的天数），browser.history\_expire_sites定义储存的最大网站数量从默认的40000降到更少。  
4、加速菜单：打开about:config，创建新整数ui.submenuDelay，值设为0。  
5、禁用IPv6，IPv4仍然是主流，IPv6数量很少，因此关闭它可以提高速度：打开about:config，将network.dns.disableIPv6从默认的'False'改为'True'。  
6、增加缓存空间，如果你的内存有2GB，那么不妨把缓存设置大一点：打开about:config，创建browser.cache.memory.capacity，设为32768。"_

7、使用TraceMonkey JavaScript引擎：打开about:config，改javascript.options.jit.chrome为True，javascript.options.jit.content的值为True。  
8、优化TCP：打开about:config，加入（有些服务器不支持）  
browser.tabs.showSingleWindowModePrefs – true  
network.http.max-connections – 48  
network.http.max-connections-per-server – 16  
network.http.max-persistent-connections-per-proxy – 8  
network.http.max-persistent-connections-per-server – 4  
network.http.pipelining – true  
network.http.pipelining.maxrequests – 8  
network.http.proxy.pipelining – true  
network.http.request.timeout – 300  
content.notify.ontimer - true  
trim\_on\_minimize - true (Windows only)  
content.interrupt.parsing - true  
content.max.tokenizing.time - 2250000  
content.maxtextrun - 8191  
content.notify.interval - 750000  
content.switch.threshold - 750000 

需要注意的是复制的时候注意是否把空格也复制了进去!

另:

凡是"true"或者"False"是布尔值,类似于"750000"是整数! 

原文链接:[http://software.solidot.org/article.pl?sid=09/10/05/0656208&from=rss](http://software.solidot.org/article.pl?sid=09/10/05/0656208&from=rss "http://software.solidot.org/article.pl?sid=09/10/05/0656208&from=rss")
