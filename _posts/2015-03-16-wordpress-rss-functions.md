---
id: 2966
title: WordPress的RSS输出功能
date: 2015-03-16T22:49:18+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2966
permalink: /wordpress-rss-functions/
categories:
  - wordpress技巧
tags:
  - RSS
---
大家一般都喜欢使用RSS来订阅博客或者新闻，甚至跟踪Twitter等社交网站的动态，不用打开网站就能阅读到自己需要的信息。但是我们的WordPress的RSS输出功能更为强大，不但能输出文章，还能输出评论、分类、标签、甚至搜索词。而且支持RSS、RSS 2.0、Atom 以及 RDF 标准。

<!--more-->

以下是各标准输出的地址

<table class="table table-bordered">
  <tr class="success">
    <th width="301">
      默认 URL 结构
    </th>
    
    <th width="301">
      友好的结构
    </th>
  </tr>
  
  <tr>
    <td width="301">
      www.example.com/?feed=rss
    </td>
    
    <td width="301">
      www.example.com/feed/
    </td>
  </tr>
  
  <tr>
    <td width="301">
      www.example.com/?feed=rss2
    </td>
    
    <td width="301">
      www.example.com/feed/
    </td>
  </tr>
  
  <tr>
    <td width="301">
      www.example.com/?feed=atom
    </td>
    
    <td width="301">
      www.example.com/feed/atom/
    </td>
  </tr>
  
  <tr>
    <td width="301">
      www.example.com/?feed=rdf
    </td>
    
    <td width="301">
      www.example.com/feed/rdf/
    </td>
  </tr>
</table>

其它各类型的输出地址

<table class="table table-bordered">
  <tr class="success">
    <th width="170">
      类型
    </th>
    
    <th width="431">
      输出地址
    </th>
  </tr>
  
  <tr>
    <td width="170">
      分类
    </td>
    
    <td width="431">
      http://www.example.com/category/categoryname/feed
    </td>
  </tr>
  
  <tr>
    <td width="170">
      标签
    </td>
    
    <td width="431">
      http://www.example.com/tag/tagname/feed
    </td>
  </tr>
  
  <tr>
    <td width="170">
      评论
    </td>
    
    <td width="431">
      http://example.com/comments/feed/
    </td>
  </tr>
  
  <tr>
    <td width="170">
      作者
    </td>
    
    <td width="431">
      http://example.com/author/authorname/feed/
    </td>
  </tr>
  
  <tr>
    <td width="170">
      搜索词
    </td>
    
    <td width="431">
      http://example.com/?s=searchterm&feed=rss2
    </td>
  </tr>
  
  <tr>
    <td width="170">
      自定义文章类型
    </td>
    
    <td width="431">
      http://example.com/feed/?post_type=posttypename
    </td>
  </tr>
</table>

订阅多个分类或者标签

<table class="table table-bordered">
  <tr class="success">
    <th width="189">
      类型
    </th>
    
    <th width="412">
      输出地址
    </th>
  </tr>
  
  <tr>
    <td width="189">
      多个分类
    </td>
    
    <td width="412">
      http://www.example.com/?cat=42,43&feed=rss2
    </td>
  </tr>
  
  <tr>
    <td width="189">
      多个标签
    </td>
    
    <td width="412">
      http://www.example.com/?tag=tag1,tag2&feed=rss2
    </td>
  </tr>
</table>

比如说,我们只需要订阅重华部落格的"软件资源"分类文章,只需要订阅这个地址：

`http://hechonghua.com/category/software/software-tips/feed/`

订阅<a href="http://hechonghua.com/transfer-domain-from-godaddy-to-name/" target="_blank">《域名从GoDaddy转移到Name》</a>的评论,只需要订阅这个地址：

`http://hechonghua.com/transfer-domain-from-godaddy-to-name/feed/`

`http://hechonghua.com/comments/feed/`则是全站的评论。