---
id: 752
title: 修复桌面快捷方式右键菜单重复项目
date: 2010-12-02T13:34:07+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/fix-right-click-the-desktop-shortcut-duplicates/
permalink: /fix-right-click-the-desktop-shortcut-duplicates/
categories:
  - 其他资源
tags:
  - 右键菜单修复
  - 右键菜单重复
  - 快捷方式菜单重复
---
您可能会发现有的时候，在桌面的快捷方式图标上点击右键的时候会出现重复的菜单，比如7zip和Winzip的菜单,大多都是压缩软件的重复!虽然对系统没有什么影响,但是总觉得碍眼!

造成这一现象的原因可能是您为了去除快捷方式的小箭头,使用了一些优化工具或者手动删除了注册表的linkfile和piffile项右侧的IsShortcut所致.所以解决的方法就是还原这两个值,定位到这两个键值的位置,在其右侧新建字符串IsShortcut,重启电脑或者重启资源管理器后生效,您会看到右键菜单恢复了正常,但是快捷方式的小箭头也随之恢复,这时候重华建议您使用微软官方的优化工具TweakUI来设置,就不会出现此问题!

<img src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/d4e9dc6a.png" / alt="修复桌面快捷方式右键菜单重复项目" > 

其他的快捷方式重复或者其他问题,您仍然可以使用其他优化工具,如优化大师,一般不会出现问题!

<a href="http://download.microsoft.com/download/f/c/a/fca6767b-9ed9-45a6-b352-839afb2a2679/TweakUiPowertoySetup.exe" target="_blank">TweakUI下载页面</a>

<a href="http://www.crsky.com/soft/301.html" target="_blank">汉化版下载</a>