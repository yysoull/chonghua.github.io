---
id: 598
title: 移除XP开始菜单的用户名
date: 2010-05-14T21:55:31+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/remove-xp-start-menu-user-name/
permalink: /remove-xp-start-menu-user-name/
categories:
  - 其他资源
tags:
  - xp移除用户名
---
[](http://en.wikipedia.org/wiki/File:Microsoft_Windows_XP_Logo.svg)所有windows都会在开始菜单中显示登陆者的用户名，但是如果是公用电脑而又不想让别人看到你的用户名，或者干脆不想显示用户名，可以通过下列方法禁止显示！

<!--more-->

通过组策略：

1.单击“开始|运行”，在“运行”对话中输入“Gpedit.msc”，如图1所示，然后单击“确定”按钮。

2.在“组策略”控制台中，选择左边的“用户设置|管理模板|任务栏和[开始]菜单”，然后双击右侧的“从[开始]菜单中删除用户名”。

3.在“从[开始]菜单中删除用户名 属性”对话框中，选中单选钮“已启用”。

4.单击“确定”按钮后，打开“开始”菜单观察一下，发现用户名已不再显示了。</p> 

通过注册表：

1.打开注册表编辑器. 

2.在左侧依次展开如下键值: `HKEY_CURRENT_USER  Software  Microsoft  Windows  CurrentVersion  Policies  Explorer`

3.在右侧,右击空白处，选择`新建`| `DWORD 值`

4.命名这个值为`NoUserNameInStartMenu`

5.设置值为 `1`

`如果想要复原，那么重复以上步骤，将此值改为0。`

`重新注销登陆或者重启系统生效！`

`参考页面：<a title="http://mintywhite.com/customize/xp-users-remove-username-startmenu/" href="http://mintywhite.com/customize/xp-users-remove-username-startmenu/" target="_blank">http://mintywhite.com/customize/xp-users-remove-username-startmenu/</a>`
