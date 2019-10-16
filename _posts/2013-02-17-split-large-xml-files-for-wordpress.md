---
id: 1155
title: 如何分割WordPress的导出备份文件
date: 2013-02-17T21:52:57+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1155
permalink: /split-large-xml-files-for-wordpress/
categories:
  - wordpress技巧
tags:
  - WXR
  - xml拆分
---
如果你使用WordPress内建的导入导出功能的话，有时候会遇到一个问题，你的主机商可能限制你的导入文件的大小，至于是多少，不太确定，通常是2M，但是有可能是10M或者像重华一样的64M，不管怎么样，一旦你的文章数非常多，很可能就会超过最大的尺寸限制，无法导入，所以我们必须想办法把这个超大的文件分解成数个稍微小一点的文件。

<!--more-->

也许你会说，导入大体积的数据还有其他的方法，我们这里仅仅是谈如何分割WordPress的导出备份文件，而不是如何导入大型数据文件。

如果你有能耐，完全可以手工分解成N个小文件，只要你保证不会出错，但我想，除非和自己过不去，没有谁愿意这么干，那么还是使用软件工具来干吧。

1.首先祭出当年yo2出品的xml拆分工具

这货绝对是稀缺物品，还是当年yo2正火的时候出品的，那时yo2限制只能上传小于2M的文件，所以这个小工具拆分的文件都会随机的小于2M的。 

没有什么可以设置的选项，非常简单。

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/chaifen_zps385e88bc.png" alt="如何分割WordPress的导出备份文件" /> 

不足之处在于，生成的文件过多，如果你的xml文件过大，导入工作又会是一个不小的烦恼。

* * *

2.国外友人贡献的WXR File Splitter

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/chaifen2_zps63ab79cf.png" alt="如何分割WordPress的导出备份文件" /> 

该工具相比强大多了，自动分析文件的概况，还可以选择分割成多大的文件或者分割成多少个文件，非常适合稍大一点的xml文件。

两个小工具已经一起打包了，如果你需要一块拿去吧。

<a href="http://dl.vmall.com/c052bwaqt1" target="_blank">华为下载</a>

<a href="https://www.box.com/s/w9eohd2vy2oekozkih9e" target="_blank">box下载</a>