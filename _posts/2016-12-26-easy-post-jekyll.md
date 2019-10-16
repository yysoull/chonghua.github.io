---
id: 3107
title: Jekyll更方便的发布文章
date: 2016-12-26T13:00:33+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=3107
permalink: /easy-post-jekyll/
categories:
  - 软件资源
tags:
  - Jekyll
---
Jekyll 最通常的文章发布是通过本地生成再通过 Git 提交到 Github，但是这很麻烦，你总不能到哪里都安装一遍 Jekyll 和一大堆的依赖吧。这对于极客来说不是什么事，但对于一般人来说，这是致命问题。

<!--more-->

下面几个工具，就是为了解决 Jekyll 文章发布问题，可以说对于普通用户使用 Jekyll 已经没有什么大的问题了。

### <a href="http://prose.io/" target="_blank">Prose</a>

Prose 是一个编辑 Github 上内容的服务。你可以仅仅把它当作一个所见即所得的 Markdown 编辑器来使用，而最重要的是可以很方便的和 Jekyll 搭配写文章。

1.授权 Prose 访问 Github；

&nbsp;<img style="margin: 0px" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/prose.png" alt="Jekyll更方便的发布文章" /> 

2.选择博客所在 repository；<img style="margin: 0px" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/prose2.png" alt="Jekyll更方便的发布文章" /> 

3.进入文章列表界面；<img style="margin: 0px" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/prose3.png" alt="Jekyll更方便的发布文章" /> 

可以选择新建文章或者对现有文章进行编辑。右侧是历史记录。

4.文章编辑页面；<img style="margin: 0px" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/prose4.png" alt="Jekyll更方便的发布文章" /> 

左侧是可视化编辑器，右侧是功能菜单，包括预览、添加 Meta 元信息、保存按钮等等。

还有一些高级功能需要在 <font color="#ff0000">_config.yml</font> 文件中进行配置，<a href="https://github.com/prose/prose/wiki/Prose-Configuration" target="_blank">参考页面</a>。总之功能强大。

### <a href="https://www.siteleaf.com/" target="_blank">Siteleaf</a>

Siteleaf 是另一个专为 Jekyll 服务的工具，比较类似于普通博客程序的后台。可以很方便的创建文章、页面，上传文件，和自定义 Meta 信息，甚至，您可以直接在此创建网站然后发布到 Github。

![Jekyll更方便的发布文章](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/siteleaf.png) 

比 Prose 更为直观的编辑界面。和普通的博客编辑器已经不相上下了。不过呢，这是一个商业服务。免费套餐仅包括基本功能。<a href="https://www.siteleaf.com/plans/" target="_blank">套餐对比</a>。

### <a href="https://github.com/Simpleyyt/jekyll-editor" target="_blank">Jekyll Editor</a>

这个前面介绍过，是一个 Chrome 应用。功能也很完善。

![Jekyll更方便的发布文章](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/jekylleditor.png) 

### <a href="http://jekyllwriter.com/" target="_blank">Jekyll Writer</a>

应该说，这是我心目中的编辑器。类似于 Windows Live Writer 的界面，以及完善的各种功能。跨平台，离线发布。然而可惜的是只支持64位系统，更郁闷的是这个软件需要邀请码，这还不是最郁闷的，因为尝试了各种方法联系不到作者，留言、邮件没有任何回复，实在是可惜了。

![Jekyll更方便的发布文章](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/jekyllwriter.png)