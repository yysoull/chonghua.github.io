---
id: 2937
title: 为Avatar头像添加ALT属性
date: 2014-11-24T22:44:09+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2933
permalink: /avatar-alt-seo/
categories:
  - wordpress技巧
tags:
  - ALT
  - Avatar
  - seo
---
我们知道图片的ALT属性对于图片的SEO来说非常重要，搜索引擎索引图片，基本上很大程度依赖于您的图片的ALT属性，对于用户来说，在图片无法加载的时候，也会显示这张图片的相关信息，一定程度上提高了用户的体验。

<!--more-->

我们平常在使用百度站长工具或者其它的一些SEO检查工具检查时，会发现你的评论的头像是没有ALT属性的，为此被扣了大量的分数。

对于文章中图片我们可以使用下面的代码：

<pre>function image_alt( $imgalt ){

global $post;

$title = $post-&gt;post_title;

$imgUrl = "]*src=("??)([^" &gt;]*?)1[^&gt;]*&gt;";

if(preg_match_all("/$imgUrl/siU",$imgalt,$matches,PREG_SET_ORDER)){

if( !empty($matches) ){

for ($i=0; $i &lt; count($matches); $i++){

$tag = $url = $matches[$i][0];

$judge = '/alt=/';

preg_match($judge,$tag,$match,PREG_OFFSET_CAPTURE);

if( count($match) &lt; 1 )

$altURL = ' alt="'.$title.'" ';

$url = rtrim($url,'&gt;');

$url .= $altURL.'&gt;';

$imgalt = str_replace($tag,$url,$imgalt);

}

}

}

return $imgalt;

}

add_filter( 'the_content','image_alt');</pre>

但是对于评论头像，这段代码是无效的，仅在文章内容中才有效，那么如何为评论头像也添加ALT属性呢。其实也很简单，网上也有很多这类代码，但是，大多数是叫你在`wp-includes/pluggable.php`文件中修改，问题是，一旦WordPress更新，这个文件会被覆盖掉，所以不推荐这个方法，还是修改`functions.php`文件比较现实。

在`functions.php`文件中找到类似于下面的这段代码：

<pre>&lt;?php echo get_avatar( $comment, 75 ); ?&gt;</pre>

`get_avatar()`函数有四个参数，完整的如下，分别是评论者的邮件、头像大小、默认头像、ALT的值：

<pre>&lt;?php echo get_avatar( $id_or_email, $size, $default, $alt ); ?&gt;</pre>

上面的代码仅仅使用了其中的两个，所以我们只要补全其余的两个参数就可以了。将这段代码修改成：

<pre>&lt;?php echo get_avatar( $comment, 75, '', get_comment_author() ); ?&gt;</pre>

这里，我使用评论者的用户名作为评论者自己头像的ALT文本，您也可以指定为任何文本，比如说您的博客名。

效果如下

![为Avatar头像添加ALT属性](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/avataralt.png) 

源代码中的显示

![为Avatar头像添加ALT属性](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/avataralt1.png) 

从上面可以看出，不仅是对于WordPress自己的Avatar服务器有效，同样适用于<a href="http://hechonghua.com/avatar-from-duoshuo/" target="_blank">使用多说的Avatar服务器</a>。