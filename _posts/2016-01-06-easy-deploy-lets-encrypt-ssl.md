---
id: 3041
title: 'SSL For Free-更方便的部署Let&#8217;s Encrypt免费证书'
date: 2016-01-06T22:31:26+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=3041
permalink: /easy-deploy-lets-encrypt-ssl/
categories:
  - 网络资源
tags:
  - "Let's Encrypt"
  - SSL
---
<a href="https://letsencrypt.org/" target="_blank">Let's Encrypt</a> 是一个由各大互联网巨头发起的免费提供 SSL 证书的项目，和目前其它的免费 SSL 项目相比，例如：<a href="https://www.startssl.com" target="_blank">StartSSL</a>、<a href="https://www.wosign.com/" target="_blank">沃通</a>。后台更为强势，拥有重量级企业的支持。当然，看上去更为高端大气。

<!--more-->

不过 Let's Encrypt 的证书部署有点麻烦，需要在主机中运行一大堆的命令，没有运行命令的权限或者不熟悉命令的用户怎么办？<a href="https://www.sslforfree.com/" target="_blank">SSL For Free</a> 这个网站就是为了简化部署而生，可以让你用常规的部署方法来使用这个免费证书。

首先，填写你的域名，多个域名使用空格分开。

![SSL For Free-更方便的部署Let's Encrypt免费证书](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/sslfree.png) 

接下来就是验证域名的所有权，通过FTP自动上传文件或者手动进行验证。

![SSL For Free-更方便的部署Let's Encrypt免费证书](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/sslfree2.png) 

如果选择手动方式，需要在网站根目录建立名为".well-known"的目录，然后在此目录建立子目录"acme-challenge"，将下载的文件上传到"acme-challenge"目录中。然后点击下方的下载生成证书。

![SSL For Free-更方便的部署Let's Encrypt免费证书](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/sslfree5.png) 

生成的证书就是常规的3个证书文件了。