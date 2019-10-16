---
id: 1081
title: WordPress自动显示图像EXIF描述信息
date: 2012-12-10T17:17:43+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1081
permalink: /wordpress-automatically-displays-a-description-of-the-image-exif-information/
categories:
  - wordpress技巧
tags:
  - exif
  - 图像信息
---
对于一些专业的摄影博客,在分享图片的时候,我们也许希望在显示图片的同时,能够在图片的旁边同时显示该图片的EXIF信息,这样对于专业的摄影人员可能会有所帮助,方便交流.我们在操作系统中或者专门的看图软件中能够很方便的看到EXIF信息,对于WordPress其实也是很容易就可以实现的.

<!--more-->

<img src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/display\_exif\_screen1.jpg" / alt="WordPress自动显示图像EXIF描述信息" >

方法不外乎插件和代码:

### 插件

我们可以使用<a href="http://wordpress.org/extend/plugins/display-exif/" target="_blank">Display Exif</a>这款插件,安装启用后就可以,不需要任何复杂的程序,连CSS也自带了.

### 代码

<pre class="brush:php">// grab exif data from wp attachment
    function grab_exif_data_from_wp($post_ID, $debug = FALSE) {
    global $id, $post;
    if ( !isset($post_ID) || '' == $post_ID )
    return FALSE;
    $meta = wp_get_attachment_metadata($post_ID, FALSE);
    $return = '';
    if ( $meta['image_meta']['created_timestamp'] )
    $return .= date( "d-M-Y H:i:s", $meta['image_meta']['created_timestamp'] );
    if ( $meta['image_meta']['copyright'] )
    $return .= $meta['image_meta']['copyright'];
    if ( $meta['image_meta']['credit'] )
    $return .= $meta['image_meta']['credit'];
    if ( $meta['image_meta']['title'] )
    $return .= $meta['image_meta']['title'];
    if ( $meta['image_meta']['caption'] )
    $return .= $meta['image_meta']['caption'];
    if ( $meta['image_meta']['camera'] )
    $return .= $meta['image_meta']['camera'];
    if ( $meta['image_meta']['focal_length'] )
    $return .= __( '· Brennweite:', FB_GREYFOTO_TEXTDOMAIN )
    . ' ' . $meta['image_meta']['focal_length']
    . __( 'mm', FB_GREYFOTO_TEXTDOMAIN );
    if ( $meta['image_meta']['aperture'] )
    $return .= $meta['image_meta']['aperture'];
    if ( $meta['image_meta']['iso'] )
    $return .= $meta['image_meta']['iso'];
    if ( $meta['image_meta']['shutter_speed'] )
    $return .= number_format($meta['image_meta']['shutter_speed'], 2) . ' ' . __( 'seconds', FB_GREYFOTO_TEXTDOMAIN );
    if ($debug) {
    ob_start();
    var_dump($meta);
    $return = ob_get_clean();
    }
    return $return;
    }
    function fb_simple_exif($post_ID, $debug) {
    $echo = grab_exif_data_from_wp($post_ID, $debug);
    if ( $echo && '' != $echo )
    echo $echo;
    }</pre>