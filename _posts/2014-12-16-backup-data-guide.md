---
id: 2944
title: 谈谈数据的备份
date: 2014-12-16T21:03:47+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2941
permalink: /backup-data-guide/
categories:
  - 其他资源
tags:
  - 备份
  - 数据
---
天有不测风云,人有旦夕祸福。现在的数码电子产品日趋普及，不过我们却经常因为各种原因导致这些数据遗失。好不容易拍的照片弄没了、电脑系统崩溃了、手机丢了，联系人一个都没了、辛辛苦苦编辑到一半的文档，突然停电了……那种抓狂的心情是很难理解的。但是，如果你有这些数据的备份，那么出现这种状况时，你就可以坦然一笑，点上一根烟，轻轻松松找回数据。

<!--more-->

## 电脑上的数据备份

### 操作系统的备份

#### 善用操作系统自带的备份功能

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata.png) 

无论是 Mac、windows 还是 Linux 系统，都自带了备份的功能。以 Windows 为例，系统的备份功能就支持系统映像和文件数据的多种方式的备份和还原，不过大多数的盗版系统为了优化系统，而默认将这一功能关闭了，我们只需要重新开启即可。而这点资源占用和硬盘空间对于现在的电脑来说已经不是什么问题了，为了数据的安全，还是开启吧。缺点是操作不方便，系统如果损坏的程度较深，一般就无法恢复。

关于备份与还原的详细用法和功能，建议查看系统自带的帮助。

#### 使用各种 Ghost 一键备份，方便快捷

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata1.png) 

假如您的电脑的配置比较低，或者您不愿意使用系统的备份功能，那么您也可以选择使用国内多如牛毛的 **Ghost** 备份工具，比如：OneKey 一键还原、一键还原精灵等等。操作简单，方便快捷，几乎全程傻瓜化操作。缺点是默认只能备份一个时间点，一个系统盘的镜像，如果需要多个时间点，多个盘，则需要一定的手工备份能力。

#### 品牌机的附加备份软件

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata2.png) 

一般大型的品牌机厂商都会附加很多有用的工具，备份软件也在其中，功能比较强大。比如 Think 系列的 **ThinkVantage** 应急与恢复系统 (Rescue & Recovery)、戴尔的 **Dell Backup and Recovery** 等等。这类软件通常安装程序包很大，但是功能很强大，支持增量备份。像 **Rescue & Recovery**，就是一个小型的 Linux 系统，存储的文件也基本都在隐藏的分区之中，安全性很高。

### 文档数据的备份

相比系统备份，文档数据的备份则多种多样，也容易得多。

#### 使用软件自带的自动保存功能

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata3.png) 

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata4.png) 

几乎所有编辑类的软件都有自动备份的功能，以常用的微软 Office 套件举例。

可以设置启用自动保存，和保存的时间间隔。

如果恰巧您使用的软件没有提供自动保存功能，那么您也应该养成编辑过程中随时按下<kbd><kbd>Ctrl</kbd>+<kbd>S</kbd></kbd>的快捷键来手动保存。

#### 使用同步盘的同步功能

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata7.png) 

现在国内外出现了很多同步盘，比如国内的百度网盘、金山快盘，国外的 Box、Dropbox 等等，设定好需要同步的文件目录，软件会自动为您备份至云端网络，而且很多同步盘都有版本控制功能，可以随时恢复某个时间点。

#### 软件的自动同步功能

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata8.png) 

越来越多的软件也已经添加了网络功能，比如 Office 2013 和 WPS、Evernote 等软件就具有同步至网络的功能，对于 Office 2007 等旧版本的软件，像是 Box 就提供了一个插件，使得Office 2003 也可以将文件保存至在线网盘。

#### 使用硬盘阵列

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata9.png) 

如果您的数据十分重要，且预算比较宽裕，可以使用较为高端的**硬盘阵列**。各个硬盘的数据互为备份，在一定程度上也可以保证数据的完整性。个人不建议，忒浪费了。而且，如果几块硬盘一同泡水，也起不到效果。

#### 保存到多个介质

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata10.png) 

如果您有多余的移动硬盘、U 盘，也可以手工将数据复制一份到这些可移动的外置存储中，刻录到光盘也是不错的选择。

## 智能手机的数据备份

### 联系人的备份

#### 使用邮箱的同步联系人功能

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata11.png) 

现在的邮箱诸如 Gmail、outlook.com、126、QQ 邮箱都能同步手机上的联系人、日历等，设置一个邮箱账户，就能解决这些数据的备份问题，方便简单，无需任何干预，适用性广，所有智能手机都支持。甚至 S40 手机也支持。

#### 手动导出备份

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata12.png) 

您可以在联系人的菜单中选择导出功能，将联系备份到存储卡。

#### 使用手机管理套件

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata13.png) 

所有的手机管理套件都支持备份手机的联系人到电脑。有的则支持同时备份到网络。安卓和苹果的管理套件尤其众多。随便选用一款即可。

### 图片、音乐等媒体

#### 使用同步盘的手机客户端

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata14.png) 

所有的同步盘都有手机客户端，功能和电脑版的类似，可以选择自动或者手工备份至网络，像上面的导出的联系人文件也可以备份至网络。

#### 使用手机管理套件

如上，几乎所有的套件都能够备份媒体文件到电脑。

#### 手动导出备份

您也可以选择使用读卡器将存储卡上的数据复制到电脑。

## 网站的备份

### 文件

#### 使用 <font style="font-weight: bold">FTP </font>下载到本地

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata5.png) 

如果需要备份的文件不是很多，或者您的网站没有安装主机管理系统，那么可以登录 FTP，手工下载文件至本地电脑。

#### 使用在线备份

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata15.png) 

比如国内的**多备份**，就是一款比较好的在线备份，只需要上传一个插件甚至只需要一个 php 文件，即可对文章进行计划性的备份。

#### 使用网站后台的打包备份功能

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata6.png) 

加入您的网站安装了诸如 **cPanel** 等主机管理系统，那么可以使用管理系统的备份功能，进行打包备份，然后下载，节省时间。可定制性比较大，可以有计划性的针对文件进行备份。

### 数据库

#### 网站后台打包

如上，cPanel 等主机管理系统也可以对数据库进行备份、下载。

#### 数据库的导出功能

![谈谈数据的备份](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/backupdata16.png) 

登录数据库，选择自带的导出功能，将数据库下载至本地电脑。

#### 在线备份

如上，多备份也支持数据库的在线备份，并且针对是否允许远程访问，有不同的备份方案，极为便利。

对于WordPress等程序，也可以使用众多的备份插件来备份文件和数据库，更为简单，缺点是有可能会占用主机的资源。