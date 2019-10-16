---
id: 285
title: WordPress模板常用函数
date: 2009-08-28T20:19:41+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/wordpress-templates-of-commonly-used-functions/
permalink: /wordpress-templates-of-commonly-used-functions/
categories:
  - wordpress技巧
tags:
  - wordpress函数
---
**<img style="display: inline; margin-left: 0px; margin-right: 0px" height="61" src="http://s.wordpress.org/about/images/logos/wordpress-logo-hoz-rgb.png" width="175" align="right" / alt="WordPress模板常用函数" > 如果您是一位wordpress新手，那么这些函数对你来说十分有用，比如说你看中了某款主题，但是需要改动以适合你的要求，那么这些函数和名称你是必须了解的！**

<!--more-->

**基本模板文件**

style.css : CSS(样式表)文件  
index.php : 主页模板  
archive.php : Archive/Category模板  
404.php : Not Found 错误页模板  
comments.php : 留言/回复模板  
footer.php : Footer模板  
header.php : Header模板  
sidebar.php : 侧栏模板  
page.php : 内容页(Page)模板  
single.php : 内容页(Post)模板  
searchform.php : 搜索表单模板  
search.php : 搜索结果模板

**基本条件判断Tag**

is_home() : 是否为主页  
is_single() : 是否为内容页  
(Post) is_page() : 是否为内容页  
(Page) is_category() : 是否为Category/Archive页  
is_tag() : 是否为Tag存档页  
is_date() : 是否为指定日期存档页  
is_year() : 是否为指定年份存档页  
is_month() : 是否为指定月份存档页  
is_day() : 是否为指定日存档页  
is_time() : 是否为指定时间存档页  
is_archive() : 是否为存档页  
is_search() : 是否为搜索结果页  
is_404() : 是否为 “HTTP 404: Not Found” 错误页  
is_paged() : 主页/Category/Archive页是否以多页显示

**Header部分PHP函数**

<!--p bloginfo(’name’);-->: 博客名称(Title)  
<!--p bloginfo(’stylesheet_url’);-->: CSS文件路径  
<!--p bloginfo(’pingback_url’);-->: PingBack Url  
<!--p bloginfo(’template_url’);-->: 模板文件路径  
<!--p bloginfo(’version’);-->: WordPress版本  
<!--p bloginfo(’atom_url’);-->: Atom Url  
<!--p bloginfo(’rss2_url’);-->: RSS 2.o Url  
<!--p bloginfo(’url’);-->: 博客 Url  
<!--p bloginfo(’html_type’);-->: 博客网页Html类型  
<!--p bloginfo(’charset’);-->: 博客网页编码  
<!--p bloginfo(’description’);-->: 博客描述  
<!--p wp_title();-->: 特定内容页(Post/Page)的标题

**模板PHP函数及命令**

<!--p get_header();-->: 调用Header模板  
<!--p get_sidebar();-->: 调用Sidebar模板  
<!--p get_footer();-->: 调用Footer模板  
<!--p the_content();-->: 显示内容(Post/Page)  
<!--p if(have_posts()) :-->: 检查是否存在Post/Page  
<!--p while(have\_posts()) : the\_post();-->: 如果存在Post/Page则予以显示  
<!--p endwhile;-->: While 结束  
<!--p endif;-->: If 结束  
<!--p the_time(’字符串’)-->: 显示时间，时间格式由“字符串”参数决定，具体参考PHP手册  
<!--p comments\_popup\_link();-->: 正文中的留言链接。如果使用 comments\_popup\_script() ，则留言会在新窗口中打开，反之，则在当前窗口打开  
<!--p the_title();-->: 内容页(Post/Page)标题  
<!--p the_permalink()-->: 内容页(Post/Page) Url  
<!--p the_category(’,')-->: 特定内容页(Post/Page)所属Category  
<!--p the_author();-->: 作者  
<!--p the_ID();-->: 特定内容页(Post/Page) ID  
<!--p edit\_post\_link();-->: 如果用户已登录并具有权限，显示编辑链接  
<!--p get\_links\_list();-->: 显示Blogroll中的链接  
<!--p comments_template();-->: 调用留言/回复模板  
<!--p wp\_list\_pages();-->: 显示Page列表  
<!--p wp\_list\_categories();-->: 显示Categories列表  
<!--p next\_post\_link(’%link’);-->: 下一篇文章链接  
<!--p previous\_post\_link(’%link’);-->: 上一篇文章链接  
<!--p get_calendar();-->: 日历  
<!--p wp\_get\_archives()-->: 显示内容存档  
<!--p posts\_nav\_link();-->: 导航，显示上一篇/下一篇文章链接  
<!--p include(TEMPLATEPATH . ‘/文件名’);-->: 嵌入其他文件，可为定制的模板或其他类型文件

**模板相关其他函数**

<!--p _e(’Message’);-->: 输出相应信息  
<!--p wp_register();-->: 显示注册链接  
<!--p wp_loginout();-->: 显示登录/注销链接  
<!--ext pag-->: 将当前内容分页  
<!--or-->: 将当前内容截断，以不在主页/目录页显示全部内容  
<!--p timer_stop(1);-->: 网页加载时间(秒)  
<!--p echo get\_num\_queries();-->: 网页加载查询量

当然，wordpress的函数远远不止这些，如果你有更高的要求，请访问wordpress官方代码页面
