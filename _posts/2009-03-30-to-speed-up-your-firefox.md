---
id: 109
title: 为您的Firefox加速
date: 2009-03-30T12:17:04+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/to-speed-up-your-firefox/
permalink: /to-speed-up-your-firefox/
categories:
  - 网络资源
tags:
  - about:config
  - firefox优化
---
firefox的启动速度和内存占用实在是我们头疼,问题很严重,我们很生气!通过“**about：config**”更改某些参数据说能改善这些问题,但是这估计也是心理作用,我也没感觉出什么大的改善!不过您不妨试一下,就算是自我安慰吧!

<!--more-->

**减少缓存文件所占用的内存：**

**1.**在地址栏中输入“**about:config**"，回车(提示会失去质保\---这个软件难道有质保吗?)

**2.**找到"**browser.sessionhistory.max\_total\_viewer**"

**3.**将其值设为 ****

**加快Firefox加载页面的速度：**

**1.**在地址栏中输入“**about:config**"，回车

&#160; 通常浏览器加载一个页面只连接一个线程，而如果你启用“pipelining"，它会多线程加载，这将加快记得浏览器速)。

**2**.将”**network.http.pipelining**"值设为"**true**"

&#160;&#160; 将”**network.http.proxy.pipelining**"值设为"**true**"

&#160;&#160; 将”**network.http.pipelining.maxrequests**"值设为一个数字，比如 **10** (表示同时允许**10**个线程）

**3**.最后，右键单击空白处，选择"**New**(新建）–> **Integer**(整数)"。将它命名为"**nglayout.initialpaint.dela**y"，并将其值&#160;&#160;&#160; 设为 ****

&#160; （这个值表示浏览器在接受到数据后隔多少秒再进行运算，如果你使用的是宽带，这项设置会使你感到Firefox速度便快了）

**可选操作**：这些修改同样是在"**about:config**"下完成的，其中的一些项目需要你通过右键"**New**(新建)–>**Integer**（整数）或&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; **String**（字串）"。

&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; “**network**.**dns**.**disableIPv6**” 设为 “**false**” 

&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; “**content.notify.backoffcount**” 设为 **5**

&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; “**plugin.expose\_full\_path**” 设为 “**true**”

&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; “**ui.submenuDelay**” 设为 ****

**当Firefox最小化时，减少内存占用量：**

这项设置可以当Firefox最小化时释放10Mb的内存。

**1.**打开Firefox，在地址栏内输入“**about：config**”，回车

**2.**在页面内右键选择“**New**（新建）-> **Boolean**”

3.在弹出的窗口中输入"**config.trim\_on\_minimize**"，回车

4.选择"**True**"，回车

5.重启Firefox
