---
id: 63
title: WordPress 超大数据库的导入
date: 2009-02-22T12:48:21+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/wordpress-importing-large-database/
permalink: /wordpress-importing-large-database/
categories:
  - wordpress技巧
tags:
  - 超大数据库的导入
---
想给 Blog 搬家，换主机时需要把导出的数据库重新导入到新的数据库主机中，但 MyPHPAdmin 对数据库大小的有限制，这个限制各个主机商不一样，有的 5M 有的 8M，抠门一点的只有 2M，当你的数据库大过这个限制时，根本无法导入。有时候就算没大过这个限制，也会在导入时超时。

<!--more-->

那么怎么解决这个问题呢？你的主机支持 Shell 的话，你可以 SSH 登陆主机，执行如下的命令：

导出数据库：

`mysqldump -h HOSTNAME -uUSERNAME -p DBNAME > exported_db.sql`

导入数据库：

`mysql -h HOSTNAME -uUSERNAME -p DBNAME < exported_db.sql`

以上 HOSTNAME 是数据库主机名，USERNAME 和 DBNAME 分别是登陆 ID 和数据库名，导出的数据库存放在 exported_db.sql 文件里。

在 Shell 下导入数据库不再受到 MyPHPAdmin 中的导入大小限制，理论上数据库可以无限大。

原地址:http://www.icerainbow.cn/2008/07/27/shujukudaoru.html