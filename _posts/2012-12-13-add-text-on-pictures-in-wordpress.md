---
id: 1087
title: 在WordPress的图片上添加文字
date: 2012-12-13T22:19:11+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1087
permalink: /add-text-on-pictures-in-wordpress/
categories:
  - wordpress技巧
tags:
  - 文字覆盖图片
  - 缩略图
---
有时候我们可以看到一些博客或者网站的图片上显示当前文章的标题或者是其他信息,尤其是一些文章的缩略图,不仅可以很直观的知道此文章的标题或者大概信息,不仅增加了博客的专业感,也增强了访客的体验.关于演示,大家可以看看本文的<a href="http://wplift.com/how-add-text-featured-images-different-scenarios" target="_blank">英文原文</a>和WordPress一些插件的页面,比如<a href="http://wordpress.org/extend/plugins/wordpress-seo/" target="_blank">WordPress SEO by Yoast</a>的页面,你可以很清楚看到头部的图片的效果.

<!--more-->

<img style="float: none; margin-left: auto; display: block; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2012-12-13_215326.png" width="520" height="179"/ alt="在WordPress的图片上添加文字" >

那么,如何添加呢,下面就是添加文字的PHP和CSS代码:

### 添加分类名称到图片

* * *

<pre class="brush: php; toolbar: false">&lt;div class="post-thumb"&gt;
&lt;span class="new-wrapper"&gt;

&lt;?php
//Display post thumbnail

if ( has_post_thumbnail()) : the_post_thumbnail('thumbnail'); endif;

?&gt;

&lt;span&gt;
&lt;?php
// Get the Name of First Category

$category = get_the_category();
echo $category[0]-&gt;cat_name;

?&gt;

&lt;/span&gt;
&lt;/span&gt;
 &lt;/div&gt;</pre>

在css文件中添加css代码

<pre class="brush: c++; toolbar: false">.new-wrapper span {
	background-color: Black;
	color:white;
	font-size: 12px;
	position:absolute;
	bottom:0px;
	left:0px;
	padding-left:10px;
	padding: 10px;
	-moz-opacity:.80;
	filter:alpha(opacity=80);
	opacity:.80;
	width:180px;
	display: block;
}

.new-wrapper {
float:left;
position:relative;
width: 180px;
overflow:hidden;
}
</pre>

上述代码要求图片的大小为180×180像素,如果不是这个大小,需要重新生成该大小的图片.

### 添加文章标题到图片

* * *

<pre class="brush: php; toolbar: false">&lt;div class="single-featured-image"&gt;
&lt;h2&gt;&lt;a href="&lt;?php the_permalink(); ?&gt;"&gt;&lt;?php the_title(); ?&gt;&lt;/a&gt;&lt;/h2&gt;
&lt;?php if ( has_post_thumbnail()) : the_post_thumbnail('full'); endif; ?&gt;
&lt;/div&gt;
</pre>

&nbsp;

CSS代码

<pre class="brush: css; toolbar: false">.single-featured-image {
	position:relative;
	width: 600px;
	overflow:hidden;
}
.single-featured-image h2 {
	background-color: Black;
	color:white;
	font-size: 20px;
	position:absolute;
	bottom:0px;
	left:0px;
	padding-left:10px;
	padding: 10px;
	-moz-opacity:.80;
	filter:alpha(opacity=80);
	opacity:.80;
	width:600px;
	display: block;
}
.single-featured-image h2 a {
	color:white;
}
.single-featured-image h2 a:visited {
	color:white;
}
.single-featured-image h2 a:hover {
	color:white;
}
</pre>

&nbsp;

图片需要设置为最大尺寸.

### 添加带缩略图文章和文章标题

* * *

<pre class="brush: php; toolbar: false">&lt;div class="featured-posts-box"&gt;
&lt;?php
    $recentPosts = new WP_Query();
    $recentPosts-&gt;query('showposts=3', 'category_name=Featured');
?&gt;
&lt;ul class="top-featured-image"&gt;
&lt;?php while ($recentPosts-&gt;have_posts()) : $recentPosts-&gt;the_post(); ?&gt;
&lt;li class="top-featured-image"&gt;
&lt;span&gt;&lt;a href="&lt;?php the_permalink(); ?&gt;"&gt;&lt;?php the_title(); ?&gt;&lt;/a&gt;&lt;/span&gt;
&lt;?php if ( has_post_thumbnail()) : the_post_thumbnail('thumbnail'); endif; ?&gt;
&lt;/li&gt;
&lt;?php endwhile; ?&gt;
&lt;/ul&gt;
&lt;/div&gt;
</pre>

&nbsp;

CSS代码

<pre class="brush: css; toolbar: false">.featured-posts-box {
background:#eee;
padding:5px;
}

.top-featured-image {
	position:relative;
	width: 180px;
	overflow:hidden;
display:inline;
}

.top-featured-image span {
	background-color: Black;
	color:white;
	font-size: small;
	position:absolute;
	bottom:0px;
	left:0px;
	padding-left:10px;
	padding: 10px;
	-moz-opacity:.80;
	filter:alpha(opacity=80);
	opacity:.80;
	width:160px;
	display: inline;
float:left;
text-align:left;
}
.top-featured-image span a {
	color:white;
}
.top-featured-image span a:visited {
	color:white;
}
.top-featured-image span a:hover {
	color:white;
}

.top-featured-image ul {
list-style:none;
display: inline;

}

</pre>

关于此代码的具体方法和效果,可以之<a href="http://wplift.com/how-add-text-featured-images-different-scenarios" target="_blank">原文</a>查看.