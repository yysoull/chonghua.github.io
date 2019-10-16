---
id: 2926
title: CloudFlare提供免费SSL服务
date: 2014-10-06T20:39:10+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2912
permalink: /cloudflare-free-ssl/
categories:
  - 网络资源
tags:
  - Cloudflare
  - SSL
---
CloudFlare于上个月月底向所有用户开放了免费的SSL服务，其中包括了免费用户。不管实用不实用，总归是一项升级服务吧。此前，我们如果需要免费的SSL证书，只有两个选择<a href="http://www.wosign.com/" target="_blank">WoSign</a>和**<a href="http://www.startssl.com/" target="_blank">StartSSL</a>&nbsp;**的低端免费SSL证书，而且，你必须要有一个独立IP，虽然不是特别的费事，但有独立IP的博主估计还是少数吧。

<!--more-->

Cloudflare的SSL服务目前共有4款计划，分别是Free，Pro，Business，Enterprise。

![CloudFlare提供免费SSL服务](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/cloudflaresslplan.png) 

我们选择当然是Free版的了。Cloudflare已经为所有用户开启了SSL服务，所以不需要你单独去开启。我们所要做的就是选择SSL的类型。到设置界面找到SSL的项目，有4个选项

![CloudFlare提供免费SSL服务](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/cloudflaressl.png) 

**Off：**不使用CloudFlare的SSL；所有的连接均不加密；

**Flexible SSL:**您的访客到CloudFlare的连接是加密的，但是CloudFlare到您服务器的连接是不加密的；

  * 您不需要在服务器部署SSL证书。 
      * 访客可以在浏览器地址栏看到锁。</ul> 
    **Full SSL:**您的访客到CloudFlare的连接是加密的，CloudFlare到您服务器的连接也是加密的；
    
      * 您需要在服务器部署SSL证书（可以是自己签发的证书）。 
          * 访客可以在浏览器地址栏看到锁。</ul> 
        **Full SSL (strict):**您的访客到CloudFlare的连接是加密的，CloudFlare到您服务器的连接也是加密的；
        
          * 您需要在服务器部署经过验证的SSL证书，而且必须是信任的签发机构签发的有效证书。 
              * 访客可以在浏览器地址栏看到锁。</ul> 
            <span class="label label-warning">注意：</span> 
            
              * 国内的搜索引擎对https的网址极为不友好；
              * CloudFlare只支持扩展支持Server Name Indication(SNI)协议的现代浏览器，而根据官方的数据统计，中国只有58.22%的HTTP请求符合这一协议；