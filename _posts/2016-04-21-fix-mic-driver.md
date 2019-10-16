---
id: 3042
title: 解决话筒问题
date: 2016-04-21T19:05:01+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=3042
permalink: /fix-mic-driver/
categories:
  - 其他资源
tags:
  - AD1986A
  - 驱动
---
自从换了一个新的耳麦，也就用来听听歌，看看电影，从未使用过麦克风，由于最近需要使用麦克风，结果无论 Windows 下还是 ubuntu 下都无法识别出。好在最后并非是麦克风的问题。把修复的经过记下来以防忘记，也为遇到此问题的朋友提供借鉴。

<!--more-->因为在两个系统下都无法识别，所以我怀疑有两个方面的原因： 

  1. 麦克风损坏； 
      * 插口损坏； </ol> 
    但我把麦克风插到另外一台电脑上时，可以正常使用，插到前面板插口也能正常使用，那么可以排除麦克风的问难。接下来我换了我的手机耳机插入后面板，也可以识别，说明后面板的插口也没有问题。
    
    那么，问题只可能是驱动问题了，而且是两个系统驱动都有问题。知道了问题所在，就开始查找相关的解决方法了。
    
    我的电脑比较老，是 XP 时代的配置，IBM 台式机，比较少见的 **Analog Devices AD1986A** 声卡，而我从 win7 时代开始就没有单独安装过驱动，也一直使用正常，直到最近的 win10，但是 win10 自带的驱动无法完整支持这款声卡，所以抱着试试看的态度，下载安装了针对 win7 下的声卡驱动，问题解决。
    
    可能是运气比较好，Ubuntu 下解决此问题更为简单。步骤如下：
    
      1. 确定声卡型号，可以使用如下命令：`sudo head -1 /proc/asound/card0/codec#0`，显示声卡型号为 **Analog Devices AD1986A**。  
![解决话筒问题](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/mic2.png) 
      2. 打开压缩文件 `/usr/share/doc/alsa-base/driver/HD-Audio-Models.txt.gz`中的HD-Audio-Models.txt，查找 “AD1986A” 型号的字段，你会看到列出了几种模式，有何区别我也不清楚，你可以把模式名称全部记下来，不行的话一个一个替换试试。比如我这里，默认是**6stack**，我选择 **3stack**。  
![解决话筒问题](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/mic.png) 
      3. 使用命令打开文件 `sudo mousepad /etc/modprobe.d/alsa-base.conf`，在最后一行添加`options snd-hda-intel model=3stack`。  
![解决话筒问题](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/mic3.png) 
      4. 保存后重启电脑，问题解决。