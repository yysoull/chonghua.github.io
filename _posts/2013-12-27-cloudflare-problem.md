---
id: 2389
title: 使用CloudFlare遇到的问题
date: 2013-12-27T19:26:01+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2389
permalink: /cloudflare-problem/
categories:
  - 网络资源
tags:
  - CDN
  - Cloudflare
---
在使用过加速乐和安全宝这两个国内的免费CDN后，再次对国内服务感到羞愧，因为我没有备案，所以这两个CDN服务商将我的站点指向了香港的节点，理论上国内访问香港的速度应该和直接访问国内的速度差不了多少，但是这两家公司的香港节点实际的访问速度却慢的要死，PING直接丢包，完全达不到加速的效果，反而严重拖慢了速度。

<!--more-->

无奈之下，只好又回到了CloudFlare，此时的PING值达到了史无前例的126ms，这是要逆天啊。但是当我打开自己的站点时，却卡了半天，始终打不开，状态栏一直显示连接“cdnjs.cloudflare.com”和“ajax.cloudflare.com”这两个站点，用浏览器的分析工具看了一下。是在载入这两个站点的js文件时出了问题。类似于这种地址：

"//ajax.cloudflare.com/cdn-cgi/nexp/aav=4114775854/cloudflare<a name="baidusnap2"></a>**.**min.js"

直接打来这个地址，结果当然是无法打开，那么断定，造成网页无法载入的元凶就是它了。

挂代理打开这个js文件看其内容，发现无非是一些检测是否IE，还有一些则是google分析的代码。到这里我就明白了，这一切都是CloudFlare的APP服务在作怪。

<img width="560" height="379" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2013-12-27_192135.png" alt="使用CloudFlare遇到的问题" /> 

进入<a href="https://cloudflare.com/cloudflare-apps" target="_blank">Cloudflare apps</a>，首先就是禁用掉CDNJS Selections这个开放静态文件的加速服务。因为我们有更快的国内公共库可以使用，像bae、sae、七牛等等都建有公共库的加速服务。

如果，你页面还是有类似的地址出现，那么你可以在这个页面，逐个的禁用应用，或者干脆全部禁用掉。

再回到站点，刷新一下，速度一下子就上来了。

遇到同样问题的博主不妨也试试。