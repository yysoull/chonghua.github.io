---
id: 1051
title: 为文章中的外部链接自动添加“Nofollow”
date: 2012-11-16T20:20:51+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1051
permalink: /automatically-add-the-external-links-in-the-article-nofollow/
categories:
  - wordpress技巧
tags:
  - nofollow
  - 权重分配
---
为了不影响自己的博客的权重,很多博客都在自己的站点使用了"nofollow"标签,最新版的wordpress已经默认在留言中的链接加入"nofollow",但是其他地方的外部链接却没有自动添加,怎么办呢,一般情况下,页面中除了评论,友情链接以及文章中会出现外部链接外,其他的地方似乎也没有出现的机会!那么,我们现在要做的就是自动为文章中的外链添加"nofollow"属性.

<!--more-->

#### 1.手动在编辑链接时添加"Nofollow"属性;

* * *

很显然,这不是你想做的.

#### 2.你可以使用插件,这样的插件搜索一下一大把;

* * *

没有什么难度,只要下载插件-激活,最多设置一下就OK了!  
但是大多数插件会把整站的链接都加上"nofollow"属性,这或许是你所不希望看到的.

#### 3.直接向主题目录的**functions.php**文件中添加代码;

* * *

不得不说**functions.php**是个好东西啊,如果你动手能力强,这个文件几乎可以替代大部分的插件!  
添加下面的代码到**functions.php**中,一旦保存,你文章中的所有的外部链接都将被加上"nofollow"属性.

<pre class="brush:php">add_filter('the_content', 'auto_nofollow');



function auto_nofollow($content) {

//return stripslashes(wp_rel_nofollow($content));



return preg_replace_callback('/&lt;a&gt;]+/', 'auto_nofollow_callback', $content);

}



function auto_nofollow_callback($matches) {

$link = $matches[0];

$site_link = get_bloginfo('url');



if (strpos($link, 'rel') === false) {

$link = preg_replace("%(href=S(?!$site_link))%i", 'rel="nofollow" $1', $link);

} elseif (preg_match("%href=S(?!$site_link)%i", $link)) {

$link = preg_replace('/rel=S(?!nofollow)S*/i', 'rel="nofollow"', $link);

}

return $link;

}</pre>