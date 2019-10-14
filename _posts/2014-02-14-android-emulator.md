---
id: 2408
title: 安卓模拟器
date: 2014-02-14T22:11:33+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2408
permalink: /android-emulator/
categories:
  - Android
tags:
  - Android
  - Emulator
  - 安卓
  - 模拟器
---
如果你没有安卓设备而想体验一下安卓系统，或者是你是一个开发者，但是你没有资金去购买市场上型号繁多的设备，那么你几乎没有选择的余地，自由使用安卓的模拟器。但是在电脑上使用模拟器，某些功能是无法完美实现的，仅作测试之用。而且现在的APP基本都是针对ARM芯片设计，在X86平台上会很操蛋。

<!--more-->

> 在线版本的模拟器

### 百度MTC云调试服务

MTC 云调试服务支持开发者远程操作手机进行可视化调试，并为开发者不断提供了百余款模拟器和真机测试机型。 

云调试服务不仅支持滑动、点击等多种交互操作，而且调试服务全部免费，最大程度降低开发者的开发成本。 

开发者可以通过分辨率和系统版本对设备进行筛选来选择想要调试的机型进行远程可视化调试。 

1. 选择机型，进入设备control状态； 

<img alt="7.png" src="http://developer.baidu.com/wiki/static/image/cplat/mtc/7.png" width="600" height="386" alt="安卓模拟器" /> 

2. 点击左上角的“安装”按钮安装APK，进行设备远程可视化调试。 

![安卓模拟器](http://developer.baidu.com/wiki/static/image/cplat/mtc/8.png) 

不过重华使用的情况来看，速度实在是慢的可以，而且据称全部开发者使用的是同一个模拟器，你输入的信息同样可以被其他人使用。 

<a title="http://mtc.baidu.com/?pname=cloudDebug" href="http://mtc.baidu.com/?pname=cloudDebug" target="_blank">http://mtc.baidu.com/?pname=cloudDebug</a>

### Manymo

国外的一个在线模拟器，有收费版本和免费版本，免费版每个月只能模拟一次，且有时间限制。Manymo提供42种不同的在线模拟器来模拟不同设备的屏幕尺寸、显示分辨率和Android版本。而且由于是国外服务，可以忽略GWF的影响。问题在于，速度极为缓慢。

<a title="https://www.manymo.com/" href="https://www.manymo.com/" target="_blank">https://www.manymo.com/</a>

> 本地安装

### Android SDK

Google的官方SDK，自带模拟器，应该是开发人员的首选，覆盖三大操作系统。不过由于体积有点大，想玩玩还是不建议安装。

<a title="http://developer.android.com/sdk/index.html" href="http://developer.android.com/sdk/index.html" target="_blank">http://developer.android.com/sdk/index.html</a>

### BlueStacks

这个应该是大家使用较多的模拟器了，兼容性尚可，不过有时候会出现一些莫名其妙的问题。BlueStacks新版本App Player采用名为Layercake的技术，可以让针对ARM处理器开放的安卓应用运行在基于x86处理器的PC或者平板上。

<a title="http://www.bluestacks.cn/index.asp" href="http://www.bluestacks.cn/index.asp" target="_blank">http://www.bluestacks.cn/index.asp</a>

### Windroy

Windroy不是模拟器，提供了完整的Android功能，可以运行所有的 Andorid应用，包括3D游戏。对于不支持虚拟化的老式CPU支持较好。

<a title="http://www.windroy.cn/index.html" href="http://www.windroy.cn/index.html" target="_blank">http://www.windroy.cn/index.html</a>

### GENYMOTION

Genymotion支持Windows、Linux和Mac OS等操作系统，容易安装和使用：按简单的安装过程，选择一款Android虚拟设备。官方宣称比BlueStacks流畅，省内存。需要CPU支持虚拟化技术。

<a title="http://www.genymotion.cn/html/home.html" href="http://www.genymotion.cn/html/home.html" target="_blank">http://www.genymotion.cn/html/home.html</a>

### Android-x86

理论上这个项目最为强大，直接搞成了可以在x86上运行的操作系统，支持live运行和硬盘安装。安装非常简单，几乎没有难度，直接用工具将ISO文件写入U盘，从U盘启动就ok。不过对于针对ARM开发的APP兼容性也是操蛋的。

<a title="http://www.android-x86.org/" href="http://www.android-x86.org/" target="_blank">http://www.android-x86.org/</a>

除了上面的之外，你还可以尝试Jar of Beans、You Wave这两个。