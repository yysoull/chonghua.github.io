---
id: 1146
title: 屏蔽垃圾评论的几种方案
date: 2013-02-09T19:02:31+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1146
permalink: /some-way-to-kill-spam/
categories:
  - wordpress技巧
tags:
  - spam
  - 垃圾评论
---
只要你在网上有站点,不管是博客还是其它,也不管你的站点是不是刚刚建立的,在人类访客还没有到来之前,肯定有发送垃圾评论的机器人来过了,你当然可以安装插件来屏蔽这些垃圾评论,不过其实我们还有几种方案可供选择.

<!--more-->

### 1.Akismet

官方的防垃圾插件,几乎是博客标配,屏蔽掉绝大部分垃圾评论是没有问题的,如果你需要安装插件,那么这个是必须推荐的,为什么呢,官方出品,肯定在兼容性和稳定性方面是最好的.

有不少第三方的评论托管服务也都集成了Akismet的服务,如果你使用了这些第三方的服务,那么这个插件也就不需要了.

### 2.禁止直接访问wp-comments-post.php

可以在你的**.htaccess**文件中加入下面的代码来禁止直接访问wp-comments-post.php

<pre class="brush: php; toolbar: false">&lt;IfModule mod_rewrite.c&gt;
RewriteEngine On
RewriteCond %{REQUEST_METHOD} POST
RewriteCond %{REQUEST_URI} .wp-comments-post.php*
RewriteCond %{HTTP_REFERER} !.*yourdomainname.* [OR]
RewriteCond %{HTTP_USER_AGENT} ^$
RewriteRule (.*) ^http://%{REMOTE_ADDR}/$ [R=301,L]
&lt;/IfModule&gt;</pre>

&nbsp;

注意:不要忘记替换“yourdomainname”为你的网址.

### 3.使用第三方评论托管系统

如果你不想使用任何插件或者修改任何代码,那么使用第三方的评论托管系统就非常适合你,基本上这些服务都有完善的防垃圾评论系统配置,而且由于不是你本地的评论系统,机器人程序也不会对你的站点造成大的影响.

目前可供选择的此类服务还是比较多的:

国外

<a href="http://wordpress.org/extend/plugins/jetpack/" target="_blank">Jetpack</a>、<a href="http://disqus.com/" target="_blank">Disqus</a>、<a href="http://wordpress.org/extend/plugins/intensedebate/" target="_blank">IntenseDebate</a>

国内

<a href="http://wordpress.org/extend/plugins/duoshuo/" target="_blank">多说</a>、<a href="http://wordpress.org/extend/plugins/youyan-social-comment-system/" target="_blank">友言</a>

国内的加载速度比较快，国外的功能比较完善，按你的需要选择吧。

### 4.设置一个发送评论前需要勾选的选择框

在你的评论模板页面的适当位置加入下面的代码，一般是在**comments.php**这个文件中

<pre class="brush: php; toolbar: false">&lt;label for="enable"&gt;&lt;input type="checkbox" name="enable" id="enable" onClick="apply()" class="enable_checkbox"&gt; Check this box to enable the send button&lt;/label&gt;</pre>

下一步在**header.php**中<head>标记中加入一段代码

<pre class="brush: php; toolbar: false">&lt;script type="text/javascript"&gt;
function apply() {
    var form_submit = document.commentform.submit;
    var form_checkbox = document.commentform.enable;
    form_submit.disabled=true;
    if(form_checkbox.checked==true) {form_submit.disabled=false;}
    if(form_checkbox.checked==false) {form_submit.enabled=false;}
}
&lt;/script&gt;</pre>

&nbsp;

<font face="Courier New"><a href="http://wp.tutsplus.com/tutorials/security/6-easy-and-efficient-ways-to-combat-spam-comments/" target="_blank">参考</a></font>