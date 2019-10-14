---
id: 2358
title: BAE安装Typecho手记
date: 2013-12-20T13:30:04+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2358
permalink: /install-typeecho-on-bae/
categories:
  - 网络资源
tags:
  - bae
  - Typeecho
---
受够了 WordPress 的效率，连在本地安装打开的速度都让人欲哭无泪，其实我们可以选择的PHP博客程序本来就不多，能直接安装到BAE、SAE、GAE等所谓的云空间中的就更为稀少了，虽然高手能够自己修改使之适应如上的云空间，但是那是高手做的事，而我们恰恰不是高手。不过消失千年的<a href="http://www.typecho.org/" target="_blank">Typecho</a>又回来了，而且原生支持如上那些该死的云空间。

<!--more-->

网上搜索一下教程，满地都是，但大多数都是争对老版本的，对于新版本不一定有效，所以对于安装新版本的流程还是按照我的来吧，基本上不需要太多的修改。

其实在BAE上安装**Typecho**很简单，只要你按照步骤来做基本一次成功。以下是重华的安装记录，希望能够帮到大家。所用版本为<a href="https://github.com/typecho/typecho/releases/download/v0.9-13.12.12-release/0.9.13.12.12.-release.tar.gz" target="_blank">0.9最新版</a>。

1.在BAE中新建一个应用；

2.新建一个数据库，记住数据库名，接下来会用到；

3.下载最新版的Typeecho，将其上传到BAE空间。

<span class="label label-danger">注意：</span> 

建议将build目录中的文件上传，而不要直接将整个build目录上传，否则你将会多打几个字母，而且一不注意，就忘记路径中还要加个build。

至于使用包上传、GIT或者SVN方式，随你的便，不过GIT方式，我一直没有成功。

4.确定你要安装博客程序的访问地址，是类似于*.duapp.com的二级域名还是你自己已经绑定的域名；

接下来就开始安装了。

在浏览器中打开你应用的地址，应该会跳出如下界面

<img width="560" height="479" style="margin-right: 0px; margin-left: 0px; display: inline;" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2013-12-15_212457.png"/ alt="BAE安装Typecho手记" >

点击下一步，出现配置界面

<img width="560" height="485" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2013-12-15_214648.png"/ alt="BAE安装Typecho手记" >

按照上图提示填写你自己的数据，按下一步

之后会提示`config.inc.php<font face="微软雅黑">文件无法创建，需要你手工在BAE后台编辑器中自己创建并且复制下面的代码到这个文件中。别忘记按右上角的保存按钮啊！</font>`

`<img width="560" height="269" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2013-12-15_214739.png"/ alt="BAE安装Typecho手记" >`

然后，然后按继续安装就结束了。是不是比以前的版本智能多了。

Typeecho的速度果然是巨无霸的WordPress所不能比的，速度那个叫快。