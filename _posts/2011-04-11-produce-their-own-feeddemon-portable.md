---
id: 814
title: 自己制作FeedDemon便携版
date: 2011-04-11T22:38:52+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/produce-their-own-feeddemon-portable/
permalink: /produce-their-own-feeddemon-portable/
categories:
  - 软件资源
tags:
  - FeedDemon
  - feeddemon便携版
---
<img style="display: inline; margin-left: 0px; margin-right: 0px" align="right" src="http://upload.wikimedia.org/wikipedia/en/thumb/b/b2/FeedDemon\_logo.png/100px-FeedDemon\_logo.png" width="100" height="86" / alt="自己制作FeedDemon便携版" > FeedDemon是重华目前唯一使用的RSS阅读工具,尝试了许多RSS阅读工具,在线的鲜果,抓虾,Google Reader等等,再到离线的GreatNews,和各种浏览器和邮件客户端自带的阅读器,但是最后还是觉得FeedDemon才是自己最喜欢的RSS阅读工具,其一在线阅读器只能在线使用,没有网络的时候没法使用,其他的离线阅读器不是功能不全面就是界面实在太差劲,体验很不爽!

但是FeedDemon没有满意的便携版,最多只能下载到基于虚拟技术的所谓便携版或者仅仅是免安装版本!重华很不喜欢所谓的单文件或者是基于虚拟技术的便携版!所以自己研究了一番,可以最大程度的实现便携化,当然还是有点瑕疵的.

<!--more-->

首先,您需要准备安装好的FeedDemon,可以是安装版或者是免安装版的,将FeedDemon目录整体移动到U盘或者您希望的目录,打开FeedDemon的菜单选项.管理缓存项

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/a97bf319.png" / alt="自己制作FeedDemon便携版" > 

更改默认的缓存路径到您的U盘或者您希望的目录,比如重华就设置在了D盘,按确定生效!

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/46b21552.png" width="520" height="282" / alt="自己制作FeedDemon便携版" > 

然后,打开注册表,定位到:

   <font style="background-color: #3366ff"></p> 

<p>
  HKEY_CURRENT_USERSoftwareBradbury
</p>

<p>
  </font><font style="background-color: #ffffff"> </p> 
  
  <p>
    右击"<strong>Bradbury</strong>",选择导出键值,您可以将这个reg文件保存到您希望的目录中或者是U盘.
  </p>
  
  <p>
    <img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/61ca323a.png" / alt="自己制作FeedDemon便携版" > </font>
  </p>
  
  <p>
    使用文本编辑器打开刚才保存的那个reg文件,定位到此位置
  </p>
  
  <p>
    <img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/daff41cf.png" width="520" height="145" / alt="自己制作FeedDemon便携版" >
  </p>
  
  <p>
    修改标出的盘符为您的便携版FeedDemon的目录.保存!
  </p>
  
  <p>
    现在就基本完成了,记住在U盘上使用的时候或者在其他的电脑上使用的时候,首先点击那个reg文件导入到注册表!再运行FeedDemon程序!
  </p>
  
  <p>
    如果您愿意的话可以参照<a href="http://portableapps.com/" target="_blank">PortableApps</a>的格式制作一个引导程序,来完成导入注册表,退出程序后删除注册表键值,这样就基本上算是一个便携版的FeedDemon了!
  </p>