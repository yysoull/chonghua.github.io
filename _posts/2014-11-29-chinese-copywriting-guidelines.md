---
id: 2939
title: 中文书写排版指南
date: 2014-11-29T10:28:47+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2935
permalink: /chinese-copywriting-guidelines/
categories:
  - 网络资源
tags:
  - 书写规范
  - 排版
---
前段时间介绍了两款<a href="http://hechonghua.com/chinese-article-layout-style/" target="_blank">中文排版样式</a>，这次为大家介绍一下中文的书写规范，比如说中文的标点符号、中英文和数字混输、专有名词的书写。目前大多数的博主都不会特别在意这些细节，比如，中文使用英文的标点，虽然说并没有什么后果，不过既然有现成的规范，我们就应该尽量的遵守，这样排出来的文章才会显得更加的专业和美观，给人更为信赖的感觉。

<!--more-->

下面的内容来自 <a href="http://sparanoid.com/about/" target="_blank">Sparanoid</a> 整理，也就是 <a href="http://www.7-zip.org/" target="_blank">7-Zip</a> 的中文作者。最后提供了一些自动完成的工具。

#### 目录

  * [空格](#spacing) 
      * [中英文之间需要增加空格](#spacing-c1) 
          * [中文与数字之间需要增加空格](#spacing-c2) 
              * [数字与单位之间需要增加空格](#spacing-c3) 
                  * [全角标点与其它字符之间不要加空格](#spacing-c4)</ul> 
                  * [标点符号](#punctuation-marks) 
                      * [不要重复使用标点符号](#punctuation-marks-c1)
                      * [全角和半角](#fullwidth-halfwidth) 
                          * [使用全角中文标点](#fullwidth-halfwidth-c1) 
                              * [数字使用半角字符](#fullwidth-halfwidth-c2) 
                                  * [遇到完整的英文整句、特殊名词，其内容使用半角标点](#fullwidth-halfwidth-c3)</ul> 
                                  * [大小写](#letter-case) 
                                      * [专有名词使用正确的大小写](#letter-case-c1)
                                      * [争议](#dispute) 
                                          * [中文链接之间增加空格](#dispute-c1) 
                                              * [简体中文使用直角引号](#dispute-c2)</ul> 
                                              * [工具](#tools) 
                                                  * [谁在这样做？](#who-is-using) 
                                                      * [参考文献](#references)</ul> 
                                                    <a name="user-content-spacing"></a> 
                                                    
                                                    #### 空格
                                                    
                                                    「有研究显示，打字的时候不喜欢在中文和英文之间加空格的人，感情路都走得很辛苦，有七成的比例会在 34 岁的时候跟自己不爱的人结婚，而其余三成的人最后只能把遗产留给自己的猫。毕竟爱情跟书写都需要适时地留白。
                                                    
                                                    与大家共勉之。」——[vinta/paranoid-auto-spacing](https://github.com/vinta/paranoid-auto-spacing)
                                                    
                                                    <a name="spacing-c1"></a> 
                                                    
                                                    ##### 中英文之間需要增加空格
                                                    
                                                    正确： 
                                                    
                                                    > 在 LeanCloud 上，数据存储是围绕 `AVObject` 进行的。
                                                    
                                                    错误： 
                                                    
                                                    > 在LeanCloud上，数据存储是围绕`AVObject`进行的。 
                                                    > 
                                                    > 在 LeanCloud上，数据存储是围绕`AVObject` 进行的。
                                                    
                                                    完整的正确用法： 
                                                    
                                                    > 在 LeanCloud 上，数据存储是围绕 `AVObject` 进行的。每个 `AVObject` 都包含了与 JSON 兼容的 key-value 对应的数据。数据是 schema-free 的，你不需要在每个 `AVObject` 上提前指定存在哪些键，只要直接设定对应的 key-value 即可。
                                                    
<img title=":exclamation:" alt=":exclamation:" align="absMiddle" src="https://assets-cdn.github.com/images/icons/emoji/unicode/2757.png" width="20" height="20" alt="中文书写排版指南" /> 例外：「豆瓣FM」等产品名词，按照官方所定义的格式书写。 
                                                    
                                                    <a name="spacing-c2"></a> 
                                                    
                                                    ##### 中文与数字之间需要增加空格
                                                    
                                                    正确： 
                                                    
                                                    > 今天出去买菜花了 5000 元。
                                                    
                                                    错误： 
                                                    
                                                    > 今天出去买菜花了 5000元。 
                                                    > 
                                                    > 今天出去买菜花了5000元。
                                                    
                                                    <a name="spacing-c3"></a> 
                                                    
                                                    ##### 数字与单位之间需要增加空格
                                                    
                                                    正确： 
                                                    
                                                    > 我家的宽带有 1 Gbps，硬盘一共有 10 TB。
                                                    
                                                    错误： 
                                                    
                                                    > 我家的宽带有 1Gbps，硬盘一共有 10TB。
                                                    
                                                    <a name="spacing-c4"></a> 
                                                    
                                                    ##### 全角标点与其它字符之间不要加空格
                                                    
                                                    正确： 
                                                    
                                                    > 刚刚买了一部 iPhone，好开心！
                                                    
                                                    错误： 
                                                    
                                                    > 刚刚买了一部 iPhone ，好开心！
                                                    
                                                    <a name="punctuation-marks"></a> 
                                                    
                                                    #### 标点符号
                                                    
                                                    <a name="marks-c1"></a> 
                                                    
                                                    ##### 不要重复使用标点符号
                                                    
                                                    正确： 
                                                    
                                                    > 德国队竟然战胜了巴西队！ 
                                                    > 
                                                    > 她竟然对你说「喵」？！
                                                    
                                                    错误： 
                                                    
                                                    > 德国队竟然战胜了巴西队！！ 
                                                    > 
                                                    > 德国队竟然战胜了巴西队！！！！ 
                                                    > 
                                                    > 德国队竟然战胜了巴西队！！！！！！！！ 
                                                    > 
                                                    > 她竟然对你说「喵」？？！！ 
                                                    > 
                                                    > 她竟然对你说「喵」？！？！？？！！
                                                    
                                                    <a name="fullwidth-halfwidth"></a> 
                                                    
                                                    #### 全角和半角
                                                    
<img title=":exclamation:" alt=":exclamation:" align="absMiddle" src="https://assets-cdn.github.com/images/icons/emoji/unicode/2757.png" width="20" height="20" alt="中文书写排版指南" /> 不明白什么是全角和半角符号？请查看维基百科词条『[全角和半角](http://zh.wikipedia.org/wiki/%E5%85%A8%E5%BD%A2%E5%92%8C%E5%8D%8A%E5%BD%A2)』。 
                                                    
                                                    <a name="fullwidth-halfwidth-c1"></a> 
                                                    
                                                    ##### 使用全角中文标点
                                                    
                                                    正确： 
                                                    
                                                    > 嗨！你知道吗？今天前台的小妹跟我说「喵」了哎！ 
                                                    > 
                                                    > 核磁共振成像（NMRI）是什么原理都不知道？JFGI！
                                                    
                                                    错误： 
                                                    
                                                    > 嗨! 你知道嘛? 今天前台的小妹跟我说 "喵" 了哎! 
                                                    > 
                                                    > 嗨!你知道嘛?今天前台的小妹跟我说"喵"了哎! 
                                                    > 
                                                    > 核磁共振成像 (NMRI) 是什么原理都不知道? JFGI! 
                                                    > 
                                                    > 核磁共振成像(NMRI)是什么原理都不知道?JFGI!
                                                    
                                                    <a name="fullwidth-halfwidth-c2"></a> 
                                                    
                                                    ##### 数字使用半角字符
                                                    
                                                    正确： 
                                                    
                                                    > 这件蛋糕只卖 1000 元。
                                                    
                                                    错误： 
                                                    
                                                    > 这件蛋糕只卖 １０００ 元。
                                                    
<img title=":exclamation:" alt=":exclamation:" align="absMiddle" src="https://assets-cdn.github.com/images/icons/emoji/unicode/2757.png" width="20" height="20" alt="中文书写排版指南" /> 例外：在设计稿、宣传海报中如出现及少量数字的情形时，为了方便文字对齐，是可以使用全角数字的。 
                                                    
                                                    <a name="fullwidth-halfwidth-c3"></a> 
                                                    
                                                    ##### 遇到完整的英文整句、特殊名词，其內容使用半角标点
                                                    
                                                    正确： 
                                                    
                                                    > 乔帮主那句话是怎么说的？「Stay hungry, stay foolish.」。 
                                                    > 
                                                    > 推荐你阅读『Hackers & Painters: Big Ideas from the Computer Age』，非常的有趣。
                                                    
                                                    错误： 
                                                    
                                                    > 乔帮主那句话是怎么说的？「Stay hungry，stay foolish。」。 
                                                    > 
                                                    > 推荐你阅读『Hackers＆Painters：Big Ideas from the Computer Age』，非常的有趣。
                                                    
                                                    <a name="letter-case"></a> 
                                                    
                                                    #### 大小写
                                                    
                                                    大小写相关用法原属于英文书写范畴，不属于本 wiki 讨论内容，在这里只对部分易错用用法进行简述。 
                                                    
                                                    <a name="letter-case-c1"></a> 
                                                    
                                                    ##### 专有名词使用正确的大小写
                                                    
                                                    正确： 
                                                    
                                                    > 使用 GitHub 登录 
                                                    > 
                                                    > 我们的客户有 GitHub、Foursquare、Microsoft Corporation、Google、Facebook, Inc.。
                                                    
                                                    错误： 
                                                    
                                                    > 使用 github 登录 
                                                    > 
                                                    > 使用 GITHUB 登录 
                                                    > 
                                                    > 使用 Github 登录 
                                                    > 
                                                    > 使用 gitHub 登录 
                                                    > 
                                                    > 使用 gｲんĤЦ8 登录 
                                                    > 
                                                    > 我们的客户有 github、foursquare、microsoft corporation、google、facebook, inc.。 
                                                    > 
                                                    > 我们的客户有 GITHUB、FOURSQUARE、MICROSOFT CORPORATION、GOOGLE、FACEBOOK, INC.。 
                                                    > 
                                                    > 我们的客户有 Github、FourSquare、MicroSoft Corporation、Google、FaceBook, Inc.。 
                                                    > 
                                                    > 我们的客户有 gitHub、fourSquare、microSoft Corporation、google、faceBook, Inc.。 
                                                    > 
                                                    > 我们的客户有 gｲんĤЦ8、ｷouЯƧquﾑгє、๓เςг๏ร๏Ŧt ς๏гק๏гคtเ๏ภn、900913、ƒ4ᄃëв๏๏к, IПᄃ.。
                                                    
                                                    注意：当网页中需要配合整体视觉风格而出现全部大写／小写的情形，HTML 中请使用标准的大小写规范进行书写；并通过 `text-transform: uppercase;`／`text-transform: lowercase;` 对表现形式进行定义。 
                                                    
                                                    <a name="dispute"></a> 
                                                    
                                                    #### 争议
                                                    
<img title=":exclamation:" alt=":exclamation:" align="absMiddle" src="https://assets-cdn.github.com/images/icons/emoji/unicode/2757.png" width="20" height="20" alt="中文书写排版指南" /> 以下用法略带有个人色彩，既：无论是否遵循下述规则，从语法的角度来讲都是**正确**的。 
                                                    
                                                    <a name="dispute-c1"></a> 
                                                    
                                                    ##### 中文链接之间增加空格
                                                    
                                                    用法： 
                                                    
                                                    > 请 [提交一个 issue](#) 并分配给相关同事。 
                                                    > 
                                                    > 访问我们网站的最新动态，请 [点击这里](#) 进行订阅！
                                                    
                                                    对比用法： 
                                                    
                                                    > 请[提交一个 issue](https://github.com/sparanoid/chinese-copywriting-guidelines#) 并分配给相关同事。 
                                                    > 
                                                    > 访问我们网站的最新动态，请[点击这里](#)进行订阅！
                                                    
                                                    <a name="dispute-c2"></a> 
                                                    
                                                    ##### 简体中文使用直角引号
                                                    
                                                    用法： 
                                                    
                                                    > 「老师，『有条不紊』的『紊』是什么意思？」
                                                    
                                                    对比用法： 
                                                    
                                                    > “老师，‘有条不紊’的‘紊’是什么意思？”
                                                    
                                                    <a name="tools"></a> 
                                                    
                                                    ## <a aria-hidden="true" id="工具" class="anchor" href="#%E5%B7%A5%E5%85%B7"><span class="octicon octicon-link"></span></a>工具
                                                    
                                                    <table class="table table-bordered">
                                                      <tr>
                                                        <th>
                                                          仓库
                                                        </th>
                                                        
                                                        <th>
                                                          语言
                                                        </th>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="https://github.com/vinta/paranoid-auto-spacing" target="_blank">vinta/paranoid-auto-spacing</a>
                                                        </td>
                                                        
                                                        <td>
                                                          JavaScript
                                                        </td>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="https://github.com/huei90/pangu.node" target="_blank">huei90/pangu.node</a>
                                                        </td>
                                                        
                                                        <td>
                                                          Node.js
                                                        </td>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="https://github.com/huacnlee/auto-correct" target="_blank">huacnlee/auto-correct</a>
                                                        </td>
                                                        
                                                        <td>
                                                          Ruby
                                                        </td>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="https://github.com/sparanoid/space-lover" target="_blank">sparanoid/space-lover</a>
                                                        </td>
                                                        
                                                        <td>
                                                          PHP
                                                        </td>
                                                      </tr>
                                                    </table>
                                                    
                                                    <a name="user-content-who-is-using"></a>
                                                    
                                                    ## <a aria-hidden="true" id="谁在这样做" class="anchor" href="#%E8%AA%B0%E5%9C%A8%E9%80%99%E6%A8%A3%E5%81%9A"><span class="octicon octicon-link"></span></a>谁在这样做？
                                                    
                                                    <table class="table table-bordered">
                                                      <tr>
                                                        <th>
                                                          网站
                                                        </th>
                                                        
                                                        <th>
                                                          文案
                                                        </th>
                                                        
                                                        <th>
                                                          UGC
                                                        </th>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="http://www.apple.com/cn/" target="_blank">Apple 中国</a>
                                                        </td>
                                                        
                                                        <td>
                                                          Yes
                                                        </td>
                                                        
                                                        <td>
                                                          N/A
                                                        </td>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="http://www.apple.com/hk/" target="_blank">Apple 香港</a>
                                                        </td>
                                                        
                                                        <td>
                                                          Yes
                                                        </td>
                                                        
                                                        <td>
                                                          N/A
                                                        </td>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="http://www.apple.com/tw/" target="_blank">Apple 台湾</a>
                                                        </td>
                                                        
                                                        <td>
                                                          Yes
                                                        </td>
                                                        
                                                        <td>
                                                          N/A
                                                        </td>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="http://www.microsoft.com/zh-cn/" target="_blank">Microsoft中国</a>
                                                        </td>
                                                        
                                                        <td>
                                                          Yes
                                                        </td>
                                                        
                                                        <td>
                                                          N/A
                                                        </td>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="http://www.microsoft.com/zh-hk/" target="_blank">Microsoft 香港</a>
                                                        </td>
                                                        
                                                        <td>
                                                          Yes
                                                        </td>
                                                        
                                                        <td>
                                                          N/A
                                                        </td>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="http://www.microsoft.com/zh-tw/" target="_blank">Microsoft 台湾</a>
                                                        </td>
                                                        
                                                        <td>
                                                          Yes
                                                        </td>
                                                        
                                                        <td>
                                                          N/A
                                                        </td>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="http://leancloud.cn/" target="_blank">LeanCloud</a>
                                                        </td>
                                                        
                                                        <td>
                                                          Yes
                                                        </td>
                                                        
                                                        <td>
                                                          N/A
                                                        </td>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="http://www.zhihu.com/" target="_blank">知乎</a>
                                                        </td>
                                                        
                                                        <td>
                                                          Yes
                                                        </td>
                                                        
                                                        <td>
                                                          部分用户达到
                                                        </td>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="http://www.v2ex.com/" target="_blank">V2EX</a>
                                                        </td>
                                                        
                                                        <td>
                                                          Yes
                                                        </td>
                                                        
                                                        <td>
                                                          标题达到
                                                        </td>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="http://segmentfault.com/" target="_blank">SegmentFault</a>
                                                        </td>
                                                        
                                                        <td>
                                                          Yes
                                                        </td>
                                                        
                                                        <td>
                                                          部分用户达到
                                                        </td>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="http://apple4us.com/" target="_blank">Apple4us</a>
                                                        </td>
                                                        
                                                        <td>
                                                          Yes
                                                        </td>
                                                        
                                                        <td>
                                                          N/A
                                                        </td>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="http://www.wandoujia.com/" target="_blank">豌豆荚</a>
                                                        </td>
                                                        
                                                        <td>
                                                          Yes
                                                        </td>
                                                        
                                                        <td>
                                                          N/A
                                                        </td>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="http://ruby-china.org/" target="_blank">Ruby China</a>
                                                        </td>
                                                        
                                                        <td>
                                                          Yes
                                                        </td>
                                                        
                                                        <td>
                                                          标题达到
                                                        </td>
                                                      </tr>
                                                      
                                                      <tr>
                                                        <td>
                                                          <a href="http://phphub.org/" target="_blank">PHPHub</a>
                                                        </td>
                                                        
                                                        <td>
                                                          Yes
                                                        </td>
                                                        
                                                        <td>
                                                          标题达到
                                                        </td>
                                                      </tr>
                                                    </table>
                                                    
                                                    知道更多这样的网站？请给我发 <a href="https://help.github.com/articles/using-pull-requests" target="_blank">PR</a>。
                                                    
                                                    <a name="references"></a>
                                                    
                                                    ## 参考文献<a aria-hidden="true" id="参考文献" class="anchor" href="#%E5%8F%83%E8%80%83%E6%96%87%E7%8D%BB"><span class="octicon octicon-link"></span></a>
                                                    
                                                    <ul class="task-list">
                                                      <li>
                                                        <a href="http://grammar.about.com/od/punctuationandmechanics/a/Guidelines-For-Using-Capital-Letters.htm" target="_blank">来自 About.com 的大小写用法（英文）</a> <li>
                                                          <a href="http://en.wikipedia.org/wiki/Letter_case" target="_blank">来自维基百科的关于大小写字符的相关条目（英文）</a> <li>
                                                            <a href="http://www.oxforddictionaries.com/us/words/punctuation" target="_blank">来自 Oxford Dictionaries 的标点相关用法（英文）</a> <li>
                                                              <a href="https://owl.english.purdue.edu/owl/section/1/6/" target="_blank">来自普渡大学的标点符号用法（英文）</a> <li>
                                                                <a href="http://www.wikihow.com/Use-English-Punctuation-Correctly" target="_blank">来自 wikiHow 的英文标点符号用法 wiki（英文）</a> <li>
                                                                  <a href="https://zh.opensuse.org/index.php?title=Help:%E6%A0%BC%E5%BC%8F" target="_blank">格式－openSUSE</a> <li>
                                                                    <a href="http://zh.wikipedia.org/wiki/%E5%85%A8%E5%BD%A2%E5%92%8C%E5%8D%8A%E5%BD%A2" target="_blank">全角和半角 - 维基百科</a> <li>
                                                                      <a href="http://zh.wikipedia.org/wiki/%E5%BC%95%E8%99%9F" target="_blank">引号 - 维基百科</a> <li>
                                                                        <a href="http://zh.wikipedia.org/wiki/%E7%96%91%E5%95%8F%E9%A9%9A%E5%98%86%E8%99%9F" target="_blank">疑问惊叹号- 维基百科</a>
                                                                      </li></ul> 
                                                                      <p>
                                                                        原文链接：<a title="http://sparanoid.com/note/chinese-copywriting-guidelines/" href="http://sparanoid.com/note/chinese-copywriting-guidelines/" target="_blank">http://sparanoid.com/note/chinese-copywriting-guidelines/</a>
                                                                      </p>