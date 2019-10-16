---
id: 2916
title: 移除WordPress评论框下方的HTML 标签和属性提示
date: 2013-02-26T22:37:24+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1167
permalink: /remove-html-tags-and-attributes/
categories:
  - wordpress技巧
tags:
  - HTML标签
  - 评论
---
一般我们使用的WordPress主题默认都会在评论框的下面显示一段提示可以使用的HTML标签，不过我想一般情况下，您大概不太愿意有什么超链接或者其它的格式化的文本出现在您的评论中吧，而且这么一大段放在那里也是不太和谐的。 

<!--more-->

> 您可以使用这些 HTML 标签和属性： <a href="" title=""> <abbr title=""> <acronym title=""> <b> <blockquote cite=""> <cite> <code> <del datetime=""> <em> <i> <q cite=""> <strike> <strong> 

去除它也是很简单的，你可以选择移除这个显示功能或者也可以选择隐藏这段文字，眼不见为净么。 

### 移除输出功能法

1.修改文件comment-template.php 

打开wp-includes/comment-template.php文件,找到 

> <?php echo $args['comment\_notes\_after']; ? >

将其注释 

> <!--?php echo $args['comment\_notes\_after']; ? –>

或者直接删除这行代码。 

2.修改主题的functions.php

打开你主题的functions.php文件，加入下面的代码 

> /**  
> * Remove the text - 'You may use these <abbr title="HyperText Markup  
> * Language">HTML</abbr> tags ...'  
> * from below the comment entry box.  
> */ 
> 
> add\_filter('comment\_form\_defaults', 'remove\_comment\_styling\_prompt'); 
> 
> function remove\_comment\_styling_prompt($defaults) {  
> &nbsp;&nbsp;&nbsp; $defaults['comment\_notes\_after'] = '';  
> &nbsp;&nbsp;&nbsp; return $defaults;  
> }

### 隐藏法  


打开你主题的style.css文件,加入下面的样式 

> #respond .form-allowed-tags {  
> &nbsp; clear: both;  
> &nbsp; width: 98%;  
> }  
> #respond .form-allowed-tags code {  
> &nbsp; display: block;  
> }  
> .form-allowed-tags {  
> &nbsp; display: none;  
> }