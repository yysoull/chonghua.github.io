---
id: 1070
title: 10个有用的WordPress Action hooks以及filters
date: 2012-11-29T21:55:28+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1070
permalink: /10-useful-wordpress-action-hooks-and-filters/
categories:
  - wordpress技巧
tags:
  - action
  - filter
  - hack
  - hook
---
使用wordpress,了解一下Action hooks和filters是非常有用的,这种机制,可以让你在不改变核心文件的基础上,添加或者删除一些功能.而不需要编辑代码!因为这些功能已经内建,你做的只需要按照你的需要调用或者过滤掉.其实这些代码很多朋友都知道,重华只是在此记录一下,以备不时之需.如需更进一步了解Action,Hook和Filter请访问官方页面.

<!--more-->

下面是10个非常有用的技巧:

* * *

### 阻止自动压缩图像

在你使用wordpress后台上传图片的时候,wordpress默认会把你的图片压缩,这么做,会节约你的空间和带宽,但是如果你不需要这种压缩,比如你的站点是专门展示摄影或者艺术图片,你可能会需要显示最高清晰度的图片,这个时候你就需要禁用自动图片压缩了!

将下面的代码加到你的`functions.php`文件中,保存以便禁用自动压缩

> <pre>add_filter('jpeg_quality', function($arg){return 100;});</pre>

原文:<a title="http://www.wprecipes.com/prevent-wordpress-to-compress-your-jpg-images" href="http://www.wprecipes.com/prevent-wordpress-to-compress-your-jpg-images" target="_blank">http://www.wprecipes.com/prevent-wordpress-to-compress-your-jpg-images</a>

* * *

### 更改所有超链接为在新窗口打开

target="blank"的意思就是在新窗口或者新的标签页打开链接,重华认为这么做还是多少有点用处的,否则你的读者点击链接后,也就自动关闭了你的页面,而让链接在新窗口打开,对双方都没有影响.

将下面的代码加到你的`functions.php`文件中

> <pre>function autoblank($text) {
	$return = str_replace('&lt;a', '&lt;a target="_blank"', $text);
	return $return;
}
add_filter('the_content', 'autoblank');</pre>

原文:[http://www.catswhocode.com/blog/snippets/add-target_blank-on-all-link](http://www.catswhocode.com/blog/snippets/add-target_blank-on-all-link "http://www.catswhocode.com/blog/snippets/add-target_blank-on-all-link")

* * *

### 添加额外的个人联系方式

默认情况下后台只能设置电子邮件,网站,AIM和雅虎通等等,当前最流行的twitter和facebook却不在其列,国内的QQ,新浪微博也没有,但是你可以很方便的随意添加任何你想添加的联系方式.虽然重华一直认为这些设置根本就没什么用处.

下面仅仅是twitter和facebook的示例,你可以按照格式自己添加其他的联系方式.

> <pre>function my_user_contactmethods($user_contactmethods){
  $user_contactmethods['twitter'] = 'Twitter Username';
  $user_contactmethods['facebook'] = 'Facebook Username';

  return $user_contactmethods;
}

add_filter('user_contactmethods', 'my_user_contactmethods');</pre>

原文:<a title="http://wp.tutsplus.com/tutorials/quick-tip-add-extra-contact-methods-to-user-profiles/" href="http://wp.tutsplus.com/tutorials/quick-tip-add-extra-contact-methods-to-user-profiles/" target="_blank">http://wp.tutsplus.com/tutorials/quick-tip-add-extra-contact-methods-to-user-profiles/</a>

* * *

### 移除"Read more"跳转

默认在首页或者是存档,目录页面,将会在文章截断处显示"Read more"的跳转链接,但是一般情况下你点击文章的标题连接也能达到同样的效果,所以你可以直接去除这个链接.

> <pre>function wdc_no_more_jumping($post) {
     return '&lt;a href="'.get_permalink($post-&gt;ID).'" class="read-more"&gt;'.'Continue Reading'.'&lt;/a&gt;';
}
add_filter('excerpt_more', 'wdc_no_more_jumping');</pre>

原文:<a title="http://wpshout.com/wordpress-functions-php/" href="http://wpshout.com/wordpress-functions-php/" target="_blank">http://wpshout.com/wordpress-functions-php/</a>

* * *

### 自动启用嵌套评论

貌似现在大多数主题都是支持嵌套评论的,但是如果万一你使用的主题不支持嵌套评论,也可以手工改造一下.

> <pre>function enable_threaded_comments(){
 if (!is_admin()) {
  if (is_singular() AND comments_open() AND (get_option('thread_comments') == 1))
   wp_enqueue_script('comment-reply');
  }
}

add_action('get_header', 'enable_threaded_comments');</pre>

原文:<a title="http://wpshout.com/wordpress-functions-php/" href="http://wpshout.com/wordpress-functions-php/" target="_blank">http://wpshout.com/wordpress-functions-php/</a>

* * *

### 在管理员区域显示紧急消息

在你自定义主题或者插件的时候,你可能会需要通知用户有重要的事情,比如正在升级.你需要用户更新设置或者检查他们的设置,那么下面的代码会实现这个效果.

> <pre>function showMessage($message, $errormsg = false){
	if ($errormsg) {
		echo '&lt;div id="message" class="error"&gt;';
	} else {
		echo '&lt;div id="message" class="updated fade"&gt;';
	}

	echo "&lt;p&gt;&lt;strong&gt;$message&lt;/strong&gt;&lt;/p&gt;&lt;/div&gt;";
}  

function showAdminMessages() {
    showMessage("You need to upgrade your database as soon as possible...", true);

    if (user_can('manage_options') {
       showMessage("Hello admins!");
    }
}

add_action('admin_notices', 'showAdminMessages'); </pre>

原文:<a title="http://www.wpdoctors.co.uk/" href="http://www.wpdoctors.co.uk/" target="_blank">http://www.wpdoctors.co.uk/</a>

* * *

### 添加缩略图到RSS

在文章中显示缩略图,很多站点都在使用,但是在RSS中是不能显示的,无疑这对用户来说无法得到和网站相同的体验.下面这段代码就是让你的网站缩略图在RSS中同样能够显示.需要注意的是:你的主题必须支持缩略图.

> <pre>function cwc_rss_post_thumbnail($content) {
    global $post;
    if(has_post_thumbnail($post-&gt;ID)) {
        $content = '&lt;p&gt;' . get_the_post_thumbnail($post-&gt;ID) .
        '&lt;/p&gt;' . get_the_content();
    }

    return $content;
}
add_filter('the_excerpt_rss', 'cwc_rss_post_thumbnail');
add_filter('the_content_feed', 'cwc_rss_post_thumbnail');</pre>

原文:<a href="http://snipplr.com/view.php?codeview&id=56180" target="_blank">http://snipplr.com/view.php?codeview&id=56180</a>

* * *

### 移除评论区的超链接

一些垃圾评论会在评论中留下大量的链接,一来很不雅,而且对SEO也不好,下面的代码就是移除所有的链接,当然也包括有用的链接,除非你真的想,我还是建议在后台手工甄别.

> <pre>remove_filter('comment_text', 'make_clickable', 9);</pre>