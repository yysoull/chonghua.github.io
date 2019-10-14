---
id: 1074
title: 如何在主题底部添加小工具栏
date: 2012-12-04T19:42:24+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1074
permalink: /how-in-the-subject-at-the-bottom-to-add-a-small-toolbar/
categories:
  - wordpress技巧
tags:
  - widget
  - 小工具
---
现在有很多WordPress主题在底部设置了小工具栏,在底部,你可以很方便加入各种功能,比如一些热门文章之类的,在用户浏览到博客底部时也可以看到你的文章,对于提高博客的浏览还是有所帮助的!但是也有大部分主题却没有设置该位置的小工具.不过,我们完全可以自己添加.

<!--more-->

### 在主题的functions.php文件中注册小工具函数

<pre class="brush:php">/* Add this code to functions.php file in your theme */
register_sidebar(array(
'name' =&gt; 'Footer Widget 1',
'id'        =&gt; 'footer-1',
'description' =&gt; 'First footer widget area',
'before_widget' =&gt; '&lt;div id="footer-widget1"&gt;',
'after_widget' =&gt; '&lt;/div&gt;',
'before_title' =&gt; '&lt;h2&gt;',
'after_title' =&gt; '&lt;/h2&gt;',
));
register_sidebar(array(
'name' =&gt; 'Footer Widget 2',
'id'        =&gt; 'footer-2',
'description' =&gt; 'Second footer widget area',
'before_widget' =&gt; '&lt;div id="footer-widget2"&gt;',
'after_widget' =&gt; '&lt;/div&gt;',
'before_title' =&gt; '&lt;h2&gt;',
'after_title' =&gt; '&lt;/h2&gt;',
));
register_sidebar(array(
'name' =&gt; 'Footer Widget 3',
'id'        =&gt; 'footer-3',
'description' =&gt; 'Third footer widget area',
'before_widget' =&gt; '&lt;div id="footer-widget3"&gt;',
'after_widget' =&gt; '&lt;/div&gt;',
'before_title' =&gt; '&lt;h2&gt;',
'after_title' =&gt; '&lt;/h2&gt;',
));</pre>

&nbsp;

### 在底部添加小工具的位置

<span style="font-family: Cordia New;">打</span><span style="font-family: Cordia New;">开</span>footer.php文件,在适当的位置加入以下代码

<pre class="brush:php">/* Add this code to footer.php file in your theme */
&lt;div id="footer-widgets"&gt;
&lt;div id="footer-widget1"&gt;
&lt;?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer-1') ) : ?&gt;
&lt;?php endif; ?&gt;
&lt;/div&gt;
&lt;div id="footer-widget2"&gt;
&lt;?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer-2') ) : ?&gt;
&lt;?php endif; ?&gt;
&lt;/div&gt;
&lt;div id="footer-widget3"&gt;
&lt;?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer-3') ) : ?&gt;
&lt;?php endif; ?&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div style="clear-both"&gt;&lt;/div&gt;</pre>

&nbsp;

### 为小工具添加样式

打开`style.css文件`

<pre class="brush:css">/* Add this code to style.css file in your theme */
#footer-widgets {
display: block;
width:950px;
margin-right:0;
background: #ffffff;
}
#footer-widget1 {
width: 260px;
float: left;
margin: 15px 10px 10px 30px;
padding: 10px;
background-color: #ffffff;
}
#footer-widget2 {
width: 260px;
float: left;
margin: 15px 10px 10px 15px;
padding: 10px;
background-color: #ffffff;
}
#footer-widget3 {
width: 260px;
float: left;
margin: 15px 10px 10px 15px;
padding: 10px;
background-color: #ffffff;
}</pre>

&nbsp;

### 现在就可以在后台小工具界面添加你所需要的功能了

<img style="float: none; margin-left: auto; display: block; margin-right: auto;" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2012-12-04_193835.png" alt="" />