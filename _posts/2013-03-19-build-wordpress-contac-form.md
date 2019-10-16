---
id: 1211
title: 创建WordPress联系表单
date: 2013-03-19T13:47:07+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1211
permalink: /build-wordpress-contac-form/
categories:
  - wordpress技巧
tags:
  - 联系表单
---
很多博客都建立了一个联系页面，在这个页面上放置一个联系表单，是一个非常好的选择，实现的方法也是多种多样，你可以嵌入一个第三方的联系表单，也可以使用WordPress内置的评论功能达到同样的效果，不过更多的人士选择了使用诸如Contact Form 7之类的插件，不过，加入仅仅是为了添加一个简单的联系表单，我们大可不必这么大费周章，几段代码就可以解决问题。

<!--more-->

为什么不建议使用上述的几种方法呢，第三方服务不可控因素太多，且需要调用第三方服务器的脚本，而通过评论方法，显得不太专业，还需要通过评论发送邮件。

下面就是通过建立页面模板的方式创建一个表单页面，直接发送到管理员邮箱。

首先，创建一个页面模板，最好的办法就是复制你的主题的默认的页面模板，一般是名称为page.php的文件。以默认主题Twenty_Twelve 为例

<pre class="prettyprint linenums">&lt;?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?&gt;

	&lt;div id="primary" class="site-content"&gt;
		&lt;div id="content" role="main"&gt;                           表单代码位置

			&lt;?php while ( have_posts() ) : the_post(); ?&gt;
				&lt;?php get_template_part( 'content', 'page' ); ?&gt;
				&lt;?php comments_template( '', true ); ?&gt;
			&lt;?php endwhile; // end of the loop. ?&gt;

		&lt;/div&gt;&lt;!-- #content --&gt;
	&lt;/div&gt;&lt;!-- #primary --&gt;

&lt;?php get_sidebar(); ?&gt;
&lt;?php get_footer(); ?&gt;</pre></p> 

将头部修改成下面的样子：

<pre class="prettyprint linenums">&lt;?php
/*
Template Name: Contact
*/
?&gt;

&lt;?php get_header() ?&gt;</pre>

将文件另存为Contact.php。

然后，我们开始创建一个表单，并且加入错误和成功的提示

<pre class="prettyprint linenums">&lt;?php if(isset($emailSent) && $emailSent == true) { ?&gt;
                            &lt;div class="alert alert-success"&gt;
                                &lt;p&gt;感谢您的联系，您的邮件已经成功发送.&lt;/p&gt;
                            &lt;/div&gt;
                        &lt;?php } else { ?&gt;

                            &lt;?php if(isset($hasError) || isset($captchaError)) { ?&gt;
                                &lt;div class="alert alert-error"&gt;
                                    &lt;a class="close" data-dismiss="alert"&gt;×&lt;/a&gt;
                                    &lt;h4 class="alert-heading"&gt;对不起，发生了错误.&lt;/h4&gt;
                                &lt;p class="error"&gt;请检查输入框下面的错误提示并重试!&lt;p&gt;
                                &lt;/div&gt;
                            &lt;?php } ?&gt;

                    &lt;form action="&lt;?php the_permalink(); ?&gt;" id="contactForm" method="post" class="form-horizontal"&gt;
                        &lt;fieldset&gt;
                        &lt;div class="control-group "&gt;
                                &lt;label class="control-label" for="contactName"&gt;名称:&lt;/label&gt;
                            &lt;div class="controls"&gt;
                                &lt;input class="input-xlarge" type="text" name="contactName" id="contactName" value="" /&gt;
                                &lt;?php if($nameError != '') { ?&gt;
                                    &lt;p&gt;&lt;span class="label label-warning"&gt;&lt;?=$nameError;?&gt;&lt;/span&gt;&lt;/p&gt;
                                &lt;?php } ?&gt;
                            &lt;/div&gt;
                           &lt;/div&gt;
                           &lt;div class="control-group"&gt;
                                &lt;label class="control-label" for="email"&gt;邮箱:&lt;/label&gt;
                            &lt;div class="controls"&gt;
                                &lt;input class="input-xlarge" type="text" name="email" id="email" value="" /&gt;
                                &lt;?php if($emailError != '') { ?&gt;
                                    &lt;p&gt;&lt;span class="label label-warning"&gt;&lt;?=$emailError;?&gt;&lt;/span&gt;&lt;/p&gt;
                                &lt;?php } ?&gt;
                             &lt;/div&gt;
                           &lt;/div&gt;
                            &lt;div class="control-group"&gt;
                                &lt;label class="control-label" for="commentsText"&gt;内容:&lt;/label&gt;
                            &lt;div class="controls"&gt;
                                &lt;textarea class="span7" name="comments" id="commentsText" rows="20" cols="30"&gt;&lt;/textarea&gt;
                                 &lt;?php if($commentError != '') { ?&gt;
                                    &lt;p&gt;&lt;span class="label label-warning"&gt;&lt;?=$commentError;?&gt;&lt;/span&gt;&lt;/p&gt;
                                &lt;?php } ?&gt;
                             &lt;/div&gt;
                           &lt;/div&gt;
                           &lt;div class="form"&gt;
                                &lt;button type="submit" class="btn btn-primary"&gt;发送&lt;/button&gt;
                           &lt;/div&gt;
                        &lt;input type="hidden" name="submitted" id="submitted" value="true" /&gt;
                    &lt;/fieldset&gt;
                    &lt;/form&gt;
                    &lt;?php } ?&gt;

&lt;input type="hidden" name="submitted" id="submitted" value="true" /&gt;
&lt;/form&gt;</pre></p> 

加入到上面的提示的位置之中。

接下来，我们需要加入校验有效性或者未填写项目的检测功能，在

<pre>&lt;?php get_header() ?&gt;</pre>

上面插入

<pre class="prettyprint linenums">&lt;?php
if(isset($_POST['submitted'])) {
    if(trim($_POST['contactName']) === '') {
        $nameError = '请输入您的名称.';
        $hasError = true;
    } else {
        $name = trim($_POST['contactName']);
    }

    if(trim($_POST['email']) === '')  {
        $emailError = '请输入您的邮箱，以方便回复.';
        $hasError = true;
    } else if (!preg_match("/^[[:alnum:]][a-z0-9_.-]*@[a-z0-9.-]+.[a-z]{2,4}$/i", trim($_POST['email']))) {
        $emailError = '邮箱的格式有错误哦.';
        $hasError = true;
    } else {
        $email = trim($_POST['email']);
    }

    if(trim($_POST['comments']) === '') {
        $commentError = '请输入一些内容.';
        $hasError = true;
    } else {
        if(function_exists('stripslashes')) {
            $comments = stripslashes(trim($_POST['comments']));
        } else {
            $comments = trim($_POST['comments']);
        }
    }

    if(!isset($hasError)) {
        if (!isset($emailTo) || ($emailTo == '') ){
            $emailTo = get_option('admin_email');
        }
        $subject = '[StrapPress] From '.$name;
        $body = "Name: $name nnEmail: $email nnComments: $comments";
        $headers = 'From: '.$name.' &lt;'.$emailTo.'&gt;' . "rn" . 'Reply-To: ' . $email;

        wp_mail($emailTo, $subject, $body, $headers);
        $emailSent = true;
    }

} ?&gt;</pre>

至此，一个联系表单的页面模板就算做好了，只要在WordPress中使用此模板新建一个页面就可以看到效果。