---
id: 460
title: IE8不能导入支付宝数字证书的解决方法
date: 2009-12-06T19:37:18+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/ie8-can-not-import-a-digital-certificate-alipay-solution/
permalink: /ie8-can-not-import-a-digital-certificate-alipay-solution/
categories:
  - 其他资源
tags:
  - IE8
  - 支付宝
  - 证书不能导入
---
<img style="display: inline; margin-left: 0px; margin-right: 0px" align="right" src="https://img.alipay.com/pics/logo/logo.gif" / alt="IE8不能导入支付宝数字证书的解决方法" > 相信许多人和我一样,升级到最新的IE8,却发现支付宝的证书无法导入了!直接就是浏览器崩溃!够郁闷的!当然办法总是有的,重装系统吗,当然不必要!

<!--more--></p> 

方法有几种,看你的个人喜好了!

1.卸载IE8,换上IE7或者IE6

2.在C盘新建目录"<font color="#ff0000">fakepath</font>",把你的证书xxx.pfx复制一份到这个目录,然后导入

3.更改IE的安全设置

工具 -> Internet选项 -> 安全 -> 自定义级别 -> 将本地文件上载至服务器时包含本地目录路径,选中启用即可.</p> 

这是因为真实的路径被C:fakepath取代了,原来是因为IE8增加了安全选项,默认情况下不显示上传文件的真实路径,进入internet选项,修改下设置即可显示真实的文件路径.

现在再去试试看能不能成功导入了!</p> </p> 

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:0767317B-992E-4b12-91E0-4F059A8CECA8:cc7612cb-5692-4838-89fc-caa1e69ea734" class="wlWriterEditableSmartContent">
  Technorati 标签: 支付宝,<a href="http://technorati.com/tags/IE8" rel="tag">IE8</a>,证书不能导入
</div>