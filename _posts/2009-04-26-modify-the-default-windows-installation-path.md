---
id: 134
title: 修改Windows的默认软件安装路径
date: 2009-04-26T13:25:31+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/modify-the-default-windows-installation-path/
permalink: /modify-the-default-windows-installation-path/
categories:
  - 其他资源
tags:
  - 修改软件默认安装目录
---
在Windows系统中默认软件安装目录都在C:Program Files，很多朋友并不喜欢每次安装都用这个路径，而且把软件装载系统盘也不是一个好的习惯!但如果每次安装都要重新选择会麻烦，有没有一劳永逸的方法解决这个问题呢？其实修改注册表就能解决这个问题。

<!--more-->

点击“开始— 运行”，输入regedit，回车，打开注册表编辑器。

找到注册表项 HKEY\_LOCAL\_MACHINESOFTWAREMicrosoftWindowsCurrentVersion

在右侧栏找到名称为“ProgramFilesDir”的项目，可以看到里面的默认数值数据为“C:Program Files”。  
右键点击，在弹出菜单中选择“修改”。

[<img border="1" alt="用注册表修改Windows的默认软件安装路径" src="http://os.yesky.com/imagelist/2009/114/qla41981lblcs.jpg" / alt="修改Windows的默认软件安装路径" >](http://os.yesky.com/TLimages/picview/?/imagelist/2009/114/qla41981lblc.jpg) 

将这个值修改为需要设定的路径，比如“D:software”，然后“确定”，退出注册表编辑器。 

[<img border="1" alt="用注册表修改Windows的默认软件安装路径" src="http://os.yesky.com/imagelist/2009/114/67ufye8q4wtos.jpg" / alt="修改Windows的默认软件安装路径" >](http://os.yesky.com/TLimages/picview/?/imagelist/2009/114/67ufye8q4wto.jpg) 

现在再安装其他软件的时候，软件默认安装路径就会变成刚才设定的“D:software”了。