---
id: 406
title: 让你的windows7桌面壁纸和bing每日图片保持同步
date: 2009-10-09T21:15:05+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/let-your-desktop-wallpaper-and-bing-day-windows7-pictures-to-keep-pace/
permalink: /let-your-desktop-wallpaper-and-bing-day-windows7-pictures-to-keep-pace/
categories:
  - 其他资源
tags:
  - bing
  - windows7壁纸
---
我们知道微软的<a href="http://cn.bing.com/" target="_blank">Bing</a>每天都会换成不同的背景图片,这些图片都是经典的相片和绘画作品,用来做桌面壁纸是很适合的!当然你可以自己去搜索图片并且设为你的壁纸,但现在重华介绍一个简单的方法,自动与Bing的图片保持同步!

<!--more-->

你只需要在记事本中填入以下代码，然后保存成Bing.theme.然后在自定义主题的时候选中这个主题文件就可以了!

> [Theme]  
> DisplayName=Bing  
> [Slideshow]  
> Interval=1800000  
> Shuffle=1  
> RssFeed=http://feeds.feedburner.com/bingimages  
> [Control PanelDesktop]  
> TileWallpaper=0  
> WallpaperStyle=0  
> Pattern=  
> [Control PanelCursors]  
> AppStarting=%SystemRoot%cursorsaero_working.ani  
> Arrow=%SystemRoot%cursorsaero_arrow.cur  
> Crosshair=  
> Hand=%SystemRoot%cursorsaero_link.cur  
> Help=%SystemRoot%cursorsaero_helpsel.cur  
> IBeam=  
> No=%SystemRoot%cursorsaero_unavail.cur  
> NWPen=%SystemRoot%cursorsaero_pen.cur  
> SizeAll=%SystemRoot%cursorsaero_move.cur  
> SizeNESW=%SystemRoot%cursorsaero_nesw.cur  
> SizeNS=%SystemRoot%cursorsaero_ns.cur  
> SizeNWSE=%SystemRoot%cursorsaero_nwse.cur  
> SizeWE=%SystemRoot%cursorsaero_ew.cur  
> UpArrow=%SystemRoot%cursorsaero_up.cur  
> Wait=%SystemRoot%cursorsaero_busy.ani  
> DefaultValue=Windows Aero  
> Link=  
> [VisualStyles]  
> Path=%SystemRoot%resourcesthemesAeroAero.msstyles  
> ColorStyle=NormalColor  
> Size=NormalSize  
> ColorizationColor=0X6B74B8FC  
> Transparency=1  
> [MasterThemeSelector]  
> MTSM=DABJDKT

&#160;

以上技巧来自<a href="http://soft.yesky.com/windows7/460/9055460.shtml" target="_blank">天极网</a>
