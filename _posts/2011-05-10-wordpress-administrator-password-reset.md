---
id: 864
title: 重置WordPress管理员密码
date: 2011-05-10T13:43:13+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/wordpress-administrator-password-reset/
permalink: /wordpress-administrator-password-reset/
categories:
  - wordpress技巧
tags:
  - 密码重置
---
如果您的管理员密码忘记了怎么办呢,或者是像重华一样使用了微博帐号连接的插件后没注意设置好!您的帐号的邮箱和其他资料都被覆盖成了您的某个微博上的帐号了!而且更为郁闷的是我已经把那个插件删除了,怎么办呢,使用忘记密码的功能吧,因为邮箱已经改掉了,所以您是收不到重置密码的邮件的!

怎么办呢!如果您有权限修改数据库的话,那么就很简单了!首先在您的Cpanel后台登陆phpMy 管理,找到wp_users这个表,再找到您的管理员用户名,看到了什么,您的用户名,邮箱,密码...先不要急,直接修改密码是无效的,没看见那都是加密的吗!我们在这里主要是修改您的邮箱来接受密码重置;链接!邮箱修改成您的邮箱后,我们就可以在登陆页面通过忘记密码功能来重置密码了!

通过此方法重置,您必须要有数据库的管理权限以及您的主机是支持邮件发送的!

如果您的主机没有邮件发送模块怎么办呢?

<a href="http://www.freehao123.com/wordpress-lost-password/" target="_blank">这里</a>有一些其它的解决方法,但是重华没有试过,不知道是否可行!如果您实在没有办法,也可以尝试一下!