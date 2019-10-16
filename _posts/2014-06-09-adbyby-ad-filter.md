---
id: 2866
title: 广告屏蔽大师adbyby
date: 2014-06-09T17:31:05+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2866
permalink: /adbyby-ad-filter/
categories:
  - 软件资源
tags:
  - adbyby
  - 广告过滤
---
去除网页广告，我们使用最多的还是adblockplus，虽然说adblockplus目前支持大多数浏览器，不过，每个浏览器都安装一下adblockplus的话，浏览器的占用率可是不低啊，而且对于浏览器外的程序内嵌广告毫无办法！于是便有了独立的广告过滤程序[ADSafe](http://www.ad-safe.com/Index.aspx)广告管家和国外的[Ad Muncher](http://www.admuncher.com/)，现在这两款程序也是越做越臃肿，于是一款类似的应用出现了，因为刚刚出道，所以目前来说还是很小巧的。

<!--more-->

广告屏蔽大师支持Adblockplus的过滤规则和订阅列表，配置文件`adhook.ini`在根目录下，具体写法：

> exename=\*browser,iexplore,chrome,~sogouexplorer,360\* //这条规则代表为哪些进程提供屏蔽功能，支持通配符,~为白名单
> 
> [set]
> 
> AutoRun=1 //启动后，自动加入开机启动 
> 
> ShowTrayIcon=1 //显示托盘图标，1为显示,0为关闭，热键ctrl+alt+f6呼出或隐藏托盘 
> 
> ShowTrayTips=1 //托盘提示信息 
> 
> port=80,8087,8080 //拦截哪个端口的数据，80为默认http端口，最多设置5个端口 
> 
> [update] 
> 
> rule=lazy,video //希望同步哪些规则，默认就这两条，lazy为网站通用规则，video为视频规则,如果都不希望同步，可设置rule=none 
> 
> [exrule] //扩展规则，直接使用url地址，每行一个规则，根据文件大小更新，每次启动后，会链接服务器查询是否和本地文件一样大 
> 
> https://easylist-downloads.adblockplus.org/easylistchina+easylist.txt //此为chinalist规则，如需abp规则，请在此栏目下添加(因机制不同，会有误屏蔽） 
> 
> 然后程序在启动时，会像服务器查询是否需要更新主程序和规则，并在启动后每6小时轮询一次查询动作

<img src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/adbyby.png"/ alt="广告屏蔽大师adbyby" >

该软件没有界面，只有在右下角的状态栏图标右键有少许设置。

不过，对于其它的类似应用，此应用最大的特色在于不仅仅支持Windows系统，<a href="http://info.adbyby.com/download/bin.mac.tar.gz" target="_blank">MACOS</a>&nbsp; |&nbsp; <a href="http://info.adbyby.com/download/bin.linux.tar.gz" target="_blank">LINUX-X64</a> <a href="http://info.adbyby.com/download/linux.86.tar.gz" target="_blank">LINUX-X86</a>&nbsp; |&nbsp; <a href="http://info.adbyby.com/download/openwrt.tar.gz" target="_blank">OPENWRT-AR7240</a> <a href="http://info.adbyby.com/download/mtk7260a.tar.gz" target="_blank">OPENWRT-MTK7260A</a>&nbsp; | 也可以使用，比如你可以把它刷到路由器中。