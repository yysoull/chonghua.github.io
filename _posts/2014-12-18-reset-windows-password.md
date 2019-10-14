---
id: 2945
title: Windows系统登录密码忘记了怎么办
date: 2014-12-18T23:04:23+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2942
permalink: /reset-windows-password/
categories:
  - 其他资源
tags:
  - 密码破解
---
如果您有一台电脑长时间不用，或者您和我一样的健忘，哪天突然死活想不起来自己的登录密码，进不去系统，怎么办呢？别说这种情况不可能发生，我就忘记过。遇到这种情况，您可能第一反应就是重装系统，其实大可不必，还是有很多方法可以解决的。

<!--more-->

Windows 将用户密码等信息加密保存在了 SAM 文件中，并存放于系统目录 windowssystem32config 中。该文件是注册表的一部分，采用了一种未公开的特殊的二进制格式，所以使用普通的方法根本无法查看其中的内容（废话，那么容易查看，还搞个毛啊！）下面就介绍几种忘记密码的解决方案。分为几种情况。

## 拥有 Administrator 或者其它管理员账户

假如您在安装系统后没有特意删除 Administrator 账户，或者还建立了其它的管理员级别的账户，那么，可以很方便的修改您的用户密码。

![Windows系统登录密码忘记了怎么办](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/winpass.png) 

  1. 点击或单击打开“控制面板”。
    
      * 依次点击或单击“用户帐户和家庭安全”、“用户帐户”和“管理其他帐户”。
        
          * 点击或单击要更改的帐户，然后点击或单击“更改密码”。 按照说明操作，然后点击或单击“更改密码”。</ol> 
        
        您也可以在运行框中输入“lusrmgr.msc”打开”本地用户和组”、“用户“右键点击您需要重置密码的账户，在弹出的菜单中选择”设置密码“选项。 
        
![Windows系统登录密码忘记了怎么办](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/winpass2.png) &nbsp; 
        
        Administrator 账户可能不会再登录界面显示，您需要在登录界面按下 <kbd>Ctrl+Alt+Del</kbd> 组合键才可以显示。密码默认为空。 
        
        ## 没有其它管理员账户 
        
        假如您没有其它任何管理员级别的账户可用，那么重置密码的操作会稍微复杂一点。都需要用到U盘、移动硬盘或者光盘来引导。 
        
        ### 使用 Windows PE 系统 
        
![Windows系统登录密码忘记了怎么办](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/winpass3.png) 
        
![Windows系统登录密码忘记了怎么办](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/winpass4.png) 
        
        一般的 PE 系统都会带有登录密码破解的工具，有的会放在PE启动界面时的主菜单中，更多的则是需要进入PE系统，找到相关的破解软件，一般位于“开始→程序→Windows 系统维护→Windows 用户密码修复”菜单或者就放置在桌面。使用软件来破解密码，非常的方便 。 
        
        ### 使用 Offline registry tools and password resetter 
        
        该工具是一位德国朋友开发的一款非常强大的密码重置工具 
        
        **光盘镜像下载：** 
        
        [http://pogostick.net/~pnh/ntpasswd/cd140201.zip](http://pogostick.net/%7Epnh/ntpasswd/cd140201.zip) 
        
        **U盘镜像下载：** 
        
        [http://pogostick.net/~pnh/ntpasswd/usb140201.zip](http://pogostick.net/%7Epnh/ntpasswd/usb140201.zip) 
        
        **源代码：** 
        
        [http://pogostick.net/~pnh/ntpasswd/chntpw-source-140201.zip](http://pogostick.net/%7Epnh/ntpasswd/chntpw-source-140201.zip) 
        
        ### 使用 Linux下的 ”**chntpw** “工具 
        
        首先需要制作一个 LinuxLive CD 或者&nbsp; LinuxLive USB（如果您是Linux、Windows双系统请略过），比如说常用的 Ubuntu_。（来自_<a title="http://www.aikaiyuan.com/5997.html" href="http://www.aikaiyuan.com/5997.html" target="_blank">http://www.aikaiyuan.com/5997.html</a>___）_ 
        
          1. 安装 chntpw 工具 
        
        <pre>$ sudo apt-get install -y chntpw</pre>
        
        > 新立得方法： 点击 Settings menu> Repositories。然后，勾选“Community-maintained Open Source software (universe)”然后点击“Close”。
        
          1. 挂载 Windows 系统分区 
        
        <pre>$ sudo mkdir -p /media/c 
$ sudo mount -t ntfs /dev/sda1 /media/c</pre>
        
          1. 清除 windows 系统密码 
        
        <pre>$ cd /media/c/WINDOWS/system32/config
$ sudo chntpw SAM 　# 要修改非管理员密码，在命令行模式键入以下命令：sudo chntpw-u [用户名] SAM
... # 省略
- – - – User Edit Menu:
1 – Clear (blank) user password
2 – Edit (set new) user password (careful with this on XP or Vista)
3 – Promote user (make user an administrator)<br />&nbsp;<br />(4 – Unlock and enable user account) [seems unlocked already]
q – Quit editing user, back to user select
Select: [q] &gt; # 选项：1、清除密码； 2、重设密码； 3、提升用户权限为administrator； 4、启用或禁用用户； 5、退出。</pre>