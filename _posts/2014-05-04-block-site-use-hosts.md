---
id: 2859
title: 利用hosts文件屏蔽不良网站
date: 2014-05-04T19:59:02+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2859
permalink: /block-site-use-hosts/
categories:
  - 网络资源
tags:
  - hosts
---
hosts文件是一个存在于所有操作系统中的一个没有扩展名的特殊的文本文件，简单的说hosts文件就是你访问网络的DNS解析服务器，只不过这个解析器是最优先的，而且，用户可以任意的修改控制。所以，我们可以使用这个文件实现一些特殊功能，比如说，实现被墙网站的访问，或者屏蔽你不想访问的网站。了解hosts更多信息，请访问<a href="http://zh.wikipedia.org/wiki/Hosts%E6%96%87%E4%BB%B6" target="_blank">wiki页面</a>。

<!--more-->

一般的安全软件都会附带一个屏蔽网站的模块，比如国内的金山、以及Avast等，但是这些安全软件或者只能一行一行的添加，或者有其特殊的数据格式，无法实现随意的修改，使用极为不变。为什么我们不用**hosts**文件实现同样的效果呢，而且不用安装任何软件，基本上不耗费任何系统资源，而且所有操作系统通吃。

<div class="se-section-delimiter">
</div>

### hosts文件在操作系统中的位置 {#hosts文件在操作系统中的位置}

  * Windows NT/2000/XP/Vista/7/8（即微软NT系列操作系统）：默认位置为%SystemRoot%system32driversetc。
    
      * Windows 95/98/Me：%WinDir%
        
          * Linux及其他类Unix操作系统：/etc
            
              * Mac OS 9及更早的系统：System Folder: Preferences或System folder（文件格式可能与Windows和Linux所对应的文件不同）
                
                  * Mac OS X：/private/etc（使用BSD风格的hosts文件）
                    
                      * OS/2及eComStation：”bootdrive”:mptnetc
                        
                          * Android：/system/etc/hosts
                            
                              * Symbian第1/2版手机：C:systemdatahosts
                                
                                  * Symbian第3版手机：C:private10000882hosts，只能使用具有AllFiles权限的文件浏览器（也就是塞班系统的最高权限）访问，而绝大部分文件浏览器都不行(如X-plore和ActiveFile)。
                                    
                                      * iOS（iPhone）：/etc
                                        
                                          * iOS（iPad）：/private/etc
                                            
                                              * webOS:/etc</ul> 
                                            
                                            在Windows中，hosts文件的默认内容一般如下：  
                                            127.0.0.1 localhost  
                                            ::1 localhost  
                                            要实现屏蔽一个网站的格式如下，以屏蔽www.baidu.com为例：
                                            
                                                127.0.0.1        www.baidu.com
                                                
                                            
                                            要解析一个网站，比如百度的其中一个IP地址是：220.181.111.85，我们可以这样写：
                                            
                                                220.181.111.85   www.baidu.com
                                                
                                            
                                            就是这么简单，但是，问题来了，我们如何知道那些不良网站的网址呢，只靠你一个人当然是不可能的，好在已经有不少的团队在做此事了。  
                                            国内的有恶意网站实验室：<a href="http://www.mwsl.org.cn/" target="_blank">http://www.mwsl.org.cn/</a>  
                                            国外的有：<a href="http://winhelp2002.mvps.org/hosts.htm" target="_blank">http://winhelp2002.mvps.org/hosts.htm</a>，  
                                            <a href="http://someonewhocares.org/hosts/" target="_blank">http://someonewhocares.org/hosts/</a>  
                                            等等。  
                                            使用记事本或其它文本编辑器将这些下载的文件直接覆盖原始的hosts文件或者将这些文件进行合并再覆盖。  
                                            但是，通过hosts文件的方式有很大的局限性，该列表只能是被当作一个黑名单，不在其中的网址依然可以访问，所以，hosts文件的方法，只能被作为安全软件的一个辅助工具，而不能被作为替代安全软件来使用。