---
id: 1069
title: wordpress文章和页面标题优化-非插件
date: 2012-11-29T13:41:34+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1069
permalink: /wordpress-post-and-page-title-optimization-non-plug-in/
categories:
  - wordpress技巧
tags:
  - seo
  - 标题优化
---
wordpress有些主题设计时默认的文章和页面标题对于搜索引擎不是很友好,文章的标题一定程度上会影响你的网站的排名,大多数的主题只是简单的现实文章名称和博客名称,但是对于搜索页面和404页面和存档页面却存在一些问题,当然你可以使用wordpress  seo插件很方便的设置这些标题.如果不想使用插件,那么下面的代码也能起到同样的效果.

<!--more-->

  
<img src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2012-11-29_132211.png"/ alt="wordpress文章和页面标题优化-非插件" >

### 标题的格式

什么样的标题比较好呢?你可以参考一下一些知名博客的标题样式也可以使用下面的样式

  * **Home Page** – Blog Name | Blog Description
  * **Search Results** – Search Results for _search terms_ – _11_ Articles | Blog Name
  * **404 (Error) Page**  – Blog Name | 404 Nothing Found
  * **Author Archives** – Blog Name | Author Archives
  * **Single Post** – Post Name | Category Name | Blog Name
  * **Page** – Page Name | Blog Name
  * **Category Page** – Category Name | Category Description | Blog Name
  * **Monthly Archive** – Blog Name | Archive | Month, Year
  * **Day Archive** – Blog Name | Archive | Month Day, Year
  * **Tag** – Tag Name | Blog name

### 如何添加到你的博客使之生效

1.打开你的主题的_header.php文件,找到类似于下面的代码_

<pre>&lt;title&gt;&lt;?php wp_title('&laquo;', true, 'right'); ?&gt; &lt;?php bloginfo('name'); ?&gt;&lt;/title&gt;</pre>

<p align="left">
  2.用下面的一段代码替换掉上面的代码
</p>

<pre>&lt;title&gt; &lt;?php if ( is_home() ) { ?&gt;&lt;? bloginfo('name'); ?&gt; | &lt;?php bloginfo('description'); ?&gt;&lt;?php } ?&gt;
&lt;?php if ( is_search() ) { ?&gt;Search Results for &lt;?php /* Search Count */ $allsearch = &new WP_Query("s=$s&showposts=-1"); $key = wp_specialchars($s, 1); $count = $allsearch-&gt;post_count; _e(''); echo $key; _e(' &mdash; '); echo $count . ' '; _e('articles'); wp_reset_query(); ?&gt;&lt;?php } ?&gt;
&lt;?php if ( is_404() ) { ?&gt;&lt;? bloginfo('name'); ?&gt; | 404 Nothing Found&lt;?php } ?&gt;
&lt;?php if ( is_author() ) { ?&gt;&lt;? bloginfo('name'); ?&gt; | Author Archives&lt;?php } ?&gt; 
&lt;?php if ( is_single() ) { ?&gt;&lt;?php wp_title(''); ?&gt; | &lt;?php 
$category = get_the_category();
echo $category[0]-&gt;cat_name;
?&gt; | &lt;? bloginfo('name'); ?&gt;&lt;?php } ?&gt;
&lt;?php if ( is_page() ) { ?&gt;&lt;? bloginfo('name'); ?&gt; | &lt;?php 
$category = get_the_category();
echo $category[0]-&gt;cat_name;  ?&gt;|&lt;?php wp_title(''); ?&gt;&lt;?php } ?&gt; 
&lt;?php if ( is_category() ) { ?&gt;&lt;?php single_cat_title(); ?&gt; | &lt;?php $category = get_the_category(); 
echo $category[0]-&gt;category_description; ?&gt; | &lt;? bloginfo('name'); ?&gt;&lt;?php } ?&gt; 
&lt;?php if ( is_month() ) { ?&gt;&lt;? bloginfo('name'); ?&gt; | Archive | &lt;?php the_time('F, Y'); ?&gt;&lt;?php } ?&gt;
&lt;?php if ( is_day() ) { ?&gt;&lt;? bloginfo('name'); ?&gt; | Archive | &lt;?php the_time('F j, Y'); ?&gt;&lt;?php } ?&gt;
&lt;?php if (function_exists('is_tag')) { if ( is_tag() ) { ?&gt;&lt;?php single_tag_title("", true); } } ?&gt; | &lt;? bloginfo('name'); ?&gt;
&lt;/title&gt;</pre>

保存使之生效.

请在修改之前备份.

<a href="http://www.problogdesign.com/wordpress/automatic-seo-titles-for-all-your-pages/" target="_blank" rel="nofollow">原文链接</a>