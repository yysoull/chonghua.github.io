---
id: 369
title: 如何简单的移除Feed Demon 3的广告
date: 2009-09-27T20:42:39+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/how-a-simple-removal-of-feed-demon-3-ads/
permalink: /how-a-simple-removal-of-feed-demon-3-ads/
categories:
  - 其他资源
tags:
  - feeddemon3去广告
---
#### [](http://www.newsgator.com/individuals/feeddemon/default.aspx)

新版的<a title="FeedDemon" href="http://www.newsgator.com/individuals/feeddemon/default.aspx" target="_blank">FeedDemon</a> 3显著的改变就是加入了广告,虽然不怎么碍事,但放在那里多少有点碍眼,当然对于这样一个优秀的阅读器$9.95的售价虽然不贵,但对于中国来说也没有多少的用处,因为不是你想买就可以买,拥有信用卡的人毕竟少数!所以去掉那些广告对开发者来说也没多少影响,至少在中国是这样!但注意不能用于商业用途!自己研究一下就好!

<!--more-->

这里呢,有几种思路,有只屏蔽广告链接的,也有屏蔽掉整个框架的,但是那个滚动条暂时还是无法去除,不过如果您愿意的话,可以把左栏拖大,滚动条就不见了!

1.只屏蔽广告法:

使用**hosts**文件屏蔽

这个文件的具体位置在**C:WindowsSystem32Driversetc**

用记事本打开,添加两行

> 127.0.0.1 www.northmay.com  
> 127.0.0.1 northmay.com 127.0.0.1 northmay.com

效果对比如下</p> 

&#160;

2.屏蔽整个框架法

①关闭feeddemon(如果打开的话),用某个资源修改软件,比如<a href="http://angusj.com/resourcehacker/" target="_blank">ResHacker</a>,打开feeddemon.exe.

②依次打开左侧栏目录树中的"23"-“IDH_THEDECK”-"1033"

③找到“Ads via The Deck”这一行,整行删除,找到"background-image: url($IMAGEDIR$bg-ad.png)"删除,再找"background-color: #555555"把"#555555"改为"#E6EDF9"也就是把背景色改的和上面的颜色一样!

点击上面的"编译脚本",保存后退出.重新打开feeddemon!

你会看到下面的效果</p> </p> 

也就这样了,更完美的方法,可能要你去发掘了,重华暂时也只有这点套路了!

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:0767317B-992E-4b12-91E0-4F059A8CECA8:9e689ddc-c284-4e04-ab8a-9f8b2af0cf2c" class="wlWriterEditableSmartContent">
  Technorati 标签: feeddemon3去广告
</div>