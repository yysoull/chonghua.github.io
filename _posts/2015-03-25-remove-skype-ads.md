---
id: 2972
title: 简单去除Skype广告
date: 2015-03-25T19:14:07+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2972
permalink: /remove-skype-ads/
categories:
  - 软件资源
tags:
  - SKYPE
---
也不知道微软从哪个版本开始加入了广告，因为我一直都在使用却从来没有发现过有任何广告，但是在更新到最新版之后却在聊天窗口上方却出现了一个广告条，虽然没有显示任何广告内容，仅是一个占位。难道是没有适合我的广告么？

<!--more-->

虽然人品比较好，没有像其他用户一样显示烦人的广告，不过有一个占位图在那里，也是不太舒服，还好去除的方法很简单，比 QQ 去广告简单的多了。

![简单去除Skype广告](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/skype.png) 

将下面的网址屏蔽掉，然后重新打开 Skype 即可：

`https://apps.skype.com/`

可以选择的方式：

#### 使用 Internet Explorer 屏蔽

打开IE,点击"工具"->"Internet选项"->"安全"->"受限制的站点"->"站点"，然后输入"https://apps.skype.com/" （不包含引号内的内容），点"添加"，然后"关闭"退出，最后重新启动 Skype 广告就去除掉了。

#### 使用防火墙

在系统防火墙或者第三方的防火墙程序中添加屏蔽此网址。

#### 使用 hosts 文件

在 hosts 文件中插入127.0.0.1&nbsp; apps.skype.com 保存。