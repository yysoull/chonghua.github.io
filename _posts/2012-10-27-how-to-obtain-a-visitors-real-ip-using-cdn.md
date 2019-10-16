---
id: 1026
title: 使用CDN后如何获取访客的真实IP
date: 2012-10-27T22:19:08+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1026
permalink: /how-to-obtain-a-visitors-real-ip-using-cdn/
categories:
  - wordpress技巧
tags:
  - CDN
---
我们知道一旦你使用CDN加速你的网站后,您的访客的IP地址都将被记录为CDN服务器的IP地址,虽然有些人不会介意,也不会造成非常大的错误,但是,还是有其不便之处,比如说,你的访客在你的博客上评论的时候,所有的留言者的IP都是同一个!那么问题就来了!假如你安装了防垃圾评论插件,那么所有的评论可能都会被视为垃圾评论!

<!--more-->

我们的wordpress是使用"REMOTE\_ADDR"这个函数来获取访客的IP地址的,那么只要我们将获取的函数替换成"HTTP\_X\_FORWARDED\_FOR",一般就可以了!

网络上有一段代码:

<pre class="brush: php; toolbar: false">if(isset($_SERVER['HTTP_X_FORWARDED_FOR'])) 
{
$list = explode(',',$_SERVER['HTTP_X_FORWARDED_FOR']);
$_SERVER['REMOTE_ADDR'] = $list[0];
}</pre>

<div class="csharpcode">
  将这段代码添加到wp-config.php文件的头部就可以了!
</div>

对于使用Cloudflare或者Incapsula的CDN的博客来说,它们有方便的插件可以使用,但是本质上它们也是在wordpress添加这个函数的!但是国内的CDN服务商没有类似的插件可以使用,所以,我们只好使用上面的代码了! 

更多的详细情况,可以参考下面的地址: 

http://www.freehao123.com/cdn-ip/ 

http://biergaizi.info/archives/2011/08/894.html