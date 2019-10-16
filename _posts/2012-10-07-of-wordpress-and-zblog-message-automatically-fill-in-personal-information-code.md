---
id: 977
title: wordpress和zblog留言自动填写个人信息代码
date: 2012-10-07T22:45:33+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=977
permalink: /of-wordpress-and-zblog-message-automatically-fill-in-personal-information-code/
categories:
  - wordpress技巧
tags:
  - zblog
  - 自动留言
  - 自动表单
---
目前网络上通过wordpress和z-blog博客系统来建站的博客主非常之多，如果想要在这些博客上留言，有一项工作是必须的！那就是填写个人信息！这项工作如此反复，是不是觉得有点厌烦了，如果你使用的是firefox或者chrome浏览器，你或许可以下载一些自动填表的扩展插件！但是这些插件都有一个共同的缺点：你只能为指定的站点来保存表单，每当你访问一个新站点时就要再保存一次！又或者你使用的是其他的浏览器，比如大部分的IE，怎么办呢！

<!--more-->

现在网上流传一个书签代码，只要轻轻一点，立刻就可以为你添上你的个人信息！无需插件。

<pre>javascript: void function() { var formArray = ["commentform", "comment_form","frmSumbit"], nameArray = ["author", "author", "inpName"], emailArray = ["email", "mail", "inpEmail"], urlArray = ["url", "url", "inpHomePage"]; for (i = 0; i &lt; formArray.length; i++) { var form = document.getElementById(formArray[i]); if (form != null) { var name = document.getElementById(nameArray[i]), email = document.getElementById(emailArray[i]), url = document.getElementById(urlArray[i]); name != null && (name.value = “你的姓名”), email != null && (email.value = “你的邮件”), url != null && (url.value = “你的网站”); break } } return ! 1 } ()</pre>

或者你也可以直接把下面的链接拖到浏览器的书签栏！

[博客留言信息自动填写</span>](javascript: void function() { var formArray = ["commentform", "comment_form","frmSumbit"], nameArray = ["author", "author", "inpName"], emailArray = ["email", "mail", "inpEmail"], urlArray = ["url", "url", "inpHomePage"]; for (i = 0; i < formArray.length; i++) { var form = document.getElementById(formArray[i]); if (form != null) { var name = document.getElementById(nameArray[i]), email = document.getElementById(emailArray[i]), url = document.getElementById(urlArray[i]); name != null && (name.value = "chonghua"), email != null && (email.value = "chonghua@126.com"), url != null && (url.value = "http://hechonghua.com"); break } } return ! 1 } ())

注意修改一下信息为你自己的信息！

效果：

<img style="display: block; float: none; margin-left: auto; margin-right: auto;" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2012-10-07_221721.png" alt="" /> 

&nbsp;

<img style="display: block; float: none; margin-left: auto; margin-right: auto;" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2012-10-07_221826.png" alt="" /> 

经过重华的一段时间的测试，绝大多数的使用上述两种博客程序的博客都能正常工作，少数主题的表单可能会有问题！