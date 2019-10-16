---
id: 329
title: '如何替换掉windows xp开始菜单的自带&#8221;搜索&#8221;'
date: 2009-09-14T21:25:12+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/how-to-replace-the-native-windows-xp-start-menu-search/
permalink: /how-to-replace-the-native-windows-xp-start-menu-search/
categories:
  - 其他资源
tags:
  - everything
  - 搜索
---
那个疯狂的搜索软件<a href="http://www.voidtools.com/" target="_blank">Everything</a>大家不陌生吧,那么把Everything替换掉系统自带的搜索怎么样呢(仅仅是替换掉开始菜单那个"搜索")!

<!--more-->

我们需要借助一个小软件**_<a href="http://www.winhelponline.com/downloadattachment.php?aId=827039acf330070742d0f3e818efe9e7&articleId=99" target="_blank">RerouteXPSearch</a>_**,很简单就可以搞定.

&#160;<img title="reroute xp search" height="181" alt="reroute xp search" src="http://www.ghacks.net/wp-content/uploads/2009/09/reroute\_xp\_search.jpg" width="319" / alt="如何替换掉windows xp开始菜单的自带"搜索"" > 

下载该软件,解压后浏览定位到你想使用的搜索程序,比如这里是Everything,点击_**Apply**_,如果什么时候想恢复系统的搜索了,再次运行一下,点击_**Restore defaults**_按钮,是不是很简单.

其实还有更简单的方法,本软件的本质是修改注册表键值,那么既然是修改注册表,为什么不自己修改呢!

以下内容来自<a href="http://www.appinn.com/" target="_blank">小众软件</a>:

(在“运行”对话框中运行以下命令)

修改：  
`reg add HKLMSOFTWAREClassesCLSID{2559a1f0-21d7-11d4-bdaf-00c04f60b9f0}shellopencommand /f /ve /d "D:Program FilesEverything.exe"`

还原：  
`reg delete HKLMSOFTWAREClassesCLSID{2559a1f0-21d7-11d4-bdaf-00c04f60b9f0}shellopen /f`

当然,也可以 

.reg 文件导入 ——

修改：  
`Windows Registry Editor Version 5.00`

[HKEY\_LOCAL\_MACHINESOFTWAREClassesCLSID{2559a1f0-21d7-11d4-bdaf-00c04f60b9f0}shellopencommand]  
@="D:Program FilesEverything.exe"

还原：  
`Windows Registry Editor Version 5.00`

[-HKEY\_LOCAL\_MACHINESOFTWAREClassesCLSID{2559a1f0-21d7-11d4-bdaf-00c04f60b9f0}shellopen]

具体情况可以到<a href="http://www.appinn.com/reroutexpsearch/" target="_blank">这里</a>,注意是在评论中(为什么我的博客,就没那么多评论呢)
