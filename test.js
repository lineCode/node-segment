/**
 * 测试
 */
 
var Segment = require('./index').Segment;
var POSTAG = require('./index').POSTAG; 
var fs = require('fs');

var NUM = 1;
var text = '\
随着智能化住宅小区的普及和宽带接入技术的发展，各种基于宽带技术的应用服务也日益被人们所熟悉。\
';
//text = '是的.大家以后说话都要注意一点..他喜欢咬人...';
//text = '敲诈他就等于敲诈我自己';
//text = '他就等于';
//text = '被人们所熟悉。';
//text = '李小明的智能化住宅AK';
//text = '但91%的企业表示其技术工人的技术能力不能完全胜任企业引进高新技术或进行技术改造的任务';
//text = '这项调查对设计基于分词技术的新一代中文搜索引擎将是一个颇具价值的基础性工作。作者简介孙茂松清华大学计算机科学与技术系副主任，研究领域为中文信息处理和人工智能。主持多项国家重点基础研究发展规划项目二级课题、国家自然科学基金项目';
//text = '国家自然科学基金项目';
//text = '司马光在喝娃哈哈AD钙奶，上官小明在唱歌。刘德华带着张惠妹在周星驰家喝水，突然刮起了谢霆风，从水中出了一条吴奇龙，吴奇龙手持郑伊剑，骑着黄家驹，抢走了张惠妹；刘德华手持周华剑，踏着温兆轮，翻过了赵本山，穿过了关芝林，跃过了潘长江，抢回了张惠妹，回到了郭富城，还在城中挂起了一面任贤旗!';
//text = '周星驰说：“老狗要淡定”';
//text = '小明和小白坐在石头上'
//text = '在公司呆了一年多，几乎每天都是12点钟之后回去，有时还不回去，上次体检之后明显感觉自己身体不如以前，很容易就感觉疲惫。';
//text = '从形式上看，词是稳定的字的组合，因此在上下文中，相邻的字同时出现的次数越多，就越有可能构成一个词。因此字与字相邻共现的频率或概率能够较好的反映成词的可信度。可以对语料中相邻共现的各个字的组合的频度进行统计，计算它们的互现信息。定义两个字的互现信息，计算两个汉字X、Y的相邻共现概率。互现信息体现了汉字之间结合关系的紧密程度。当紧密程度高于某一个阈值时，便可认为此字组可能构成了一个词。这种方法只需对语料中的字组频度进行统计，不需要切分词典，因而又叫做无词典分词法或统计取词方法。但这种方法也有一定的局限性，会经常抽出一些共现频度高、但并不是词的常用字组，例如“这一”、“之一”、“有的”、“我的”、“许多的”等，并且对常用词的识别精度差，时空开销大。实际应用的统计分词系统都要使用一部基本的分词词典（常用词词典）进行串匹配分词，同时使用统计方法识别一些新的词，即将串频统计和串匹配结合起来，既发挥匹配分词切分速度快、效率高的特点，又利用了无词典分词结合上下文识别生词、自动消除歧义的优点。 ';
//text = '明星们的名字顺口溜';
//text = '回到家后，马成俊买了一本全国地图册，利用闲暇时间开始了解、整理全国所有地级市的名称。而这一切，对于只有小学五年级文化的他来说，难度可想而知。看到很多不认识的字，马成俊不仅虚心向周围的人请教，还借来新华字典查阅。两个月后，他终于将全国347个地级市的名称整理了出来，然后又投入了更艰巨的工作——编顺口溜。';
//text = '长春市长春药店';
//text = 'AK47-ISO-9001吖体系认证';
//text = '工信处女干事每月经过下属科室都要亲口交代24口交换机等技术性器件的安装工作。';
//text = '每月经过';
//text = '24口交换机';
//text = '这是一个伸手不见五指的黑夜。我叫孙悟空，我爱北京，我爱Python和C++。';
//text = '我不喜欢日本和服。';
//text = '雷猴回归人间。';
//text = '工信处女干事每月经过下属科室都要亲口交代24口交换机等技术性器件的安装工作';
//text = '我需要廉租房';
//text = '永和服装饰品有限公司';
//text = '我爱北京天安门';
//text = 'abc';
//text = '隐马尔可夫';
//text = '雷猴是个好网站';
//text = '“Microsoft”一词由“MICROcomputer（微型计算机）”和“SOFTware（软件）”两部分组成';
//text = '草泥马和欺实马是今年的流行词汇';
//text = '伊藤洋华堂总府店';
//text = '中国科学院计算技术研究所';
//text = '罗密欧与朱丽叶';
//text = '我有一台Nokia-N900';
text = fs.readFileSync('./old/text1.txt', 'utf8');
//text = '景甜不会node.js';
//text = '如果气温降到10度，我就不洗澡了。';
//text = '关电脑，关计算机，关机';
//text = '老雷对老狗说：您要淡定';
//text = '你是李家的人？';
//text = '看你要用到什么场景撒。';
//text = '阿西啊，好吧，基本懂了';
//text = '我觉得如果没有涉及到IO操作，没必要全按回调方式来写';
//text = '一加一等于２ａｂｃＡＢＣ砼';
//text = '小王和小白坐在石头上。';
//text = '哈哈http://segment.cnodejs.net/欢迎测试http://www.baidu.com/';
//text = 'http://www.hylanda.com/post.php?mid=4&aid=15';
//text = '谢娜喜欢上http://baidu.com搜索东西';
//text = '这项调查对设计基于分词技术的新一代中文搜索引擎将是一个颇具价值的基础性工作。作者简介孙茂松清华大学计算机科学与技术系副主任，研究领域为中文信息处理和人工智能。主持多项国家重点基础研究发展规划项目二级课题、国家自然科学基金项目';
//text = '交谈中请勿轻信汇款、中奖信息、陌生电话，勿使用外挂软件。';
//text = '老雷最近一直研究这个做啥呢';
//text = '这是一个基 于Node.js的中文分词模块。\n\n\n\n欢迎拍砖';
//text = '张三说的确实在理。';
//text = '李三买了一张三角桌子。';
//text = '王五和张三丰、李强是谁？';
//text = '我叫雷宗民，宗民，雷哥，民哥';
//text = '一次性交一百元';
//text = '欲加之罪何患无辞';
//text = '今年是2011年，现在是2011年12月30日';
//text = '2011年度1989年景甜出生于西安市两百二百12月老师讲课';
//text = '2011年度';
//text = '一百步伐木法';
//text = '二百厘米，五万万人民';
text = '我的邮箱地址是leizongmin@gmail.com，mail-me@mail.ucdok.com';
//text = 'PI=3.141592654.哈哈';
//text = '我的QQ刚刚被挤下去了';
//text = '那些词恐怕谁也不知道，这个算不算很高深？到底有没有？';
//text = '@健康是唯一：【冬天喝茶有忌讳】茶水虽好，但在冬季，由于温度和湿度的大幅度变化，因而还是有一些人群是不适宜喝茶的。1：孕妇不宜喝茶2：经期不要喝茶3：老人冬季少喝茶4：喝茶就喝红茶+枣5：不要空腹饮茶6：不要喝烫茶7：不要喝浓茶~~（珍爱健康，请关注@健康是唯一）';
//text = '这是谁家小孩';
text = '你知道不知道';

var s = new Date().getTime();
var segment = new Segment();
// 使用默认的识别模块及字典
segment.useDefault();
var e = new Date().getTime();
console.log('init segment spent ' + ((e - s) / NUM) + 'ms');


var s = new Date().getTime();
for (var i = 0; i < NUM; i++)
////////////////////////////////////////////////////////////

	var ret = segment.doSegment(text);

////////////////////////////////////////////////////////////
var e = new Date().getTime();
var line = '';
for (var i in ret) {
	line += ret[i].w + '/';
	ret[i].ps = POSTAG.chsName(ret[i].p);
}
console.log(ret);
console.log(line);
console.log('spent ' + ((e - s) / NUM) + 'ms');
