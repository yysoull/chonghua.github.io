---
id: 2875
title: 替换Gravatar头像服务器
date: 2014-07-11T23:12:20+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2875
permalink: /avatar-from-duoshuo/
categories:
  - wordpress技巧
tags:
  - Gravatar
---
近来伟大的墙又开始刷存在感了，而且比以往更加变态，不但Google全线沦陷，连一向比较合作的微软也开始遭殃，WordPress就更不用说了，Gravatar服务也是前所未有的受到了威胁。从而导致，博客打开速度奇慢，甚至于打不开。

<!--more-->

一般情况下，WordPress使用以下四个服务器：

http://1.gravatar.com; 

http://2.gravatar.com; 

http://0.gravatar.com; 

http://s.gravatar.com; 

虽然还有很多的镜像，但是一味的使用官方的服务器，不是治本的方法，你不知道何时会全线沦陷。由此，替换掉Gravatar官方的服务器是很有必要的。方法也有很多种，最简单的就是使用国内的第三方评论服务，比如多说，友言……等等。 

不过，你可能不想用第三方的服务，而仅仅是想替换掉图片服务器。方法也是有很多种。以多说的镜像为例。

打开`wp-includes/pluggable.php`，找到1649和1651行，

把http://%d.gravatar.com和http://0.gravatar.com都改为&nbsp; http://gravatar.duoshuo.com； 

不过这个方法升级了版本后也许会被覆盖掉，到时候就需要重新修改，下面的方法比较推荐。 

将下面的代码加到主题的`functions.php` 文件 

<pre class="prettyprint">function mytheme_get_avatar($avatar) {
$avatar = str_replace(array("www.gravatar.com","0.gravatar.com","1.gravatar.com","2.gravatar.com"),"gravatar.duoshuo.com",$avatar);
return $avatar;
}
add_filter( 'get_avatar', 'mytheme_get_avatar', 10, 3 );</pre></p>