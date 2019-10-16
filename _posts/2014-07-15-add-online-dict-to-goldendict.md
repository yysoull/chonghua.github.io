---
id: 2877
title: GoldenDict添加在线词典
date: 2014-07-15T18:19:08+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2877
permalink: /add-online-dict-to-goldendict/
categories:
  - Linux
tags:
  - GoldenDict
---
GoldenDict是一款在Linux下为数不多的几个词典软件之一，基本上，也没有什么好的选择了。虽然说，GoldenDict有很多词典可以使用，不过，或许在线的词典更为适合，比如说，百度翻译、有道词典等等。

<!--more-->

GoldenDict添加在线服务很简单，使用%GDWORD%替换字符串即可。

比如，我们翻译“hello”，地址栏地址是“http://fanyi.baidu.com/#en/zh/hello”，然后，我们打开GoldenDict的词典界面，点击“添加”按钮。

<img src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/GoldenDict1.png" alt="" width="620" height="411" /> 

名称输入“百度翻译”，地址输入“http://fanyi.baidu.com/#en/zh/%GDWORD%”。

然后，我们取词的时候，就会出现百度翻译的页面，不过，显示可能会不太舒服。

<img src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/GoldenDict.png" alt="" width="620" height="500" /> 

重华建议使用bing的翻译功能，效果更好。