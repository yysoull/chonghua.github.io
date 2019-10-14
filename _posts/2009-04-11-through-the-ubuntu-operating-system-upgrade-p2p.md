---
id: 117
title: 通过P2P来升级Ubuntu操作系统
date: 2009-04-11T12:50:29+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/through-the-ubuntu-operating-system-upgrade-p2p/
permalink: /through-the-ubuntu-operating-system-upgrade-p2p/
categories:
  - 其他资源
tags:
  - p2p
  - ubuntu更新
---
Ubuntu 9.04 Beta已可以通过“更新管理器”来更新了，这就需要慢慢的从软件源下载来更新了，非常容易因为各种网络原因导致下载速度逐渐减慢甚至中断。P2P这个新颖的技术正是基于点的网格网络，点越多，可获得的源也就越多，这样子的点汇聚在一起就能充分利用现有带宽来获得需要的资源。&#160; 

<!--more-->

&#160;

利用apt-p2p这个软件包，我们就可以利用P2P技术来升级Ubuntu，安装apt-p2p：&#160;  
$sudo apt-get install apt-p2p&#160;  
安装好apt-p2p就该修改一下软件源为P2P源，修改之前先备份一下吧：&#160;  
$sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak&#160;  
修改源：&#160;  
$sudo gedit /etc/apt/sources.list&#160;  
替换为以下内容：&#160;  
deb <http://security.ubuntu.com/ubuntu/> jaunty-security universe main multiverse restricted&#160;  
deb http://localhost:9977/archive.ubuntu.com/ubuntu/ jaunty main universe restricted multiverse&#160;  
deb http://localhost:9977/archive.ubuntu.com/ubuntu/ jaunty-updates universe main multiverse restricted&#160;  
deb http://localhost:9977/archive.ubuntu.com/ubuntu/ jaunty-backports universe main multiverse restricted&#160;  
deb http://localhost:9977/archive.canonical.com/ubuntu jaunty partner&#160;  
&#160;&#160;&#160; 除了安全组件依旧从官方源中获得以外，其它的都是从P2P中获得啦。修改好源，根据你的网络特点还可能需要做些工作，如果你的Ubuntu处于外网，比如直接在Ubuntu中使用PPPoE连接接入互联网，则无需任何工作。如果你的Ubuntu机子处于路由器下的网络，你需要在路由器中设置端口映射 9977。做好这些处理工作就可以像日常更新源的操作了：&#160;  
$sudo apt-get update&#160;  
$sudo apt-get dist-upgrade&#160;  
&#160;&#160;&#160; 其实通过P2P来更新系统不算是一个非常可靠的更新方法，如果可以当然还是通过HTTP或者FTP下载一个新版Ubuntu的Alternate版ISO，然后再在Ubuntu中将这个ISO挂上去后将更新源设置为CDROM最为稳妥。 

本文摘自:太平洋电脑论坛

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:0767317B-992E-4b12-91E0-4F059A8CECA8:e0b8de41-84ab-4f1d-aefc-03d52860139c" class="wlWriterEditableSmartContent">
  Technorati 标签: ubuntu更新,<a href="http://technorati.com/tags/p2p" rel="tag">p2p</a>
</div>