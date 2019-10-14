---
id: 2950
title: OpenShift安装Piwik网站访问统计系统
date: 2015-01-01T08:50:00+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2947
permalink: /install-piwik-on-openshift/
categories:
  - 网络资源
tags:
  - Awstats
  - Google Analytics
  - OpenShift
  - Piwik
---
本来，Google Analytics 是我用来统计网站访问数据的首选服务，但是现在 Google 全线服务被墙，继续使用Google Analytics 有点不实际了，而百度等国内的第三方统计服务，功能不完善，虽然是大企业，但推出的服务，总觉得很山寨，体验并不好。其实你也可以自己搭建一个网站访问统计服务，完全掌握全部的功能和权限，速度也有所保证。

<!--more-->

其实数据统计的工具有很多，比如很多网站管理后台自带的 Awstats，这其中属 <a href="http://piwik.org/" target="_blank">Piwik</a> 和 Google Analytics 最为相似，甚至有过之而无不及。网页浏览人数, 访问最多的页面, 搜索引擎关键词等等一样不少。和 WordPress一样，Piwik 也有很多插件和主题可供使用，功能可以无限扩展。而且还是一个开源软件。

Piwik 安装很简单，基本上和安装 WordPress 差不多，官方也宣称是 5 分钟安装，没有难度。

官方的推荐环境：

  * Apache, Nginx, IIS 等服务器.。 
      * PHP 5.3.3 或更高版本 
          * MySQL 4.1 或更高版本 
              * (默认启用) PHP 扩展 pdo 和 pdo_mysql, 或 mysqli 扩展。
            OpenShift 下也可以很方便的使用 Piwik quickstart 快速安装 Piwik。需要注意的是，您不能使用添加“
            
            cartridge”的方式添加到当前应用，而只能使用“Add Application…”添加应用的方式来安装。
            
            首先找到Piwik应用，点击安装。
            
![OpenShift安装Piwik网站访问统计系统](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/piwik1.png) 
            
            配置您的应用名称，建议不要选择最下方的数据中心。
            
![OpenShift安装Piwik网站访问统计系统](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/piwik2.png) 
            
            应用的账户信息，可以保存下来，也可以不用管，因为这些信息在应用管理界面也可以获得。
            
![OpenShift安装Piwik网站访问统计系统](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/piwik.png) 
            
            添加应用成功后，请使用分配给您的类似于“http://app-your.rhcloud.com”的二级域名的网址来安装，不要使用您绑定的域名，因为重华测试使用自己的域名会无法连接数据库。
            
            安装欢迎界面，默认英文，可以在右上角下拉选择中文。
            
![OpenShift安装Piwik网站访问统计系统](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/piwik3.png) 
            
            环境检查界面，所有要求均满足。
            
![OpenShift安装Piwik网站访问统计系统](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/piwik5.png) 
            
            一般情况下，安装界面会自动帮您填好数据库的信息。如果没有自动填写，可以手工填写。
            
![OpenShift安装Piwik网站访问统计系统](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/piwik6.png) 
            
            创建数据表成功。
            
![OpenShift安装Piwik网站访问统计系统](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/piwik7.png) 
            
            填写Piwik的用户名、密码等信息。
            
![OpenShift安装Piwik网站访问统计系统](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/piwik8.png) 
            
            填写需要统计的站点的信息。
            
![OpenShift安装Piwik网站访问统计系统](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/piwik9.png) 
            
            生成的统计代码，加在</body>标签之前。是不是觉得和 Google Analytics 的统计代码神似！
            
![OpenShift安装Piwik网站访问统计系统](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/piwik10.png) 
            
            登录后的主界面，整个就是活脱脱的 Google Analytics 。
            
![OpenShift安装Piwik网站访问统计系统](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/piwik11.png) 
            
            另外，Piwik 还有第三方开发的基于 AdobeAIR 的桌面应用可用，<a href="http://www.desktop-web-analytics.com/" target="_blank">Desktop Web Analytics</a> 和 <a href="http://www.piwik-connector.com/en/" target="_blank">Piwik Connector</a>。由于是基于 AdobeAIR ，所以横跨 Windows、MAC 和 Linux。
            
            如果您觉得自己一个人用很浪费，也可以给其它站点提供统计服务哦！