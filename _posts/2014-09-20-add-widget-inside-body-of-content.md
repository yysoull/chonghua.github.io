---
id: 2922
title: 文章中插入小工具
date: 2014-09-20T20:45:00+08:00
author: chonghua
layout: post
guid: http://backup.hechonghua.com/?p=2896
permalink: /add-widget-inside-body-of-content/
categories:
  - wordpress技巧
tags:
  - widget
  - 小工具
---
一般博客的小工具栏都在两侧或者底部位置，有没有想过在你的文章中也能添加一个小工具的位置。你当然可以安装一个创建短代码的插件，或者你也可以使用代码来完成同样的功能。 

<!--more-->

把下面的代码添加到您的`functions.php`文件中。 

<pre><br />
register_sidebar( array(<br />
    'id' =&gt; 'wpsites-widget',<br />
    'name' =&gt; __( 'Custom Widget', 'wpsites' ),<br />
    'description' =&gt; __( 'Custom Widget Area', 'wpsites' ),<br />
    'before_widget' =&gt; '&lt;div&gt;',<br />
    'after_widget' =&gt; '&lt;/div&gt;',<br />
) );<br />
 <br />
add_shortcode( 'wpsites_widget', 'wpsites_shortcode_widget_area' );<br />
/**<br />
 * @author    Brad Dalton<br />
 * @example   http://wpsites.net/<br />
 * @copyright 2014 WP Sites<br />
 */<br />
function wpsites_shortcode_widget_area() {<br />
    ob_start();<br />
    dynamic_sidebar( 'wpsites-widget', array(<br />
    'before' =&gt; '&lt;div class="wpsites-widget widget-area"&gt;',<br />
    'after'  =&gt; '&lt;/div&gt;',<br />
    ) );<br />
    $wpsiteswidget = ob_get_contents();<br />
    ob_end_clean();<br />
    return $wpsiteswidget;<br />
 <br />
}
</pre>

然后，在您需要小工具的位置插入短代码`[wpsites_widget]`