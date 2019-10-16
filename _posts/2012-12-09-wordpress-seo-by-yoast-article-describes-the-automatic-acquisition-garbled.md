---
id: 1079
title: WordPress SEO by Yoast自动获取文章描述乱码
date: 2012-12-09T21:07:43+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1079
permalink: /wordpress-seo-by-yoast-article-describes-the-automatic-acquisition-garbled/
categories:
  - wordpress技巧
tags:
  - WordPress SEO by Yoast
  - 中文乱码
---
WordPress SEO by Yoast这个插件是目前最为流行的SEO插件之一,在很短的时间内就超越了All in one seo等前辈,可以看到这款插件是如此受欢迎,功能丰富,操作简单.但是,和其他国外的插件一样,或多或少都对中文支持不太好,比如,<a href="http://hechonghua.com/" target="_blank">重华</a>目前就碰到了一些问题,该插件在自动获取文章的描述时,如果是中文就全部显示为???,一大串问号,这对于搜索引擎来说无疑是一个杀手.

<!--more-->

虽然重华知道原因,但是不知道修改哪里,于是在网上到处搜索,直到在<a href="http://chl.me/2012/02/27/optimize-chinese-support-for-wordpress-seo-plugin.html" target="_blank">这个</a>博客页面中找到了解决的方法,方法很简单,替换一个函数就可以了,因为substr函数对于中文的支持很不好.

<img style="float: none; margin-left: auto; display: block; margin-right: auto;" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/Yoast1.png" alt="" /> 

修改很简单:

1.定位到/plugins/wordpress-seo/inc/wpseo-functions.php文件,使用编辑器打开或者下载后修改;

2.将文件中的

<pre class="brush:php">'%%excerpt%%'            =&gt; ( !empty($r-&gt;post_excerpt) ) ? strip_tags( $r-&gt;post_excerpt ) : substr( strip_shortcodes( strip_tags( $r-&gt;post_content ) ), 0, 155 ),</pre>

替换为

<pre class="brush:php">'%%excerpt%%'            =&gt; ( !empty($r-&gt;post_excerpt) ) ? strip_tags( $r-&gt;post_excerpt ) : mb_substr( strip_shortcodes( strip_tags( $r-&gt;post_content ) ), 0, 155,'utf-8' ),</pre>

保存后刷新网页,即时生效.

<img style="float: none; margin-left: auto; display: block; margin-right: auto;" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/Yoast2.png" alt="" width="520" height="147" />