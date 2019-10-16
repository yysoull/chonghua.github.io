---
id: 2978
title: Linux下搞定QQ和阿里旺旺
date: 2015-04-01T21:51:26+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2978
permalink: /install-qq-aliwangwang-linux/
categories:
  - Linux
tags:
  - lwqq
  - Pidgin
  - QQ
  - 阿里旺旺
---
除了前面提到的<a href="http://hechonghua.com/linux-font-config-infinality/" target="_blank" data-mce-href="http://hechonghua.com/linux-font-config-infinality/">字体问题</a>，Linux 下还有一个即时通讯的问题，QQ 和阿里旺旺这两个软件也是日常不可缺少的，虽然重华也提倡尽量不要使用这种流氓软件，不过绝大多数人还是离不开，其实目前来说，聊天软件的问题，在 Linux 下也可以解决掉。

<!--more-->

### QQ

其实WebQQ做的已经非常不错了，日常使用，绰绰有余。而腾讯是没有可能开放QQ的API的，所以，指望有完整的第三方客户端是不现实的，下面介绍的pidgin-lwqq也是基于WebQQ协议的。只不过做成了Pidgin的一个插件，也算是一个简单的客户端了吧。

如果你的软件源里面有“pidgin-lwqq”，直接安装就可以，如果没有的话，就要自己编译了，其实也很简单-因为有说明吗。

下面是编译说明页面：

<a href="https://github.com/xiehuc/pidgin-lwqq/wiki/Install-From-Source" target="_blank" >https://github.com/xiehuc/pidgin-lwqq/wiki/Install-From-Source</a>

<a href="https://github.com/xiehuc/lwqq/wiki/Build-From-Source" target="_blank" >https://github.com/xiehuc/lwqq/wiki/Build-From-Source</a>

然后在Pidgin里面添加帐号的时候，就能看到WebQQ的协议了。

![](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/lwqq1.png) 

成功登录后的界面

![](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/lwqq.png) 

聊天窗口界面

![](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/lwqq2.png) 

一般的聊天、发送表情是没有问题的，还能够直接访问QQ空间，获取好友的基本资料和头像，正在使用的终端等信息。日常使用，毫无压力。

### 阿里旺旺

阿里旺旺其实还不如QQ，因为连个Web协议都没有，仅有一个号称内部使用的Linux版本。基本功能使用没有问题，比较稳定。

![](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/lalww.png) 

目前只找到deb包，下载地址：<http://dl.dbank.com/c0aiurq0oq>

另外，像是京东、淘宝、支付宝、银联在Linux下的购物、支付还是没有什么障碍的。迁移到Linux，其实并不是那么困难，我们总归还是有办法的。