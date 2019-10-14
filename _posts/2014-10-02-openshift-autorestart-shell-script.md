---
id: 2925
title: OpenShift空间出现503自动重启脚本完整教程
date: 2014-10-02T08:47:57+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2911
permalink: /openshift-autorestart-shell-script/
categories:
  - 网络资源
tags:
  - Cron
  - OpenShift
---
OpenShift的云主机会经常性的进行维护操作或者由于性能的原因出现503、502等错误，导致网站应用无法访问，一般来说，你可以登陆OpenShift的后台或者使用命令进行重启操作，但是甚为不便，要是能够让其自动检测到问题后自动重启应用，那就再好不过了。

<!--more-->

网上搜索了一下，有很多大同小异的自动重启的shell脚本，下面是无需修改的改进版脚本，使用了变量来代替你的应用的信息：

<pre>#!/bin/bash

curl -I $OPENSHIFT_APP_DNS 2&gt; /dev/null | head -1 |  grep -q '200|301|302'

s=$?

if [ $s != 0 ];
then
echo "`date +"%Y-%m-%d %I:%M:%S"` down" &gt;&gt; $OPENSHIFT_DATA_DIR/web_error.log
let t=`date +"%M"`%10
if [ $t -eq 0 ];
then
echo "`date +"%Y-%m-%d %I:%M:%S"` restarting..." &gt;&gt; $OPENSHIFT_DATA_DIR/web_error.log
/usr/bin/gear stop 2&gt;&1 /dev/null
/usr/bin/gear start 2&gt;&1 /dev/null
echo "`date +"%Y-%m-%d %I:%M:%S"` restarted!!!" &gt;&gt; $OPENSHIFT_DATA_DIR/web_error.log
fi
else
echo "`date +"%Y-%m-%d %I:%M:%S"` is ok" &gt; $OPENSHIFT_DATA_DIR/web_run.log
fi</pre>

将其保存为`restart.sh`，并复制到`app-root/repo/.openshift/cron/minutely`目录，使用

`chmod 711 restart.sh`命令或者使用WinSCP将其权限改为`711`。

不过，当你执行完上面的步骤后，会发现，这个脚本会不起作用，网上的教程基本上没有告诉你还有一个最重要的步骤没做，安装**Cron**服务。

![OpenShift空间出现503自动重启脚本完整教程](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/Cartridges.png) 

点击这个链接，找到名为“Cron 1.4 ”的服务，

![OpenShift空间出现503自动重启脚本完整教程](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/addCartridges.png) 

点击添加。

成功安装后，你就可以手动停止应用，等待10分钟，看看是否能够成功重启了。