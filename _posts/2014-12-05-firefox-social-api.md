---
id: 2941
title: 使用 Firefox 社交服务
date: 2014-12-05T22:57:30+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2937
permalink: /firefox-social-api/
categories:
  - 软件资源
tags:
  - firefox
  - Social API
  - 社交
---
Firefox 在早前就集成了所谓的 Social API 功能，简单的说，就是把社会化媒体功能集成到浏览器中。大家还记得 Flock 这个基于 Firefox 浏览器吗？Flock 当初就是超前的实现了这个功能。只可惜生不逢时，最终停止了开发。

<!--more-->

可能有心的朋友早就在 Firefox 附加组件的界面中看到过一项名为“服务”的选项。如下图所示：

![使用 Firefox 社交服务](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/SocialAPI.png) 

但是，右侧却是空空如也，什么东西也没有，也不知道如何添加，其实这就是所谓的 Social API 最直观的体现了。使用中国版火狐的朋友可能会内置有新浪微博的服务。

### 如何添加服务

首先，打开`about:config`配置页面，搜索`social.enabled`字符串，将布尔值切换为`true`，一般已经默认为`true`

``![使用 Firefox 社交服务](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/socialapi1.png)

然后，访问：<a title="https://activations.cdn.mozilla.net/en-US/" href="https://activations.cdn.mozilla.net/en-US/" target="_blank">https://activations.cdn.mozilla.net/en-US/</a> 这个页面，所有可用的服务都显示在下方，比如 Facebook 、Twitter 以及新浪微博等等。

点击你需要添加的服务，会显示此服务的介绍页面：

![使用 Firefox 社交服务](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/socialapi2.png) 

点击`Turn On`或者 `Activate`按钮进行安装。之后会出现一个侧边栏。

![使用 Firefox 社交服务](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/socialapi3.png) 

大概就是这么一个模样，因为新浪仅仅是使用移动版的微博，所以侧栏看上去不是那么协调，而其它的国外社交服务界面还是比较好的。

### 服务的删除和隐藏

如果您觉得不喜欢这样的服务，或者有时候不想让它显示，也可以选择删除这个服务或者隐藏这个服务。

#### 隐藏

点击右上角的齿轮图标，取消选择显示侧栏；

![使用 Firefox 社交服务](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/socialapi4.png) 

或者在工具栏添加侧边栏按钮，取消显示。

![使用 Firefox 社交服务](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/socialapi5.png) 

#### 删除

进入附加组件-服务，在右侧选择“移除”。

![使用 Firefox 社交服务](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/socialapi6.png) 

此外，大多数的服务还提供分享功能，点击工具栏的小飞机图标即可快速分享当前页面的内容。

![使用 Firefox 社交服务](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/socialapi7.png)