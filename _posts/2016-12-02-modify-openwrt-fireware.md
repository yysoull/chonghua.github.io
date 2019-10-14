---
id: 3103
title: OpenWrt固件修改脚本
date: 2016-12-02T18:09:00+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=3103
permalink: /modify-openwrt-fireware/
categories:
  - 其他资源
tags:
  - OpenWrt
---
Newifi 的官方固件形同鸡肋，体积大，还并无卵用。OpenWrt 官方的固件虽说纯净，但是无线实在是惨不忍睹，高手可以自己编译适合自己的固件，我们这些小白就折腾不了了，麻烦、复杂还容易出错。最终还是选择了潘多拉的固件。但是，潘多拉本身自带了一些功能，而这些功能我们并不需要，咋办呢？直接卸载的话并无卵用，只能是直接对固件包操刀，这就又需要编译了，这不是操蛋么。

<!--more-->

不过有人为我们制作了一个无需编译就能修改固件的脚本。<a href="http://www.xiangtaole.com/jingyan/3065" target="_blank">openwrt-modify</a>

使用方法：（以下操作的环境为 Ubuntu，其它 Linux 发行版基本也可以）

### 1.下载并解压脚本压缩包； 

把你需要修改的固件包也复制到脚本所在的目录；（固件包名称为xxx.bin） 

### 解压固件包 ./modify.sh e xxx.bin

这一步时间会有点长，视个人电脑性能而定。需要 su 权限。执行完毕后会生成几 bin 文件和 squashfs-root 目录。如果需要改动，需要此时修改 squashfs-root 目录中的相关文件。

### 删除软件包 ./rm.sh xxxx 

仅执行 ./rm.sh 的话则会列出已安装的软件包。如果不知道某个包的用处，请搜索资料。

### 重新打包 ./modify.sh c（小写）

会在目录下生成一个全新的 bin 固件。

### 清空环境 ./modify.sh C（大写）

<font color="#ff0000">注意</font>：操作完成后固件大小可能不会有明显变化。