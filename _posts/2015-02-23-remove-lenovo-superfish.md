---
id: 2957
title: 移除联想PC预装Superfish
date: 2015-02-23T22:22:56+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2956
permalink: /remove-lenovo-superfish/
categories:
  - 软件资源
tags:
  - Lenovo
  - Superfish
  - 联想
---
联想这次玩大了，想如法炮制国内的流氓手法来糊弄国外友人，哪知道偷鸡不成蚀把米，以为全世界的人民都是天朝屁民。在国内屁大点事，在国外居然弄出这么大的风波。道歉，发布卸载工具，卸载指南……以下是官方卸载指南步骤。

<!--more-->

预装 Superfish 的联想计算机大多生产于 2014 年 9 月和 12 月，且在今年 1 月以后联想就已经发现问题并中止了该软件的预装，受影响的型号如下： 

G系列：G410，G510，G710，G40-70，G50-70，G40-30，G50-30，G40-45，G50-45 

U系列：U330P，U430P，U330Touch，U430Touch，U530Touch 

Y系列：Y430P，Y40-70，Y50-70 

Z系列：Z40-75，Z50-75，Z40-70，Z50-70 

S系列：S310，S410，S40-70，S415，S415Touch，S20-30，S20-30Touch 

Flex系列：14D的Flex2，15D的Flex2，14的Flex2，15的Flex2，14的Flex2（BTM）的Flex2 15（BTM），Flex的10 

MIIX系列：MIIX2-8，MIIX2-10，MIIX2-11 

YOGA系列：YOGA2Pro-13，YOGA2-13，YOGA2-11BTM，YOGA2-11HSW 

E系列：E10-30 

### 卸载 Superfish 程序

默认路径( %ProgramFiles(x86)%LenovoVisualDiscoveryuninstall.exe) 

使用任意卸载工具或者系统自带删除/卸载工具找到名为“Superfish Inc. Visual Discovery”的程序，进行卸载。

![移除联想PC预装Superfish](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/superfish.png) 

### 删除根证书

打开系统的证书管理工具“certlm.msc”或者“certmgr.msc”展开“受信任的根证书颁发机构-证书”找到“Superfish, Inc.”项目，右键删除。

![移除联想PC预装Superfish](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/superfish2.png) 

Firefox 和 Thunderbird 使用的是自带的证书管理，需要打开 Firefox 和 Thunderbird 的证书管理系统删除。

### 删除注册表信息

定位到如下键值，删除相关信息

HKEY\_LOCAL\_MACHINESOFTWAREWow6432NodeVisualDiscovery

### 删除相关的.ini 和 .log文件

  * %SystemRoot%SysWOW64VisualDiscovery.ini 
      * %SystemRoot%SysWOW64VisualDiscoveryOff.ini 
          * %SystemRoot%System32VisualDiscoveryOff.ini 
              * %TEMP%VisualDiscoveryr.log 
                联想官方指南页面：[http://support.lenovo.com/us/en/product\_security/superfish\_uninstall](http://support.lenovo.com/us/en/product_security/superfish_uninstall "http://support.lenovo.com/us/en/product_security/superfish_uninstall")
                
                SuperFish Removal Utility发布页面：[https://github.com/lenovo-inc/superfishremoval](https://github.com/lenovo-inc/superfishremoval "https://github.com/lenovo-inc/superfishremoval")
                
                访问[https://lastpass.com/superfish/](https://lastpass.com/superfish/ "https://lastpass.com/superfish/")验证是否受Superfish影响，如果安全的话会出现下面的图标。
                
![移除联想PC预装Superfish](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/safesuperfish.png)