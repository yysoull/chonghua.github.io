---
id: 534
title: 如何完整的删除WordPress的版本号
date: 2010-01-26T20:39:33+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/how-do-i-remove-the-complete-version-number-of-wordpress/
permalink: /how-do-i-remove-the-complete-version-number-of-wordpress/
categories:
  - wordpress技巧
tags:
  - wordpress版本号
---
我们知道WordPress会在头部或者其他地方显示WordPress的版本号.某些人认为这会给某些不良用心者攻击的机会!那么,留着也没有用,为什么不将这个无用的显示删除呢!

<div id="extendedEntryBreak">
</div>

通常的做法是修改主题的header.php文件,删除或者注释掉这段代码:

<pre class="prettyprint">&lt;meta name="generator" content="WordPress &lt;?php bloginfo('version'); ?&gt;" /&gt;</pre>

还有编辑_functions.php_文件然后添加下面的函数:

<pre class="prettyprint">remove_action('wp_head', 'wp_generator');</pre>

还有就是比较完整的方法,添加下面的代码到functions.php文件中:

<pre class="prettyprint">function wpbeginner_remove_version() {
return '';
 }
add_filter('the_generator', 'wpbeginner_remove_version');</pre>

其实技术高超的黑客如果真的要搞死你,干啥都没用,是吧!

以上内容部分来自:<http://www.wordpress.la/remove-wordpress-version.html>