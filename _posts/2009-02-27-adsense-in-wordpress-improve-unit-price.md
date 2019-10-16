---
id: 67
title: wordpress中提高adsense单价
date: 2009-02-27T20:35:48+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/adsense-in-wordpress-improve-unit-price/
permalink: /adsense-in-wordpress-improve-unit-price/
categories:
  - wordpress技巧
tags:
  - adsense
---
众所周知，一般访问并不点击广告。大部分网站广告点击90%是来自搜索引擎的用户看到的第一个页面。另一个问题是Google 的智能计价。智能定价意味着如果你的CTR比较低，那么点击率单价大打折扣。点击率越低，google通过智能计价给你的钱就越少。比如广告商对内容的出价是1美元，你可能只得到$0.05，但是，以下的代码改进就能解决这个问题了。只有用户在搜索引擎点击进来的话，才会显示adsense广告，这意味着你能得到更高的点击率。

<!--more-->

**解决方案：**

1. 打开主题中的functions.php文件。

2. 粘贴进下代码：

<pre>function scratch99_fromasearchengine(){   <br />$ref = $_SERVER['HTTP_REFERER'];    <br />$SE = array(’/search?’, ‘images.google.’, ‘web.info.com’, ’search.’, ‘del.icio.us/search’, ’soso.com’, ‘/search/’, ‘.yahoo.’);//这里可以适当加入其它搜索引擎url特征    <br />foreach ($SE as $source) {    <br />if (strpos($ref,$source)!==false) return true;    <br />}    <br />return false;    <br />}</pre>

3. 把以下代码粘贴到AdSense广告显示位置的相应模板中。它只会在搜索引擎结果中显示：

<pre>if (function_exists('scratch99_fromasearchengine')) {   <br />if (scratch99_fromasearchengine()) {    <br />INSERT YOUR CODE HERE    <br />}    <br />}</pre>

代码说明：这个改进以scratch99\_fromasearchengine（）函数开头，包括了用来指定搜索引擎的$SE数组变量。这样，只要把新元素加入到数组中就能轻松添加新的搜索引擎。如果使用搜索引擎搜索的访客包含了$SE数组变量，scratch99\_fromasearchengine（）接着就会返回true值。

如果不显示adsense广告的话，用其它广告来替换，只需改一下第三段代码。加一个else语句