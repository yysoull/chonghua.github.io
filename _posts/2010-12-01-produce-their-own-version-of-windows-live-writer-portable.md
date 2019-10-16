---
id: 751
title: 自己制作Windows Live Writer便携版
date: 2010-12-01T22:01:03+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/produce-their-own-version-of-windows-live-writer-portable/
permalink: /produce-their-own-version-of-windows-live-writer-portable/
categories:
  - 软件资源
tags:
  - Windows Live Writer Portable
  - Windows Live Writer便携版
---
使用便携版的软件的好处多多,比如可以把软件装在U盘里无论到哪里都可以使用自己的配置好了的软件,但重华不喜欢使用虚拟技术制作的便携软件和所谓的单文件软件!某些软件本来就很绿色,很便携,比如<a href="CCleaner" target="_blank">CCleaner</a>.

<a href="http://download.live.com/writer" target="_blank">Windows Live Writer</a>是重华和其他一些博客喜欢的本地写博客工具!没有便携版怎么可以呢!国外有人已经制作出了<a href="http://download.live.com/writer" target="_blank">Windows Live Writer</a>便携版的引导程序,通过这个引导程序自己就可以很方便的制作出属于自己的Windows Live Writer Portable.

<!--more-->

制作的详细步骤(此处以XP系统为例,Windows 7下的操作类似):

1.从微软或其他站点下载您需要的Windows Live Writer安装!

<a title="http://explore.live.com/windows-live-writer-xp" href="http://explore.live.com/windows-live-writer-xp" target="_blank">http://explore.live.com/windows-live-writer-xp</a>

2.下载引导程序WLWPortable3

[http://dl.dbank.com/c07u9tynut](http://dl.dbank.com/c07u9tynut "http://dl.dbank.com/c07u9tynut")

解压后点击WindowsLiveWriterPortable.exe

3.接下来会让你选择您的live writer的安装目录,一般在"C:Program FilesWindows LiveWriter"

<img src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/29b321ea.png" / alt="自己制作Windows Live Writer便携版" > 

接下来便是复制writer下的文件到您的WindowsLiveWriterPortable目录,完成后会显示启动对话框,点击"yes"便会启动便携版的live writer了!此过程中还会提示您是否用UPX压缩exe和dll文件,按照您的需要选择是或者否!

<img src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/a621e57c.png" / alt="自己制作Windows Live Writer便携版" > 

但是有个小问题,最新的WLWPortable3制作的便携版每次退出重启后,会再次让您重新设置writer,但是原来的设置和文章并未删除,可能是作者在编译时出现了失误,如果有能力您可以尝试自己编译一下,或者使用WLWPortable2下的WindowsLiveWriterPortable.exe替换!(下载地址和上面的在一起)

这样就可以正常使用您自己的WindowsLiveWriterPortable了.

还有个小问题,软件启动时会显示作者的启动画面,如果您不喜欢的话可以设置为不显示!简单的做法:

在WindowsLiveWriterPortable目录下新建配置文件"WindowsLiveWriterPortable.ini"

输入以下内容:

<div class="csharpcode">
  <pre class="alt">[WindowsLiveWriterPortable]</pre>
  
  <pre>SplashScreen=Disabled</pre>
</div></p> 

保存.然后重新启动时就没有启动画面了!