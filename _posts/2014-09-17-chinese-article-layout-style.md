---
id: 2923
title: 中文排版样式
date: 2014-09-17T20:22:00+08:00
author: chonghua
layout: post
guid: http://backup.hechonghua.com/?p=2899
permalink: /chinese-article-layout-style/
categories:
  - wordpress技巧
tags:
  - css
  - 中文排版
---
网页排版的美观，常常被设计师所忽略，但是排版的美观与否，是用户对于网站的第一印象，毫无美感的排版，会使读者的兴趣大大降低。但是对于美观的定义，个人口味不同，比如说重华现在使用的主题是基于bootstrap框架的，已经引入了 normalize.css。应该说，对于英文的显示显然是非常好的，但是对于中文，这样的排版样式显然水土不服。

<!--more-->

前几年，由可能吧博主阿禅引发的中文排版行动一时间获得不少博主的反响。但是对于像你我这样的白痴级别的博主，有现成的样式可以直接使用的话是非常适合的。至少不用一个个去CSS中胡乱地修改了。重华找到了几个中文排版样式 **Entry.css、Typo.css** 和 **han.css**，这两位作者对于中文排版还是很有研究的，大家可以看具体情况取舍。

### [Entry.css](http://nodejs.in/Entry.css/)

由mzhou开发，主要功能：

  * 合理的间距，遵循“垂直的旋律”，更适合中文阅读； 
      * 宽度自适应，兼容手机等小屏幕； 
          * 专为中文提供的书名号、缩写、着重符、旁注、上下标…； 
              * 丰富的自定义选项：布局、大小、颜色等等。![中文排版样式](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/entrycss.png) </ul> 
            ### [TYPO.CSS](https://github.com/sofish/Typo.css)
            
            ###### TYPO.CSS 主要包括：
            
            1、一般 reset.css 所需的内容
            
            目前的设计是这样的，尽量保持完整的 reset，比如让 ul/ol 无样式并且无多余的 `padding`/`margin`，这是必须的，因为一个网可能需要很多自定义的的内容，在实践中我们并不希望像 ul/ol 有样式，这样我们得用优先级去覆盖，这是非常麻烦的事。所以 typo.css 并不像 normalize.css，后者给每一个元素都预先定义了样式，这样在自定义的时候将是非常痛苦的。要大保持干净的所有元素一致化的 reset 才是最佳实践。
            
            2、`class="typo"` 阅读内容排版
            
            在文章/文档阅读的页面，需添加 `.typo` 这个 class，这样 table/ol/ul 等都会有预定的样式，让用户阅读起来更舒服。
            
            在父容器在没有添加 `class="typo"` 的时候，可以使用 `class="typo-标签"`（如 `class="typo-ul"`）来实现像 `.typo > ul` 这样结构的样式。
            
            3、增加类：
            
            主要是一些需要中文日常排版需要的元素和语文对应样式的增强，目前包括：
            
            (1) 专名号：使用标签 `<u>` 或者 `.typo-u`  
            (2) 着重号：使用 class `.typo-em`  
            (3) 清理浮动：与一般 reset.css 保持一致 `.clearfix`  
            (4) 强制换行：添加 `.textwrap` 到文本所在的容器，如果是 `table` 测还需要 `.textwrap-table`  
            (5) 衬线字体：添加 `.serif`  
            (6) 创建 border-box：在 html 中添加 `.borderbox<img alt="中文排版样式" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/typocss.png" alt="中文排版样式" >`
            
            ### <a href="http://css.hanzi.co/" target="_blank">汉字标准格式</a>
            
            「汉字标准格式」是一套支援各种印刷效果的Sass + JavaScript排版框架，包含<u>相邻</u><u>文字装饰线</u><u>跳脱</u>、汉ㄏㄢˋ字ㄗˋhànzì标ㄅㄧㄠ音ㄧㄣbiāoyīn、_着重号_、标点符号修正、<abbr>中文四大印刷体</abbr>、汉字－西文mixed间隙、「标点『挤压』」、章节边界调整…… 
            
            集成「语意样式标准化」「文字设计」「高级排版功能」三大模组，并为繁体中文、简体中文及日文配置的本地化设计，「汉字标准格式」提供了万维网时代的汉字问题解决之道。 
            
![中文排版样式](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/typeset.png)