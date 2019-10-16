---
id: 801
title: Webluker免费CDN导致网站带宽暴涨
date: 2011-03-29T13:05:45+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/free-web-bandwidth-cdn-webluker-soaring-lead/
permalink: /free-web-bandwidth-cdn-webluker-soaring-lead/
categories:
  - 网络资源
tags:
  - CDN
  - Cloudflare
  - Webluker
  - 免费CDN
  - 网站加速
---
国内外的CDN服务商非常多,但是免费提供的却几乎没有,为什么呢,因为玩CDN需要烧钱,而且是很大一笔钱,本文内提及的两个免费CDN也是商业CDN的附带产品.

<!--more-->

   <font style="background-color: #3366ff"></p> 

<h3>
  Webluker
</h3>

<p>
  </font>
</p>

<p>
  <a href="http://www.webluker.com/" target="_blank">Webluker</a>是国内知名CDN服务商ChinaCache提供的免费服务.提供免费的CDN,免费的域名解析,免费的网站监控,以及类似于DNSPOD的免费智能解析.
</p>

<p>
  由于是国内的服务,又由于需要将域名CNAME到国内的服务器,所以,要求您的网站域名必须通过备案,且须提供备案号,人工审核,但是审核比较快,几个小时就可以!
</p>

<p>
  由于是国内的服务,服务器基本全在国内,所以对于国内用户为主的网站,应该效果比较好!
</p>

<p>
  &#160;
</p>

<p>
  <font style="background-color: #3366ff"> </p> 
  
  <h3>
    Cloudflare
  </h3>
  
  <p>
    </font>
  </p>
  
  <p>
    <a href="http://cloudflare.com/" target="_blank"><img style="display: inline; margin-left: 0px; margin-right: 0px" align="right" src="https://www.cloudflare.com/media/images/core/cloudflare-logo.png" / alt="Webluker免费CDN导致网站带宽暴涨" > Cloudflare</a>是国外的一家CDN服务商,该公司有3种类型可选,Free/Pro/Enterprise,当然我们只需要Free就可以了.
  </p>
  
  <p>
    由于是国外服务,所以就不需要什么审核和备案之类的了!
  </p>
  
  <p>
    对于国外访客为主的博客,则可以尝试<a href="http://cloudflare.com/" target="_blank">Cloudflare</a>的免费CDN.而且<a href="http://cloudflare.com/" target="_blank">Cloudflare</a>还提供了wordpress的插件!使用更为方便!
  </p></p> </p> 
  
  <p>
    重华最近尝鲜使用了<a href="http://www.webluker.com/" target="_blank">Webluker</a>的免费的CDN,通过了审核,按照网站说明配置,但是由于重华使用的是一级域名,也不知道具体的操作方法,所以无法按照官方的说法,CNAME到他们的服务器.于是发邮件咨询,但是杳无音信.在此期间,重华部落格因为流量用完导致无法访问,进入cpanel查看,估计应该是<a href="http://www.webluker.com/" target="_blank">Webluker</a>的网站监控机器人导致的!因为<a href="http://www.webluker.com/" target="_blank">Webluker</a>会自动开启网站运行检测,不断的扫描你的网站,查看是否能够访问,所以,如果和重华一样的限制流量情况的博主,还是建议不要使用一些此类的工具!而且使用此类服务,必须使用二级域名,也就是类似<a href="http://www.hechonghua.com">www.hechonghua.com</a>这样的域名,不可以是hechonghua.com这样的一级域名!
  </p>
  
  <p>
    <font style="background-color: #3366ff"> </p> 
    
    <h3>
      什么是CDN:
    </h3>
    
    <p>
      </font>
    </p>
    
    <blockquote>
      <p>
        CDN的全称是Content Delivery Network，即内容分发网络。其目的是通过在现有的Internet中增加一层新的网络架构，将网站的内容发布到最接近用户的网络”边缘”，使用户可以就近取得所需的内容，解决 Internet网络拥挤的状况，提高用户访问网站的响应速度。从技术上全面解决由于网络带宽小、用户访问量大、网点分布不均等原因所造成的用户访问网站响应速度慢的问题。 (也就是将一个服务器的内容，平均分部到多个服务器上，服务器智能识别，让用户获取离用户最近的服务器，提高访问速度)
      </p>
    </blockquote>