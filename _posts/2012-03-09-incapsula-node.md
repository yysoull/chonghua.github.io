---
id: 909
title: Incapsula节点问题
date: 2012-03-09T12:35:00+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=909
permalink: /incapsula-node/
categories:
  - 网络资源
tags:
  - CDN
  - Incapsula
  - 免费CDN
---
<a href="http://www.incapsula.com/" target="_blank">Incapsula</a>在亚洲,欧洲和美国都建有CDN节点,按道理从中国访问,应该访问的是日本或者新加坡的节点,确实有的同志能引导到这两个节点,但是重华或者还有其它很多用户仍然被引导到美国的节点!这样一来,本来源服务器就在北美,最后仍然访问的是北美的地址,加速的效果也就没什么优势了!

<!--more-->

按照<a href="http://www.incapsula.com" target="_blank">Incapsula</a>官方的说法,你是不可以绑定你的域名到设置里面提供给你的ip意外的地址的!但是重华测试了一下,其实是可以的!

比如我们知道其日本节点的某个ip是103.\*.\*.100,那么直接A记录指向这个IP就可以了,另外A记录是可以添加多个IP的,你仍然可以继续添加位于欧洲或者美国的其他IP,但是由于你的DNS服务商可能没有DNS智能解析,无法将不同来路的访问者引导到相对快的服务器,所以访问者访问你的网站的时候,你的网站的IP地址是会变化的,一会是日本,一会是美国,将会在你所添加的IP地址中随机访问某个服务器!



日本IP<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="https://public.sn2.livefilestore.com/y1p6cN-iAODrbTBUVp91WGrc00oKJsi3ZaxVGSxZlwgSIjbO66tjaVZIhmTuukEhE9br9UyYVHUOO-y201XB4c-Kg/Incapsula1.jpg?psid=1/"/ alt="Incapsula节点问题" >

新加坡IP 

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="https://public.sn2.livefilestore.com/y1pYs0TvN6vHDD2wxVgAkpJqSJ8h6djobl-ErsRoFXO6kC5zHjq5R4TKHWiXqaEkOXlf2KHJZZHBVDdafnGSZzlHg/Incapsula3.jpg?psid=1/"/ alt="Incapsula节点问题" >

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="https://public.sn2.livefilestore.com/y1pOmRyxyfyZDRmovxkxHuIE6pHybc6xeDFHZ3LkQ1gFc5u8aG7HkyZSBg2VjPblgblm8zni5lp_yOWOkXmbn-08w/Incapsula2.jpg?psid=1/"/ alt="Incapsula节点问题" >

因此,如果您的访客主要是大陆或者亚洲地区的话,那么将日本的IP添加,其他的就看情况添加!当然,前提是你不介意会动的IP.