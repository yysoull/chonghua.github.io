---
id: 116
title: 20 种提升网页速度的技巧
date: 2009-04-10T21:35:44+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/speed-of-20-pages-of-skills-upgrading/
permalink: /speed-of-20-pages-of-skills-upgrading/
categories:
  - 网络资源
tags:
  - 网站优化
---
您希望加快网页的加载速度吗？了解如何通过缩短加载时间来改善拨号上网用户的浏览体验，在某些情形下，加载时间最多可缩短 80%。

<!--more-->

<a name="N1004C">引言</a>

不是所有人都能够使用高速 Internet 连接。即使每个人都能够使用高速网络，也会因为各种各样的原因使您的 Web 应用程序看起来运行缓慢。在这个宽带速度不断提高的时代，您应当关注一下页面加载时间。将珍贵的页面加载时间缩短几秒，将更加珍贵的请求和响应时间缩短几毫秒。您将为访问者创造一种更好的体验。

阅读完本文之后，您将能够较好地了解网页加载时间优化的基本知识。您还能够使用工具和知识更好地识别和判断加载缓慢的页面部分和瓶颈。

<a name="prereqs">先决条件</a>

在理想情况下，您应该安装了 Mozilla Firefox。您还应该大体了解 Web 开发。本文涉及的主题并不复杂，但是如果您了解超文本标记语言（Hypertext Markup Language，HTML）、层叠样式表（Cascading Style Sheet，CSS）以及 ™ 编程语言等主题，那么在学习本文时将更加得心应手。不需要使用集成开发环境（IDE），只需使用您喜爱的编辑器。

您必须在浏览器中启用了 JavaScript。另外，要学习与 Firebug 和 YSlow 相关的内容，您需要安装 Firefox Web 浏览器。

<a name="broadband">假设您没有宽带</a>

许多人通过某种形式的宽带连接访问 Internet，这些形式可能是 DSL、网线、光纤或其他方法。但是，无法使用这类技术的用户不得不使用拨号连接。您一定已经忘记拨号上网是什么感觉了，但您可以试着回想一下网页逐行加载时的情形。<img alt="" src="http://www.ibm.com/i/c.gif" width="10" height="1" / alt="20 种提升网页速度的技巧" > 

2006 Organization for Economic Cooperation and Development (OECD) 报告将_宽带_ 定义为数据下载速率大于 256 kbit/s 的连接。美国 Federal Communications Commission (FCC) 目前将宽带定义为大于 768 kbit/s 速率的所有连接方式。

幸运的是，这些可怜的人们现在已经能够获得一些帮助。您可以通过缩短加载页面的时间来改善他们的体验。但是，拨号连接并不是降低加载和响应速度的惟一原因。许多 Web 设计人员错误地认为高速 Internet 连接的到来会使网站性能优化变得没有必要。这种观点是不对的。例如，过去使用桌面软件执行的许多任务现在可以在线执行。在 Web 应用程序中获得像桌面软件那样的高速响应体验非常困难，因此性能优化非常重要。幸运的是，一些工具和最佳实践可用于缩短响应和加载时间，提供更加流畅的体验。<img alt="" src="http://www.ibm.com/i/c.gif" width="10" height="1" / alt="20 种提升网页速度的技巧" > 

根据 Birds-Eye 的 2007 宽带统计显示，美国境内 25% 的人没有 Internet 连接，53% 的人拥有宽带，21% 的人仍然在使用拨号连接。

<a name="toolsessentials">基本工具</a>

对于所有与优化相关的任务，您必须使用工具来诊断瓶颈和识别问题。现在在 Web 开发中使用最广泛的两个工具是 Firebug 和 YSlow，它们都是开源、免费的 Firefox 插件。 

<a name="firebug">Firebug</a>

Firebug（参见 [参考资料](http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#resources)）是最流行的 Firefox 扩展之一，该应用程序能够使 Web 开发人员的工作更加轻松。它包含许多非常有用的功能，比如：

  * JavaScript 调试 
  * JavaScript 命令行 
  * 监视 JavaScript 性能和跟踪 `XmlHttpRequests` 
  * 登录 Firebug 控制台 
  * 跟踪 
  * 检查 HTML 元素和动态编辑 HTML 代码 
  * 动态编辑 CSS 文档 

<a name="yslow">YSlow</a>

YSlow（参见 [参考资料](http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#resources)）分析网页，并根据 Yahoo! 起草的高性能网站规则（参见 [参考](http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#resources)），告诉您网页加载缓慢的原因。YSlow 是一个与 Firebug 集成的 Firefox 插件，因此您需要首先安装 Firebug，然后才能安装和使用 YSlow。

<a name="installfirebug">安装 Firebug</a>

两个 Firefox 扩展的安装过程都非常简单。要安装 Firebug，执行以下步骤：

  1. 打开 Firefox，转到 [Firebug 主页](http://www.getfirebug.com)。 
  2. 安装最新版的 Firebug。 
  3. 如果 Firefox 配置为阻止弹出窗口，单击 **Allow** 允许打开安装窗口。否则，单击 **Install Now**。 
  4. 重启 Firefox。 

您现在可以从 Tools 菜单访问 Firebug。可以在新窗口或现有窗口中打开 Firebug（参见 [图 1](http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#fig1)）。 

<a name="fig1"><b>图 1. Firefox 起始页的 Firebug HTML 和 Style 视图</b></a>  
<img alt="Firebug 视图" src="http://www.ibm.com/developerworks/cn/web/wa-speedweb/firebuginstalled.jpg" width="500" height="231" / alt="20 种提升网页速度的技巧" > <img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >  
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" > <img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" > 

&#160;

<a name="installyslow">安装 YSlow</a>

安装 Firebug 之后，接下来安装 YSlow。为此，执行以下步骤：

  1. 打开 Firefox，然后转到 [YSlow 主页](http://developer.yahoo.com/yslow)。 
  2. 安装插件，然后重启 Firefox。 **注意：**与许多其他 Firefox 扩展不同，YSlow 不会自动启动。必须首先激活它。 </p> 
  3. 要激活 YSlow，在状态栏右键单击其图标，然后单击 **Autorun**。 

[图 2](http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#fig2) 显示了 YSlow 性能分析的结果。

<a name="fig2"><b>图 2. Firefox 起始页的 YSlow 性能分析</b></a>  
<img alt="YSlow 性能分析" src="http://www.ibm.com/developerworks/cn/web/wa-speedweb/yslow-performancetab.jpg" width="500" height="233" / alt="20 种提升网页速度的技巧" > <img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >  
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" > <img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" > 

&#160;

<a name="commonsense">常识：牢记设计规则</a>

令人惊讶的是简单的设计规则通常会被忽视，最终产生未经优化的、下载缓慢的网页。牢记以下规则，页面的加载速度将会更快。

<a name="goodstructure">使用良好的结构</a>

可扩展 HTML (XHTML) 具有许多优势，但是其缺点也很明显。XHTML 可能使您的页面更加符合标准，但是它大量使用标记（强制性的 `<start>` 和 `<end>` 标记），这意味着浏览器要下载更多代码。所以，事情都有两面性，尝试在您的网页中使用较少的 XHTML 代码，以减小页面大小。

如果您确实不得不使用 XHTML，试着尽可能对它进行优化。例如，删除空格并采用严格的 XHTML 编码实践，提高下载和解析速度。要严格执行 XHTML Strict 规则，向文档中添加以下 `doctype` 语句： 

<pre>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"      
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"&gt;</pre>

XHTML 1.0 Strict 与 Strict HTML 4.01 是等效的，包含的属性和元素没有出现在 HTML 4.01 规范的反对内容中。记住，有两个标记能够在 XHTML Transitional 中使用，但不能在 XHTML Strict 中使用，例如：

  * `<center>` 
  * `<font>` 
  * `<iframe>` 
  * `<strike>` 
  * `<u>` <img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" > <img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" > <img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" > 

&#160;

<a name="overload">不要使布局超载</a>

在博客（和新的站点）流行起来之前，让页面水平滚动甚至垂直滚动被认为是糟糕的实践。页面越小，越难以（但并不是不可能）完好地填充屏幕。现在，对于博客和内容驱动的网站，不时可以看到几百 Kb 大小的长页面。是的，您需要填充更多空间，但是这并不意味着您必须使用大的背景图像、大量表格或者许多内容来填充。坚持简约原则：少即是多。页面中充斥着各种类型的图像、视频、广告等，这大大违背实用性原则，因此，在增加页面的内容时请三思。 

<a name="imagestext">不要使用图像来表示文本</a>

我们很少会控制字体在不同浏览器中的显示方式，与字体不同的是，图像总是精确地按照其设计方式来显示。但这不能当作使用图像来表示文本的借口。

使用图像表示文本的最常见示例就是在导航栏中。美观的按钮更加具有吸引力，但是它们的加载速度很慢。此外，图像仍然不能由搜索引擎直接索引，因此，使用图像进行导航不利于搜索引擎优化（search engine optimization，SEO）。当无需图像就可以通过大量 CSS 技巧创建漂亮的按钮时，绝不使用图像来表示文本。

一种适用于 CSS 样式的特定导航类型就是选项卡式导航，如 [图 3](http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#fig3) 所示。 

<a name="fig3"><b>图 3. 选项卡式导航</b></a> <img alt="选项卡式导航" src="http://www.ibm.com/developerworks/cn/web/wa-speedweb/tabs.jpg" width="500" height="33" / alt="20 种提升网页速度的技巧" > 

除了体积较小之外，这种实现导航的方式也更加符合 Web 标准。<img alt="" src="http://www.ibm.com/i/c.gif" width="10" height="1" / alt="20 种提升网页速度的技巧" > 

遵循统称为 _Web 标准_ 的一组最佳实践的网站具有精简性、可访问性、搜索引擎友好性、适用性和基于 CSS 的特征。

[清单 1](http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#list1) 和 [清单 2](http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#list2) 中的代码以纯 CSS/XHTML 的形式实现基于选项卡的导航功能。 

<a name="list1"><b>清单 1. 基于选项卡导航的 CSS 文档</b></a>

<pre>#nav {
      float:left;
      width:100%;
      background:#E7E5E2;
      font-size:95%;
      line-height:normal;
      border-bottom:1px solid #54545C;
      }
    #nav ul {
    margin:0;
    padding:10px 10px 0 50px;
    list-style:none;
      }
    #nav li {
      display:inline;
      margin:0;
      padding:0;
      }
    #nav a {
      float:left;
      background:url("tableftK.gif") no-repeat left top;
      margin:0;
      padding:0 0 0 4px;
      text-decoration:none;
      }
    #nav a span {
      float:left;
      display:block;
      background:url("tabrightK.gif") no-repeat right top;
      padding:5px 15px 4px 6px;
      color:#FFF;
      }
    /* Commented Backslash Hack hides rule from IE5-Mac */
    #nav a span {float:none;}
    /* End IE5-Mac hack */
    #nav a:hover span {
      color:#FFF;
      background-position:100% -42px;
      }
    #nav a:hover {
      background-position:0% -42px;
      }
    #nav a:hover span {
      background-position:100% -42px;
      }</pre>

<a name="list2"><b>清单 2. 基于选项卡导航的 HTML 代码</b></a>

<pre>&lt;div id="nav"&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#" title="Link 1"&gt;&lt;span&gt;Link 1&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#" title="Link 2"&gt;&lt;span&gt;Link 2&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#" title="Link 3"&gt;&lt;span&gt;Link 3&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#" title="Longer Link Text"&gt;&lt;span&gt;Longer Link Text&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#" title="Link 5"&gt;&lt;span&gt;Link 5&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre><img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" > <img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" > <img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" > 

&#160;

<a name="cookie">检查 cookie 使用情况</a>

cookie 可能是很小的文件，但是浏览器仍然需要下载它们。较大的 cookie 所需的下载时间更长，进而增加了浏览器加载网页的时间。正因为如此，尽可能缩小 cookie 来最小化对浏览器响应时间的影响非常重要。

此外，设置一个较早的 `expire` 日期或者根本不设置 `expire` 日期，会缩短响应时间。要在 PHP 语言中设置 cookie 的 `expire` 日期，使用以下代码： 

<pre>&lt;?php 
 $expire = 2592000 + time(); 
 // Add 30 day’s to the current time 
 setcookie(userid, “123rrw3”, $expire);
?&gt;</pre>

这段代码设置 cookie `userid`，并将 `expire` 日期设置为自当前日期之后 30 天。<img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" > <img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" > <img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" > 

&#160;

<a name="jojs">不要包含不必要的 JavaScript 代码，尽可能将其外部化</a>

与 cookie 类似，JavaScript 文件的下载也需要时间，这不可避免地会降低整个页面的加载速度。因此，明智地使用 JavaScript（仅在真正必要时才使用）并优化脚本的大小和速度。

缩短 JavaScript 下载时间的另一种方式是使用外部文件，而不是包含脚本内联。这种方法也适用于 CSS，因为浏览器会缓存外部化的文本，而（在 HTML 页面自身中）以内联方式编码的 CSS 或 JavaScript 每次都会随 HTML 一起加载。要通过在 HTML 中引用 CSS 和 JavaScript 代码来外部化它们，可以使用具有以下形式的代码： 

<pre><link href="/stylesheets/myStyle.css" media="all" rel="Stylesheet" type="text/css" />
   <script src="/javascripts/myJavascript.js" type="text/javascript"></script></pre alt="20 种提升网页速度的技巧" >


<p>
  <a name="avoidtables">尽可能避免使用表格</a>
</p>


<p>
  表格被用作网页的主要构建块，但是作为页面布局元素，使用表格现在被认为是糟糕的做法。有时候，您必须使用表格（并且它们被认为是显示表格数据的出色实践）。如果是这样，明确地指定表格单元格、行和列的宽度和高度，否则，浏览器必须执行许多操作来计算如何显示它们，这会降低页面加载速度： 
</p>


<pre>&lt;td width="50px" height="10px"&gt;...&lt;/td&gt;</pre>


<p>
  <a name="remove">删除任何不必要的元素</a>
</p>


<p>
  可能这是所有技巧中最显而易见的一个，但是它也是最容易忘记的一个技巧。我曾经提到过 “少即是多”：这不仅是为了真正吸引更广泛的用户，还意味着需要下载和处理的东西更少。如果您真正需要在网页上放置许多内容，考虑将网页分为 2 个、3 个或更多的独立页面。 
</p>


<p>
  <a name="tips">一些优化网页的技巧</a>
</p>


<p>
  可以使用许多方法来优化您的网页，包括压缩 JavaScript 文件，使用超文本传输协议（Hypertext Transfer Protocol，HTTP）压缩，以及设置图像大小。
</p>


<p>
  <a name="compressjs">压缩和缩小 JavaScript 文件</a>
</p>


<p>
  JavaScript 文件可能非常大，这意味着在某些情形中，它们的下载时间可能比所有其他组件下载时间之和还长。解决此问题的一种方法是压缩 JavaScript 文件。您可以使用 GNU zip (gzip) 来完成此任务，因为许多浏览器都支持这种压缩算法。
</p>


<p>
  另一种替代方法是缩小文件。这种方法删除代码中所有不必要的字符，比如制表符（tab）、新行和空格。它删除代码中的注释和空白，进一步缩小文件大小。外部和内部样式表都可以缩小。两种最流行的缩小工具是 JSMin 和 YUI Compressor（参见 <a href="http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#resources">参考资料</a>）。
</p>
<img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" >
<img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" >


<p>
  &#160;
</p>


<p>
  <a name="httpcompression">使用 HTTP 压缩，并始终使用小写的 div 和类名</a>
</p>


<p>
  可以使用 HTTP 压缩来减少服务器与浏览器之间的通信量。可以在 Apache 中配置 HTTP 压缩（.htaccess 文件），或者可以将其包含到页面中（对于 PHP，可以使用一个 <code>HTTP_ACCEPT_ENCODING</code> 选项）。但是请注意：不是所有浏览器都支持压缩。即使是支持压缩的浏览器，压缩和解压缩都会加重处理器的负载。要在 Apache 中启用地毯式（blanket）压缩（即压缩所有文本和 HTML），使用以下命令：
</p>


<pre>AddOutputFilterByType DEFLATE text/html text/plain text/xml</pre>


<p>
  另外，考虑一下您想要压缩的内容。图像、音乐和视频在创建时已经进行了压缩，因此您可以将压缩对象限制为 HTML、CSS 和 JavaScript 文件。
</p>


<p>
  另一种减少压缩工作的技巧是使用小写形式的 <code>&lt;div&gt;</code> 元素和类名。由于大小写敏感性，并且使用的是无损压缩，<code>&lt;header&gt;</code> 与 <code>&lt;Header&gt;</code> 不同，它们被压缩为两个不同的标记。在下面的例子中，对于压缩程序来说，<code>Important</code> 类与 <code>important</code> 类是不同的，这意味着对于压缩程序，它们表示不同的对象，因此被分别压缩为两段不同的文本。 
</p>


<pre>&lt;div class="Important"&gt;read this!&lt;/div&gt;
&lt;div class="important"&gt;This will cost you some valuable load time&lt;/div&gt;</pre>


<p>
  留意细节似乎无关紧要。但是当您优化文件时，所有细微的细节都应考虑在内。
</p>
<img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" >
<img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" >


<p>
  &#160;
</p>


<p>
  <a name="setimagesize">设置图像大小</a>
</p>


<p>
  与表格单元格、行和列一样，当您未明确设置图像大小时，浏览器需要执行计算来显示图像，这会降低处理速度。此外，在某些情形下，图像大小的计算结果可能不正确，因此图像会发生变形。
</p>


<p>
  <a name="cssimage">将 CSS 图像映射用于装饰功能</a>
</p>


<p>
  使用图像映射代替多个图像，这是另一种缩短加载时间的方式，因为同时下载图像的各个独立部分能够加快整个页面的下载进度。或者，您可以使用某种名为 <i>CSS sprites</i> 的工具（参见 <a href="http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#resources">参考资料</a>）。CSS sprites 可帮助减少 HTTP 请求的数量。一个图像可以包含装饰或布置页面所需的所有图像元素。您使用 CSS 来选择（通过调用某些位置和维度）用于特定元素的映射。
</p>
<img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" >
<img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" >


<p>
  &#160;
</p>


<p>
  <a name="delayload">尽可能延迟脚本加载</a>
</p>


<p>
  我 <a href="http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#jojs">在前面</a> 提到过，移除完全不需要的 JavaScript 代码能够加快加载和处理速度。但是如果代码已经非常精简并且必须在页面中包含 JavaScript 代码的话，该怎么办？
</p>


<p>
  在这种情形下，一种提升页面下载速度的潜在方式是将脚本放在页面的底部，使页面加载更迅速。通常，浏览器只能（从同一个域）下载不超过两个并行对象，如果一个对象是一段 JavaScript 代码，那么在该脚本下载完之前，其他页面组件的下载将会暂停。如果将 JavaScript 代码放在页面底部，（在大多数情况下）它将在最后下载，这时所有其他组件都已下载完。
</p>


<p>
  使用 Firebug 扩展跟踪加载缓慢的文件，我敢打赌您的 JavaScript 文件是下载最慢的文件。压缩 JavaScript 文件会有所帮助，但是仅仅这样可能还不够。您可以使用以下代码片段延迟 JavaScript 的加载： 
</p>


<pre>var delay = 5;
setTimeout("heavy();", delay * 1000);</pre>


<p>
  这段代码将对 <code>heavy()</code> 方法的调用延迟了 5 秒。您可以将这段代码与下面的技巧结合使用来延迟整个 JavaScript 文件的加载。
</p>


<p>
  <a name="loadondemand">按需加载 JavaScript 文件</a>
</p>


<p>
  要按需加载 JavaScript，使用 import() 函数，如 <a href="http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#list3">清单 3</a> 所示。
</p>


<p>
  <a name="list3"><b>清单 3. import() 函数</b></a>
</p>


<pre>               
function $import(src){
  var scriptElem = document.createElement('script');
  scriptElem.setAttribute('src',src);
  scriptElem.setAttribute('type','text/javascript');
  document.getElementsByTagName('head')[0].appendChild(scriptElem);
}

// import with a random query parameter to avoid caching
function $importNoCache(src){
  var ms = new Date().getTime().toString();
  var seed = "?" + ms; 
  $import(src + seed);
}</pre>


<p>
  <a name="verifyload">验证函数加载</a>
</p>


<p>
  也可以验证一个函数是否被加载，如果没有，加载 JavaScript 文件。为此，使用 <a href="http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#list4">清单 4</a> 中的代码。 
</p>


<p>
  <a name="list4"><b>清单 4. 验证函数是否被加载</b></a>
</p>


<pre>               
if (myfunction){
  // The function has been loaded
}
else{ // Function has not been loaded yet, so load the javascript.
  $import('http://www.yourfastsite.com/myfile.js');
}</pre>


<p>
  <b>注意：</b>可以使用 <code>defer</code> 属性，但不是所有浏览器（包括 Firefox）都支持它。
</p>
<img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" >
<img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" >


<p>
  &#160;
</p>


<p>
  <a name="optimizecss">优化 CSS 文件</a>
</p>


<p>
  如果经过适当优化和维护，CSS 文件不一定很大。例如，具有很多独立类的 CSS 文件会影响下载速度。与 JavaScript 文件一样，您需要优化 CSS 文件，使其包含所需的所有内容，同时保持合理的大小。另外，使用外部文件代替内联定义来适应浏览器的缓存机制。
</p>
<img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" >
<img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" >


<p>
  &#160;
</p>


<p>
  <a name="cdn">使用内容分布网络</a>
</p>


<p>
  内容分布网络（Content-distribution network，CDN）是另一种缩短下载时间的好方法。当您将静态图像放在 Internet 上的许多服务器上时，用户能够从离他们最近的服务器下载这些图像。此外，大多数 CDN 都在快速服务器上运行，因此无论服务器的加载速度如何，其响应速度都比小型的超载服务器快。
</p>


<p>
  <a name="multipledomains">对资产使用多个域来增加连接</a>
</p>


<p>
  CDN 的另一个优势是它们是独立的域。因为您的浏览器将并发连接的数量限制到一个单一的域，因此无论何时加载一个页面，都很容易占满所有线程。因此，到其他资产的连接被延迟了。然而，您的浏览器能够打开新线程或到其他域的连接，这样，从另一个域加载的任何资产都可以与其他所有资产同时加载。
</p>
<img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" >
<img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" >


<p>
  &#160;
</p>


<p>
  <a name="gears">在合适的时候使用 Google Gears</a>
</p>


<p>
  使用 Google Gears（参见 <a href="http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#resources">参考资料</a>）是避免用户反复下载同一内容的另一种好方法。Gears 允许用户离线访问 Web 应用程序，但是也允许将页面元素持久化到用户的计算机上。因此，频繁加载但未进行更新的内容可以存储在 Gears 数据库中，该数据库是一个 SQLite3 关系数据库管理系统。对同一内容的所有 <code>next</code> 请求都可以从数据库（而不是服务器）直接加载。
</p>


<p>
  安装 Gears 之后，获取 gears_init.js 文件，以便轻松访问 Gears 工厂和应用程序编程接口（API），将其保存为 <i>gears_init.js</i>，通过以下方式在您的代码中引用它：
</p>


<pre><script type="text/javascript" src="gears_init.js"></script></pre alt="20 种提升网页速度的技巧" >


<p>
  要确定是否已安装 Gears，使用 <a href="http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#list5">清单 5</a> 中的代码。
</p>


<p>
  <a name="list5"><b>清单 5. 确定是否已安装 Gears</b></a>
</p>


<pre>               
&lt;script&gt;
  if (!window.google || !google.gears) {
    location.href = "http://gears.google.com/?action=install&message=&lt;welcome message&gt;" 
        + "&return=&lt;return url&gt;";
  }
&lt;/script&gt;</pre>


<p>
  如果未安装 Gears，代码将向您提供下载 Gears 的 URL。
</p>


<p>
  当所有元素都通过验证并且 Gears 已安装之后，您可以测试 Gears 的极其有用的数据库功能，使用 <a href="http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#list6">清单 6</a> 中的 JavaScript 代码。 
</p>


<p>
  <a name="list6"><b>清单 6. 测试数据库功能</b></a>
</p>


<pre>               
&lt;script type="text/javascript"&gt;
 var db = google.gears.factory.create('beta.db');
 db.open('database-test');
 db.execute('create table if not exists Test' +
           ' (Phrase text, Timestamp int)');
 db.execute('insert into Test values (?, ?)', ['Monkey!', new Date().getTime()]);
 var rs = db.execute('select * from Test order by Timestamp desc');

 while (rs.isValidRow()) {
  alert(rs.field(0) + '@' + rs.field(1));
  rs.next();
 }
 rs.close();
&lt;/script&gt;</pre>


<p>
  这段代码在您的计算机或服务器上创建一个本地数据库 <i>db。</i>如果表 <i>Test</i> 不存在，则创建一个，然后插入测试数据（<i>Monkey!</i> 和时间）。代码从数据库获取数据，并在浏览器中以警告的形式呈现出来。
</p>


<p>
  想像一下可能发生的结果！
</p>
<img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" >
<img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" >


<p>
  &#160;
</p>


<p>
  <a name="png">使用 PNG 格式的图像</a>
</p>


<p>
  Graphic Interchange Format (GIF) 和 Joint Photographic Experts Group (JPEG) 图像格式都已过时了：Portable Network Graphic (PNG) 是未来流行的格式。当然，您可以说 GIF 和 JPEG 已经消亡，或者 PNG 没有任何缺陷，但是所有事物都有各自的优缺点，PNG 以最佳的文件大小提供了出色的质量。因此，如果进行选择的话，应该尽可能使用 PNG 图像。
</p>
<img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" >
<img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" >


<p>
  &#160;
</p>


<p>
  <a name="shortajax">保持 Ajax 调用简短、准确</a>
</p>


<p>
  当统称为 Asynchronous JavaScript + XML (Ajax) 的技术在两年前出现时，这些技术为处理页面请求和响应提供了一种革命性方法。然而，拨号用户可能从来没机会体验其真正的优势，因为在许多情形下，Ajax 需要在浏览器与服务器之间大量通信。因此，如果您能够保持 Ajax 调用简短和准确，可以避免用户花费无止尽的时间来等待元素刷新或响应。
</p>
<img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" >
<img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" >


<p>
  &#160;
</p>


<p>
  <a name="oneajax">进行一次较大的 Ajax 调用并在本地处理客户机数据</a>
</p>


<p>
  如果不能进行简短的 Ajax 调用，或者如果这些调用不能提供期望的结果，可以考虑一种替代方法：进行一次大的 Ajax 调用来获取所需的一切内容，然后让客户机在本地处理数据。通过这种方式，客户机只需等待一次（获取传入的数据），但是在此之后（当浏览器与服务器之间没有必要通信时），处理速度将更快。当然，还有大量 Ajax 优化技术，本教程无法一一列出。如果想要了解关于 Ajax 的更多信息，请查看 <a href="http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#resources">参考资料</a>。 
</p>


<p>
  <a name="sandbox">在沙箱中测试代码</a>
</p>


<p>
  还有一个经常被遗忘的常用技巧。尽管清醒的 Web 开发人员通常会在启动应用程序之前对其进行测试，但是有时候测试会使他们不那么重视维护任务，或者新功能添加得太快，并且未经过充分考虑或测试。结果，余下的脚本减缓了应用程序的速度。
</p>


<p>
  如果您添加一项新功能，可以首先在沙箱里（完全脱离了应用程序的其余部分）进行测试，查看它作为单个函数的行为。通过这种方式，您可以反复检查，并分析性能和响应时间，无需考虑 Web 应用程序的其余部分。然后，当新功能的行为符合预期时，可以将其引入到应用程序的其余部分中，运行其他测试，保证功能本身的行为符合预期。
</p>
<img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" >
<img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" >


<p>
  &#160;
</p>


<p>
  <a name="analyze">分析站点代码</a>
</p>


<p>
  在许多场景中，自我反省是一个不错的建议。幸运的是，在开发过程中，我们可以使用工具来帮助反省，并尽可能客观地进行实践。像 JSLint（参见 <a href="http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#resources">参考资源</a>）这样的工具的价值是无法衡量的，尽管其站点宣称它 “可能令您备受挫折”，因为它向您提供了所有的潜在代码缺陷，这些缺陷不但使调试更加困难，而且可能导致更长的响应时间。 
</p>
<img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" >
<img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" >


<p>
  &#160;
</p>


<p>
  <a name="jslint">使用 JSLint 检查 JavaScript 代码中的错误或糟糕的编码实践</a>
</p>


<p>
  您不需要像完美主义者那样追求完美无缺的 JavaScript 代码。但是，许多开发人员没有认真对待代码分析，通常在开发过程中跳过了这个步骤。不幸的是，错误和糟糕的编码实践不仅不太专业，而且可能减缓应用程序的速度。当浏览器忙于应付错误和糟糕的编码实践时，加载不仅需要更多时间，还会导致难以调试的错误。 
</p>


<p>
  因此，如果想要获得良好的代码，可以考虑使用代码分析工具。有许多不同的工具可供使用，但是最适合 JavaScript 语言的工具非 JavaScript Lint 莫属，它也叫做 JSLint（参见 <a href="http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#resources">参考资料</a>）。也可以使用 Firebug，但是 JSLint 更加正式，它包含在 YSlow 中。 
</p>
<img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" >
<img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" >


<p>
  &#160;
</p>


<p>
  <a name="orphans">检查孤立的文件和丢失的图像</a>
</p>


<p>
  检查孤立的文件和丢失的图像是一种明智之举。大部分 Web 开发人员都会检查错误的文件引用，但是这里仍然需要说明一下。丢失的文件容易引起各种问题，因为它们会导致 “The image/page cannot be displayed” 之类的错误消息。但是在网页速度优化方面，它们具有更大的缺陷：当浏览器寻找丢失的或孤立的文件时，它会消耗资源，这不可避免地会导致页面处理速度变慢。因此，请检查孤立或丢失的文件，包括拼写错误的文件名。
</p>
<img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" >
<img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" >


<p>
  &#160;
</p>


<p>
  <a name="YSlow">YSlow 扩展</a>
</p>


<p>
  YSlow Firebug 扩展使主观的网页分析日渐被淘汰。YSlow 使用 Yahoo! 起草的面向高性能网站的权威规则，分析网页并告诉您它们变慢的原因。
</p>
<img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" >
<img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" >


<p>
  &#160;
</p>


<p>
  <a name="analyzepgs">使用 YSlow 分析网页</a>
</p>


<p>
  YSlow 是一个相对较小但非常有用的 Firefox 扩展。当启动 YSlow 时，该扩展在浏览器的下半部分中打开，如 <a href="http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#fig4">图 4</a> 所示。
</p>


<p>
  <a name="fig4"><b>图 4. Firefox 中的 YSlow 扩展 </b></a>
</p>
<img alt="Firefox 中的 YSlow 扩展" src="http://www.ibm.com/developerworks/cn/web/wa-speedweb/PerformanceView.jpg" width="500" height="249" / alt="20 种提升网页速度的技巧" >


<p>
  图 4 显示了 Performance 视图，可以在其中看到 YSlow 如何评估您的网页的性能，还能够看到该扩展检测到的问题。单击列表中的一个链接将打开一个页面，其中解释了相应的错误。如果存在可以改进的页面组件，YSlow 会给出改进建议。
</p>


<p>
  在 Inspect 视图中，如 <a href="http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#fig5">图 5</a> 所示，您可以逐一分析元素来剖析页面。Inspect 视图的一个最有用的功能是，当您在页面上移动鼠标指针时，它会自动刷新，因此您无需通过滚动代码内容来查找需要检查的行。 
</p>


<p>
  <a name="fig5"><b>图 5. Firefox 中的 YSlow Inspect 视图</b></a> 
</p>
<img alt="YSlow Inspect 视图" src="http://www.ibm.com/developerworks/cn/web/wa-speedweb/InspectView.jpg" width="500" height="298" / alt="20 种提升网页速度的技巧" >


<p>
  从 Stats 视图的名称可以猜测到，它（如 <a href="http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#fig6">图 6</a> 所示）显示与当前页面有关的统计数据。这些数据包括空的和主要的缓存和 cookie。
</p>


<p>
  <a name="fig6"><b>图 6. Firefox 中的 YSlow Stats 视图</b></a> 
</p>
<img alt="YSlow Stats 视图" src="http://www.ibm.com/developerworks/cn/web/wa-speedweb/StatsView.jpg" width="500" height="350" / alt="20 种提升网页速度的技巧" >


<p>
  Components 视图（如 <a href="http://www.ibm.com/developerworks/cn/web/wa-speedweb/?ca=drs-tp4608#fig7">图 7</a> 所示）列出了当前页面上的组件。显示的与每个组件有关的数据包括文件类型和路径、页面过期时间以及 HTTP 响应报头。单击一个组件可以将其打开，以供查看。单击一个列标题可以按升序或降序对表进行排序。
</p>


<p>
  <a name="fig7"><b>图 7. YSlow Components 视图</b></a> 
</p>
<img alt="YSlow Components 视图" src="http://www.ibm.com/developerworks/cn/web/wa-speedweb/ComponentsView.jpg" width="500" height="239" / alt="20 种提升网页速度的技巧" >


<p>
  YSlow 是一个较小的、有用的扩展，可以在提高页面加载速度方面为您提供许多帮助。如果您以前未使用过它，那么现在应该使用了。
</p>
<img alt="" src="http://www.ibm.com/i/v14/rules/blue_rule.gif" width="100%" height="1" / alt="20 种提升网页速度的技巧" >
<img border="0" alt="" src="http://www.ibm.com/i/c.gif" width="8" height="6" / alt="20 种提升网页速度的技巧" >
<img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="4" / alt="20 种提升网页速度的技巧" >


<p>
  &#160;
</p>


<p>
  <a name="summary">结束语</a>
</p>


<p>
  优化网页的加载速度并不复杂。实际上，您通常可以轻而易举地实现速度优化。如果遵循本文中介绍的技巧以及 Web 开发最佳实践，那么无需采用其他措施就可以提高页面的加载速度。
</p>


<p>
  将大量页面优化技巧收集到一起很简单，我希望本文的资源具有一定的价值。但是，如果您认为速度优化技巧只有这里列出的这些，那么您将惊奇地发现远远不止这些。但是，即使您仅遵循这 20 多个技巧，您的页面的加载速度也会更快，您的用户也会更惬意 —— 无论他们通过拨号还是专用的宽带上网。
</p>


<p>
  <a name="resources">参考资料 </a>
</p>


<p>
  <b>学习</b>
</p>


<ul>
  <li>
    在 Wikipedia 上查找 <a href="http://en.wikipedia.org/wiki/Broadband_Internet_access">与宽带网络接入相关的一般信息和指标</a>。 
  </li>
  
  
  <li>
    阅读 Yahoo! Exceptional Performance 团队起草的 <a href="http://developer.yahoo.com/performance/index.html#rules">高性能网站规则</a>。 
  </li>
  
  
  <li>
    阅读 Martin Brown 的文章 “<a href="http://www.serverwatch.com/tutorials/article.php/3514866">Using HTTP Compression</a>”（ServerWatch，2005 年 6 月），了解有关 HTTP 压缩各方面的详细信息。 
  </li>
  
  
  <li>
    了解 <a href="http://www.alistapart.com/articles/sprites/">CSS sprites</a> —— 它们是什么以及如何使用它们加快图像加载速度。 
  </li>
  
  
  <li>
    Learn how to <a href="http://javascript-reference.info/speed-up-your-javascript-load-time.htm">加快 JavaScript 加载速度</a>。 
  </li>
  
  
  <li>
    阅读 Jesse Skinner 的 developerWorks 文章 “<a href="http://www.ibm.com/developerworks/cn/web/wa-aj-when">在应用程序中使用 Ajax 的时机</a>”。 
  </li>
  
  
  <li>
    了解与 <a href="http://www.gnu.org/software/gzip/">gzip 压缩库</a> 有关的更多信息。 
  </li>
  
  
  <li>
    <a href="http://www.ibm.com/developerworks/cn/web/">developerWorks Web 开发专区</a> 包含用于 Web 2.0 开发的大量工具和信息。 
  </li>
  
  
  <li>
    <a href="http://www.ibm.com/developerworks/cn/offers/techbriefings/">developerWorks 技术活动和网络广播</a>：随时关注最新技术。 
  </li>
  
  
  <li>
    <a href="http://www.ibm.com/developerworks/apps/SendTo?bookstore=safari">技术书店</a>：浏览与本文所述主题和其他技术主题相关的图书。 
  </li>
  
</ul>


<p>
  <b>获得产品和技术</b>
</p>


<ul>
  <li>
    使用 <a href="http://www.crockford.com/javascript/jsmin.html">JSMin</a> 将您的 JavaScript 文件精简到极限。 
  </li>
  
  
  <li>
    <a href="http://developer.yahoo.com/yui/compressor/">YUI Compressor</a> 是 Yahoo! 的 JavaScript 压缩器和 Yahoo! UI Library 的一部分。这个站点还提供了有关压缩代码的不同方面以及理想的代码如何淡化负面效应的大量读物。 
  </li>
  
  
  <li>
    <a href="http://www.jslint.com">JSLint</a> 可以帮助您识别糟糕的编码实践。 
  </li>
  
  
  <li>
    <a href="http://getfirebug.com">Firebug</a> 是一个 Firefox 插件，为您提供了广泛的开发工具。 
  </li>
  
  
  <li>
    发现和下载 <a href="http://gears.google.com">Google Gears</a>。 
  </li>
  
  
  <li>
    <a href="http://developer.yahoo.com/yslow/">YSlow</a> 是 Yahoo! 开发的一个 Firebug 插件，用于分析您的页面并告诉您页面变慢的原因。 
  </li>
  
</ul>


<p>
  <b>讨论</b>
</p>


<ul>
  <li>
    <a href="http://www.ibm.com/developerworks/blogs/">developerWorks 博客</a>：查看 developerWorks 博客并参与 <a href="http://www.ibm.com/developerworks/community">developerWorks 社区</a>。 
  </li>
  
</ul>


<p>
  <a name="author">关于作者</a>
</p>
<img alt="" src="http://www.ibm.com/i/c.gif" width="100%" height="5" / alt="20 种提升网页速度的技巧" >
<img alt="" src="http://www.ibm.com/i/c.gif" width="4" height="5" / alt="20 种提升网页速度的技巧" >


<p>
  Marco Kotrotsos 是一名拥有 10 年构建软件系统经验的开发人员，他构建过的软件系统范围很广，从用于顶级保险公司的企业级应用程序，到用于刚起步的企业的 SMB 和 Web 应用程序的管理工具。Marco 是 Incredicorp 的创始人，这家公司主要帮助刚起步的企业和小型企业将他们的产品推向市场。他与语义 Web、AI、CSS3 和语义搜索等先进领域的技术专家合作。
</p>


<p>
  本文摘自:IBM developerworks
</p>