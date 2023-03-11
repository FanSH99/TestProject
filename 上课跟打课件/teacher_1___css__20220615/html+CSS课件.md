# 第一章   html+css认知及软件操作

## 1.1 html+css基础

### 1.1.1 认识网页

![image-20220517172558940](C:\Users\Administrator\Desktop\课件图片\01.png)

以百度首页，淘宝首页，新浪首页为例认识网页

![image-20220517172749131](C:\Users\Administrator\Desktop\课件图片\02.png)

**网页**主要由**文字、图片和按钮等**元素构成。当然，除了这些元素，网页中还可以包含**音频、视频**以及**Flash**等。

### 1.1.2  web标准

#### 1.1.2-1 web标准**

1：w3c 万维网联盟组织   用来制定web标准的机构（组织）

2：web标准：制作网页要遵循的规范

3：web标准规范的分类： 结构标准       表现标准      行为标准***

4：结构： html       表现： css       行为：javascript***

#### 1.1.2-2 web标准总结：**     

​    结构标准：相当于人的身体

   表现标准： 相当于人的衣服

   行为标准： 相当于人的动作

### 1.1.3 浏览器介绍

**常见浏览器介绍**

浏览器是网页运行的平台，常用的浏览器有IE、火狐（Firefox）、谷歌（Chrome）、Safari和Opera等。

![image-20220517173550438](C:\Users\Administrator\Desktop\课件图片\03.png)

### 1.1.4 **浏览器与服务器的那点事**

![image-20220517173705655](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220517173705655.png)

### 1.1.5 html介绍***

html语言（超文本标记语言）

1：html (Hyper  Text  Markup  Language )  中文译为“超文本标记语言”，主要是通过html标记对网页中的文本，图片，声音等内容进行描述

2：HTML之所以称为超文本标记语言，不仅是因为他通过标记描述网页内容，同时也由于文本中包含了所谓的“超级链接”，通过超链接可以实现网页的跳转。从而构成了丰富多彩的Web页面。

![image-20220517174012001](C:\Users\Administrator\Desktop\课件图片\04.png)

Html就是用来制作网页的。

### 1.1.6 css介绍***

css语言（层叠样式表）

![image-20220517174231367](C:\Users\Administrator\Desktop\课件图片\05.png)

Css就是对网页进行美化的（网页的美化师）

## 1.2 软件基本操作

### 1.2.1 软件介绍

开发工具相当于战场上的武器

![image-20220518104838811](C:\Users\Administrator\Desktop\课件图片\image-20220518104838811.png)

**我们用的开发软件为：**

![image-20220518104917081](C:\Users\Administrator\Desktop\课件图片\image-20220518104917081.png)

### 1.2.2 软件插件安装及设置

ctrl+shift+x把扩展调出来，在搜索框中搜索所要安装的插件

![image-20220518105200697](C:\Users\Administrator\Desktop\课件图片\image-20220518105200697.png)

**推荐一些我认为对编写前端代码比较有帮助的vscode插件：**

A.  Auto Close Tag 自动闭合HTML/XML标签

B.  Chinese   中文简体

C.  Auto Rename Tag自动完成另一侧标签的同步修改

D.  Beautify格式化代码，值得注意的是，beautify插件支持自定义格式化代码规则

E.   open in browser

vscode不像IDE一样能够直接在浏览器中打开html，而该插件支持快捷键与鼠标右键快速在浏览器中打开html文件，支持自定义打开指定的浏览器，包括：Firefox，Chrome，Opera，IE以及Safari



![image-20220518105614517](C:\Users\Administrator\Desktop\课件图片\image-20220518105614517.png)

![image-20220518105647431](C:\Users\Administrator\Desktop\课件图片\image-20220518105647431.png)

## 1.3 HTML标签介绍

### 1.3.1 网页框架介绍

1：html (Hyper  Text  Markup  Language )  中文译为“超文本标记语言”，主要是通过html标记对网页中的文本，图片，声音等内容进行描述

2：HTML之所以称为超文本标记语言，不仅是因为他通过标记描述网页内容，同时也由于文本中包含了所谓的“超级链接”，通过超链接可以实现网页的跳转。从而构成了丰富多彩的Web页面。

![image-20220524145011251](C:\Users\Administrator\Desktop\课件图片\image-20220524145011251.png)

**学习任何一门语言，都要首先掌握它的基本格式，就像写信需要符合书信的格式要求一样。HTML标记语言也不例外，同样需要遵从一定的规范。**

![image-20220524145127097](C:\Users\Administrator\Desktop\课件图片\image-20220524145127097.png)

![image-20220524152234156](C:\Users\Administrator\Desktop\课件图片\image-20220524152234156.png)

−<html>称为根标记，用于告知浏览器其自身是一个 HTML 文档， <html>标记标志着HTML文档的开始，</html>标记标志着HTML文档的结束，在他们之间的是文档的头部和主体内容。

−<html lang="en">  向搜索引擎表示该页面是html语言，并且语言为英文网站，其"lang"的意思就是“language”，语言的意思，而“en”即表示english

−这个主要是给搜索引擎看的，搜索引擎不会去判断该站点是中文站还是英文站，所以这句话就是让搜索引擎知道，即使你的站点是中文站，对html页面本身不会有影响

<head>标记用于定义HTML文档的头部信息，也称为头部标记，紧跟在<html>标记之后，主要用来封装其他位于文档头部的标记。

一个HTML文档只能含有一对<head>标记，绝大多数文档头部包含的数据都不会真正作为内容显示在页面中。

<title>标记用于定义HTML页面的标题，即给网页取一个名字，必须位于<head>标记之内。一个HTML文档只能含有一对<title></title>标记，<title></title>之间的内容将显示在浏览器窗口的标题栏中。其基本语法格式如下：

   <title>网页名称</title>

### 1.3.2 标签关系

1.嵌套关系

2.并列关系

嵌套关系：类似父亲和儿子之间的关系

​         <html>

​            <head></head>

​            <body></body>

​         </html>

并列关系：类似与兄弟之间的关系

​           <head></head>        

​            <body></body>        

### 1.3.3 标签分类

#### 1.3.3-1 **HTML****标记****—****双标记**

双标记也称体标记，是指由开始和结束两个标记符组成的标记。其基本语法格式如下：

​    <标记名></标记名>

该语法中“<标记名>”表示该标记的作用开始，一般称为“开始标记（start tag）”，“</标记名>” 表示该标记的作用结束，一般称为“结束标记（end tag）”。和开始标记相比，结束标记只是在前面加了一个关闭符“/”。

##### A **段落标记**

在网页中要把文字有条理地显示出来，离不开段落标记，就如同我们平常写文章一样，整个网页也可以分为若干个段落，而段落的标记就是<p>。

<p>是HTML文档中最常见的标记，默认情况下，文本在一个段落中会根据浏览器窗口的大小自动换行。

 <!-- 段落标签 p标签 双标签 块状元素 （设置宽高起作用，一组标签排不满一行，另一组不会自动往后排）-->

##### B **标题标记**

为了使网页更具有语义化，我们经常会在页面中用到标题标记，HTML提供了6个等级的标题，即<h1>、<h2>、<h3>、<h4>、<h5>和<h6>，从<h1>到<h6>重要性递减。其基本语法格式如下：

<hn>标题文本</hn>

<!-- 标题标签 hn n指1~6 ，双标签 默认字体加粗 

纯块状元素（设置宽高起作用，一组标签排不满一行，另一组不会自动往后排）

-->

#####   C **文本格式化标记**

−在网页中，有时需要为文字设置粗体、斜体或下划线效果，这时就需要用到HTML中的文本格式化标记，使文字以特殊的方式显示。

−文本格式化常用标记

| 标记                       | 显示效果                                   |
| -------------------------- | ------------------------------------------ |
| <i></i>和<em></em>         | 文字以斜体方式显示（XHTML推荐使用em）      |
| <b></b>和<strong></strong> | 文字以粗体方式显示（XHTML推荐使用strong）  |
| <s></s>和<del></del>       | 文字以加删除线方式显示（XHTML推荐使用del） |
| <u></u>和<ins></ins>       | 文字以加下划线方式显示（XHTML不赞成使用u） |

##### D 超链接属性 

**创建超链接   <a href=""></a>**

lhref：用于指定链接目标的url地址，当为<a>标记应用href属性时，它就具有了超链接的功能。

ltarget：用于指定链接页面的打开方式，其取值有_self和_blank两种，其中_self为默认值，_blank为在新窗口中打开方式。

l<base target=""/>  可以设置整体链接的打开状态

**注意****:**

•暂时没有确定链接目标时，通常将<a>标记的href属性值定义为“#”(即href="#")，表示该链接暂时为一个空链接。#包含了一个位置信息，默认的锚是#top 也就是网页的上端

•而javascript:void(0) 仅仅表示一个死链接

•不仅可以创建文本超链接，在网页中各种网页元素，如图像、表格、音频、视频等都可以添加超链接。

##### E **锚点链接**

![image-20220524150537096](C:\Users\Administrator\Desktop\课件图片\image-20220524150537096.png)

##### F **列表介绍（****list****）**

![image-20220524150824980](C:\Users\Administrator\Desktop\课件图片\image-20220524150824980.png)

###### •无序列表ul

###### 的各个列表项之间没有顺序级别之分，是并列的。其基本语法格式如下：

**<****ul****>****
**   **<****li****>****列表项****1</****li****>****
**   **<****li****>****列表项****2</****li****>****
**   **<****li****>****列表项****3</****li****>****
** **......****
** **</****ul****>**

•在上面的语法中，<ul></ul>标记用于定义无序列表，<li></li>标记嵌套在<ul></ul>标记中，用于描述具体的列表项，每对<ul></ul>中至少应包含一对<li></li>。

•无序列表中type属性的常用值有三个，它们呈现的效果不同.

•默认值:disc

•方块:square

•空心圆:circle

![image-20220524150957155](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220524150957155.png)

###### 有序列表(ol)

–有序列表即为有排列顺序的列表，其各个列表项按照一定的顺序排列定义，有序列表的基本语法格式如下：

<ol >

   <li >项一</li>

   <li >项二</li>

</ol>

–在上面的语法中，<ol></ol>标记用于定义有序列表，<li></li>为具体的列表项，和无序列表类似，每对<ol></ol>中也至少应包含一对<li></li>。

有序列表其他属性 type  start

-语法格式：

​        <ol type=value1  start=value2>

​              <li></li>    

​           </ol>

value1表示有序列表项目符号的类型, value2表示项目开始的数值. start是编号开始的数字，如start=2则编号从2开始，如果从1开始可以省略，或是在<li>标签中设定value＝"n"改变列表行项目的特定编号，例如<li value="7">。type=用于编号的数字,字母等的类型，如type=a，则编号用英文字母。使用这些属性，把它们放在<ol>或<li>的的初始标签中。

•Type属性如下图

| **type****类型** | **描述**                                   |
| ---------------- | ------------------------------------------ |
| Type=1           | 表示列表项目用数字表示（1,2,3…..）         |
| Type=a           | 表示列表项目用小写字母表示(a,b,c..)        |
| Type=A           | 表示列表项目用大写字母表示(A,B,C..)        |
| Type=i           | 表示列表项目用小写罗马数字表示(i,ii,iii….) |
| Type=I           | 表示列表项目用大写罗马数字表示(I,II,III…)  |
|                  |                                            |

•一般type的设置同样在css中设置

###### 自定义列表(dl)

•定义列表常用于对术语或名词进行解释和描述，定义列表的列表项前没有任何项目符号。其基本语法如下：

<dl>

  <dt>名词1</dt>

  <dd>名词1解释1</dd>

  <dd>名词1解释2</dd>

  ...

  <dt>名词2</dt>

  <dd>名词2解释1</dd>

  <dd>名词2解释2</dd>

  ...

</dl>

##### G Html 表格

•生活中会遇到哪些表格 （课程表,值日表…）

•在HTML语言中，表格至少由<TABLE>标签、<TR>标签和<TD>标签这3对标签组成

•**表格的基本结构**

![image-20220524151318319](C:\Users\Administrator\Desktop\课件图片\image-20220524151318319.png)

•**1.<table>**

•<table>...</table>标签用于在HTML文档中创建表格。它包含表名和表格本身内容的代码。表格的基本单元是单元格，用<td>...</td>标签定义。

•**2.<****tr****>**

•表格行用<tr>标签定义，由单元格构成。多个行结合在一起就构成一个表格，这反映在用于创建表格的HTML语法中。表格的每一行都用<tr>标签表示，并用相应的</tr> 结束
 **3.<td>**

•表格的每一行又有若干表格单元格，用<td>...</td>标签表示。TD是"表格数据( Table Data)”的英文缩写。<td>标签定义一个列，嵌套于<tr>标签内。

•border属性是最常用的属性，可用于定义表格的单元格和结构。该属性指定边框的厚度，如果其值设置为零(0)，则不显示边框。

•创建表格的基本语法：

•                   <table>
                       <tr>
                           <td> 单元格内容 </td>   

•                       </tr>           
                   </table>

•

•创建表格时，一般情况下分3步：

•第一步：创建表格标签< table>…</table>。

•第二步：在表格标签table>…</table>里创建行标签<tr>...</tr>，可以有多行。

•第三步：在行标签<tr>...</tr>里创建单元格标签<td>...</td>，可以有多个单元格。

###### •表格中的属性

| **属性名**  | **含义**                     | **常用属性值**                         |
| ----------- | ---------------------------- | -------------------------------------- |
| Border      | 设置边框 默认为0 没有边框    | 单位为px 像素值                        |
| Cellspacing | 设置单元格与单元格之间的距离 | 单位为px 像素值   默认2px              |
| Cellpadding | 设置文字与单元格之间的距离   | 默认1px                                |
| Width       | 设置表格的宽度               | 单位px                                 |
| Height      | 设置表格高度                 | 单位px                                 |
| Align       | 设置表格在网页中的对齐方式   | Left    左   Right   右   Center  居中 |
| bgcolor     | 设置背景颜色                 | white ,red,green                       |

###### •**caption 元素定义表格标题**

•caption 标签必须紧随 table 标签之后。您只能对每个表格定义一个标题。通常这个标题会被居中于表格之上。

![image-20220524151445532](C:\Users\Administrator\Desktop\课件图片\image-20220524151445532.png)

###### •**<****th****>****标记及其属性**

•表头一般位于表格的第一行或第一列，其文本加粗居中，如下图所示，即为设置了表头的表格。设置表头非常简单，只需用表头标记<th></th>替代相应的单元格标记<td></td>即可。

![image-20220524151630794](C:\Users\Administrator\Desktop\课件图片\image-20220524151630794.png)

###### •**表格的结构**

–在使用表格进行布局时，可以将表格划分为头部、主体和页脚，具体 如下所示：

l<thead></thead>：用于定义表格的头部，必须位于<table></table>标记中，一般包含网页的logo和导航等头部信息。

l<tfoot></ tfoot >：用于定义表格的页脚，位于<table></table>标记中<thead></thead>标记之后，一般包含网页底部的企业信息等。

l<tbody></tbody>：用于定义表格的主体，位于<table></table>标记中<tfoot></ tfoot >标记之后，一般包含网页中除头部和底部之外的其他内容。

##### H 表单（form）

-常见的表单：银行开户，学籍录入，网上注册信息等等。。

表单的作用：主要负责[数据采集](http://baike.baidu.com/view/709701.htm)功能。

–对于表单构成中的表单控件、提示信息和表单域，初学者可能比较难理解，对他们的具体解释如下：

l表单控件：包含了具体的表单功能项，如单行文本输入框、密码输入框、复选框、提交按钮、重置按钮等。

l提示信息：一个表单中通常还需要包含一些说明性的文字，提示用户进行填写和操作。

l表单域：他相当于一个容器，用来容纳所有的表单控件和提示信息，可以通过他定义处理表单数据所用程序的url地址，以及数据提交到服务器的方法。如果不定义表单域，表单中的数据就无法传送到后台服务器。

###### •语法： 

<form name="form_name" action="url" method="get|post">…</form>

•action： 处理用户数据信息

• Method：get | post

Get数据提交：通过地址栏的方式进行数据提交，将用户输入的信息显出来。Get提交安全性差

•Post提交：数据通过后台进行提交，不会将用户信息显示出来，安全性比较好

•Name用来制定表单的名称，以区分页面中的多个表单

注意：每个表单都应该有自己的表单域

###### **input****控件**

**<input type=“****控件类型****”>**

在上面的语法中，<input />标记为单标记，type属性为其最基本的属性，其取值有多种，用于指定不同的控件类型。除了type属性之外，<input />标记还可以定义很多其他的属性，其常用属性如下表所示

![image-20220524151934438](C:\Users\Administrator\Desktop\课件图片\image-20220524151934438.png)

 <!-- 表单或者表单域   method="post"提交方式  action="地址"-->

​    <!-- 具有行内元素的特点 又有块状元素特点 行内块元素 -->
​    <form action="" method="post">
​        <!-- 给表单控件加大边框 -->
​        <fieldset>
​            <!-- 给框内表单控件加标题 -->
​            <legend>注册信息</legend>
​            <!-- 单行文本框   placeholder="用户名"添加文字提示  value也可以-->

​            <!-- <label for=""> </label> 可以关联输入框 -->
​            <label for="admin"> 用户名：</label>
​            <input type="text" placeholder="用户名" id="admin">
​            <!-- 密码框 -->
​            密码：<input type="password" placeholder="密码">
​            <!-- 单选按钮  实现单选功能添加name属性，属性值保持一致 -->
​            <input type="radio" name="sex">男<input type="radio" name="sex">
​            <!-- 复选按钮  默认选中 checked="checked" 或者是checked-->
​            <input type="checkbox" checked="checked">打篮球<input type="checkbox">踢足球<input type="checkbox">逛街<input
​                type="checkbox">购物<input type="checkbox">敲代码
​            <!-- 下拉列表表 -->
​            <select>
​                <option>河南省</option>
​                <option>河北省</option>
​                <option>湖南省</option>
​                <option selected>湖北省</option>
​            </select>
​            <!-- 普通按钮 -->
​            <input type="button" value="普通按钮">
​            <!-- 提交按钮 -->
​            <input type="submit">
​            <!-- 重置按钮 -->
​            <input type="reset">
​            <!-- 图片按钮 -->
​            <input type="image" src="img/dh01.gif">
​            <!-- 上传文件按钮 -->
​            <input type="file">
​            <!-- 多行文本框  允许用户手动更改外框大小 -->

            <textarea>留言信息：</textarea>
​        </fieldset>
​    </form>



#### 1.3.3-2 **HTML****标记****—****单标记**

单标记也称空标记，是指用一个标记符号即可完整地描述某个功能的标记。其基本语法格式如下：

  <标记名/>

##### A **水平线标记****<hr />**

在网页中常常看到一些水平线将段落与段落之间隔开，使得文档结构清晰，层次分明。这些水平线可以通过插入图片实现，也可以简单地通过标记来完成，<hr />就是创建横跨网页水平线的标记。其基本语法格式如下：

 <hr />是单标记，在网页中输入一个<hr />，就添加了一条默认样式的水平线。

##### B img标记路径

 <!-- img 单标签 行内块 既有行内元素的属性（一组标签排不满一行，另一组自动往后排），又有块状元素的属性（设置宽高起作用）

  alt=""当图片不能正常显示，对图片的文字描述

  title=""无论图片是否正常显示，对图片的文字描述

  src="" ../返回上一级

  width=""宽度

  height=""高度  （只设置其中一个值，另一个会等比例缩放）

  -->

![image-20220524152428060](C:\Users\Administrator\Desktop\课件图片\image-20220524152428060.png)

**相对路径**

相对路径不带有盘符，通常是以HTML网页文件为起点，通过层级关系描述目标图像的位置。

​        <img src=“img/logo.jpg” alt=“北游国际-专业的java培训,.net培训,php培训,网页培训,平面培训,iOS培训机构" />

**绝对路径**

   绝对路径一般是指带有盘符的路径。

**例如：**

“D:\HTML+CSS网页制作\chapter02\img\logo.gif”，

或完整的网络地址，例如“http://www.itcast.cn/images/logo.gif”。

#### 1.3.3-3 特殊标记符号

| 特殊字符 | 描述           | 字符的代码 |
| -------- | -------------- | ---------- |
|          | 空格符         | &nbsp;     |
| <        | 小于号         | &lt;       |
| >        | 大于号         | &gt;       |
| &        | 和号           | &amp;      |
| ￥       | 人民币         | &yen;      |
| ©        | 版权           | &copy;     |
| ®        | 注册商标       | &reg;      |
| °        | 摄氏度         | &deg;      |
| ±        | 正负号         | &plusmn;   |
| ×        | 乘号           | &times;    |
| ÷        | 除号           | &divide;   |
| ²        | 平方2（上标2） | &sup2;     |
| ³        | 立方3（上标3） | &sup3;     |

# 第二章 css

## 2.1 css引入方法

 <!-- 行内式、内嵌式、外链式、导入式 -->

## 2.2css盒子模型

### 2.2.1盒子模型知识点

 padding 内边距  会使外观发生变化  会被背景颜色填充该区域

​    padding-top:10px;   上边内边距10px

​    padding-bottom:10px; 下边内边距10px

​    padding-left:10px;  左边内边距10px

​    padding-right:10px;  右边内边距10px

合写为： padding:10px;  上下左右10px

padding:10px 20px;  上下10px  左右20px

padding:10px 20px 30px;  上10px 左右20px  下30px

padding:10px 20px 30px 40px;  上10px 右20px 下30px 左40px



<!-- 边框  border  也会改变盒子的外观 

​      border:1px solid #000;上下左右四个边框都是1px 实线  黑色

  分写为：border-width:1px;

​      border-style:solid;

​      border-color:#000;

也可以分写为：border-left:1px solid #000;

​      border-right:1px solid #000;

​      border-top:1px solid #000;

​      border-bottom:1px solid #000;

  又分写为：border-bottom-width:1px;

​       border-bottom-style:solid;

​       border-bottom-color:#000;

类型：solid实线  dashed虚线（有小矩形组成） dotted虚线（有小圆点组成）  

  -->

 <!-- margin 外边距 不会改变盒子的外观，只是所占的区域变大 -->

 <!-- 盒子塌陷：给子级元素加的外边距应用到了父级元素上 

  1、给父级元素加边框

  2、给父级元素加溢出隐藏overflow: hidden;(隐藏的内容区域，但是底部内边距除外)

  3、给父级元素加内边距

  -->

### 2.2.2 盒子模型案例

### <img src="D:\周老师ftp上的资料\0408\作业\0412\内边距盒子模型\01.png" alt="01" style="zoom: 50%;" />![02 (2)](D:\周老师ftp上的资料\0408\作业\0412\内边距盒子模型\02 (2).png)

![03](D:\周老师ftp上的资料\0408\作业\0412\内边距盒子模型\03.jpg)

## 2.3 css引入优先级

### 2.3.1 选择器特点

 <!-- 类选择器

  在标签中用class表示  在css中用“.”表示  同一个类名在页面中能多次引用

  在同一个标签中，只能有一个class，同一个class中能引入多个类名，类名之间用空格隔开

  -->

<!-- id选择器  在标签中用id表示，在css中用“#”表示 

id选择器具有唯一性

-->

<!-- 同一个标签中能同时引入id选择器和类选择器-->

### 2.3.2 选择器优先级

<!-- css优先级   !important>行内式>id选择器>类选择器>标签选择器   -->

### 2.3.3 命名规范

1、不准是纯数字

2、不准数字开头

3、不准有中文

4、不能是标签名

5、不能特殊字符



尽量用英文语义化

## 2.4 css--超链接

### 2.4.1 知识点

<!-- 设置页面中所有的超链接打开方式为新窗口打开 -->

  <!-- <base target="_blank"> -->



​    /* 下划线去掉 */

 text-decoration: none;

​    /* 添加下划线 */

 text-decoration: underline;

**设置超链接顺序**

   /* LV(LOVE)  HA(HATE) */

### 2.4.2 案例



![canvas](D:\周老师ftp上的资料\0408\作业\0414\附加超链接\canvas.png)

![超链接2](D:\周老师ftp上的资料\0408\作业\0414\附加超链接\超链接2.png)

![超链接4](C:\Users\Administrator\Desktop\课件图片\超链接4.png)

## 2.5 浮动

  /* 浮动float

​    块状元素水平排布时

​    如果父级元素盒子没有加高度，必须清浮动

​    */

**浮动float**

 float: left;    float: right;

**清除浮动**

 .clear {

​      clear: both;

​    }



​    .box::after{

​      content: '';

​      clear: both;

​      display: block;

​    }

![03](D:\周老师ftp上的资料\0408\作业\0413\03.jpg)

## 2.6 背景

### 2.6.1 背景知识点

 /* background-color:只能跟颜色 */

​      /* background-color: red; */

​      /* background-image:只能跟图片 */

​      /* background-image: url(img/03.jpg); */

​      /* 当盒子比较大，图比较小，背景图会平铺盒子 */

​      

​      /* 设置背景图是否平铺  no-repeat  repeat-x  repeat-y */

​      /* background-repeat: no-repeat; */

​      /* 背景图坐标 */

​      /* background-position: left bottom; */

​      /* background-size:auto 240px ; */

### 2.6.2 背景案例

![01](D:\周老师ftp上的资料\0408\作业\0415\背景\01.jpg)

![背景图2](C:\Users\Administrator\Desktop\课件图片\背景图2.png)

## 2.7 字体图标

### 2.7.1 unicode 引用

unicode是字体在网页端最原始的应用方式，特点是：

- 兼容性最好，支持ie6+，及所有现代浏览器。
- 支持按字体的方式去动态调整图标大小，颜色等等。
- 但是因为是字体，所以不支持多色。只能使用平台里单色的图标，就算项目里有多色图标也会自动去色。

> 注意：新版iconfont支持多色图标，这些多色图标在unicode模式下将不能使用，如果有需求建议使用symbol的引用方式

unicode使用步骤如下：

#### 第一步：拷贝项目下面生成的font-face

```js
@font-face {font-family: 'iconfont';
    src: url('iconfont.eot');
    src: url('iconfont.eot?#iefix') format('embedded-opentype'),
    url('iconfont.woff') format('woff'),
    url('iconfont.ttf') format('truetype'),
    url('iconfont.svg#iconfont') format('svg');
}
```



#### 第二步：定义使用iconfont的样式

```js
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
```

#### 第三步：挑选相应图标并获取字体编码，应用于页面

```js
<i class="iconfont">&#x33;</i>
```

### 2.7.2 font-class 引用

#### 第一步：拷贝项目下面生成的fontclass代码：

```js
//at.alicdn.com/t/font_8d5l8fzk5b87iudi.css
```

#### 第二步：挑选相应图标并获取类名，应用于页面：

```css
<i class="iconfont icon-xxx"></i>
```

### 2.7.3 symbol 引用

#### 第一步：拷贝项目下面生成的symbol代码：

```js
//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js
```

#### 第二步：加入通用css代码（引入一次就行）：

```js
<style type="text/css">
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>
```

#### 第三步：挑选相应图标并获取类名，应用于页面：

```js
<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-xxx"></use>
</svg>
```

### 2.7.4 案例

![字体图标2](D:\周老师ftp上的资料\0408\作业\0416\字体图标\字体图标2.png)

![字体图标1](C:\Users\Administrator\Desktop\课件图片\字体图标1.png)

## 2.8 表格

 /* 把表格之间的空隙去掉，表格的边框线合并 */

​      border-collapse: collapse;

![表格2](D:\周老师ftp上的资料\0408\作业\0419\表格\表格2.png)

![表格](C:\Users\Administrator\Desktop\课件图片\表格.png)

## 2.9 表单控件案例



![表单控件3](D:\周老师ftp上的资料\0408\作业\0419\附加表单控件\表单控件3.png)

![表单控件1](C:\Users\Administrator\Desktop\课件图片\表单控件1.png)

## 2.10 定位

### 2.10.1 定位知识点

 /* 固定定位 是以屏幕窗口来定位 加了定位margin:auto;不起作用*/

​      /* position: fixed;

​      right: 0;

​      bottom: 10px; */

​      /* 相对定位 以自身（未加定位之前的自身位置） margin:auto;起作用*/

​      /* position: relative;

​      left: 20px;

​      top: 20px; */

​      /* 绝对定位  以网页第一屏来定位*/

 /* 粘性定位  有固定定位的属性和相对定位的属性 */

​      position: sticky;

 /* 静态定位  相当于把定位取消 */

​      position:static;

### 2.10.2 定位案例

![02](D:\周老师ftp上的资料\0408\作业\0420\定位\02.png)

![01-2](C:\Users\Administrator\Desktop\课件图片\01-2.jpg)

# 第三章 项目案例

https://www.zhengye.citic/

# 第四章 html5+css3

## 4.1 html5 标签

#### HTMl5新增特性有哪些？（**）

(1) 新增了语义化标签

(2) 新增了音频（audio）视频（video）标签

(3) 新增了canvas和svg绘图

(4) 新增了地理定位（navigator.geolocation）

(5) 新增了拖拽API (drapable)

(6) 新增了多线程技术web worker 

(7) 新增了即时通讯web socket

## 4.2 css3

### 4.2.1 css3基础

 /* 阴影不占用盒子空间， box-shadow: x轴偏移量 y轴偏移量 羽化值 阴影颜色值 */

​      box-shadow: 10px 10px 5px red;

 /* background-origin: border-box; */

-moz-column-count: 3;

​      /* Firefox */

​      -webkit-column-count: 3;

​      /* Safari 和 Chrome */

​      column-count: 3;



​      -moz-column-gap: 40px;

​      /* Firefox */

​      -webkit-column-gap: 40px;

​      /* Safari 和 Chrome */

​      column-gap: 40px;



​      -moz-column-rule: 3px outset #ff0000;

​      /* Firefox */

​      -webkit-column-rule: 3px outset #ff0000;

​      /* Safari and Chrome */

​      column-rule: 3px outset #ff0000;

​    }

​    /* 盒子标准模型：

​    外观=width+border+padding  css中width和height始终是内容区域

​    

​    盒子怪异模型：外观=width  css中width和height始终是外观大小

​    */

 outline: 2px solid red;

​      outline-offset: 15px;

​      /* box-sizing: border-box; */

### 4.2.2 2D转换

 /* transform: scale(0); */

 transform: rotate(45deg);

transform: skew(45deg);

 /* transform: translateY(-100%); */

 transition: all 0.5s;

 transform-origin: right top;



### 4.2.3 3D转换

 transform-style: preserve-3d;

​      perspective: 600px;

### 4.2.4 媒体查询

 /* @media screen and (max-width:1200px) and (min-width:800px) {      

​    } */

### 4.2.5 选择符

/* .box>img{

​      width: 100px;

​      height: 100px;

​      border:2px solid red

​    } */



​    h3+p {

​      color: red;

​    }



​    img[alt] {

​      width: 100px;

​      height: 100px;

​      border: 2px solid red;

​    }



​    /* input[type="text"] {

​      border: 2px solid green;

​    } */

​    /* .box h3:only-child{

​      color: red;

​    } */



​    .but {

​      width: 40px;

​      height: 40px;

​      border: 4px solid orange;

​      margin: auto;

​      position: relative;

​    }



​    .but input[type="checkbox"] {

​      width: 40px;

​      height: 40px;

​      opacity: 0;

​      position: relative;

​      z-index: 2;

​    }



​    .but input[type="checkbox"]+span {

​      position: absolute;

​      left: 50%;

​      top: 50%;

​      transform: translate(-50%, -50%) rotate(15deg);

​      font-size: 30px;

​      color: orange;

​      opacity: 0;

​      z-index: 1;



​    }



​    .but input[type="checkbox"]:checked+span {

​      opacity: 1;

​    }

#### 4.2.5-1 案例

![按钮](C:\Users\Administrator\Desktop\课件图片\按钮.jpg)

### 4.2.6 伪对象选择符

 /* .box::before{

​      content: "456";

​    }

​    .box::after{

​      content: "789";

​    } */

### 4.2.7 Flex布局

#### 4.2.7 -1 知识点

display: flex;

​      display: -webkit-flex;

​      /* 默认值 flex-direction设置项目的排列方式*/

​      /* flex-direction: row; */

​      /* flex-direction: row-reverse; */

​      /* flex-direction: column; */

​      /* flex-direction: column-reverse; */



​      /* width: 500px; */

​      /* flex-wrap设置项目是否在一条线上，默认为nowrap */

​      /* 默认值，设置元素不换行 */

​      /* flex-wrap: nowrap; */

​      /* flex-wrap: wrap; */

​      /* flex-wrap: wrap-reverse; */



​      /* justify-content属性定义项目在主轴上的对齐方式，默认值为flex-start */

​      /* justify-content: flex-start; */

​      /* justify-content: flex-end; */

​      /* justify-content: space-between; */

​      /* justify-content: space-around; */



​      /* align-items属性定义项目在纵轴上的对齐方式，默认值为stretch，适用于项目在纵轴上高度不一样的情况 */

​      /* align-items: stretch; */

​      /* align-items: flex-start; */

​      /* align-items: flex-end; */

​      /* align-items: center; */

​      /* align-items: baseline; */





​      /* align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。(即需要设置容器的flex-wrap属性值为wrap)(为了让效更加明显，我设置了容器的高度) */

​      width: 500px;

​      height: 300px;

​      flex-wrap: wrap;

​      /* 默认值，拉伸 */

​      align-content: stretch;

​      /* align-content: flex-start; */

​      /* align-content: flex-end; */

​      /* align-content: center; */

​      /* align-content: space-between; */

​      /* align-content: space-around; */

#### 4.2.7 -2 案例

<img src="D:\ftp\作业\0530\生活首页.jpg" alt="生活首页" style="zoom: 33%;" />
