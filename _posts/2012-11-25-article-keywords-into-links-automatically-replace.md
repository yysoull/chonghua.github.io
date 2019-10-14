---
id: 1066
title: 自动替换文章关键词为链接
date: 2012-11-25T22:23:13+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1066
permalink: /article-keywords-into-links-automatically-replace/
categories:
  - wordpress技巧
tags:
  - 内链
  - 外链
  - 广告链接
  - 自动添加链接
---
wordpress有许多自动添加关键词链接的插件,国内和国外都有不少这样的插件,比如SEO Smart Links和WP Keyword Link,都有很强大的自动链接的功能,如果你平常使用Windows live writer来写博客的话,也可以很方便的自动添加链接但是我们有时候不需要这样强大的插件,那么下面的一段代码就可以解决问题.

<!--more-->

如果仅仅是需要将关键词替换为外链,比如广告链接,那么将下面的代码插入你的主题的functions.php文件.

<pre>function replace_text_wps($text){ $replace = array( // 'WORD TO REPLACE' =&gt; 'REPLACE WORD WITH THIS' 'thesis' =&gt; '&lt;a href="http://mysite.com/myafflink"&gt;thesis&lt;/a&gt;', 'studiopress' =&gt; '&lt;a href="http://mysite.com/myafflink"&gt;studiopress&lt;/a&gt;' ); $text = str_replace(array_keys($replace), $replace, $text); return $text; } add_filter('the_content', 'replace_text_wps'); add_filter('the_excerpt', 'replace_text_wps');</pre>

注意高亮部分需要你自己按照格式替换或者增加!适合于数量不多的用户.

如果想要将关键词转换为内链,比如将关键词链接到tag,那么可以使用下面的这段代码.

<pre>//连接数量 $match_num_from = 1; //一篇文章中同一个关键字少于多少不秒文本（这个直接填1就好了） $match_num_to = 10; //一篇文章中同一个关键字最多出现多少次描文本（建议不超过2次） //连接到WordPress的模块 add_filter('the_content','tag_link',1); //按长度排序 function tag_sort($a, $b){ if ( $a-&gt;name == $b-&gt;name ) return 0; return ( strlen($a-&gt;name) &gt; strlen($b-&gt;name) ) ? -1 : 1; } //改变标签关键字 function tag_link($content){ global $match_num_from,$match_num_to; $posttags = get_the_tags(); if ($posttags) { usort($posttags, "tag_sort"); foreach($posttags as $tag) { $link = get_tag_link($tag-&gt;term_id); $keyword = $tag-&gt;name; //连接代码 $cleankeyword = stripslashes($keyword); $url = "&lt;a href="$link" title="".str_replace('%s',addcslashes($cleankeyword, '$'),__('View all posts in %s'))."""; $url .= ' target="_blank"'; $url .= "&gt;".addcslashes($cleankeyword, '$')."&lt;/a&gt;"; $limit = rand($match_num_from,$match_num_to); //不连接的 代码 $content = preg_replace( '|(&lt;a[^&gt;]+&gt;)(.*)('.$ex_word.')(.*)(&lt;/a[^&gt;]*&gt;)|U'.$case, '$1$2%&&&&&%$4$5', $content); $content = preg_replace( '|(&lt;img)(.*?)('.$ex_word.')(.*?)(&gt;)|U'.$case, '$1$2%&&&&&%$4$5', $content); $cleankeyword = preg_quote($cleankeyword,'''); $regEx = ''(?!((&lt;.*?)|(&lt;a.*?)))('. $cleankeyword . ')(?!(([^&lt;&gt;]*?)&gt;)|([^&gt;]*?&lt;/a&gt;))'s' . $case; $content = preg_replace($regEx,$url,$content,$limit); $content = str_replace( '%&&&&&%', stripslashes($ex_word), $content); } } return $content; }</pre>

记得修改前备份你的functions.php文件,否则出错那就玩完了.