/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');
        //

        
        

        console.log('Received Event: ' + id);
    }
};

/*
* 注意：本程序中的“随机”都是伪随机概念，以当前的天为种子。
 */
function random(dayseed, indexseed) {
    var n = dayseed % 11117;
    //var r;
    for (var i = 0; i < 100 + indexseed; i++) {
        n = n * n + 11117;
        n = n % 11117;   // 11117 是个质数
    }
    return n;
}
/*
* dayseed as same as random
* astro is the index in array astros[]
* type is the number code for 脑力指数和体力指数
 */
function randomAstro(dayseed,astro,type){ 
    var m = Math.pow(10,(astro % 4) + 5);
    var a = dayseed % m;
    while(a * 10 + 1 >= m - 1){
        a = (a / 20) * 10 +1;
        a = parseInt(a);
    }
    var n = dayseed;
    var b = type * (astro+3) * 2 + 1;
    for (var i = 0; i < 9 * b; i++){
        n = (a * n + b) % m;
    }
    return n;
}

var today = new Date();
var iday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
//iday = iday + 5;
var weeks = ["日","一","二","三","四","五","六"];
var directions = ["北方","东北方","东方","东南方","南方","西南方","西方","西北方"];

var brain = [
{
    name:"写单元测试", 
    good:"这将减少出错",
    bad:"会降低你的开发效率"
},

{
    name:"白天上线", 
    good:"所有工作都很顺利",
    bad:"这可能导致灾难性后果"
},

{
    name:"重构", 
    good:"代码质量得到提高",
    bad:"你很有可能会陷入泥潭"
},

{
    name:"晚上加班", 
    good:"晚上是你头脑最好用的时候",
    bad:"你会发现工作毫无进展"
},

{
    name:"写超过%l行的方法", 
    good:"你的代码组织的很好，长一点没关系",
    bad:"你的代码将混乱不堪，你自己都看不懂"
},

{
    name:"提交代码", 
    good:"遇到冲突的几率是最低的",
    bad:"你遇到的一大堆冲突会让你觉得自己是不是时间穿越了"
},

{
    name:"晚上上线", 
    good:"今晚你有各路神仙相助",
    bad:"你已经筋疲力尽了"
},

{
    name:"修复BUG", 
    good:"你今天对BUG的嗅觉大大提高",
    bad:"新产生的BUG将比修复的更多"
},

{
    name:"做性能优化",
    good:"系统效率会大幅提高",
    bad:"你将花跟多时间发现运行效率没有提高"
}
];


var luck = [

{
    name:"跳槽", 
    good:"该放手时就放手",
    bad:"鉴于当前的经济形势，你的下一份工作未必比现在强"
},

{
    name:"招人", 
    good:"你遇到千里马的可能性大大增加",
    bad:"你只会招到一两个混饭吃的外行"
},

{
    name:"面试", 
    good:"面试官今天心情很好",
    bad:"面试官不爽，会拿你出气"
},

{
    name:"提交辞职申请", 
    good:"公司找到了一个比你更能干更便宜的家伙，巴不得你赶快滚蛋",
    bad:"鉴于当前的经济形势，你的下一份工作未必比现在强"
},

{
    name:"申请加薪", 
    good:"老板今天心情很好",
    bad:"公司正在考虑裁员"
},

{
    name:"在妹子面前吹牛", 
    good:"改善你矮穷挫的形象",
    bad:"会被识破"
},

{
    name:"命名变量\"%v\"", 
    good:"这会给你带来好运",
    bad:"你的运气都会被带走"
},

{
    name:"代码复审", 
    good:"发现重要问题的几率大大增加",
    bad:"你什么问题都发现不了，白白浪费时间"
},

{
    name:"开会", 
    good:"写代码之余放松一下打个盹，有益健康",
    bad:"你会被扣屎盆子背黑锅"
},

{
    name:"打DOTA", 
    good:"你将有如神助",
    bad:"你会被虐的很惨"
},

{
    name:"设计评审", 
    good:"设计评审会议将变成头脑风暴",
    bad:"人人筋疲力尽，评审就这么过了"
},

{
    name:"需求评审", 
    good:"参与评审的人都很给力",
    bad:"你会遇到一群冬瓜"
},

{
    name:"上微博", 
    good:"今天发生的事不能错过",
    bad:"会被老板看到"
},

{
    name:"上AB站", 
    good:"还需要理由吗？",
    bad:"会被老板看到"
}
];

var specials = [
{
    date:20130207, 
    type:'good', 
    name:'关注王登朝', 
    description:''
},

{
    date:20130208, 
    type:'good', 
    name:'关注橘梨紗', 
    description:'前AKB48哦'
}
];

var tools = ["Eclipse", "OpenOffice", "vim", "Windows8", "Linux", "iMac", "iPad", "Android设备", "iOS设备", "rMBP", "27寸显示器", "双显示器"];

var varNames = ["jieguo", "huodong", "pay", "expire", "zhangdan", "every", "free", "i1", "a", "virtual", "ad", "spider", "mima", "pass", "ui"];

var drinks = ["水","红茶","绿茶","咖啡","奶茶","可乐","牛奶","豆奶","果汁","果味汽水","苏打水","运动饮料","酸奶","酒"];

var astros = ["魔羯座","水瓶座","双鱼座","牡羊座","金牛座","双子座","巨蟹座","狮子座","处女座","天秤座","天蝎座","射手座"];

var astrosDate = ["(12/22 - 1/19)","(1/20 - 2/18)","(2/19 - 3/20)","(3/21 - 4/20)","(4/21 - 5/20)","(5/21 - 6/21)","(6/22 - 7/22)","(7/23 - 8/22)","(8/23 - 9/22)","(9/23 - 10/22)","(10/23 - 11/21)","(11/22 - 12/21)"];

var myAstro;




function showAstros(){
    var output = '<ul id="astros">';
    for (var i = 0; i < astros.length; i++){
        output = output + '<li><a href="#"  data-astro="' + i +'">' + astros[i] + '</a><p>'+ astrosDate[i] +'</p></li>';
    }
    output = output + '</ul>';
    return output;
}



function getTodayString() {
    return "今天是" + today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 星期" + weeks[today.getDay()];
}
function getAstro(m,d){   //有用说法现在应该用"102123444543"
    return m-(d<"102223444433".charAt(m-1)- -19);   //输出0～12的数字，0表示摩羯，1表示水瓶，依此类推，...，11是射手，12是摩羯。
}

// 生成今日运势
function pickTodaysBrain(index) {
    var eventArr = pickRandom(index+2,brain);
    if(index>=5){
        for (var i = 0; i < 2; i++) {
            addToGood(eventArr[i]);
        }
    }else if(index>2){
        addToGood(eventArr[0]);
        addToBad(eventArr[1]);
    }else{
        for (var i = 0; i < 2; i++) {
            addToBad(eventArr[i]);
        }
    }
    var n = random(iday+6,47) % 4;
    switch (n){
        case 0:
            break;
        case 1:
            addToBad(eventArr[2]);
            break;
        case 2:
            addToGood(eventArr[3]);
            break;
        default:
            break;
    }
	
}
function pickTodaysLuck(index) {
    var eventArr = pickRandom(index+2,luck);
    if(index>=5){
        for (var i = 0; i < 2; i++) {
            addToGood(eventArr[i]);
        }
    }else if(index>2){
        addToGood(eventArr[0]);
        addToBad(eventArr[1]);
    }else{
        for (var i = 0; i < 2; i++) {
            addToBad(eventArr[i]);
        }
    }
    var n = random(iday+6,91) % 4;
    switch (n){
        case 0:
            break;
        case 1:
            addToBad(eventArr[2]);
            break;
        case 2:
            addToGood(eventArr[3]);
            break;
        default:
            break;
    }
	
}

//Astro index for today
function pickAstroIndex(astro){ //astro is a number refer to the output of getAstro()
    var result = [];
    result[0] = randomAstro(iday,astro,11) % 10;
    result[1] = randomAstro(iday,astro,4) % 10;
    if(result[0] > 5){
        result[2] = 5;
    }else{
        result[2]=result[0];
    }
    if(result[1] > 5){
        result[3] =5 ;
    }else{
        result[3]=result[1];
    }
    return result;
}
/*
// 添加预定义事件
function pickSpecials() {
    var specialSize = [0,0];
	
    for (var i = 0; i < specials.length; i++) {
        var special = specials[i];
		
        if (iday == special.date) {
            if (special.type == 'good') {
                specialSize[0]++;
                addToGood({
                    name: special.name, 
                    good: special.description
                });
            } else {
                specialSize[1]++;
                addToBad({
                    name: special.name, 
                    bad: special.description
                });
            }
        }
    }
	
    return specialSize;
}
*/
// 从 activities 中随机挑选 size 个
function pickRandom(size,type) {
    var result = [];
	
    for (var i = 0; i < type.length; i++) {
        result.push(parse(type[i]));
    }
	
    for (var j = 0; j < type.length - size; j++) {
        var index = random(iday, j) % result.length;
        result.splice(index, 1);
    }
	
    return result;
}

// 解析占位符并替换成随机内容
function parse(event) {
    var result = {
        name: event.name, 
        good: event.good, 
        bad: event.bad
    };  // clone
	
    if (result.name.indexOf('%v') != -1) {
        result.name = result.name.replace('%v', varNames[random(iday, 12) % varNames.length]);
    }
	
    if (result.name.indexOf('%t') != -1) {
        result.name = result.name.replace('%t', tools[random(iday, 11) % tools.length]);
    }
	
    if (result.name.indexOf('%l') != -1) {
        result.name = result.name.replace('%l', (random(iday, 12) % 247 + 30).toString());
    }
	
    return result;
}

// 添加到“宜”
function addToGood(event) {
    $('.good').append('<li><div class="name">今天适合' + event.name + '，' + event.good + '</div></li>');
}

// 添加到“不宜”
function addToBad(event) {
    $('.bad').append('<li><div class="name">今天不适合' + event.name + '，' + event.bad + '</div></li>');
}

$(function(){
    $('.date').html(getTodayString());
    $('#astros-list').append(showAstros()); 
    $('button').click(function(){
        $('#astros-list').show();
        $(this).hide();
    });
    $('ul#astros li a').click( function(){
        clearContent();
        $('#astros-list').hide();
        myAstro = $(this).data('astro');
        var astroIndex = pickAstroIndex(myAstro);
        $('.astro').html(astros[myAstro] + '今日脑力指数：' + astroIndex[2] + '/5 今日幸运指数：' + astroIndex[3] + '/5');
        createAstroLuck();
        $('button').show();
        window.localStorage.setItem("userAstro", myAstro);
    });
    if (!window.localStorage.getItem("userAstro")){
        $('button').hide();
        $('#astros-list').show();
    }else{
        $('#astros-list').hide();
        myAstro = parseInt(window.localStorage.getItem("userAstro"));
        var astroIndex = pickAstroIndex(myAstro);
        $('button').show();
        $('.astro').html(astros[myAstro] + '今日脑力指数：' + astroIndex[2] + '/5 今日幸运指数：' + astroIndex[3] + '/5');
        createAstroLuck();
    }
    
    
    $('.tool_value').html(tools[random(iday, 2) % tools.length]);
    $('.drink_value').html(drinks[random(iday, 5) % drinks.length]);
//pickTodaysLuck();
    
});

function clearContent(){
    $('.good').empty();
    $('.bad').empty();
    $('.best').empty();
    $('.worst').empty();
}

function createAstroLuck(){
    var astroIndex = pickAstroIndex(myAstro);
    var a = astroIndex[0];
    var b = astroIndex[1];
    if (a+b>=10){
        if(a+b>=18 & a>8 & b>8){
            $('.best').html('牛逼的人生不需要解释，今天你所向无敌。唯一要注意的是对待与你一样强势的同事，选择与他们合作会开创你一生的霸业。');
        }
        else if(a+b>=12 & a>5 & b>5){
            $('.best').html('今天你的状态极佳，任何技术问题都不在话下，但是请留意身边的小人，虽然今天的你不会被抓到任何把柄，但是太招摇会引来妒忌。');
        }
        else if(a+b>=10 & a>4 & b>4){
            $('.best').html('对你来说今天会是精彩的一天！工作对你来说是轻松加愉快，是时候考虑一下关心一下你的TA了,今天表白或者求婚都会有好运哦！');
        }
        else{ 
            pickTodaysBrain(astroIndex[2]); 
            pickTodaysLuck(astroIndex[3]);
        }
    }else if( a+b>2 ){
        pickTodaysBrain(astroIndex[2]); 
        pickTodaysLuck(astroIndex[3]);
    }else{
        if(a+b==2){
            $('.worst').html('今天不要勉强自己，累了就赶快去休息。');
        }
        else if(a+b==1){
            $('.worst').html('你今天不在工作状态，可以的话少写代码吧！');
        }
        else if(a+b==0){
            $('.worst').html('嗯！如果你信我的话今天最好不要出门，当然我说的也不一定准...');
        }
    }
}
/*
 *a为astroIndex[0]脑力指数实际值，b为astroIndex[1]幸运指数实际值
 *--------a+b>=10----------
 *case a + b >=18 & |a - b| <=1 牛逼的人生不需要解释，今天你所向无敌。唯一要注意的是对待与你一样强势的同事，选择与他们合作会开创你一生的霸业。
 *case 18>a+b>=12 & a>5 & b>5 今天你的状态极佳，任何技术问题都不在话下，但是请留意身边的小人，虽然今天的你不会被抓到任何把柄，但是太招摇会引来妒忌。
 *case 12>a+b>=10 & a>4 & b>4 对你来说今天会是精彩的一天！工作对你来说是轻松加愉快，是时候考虑一下关心一下你的TA了,今天表白或者求婚都会有好运哦！
 *case other 使用index[2]和[3]查询good 和 bad
 *--------end a+b>=10------
 *
 *-----------2<a+b<10-----------
 *“今天适合 + name+，+good” “今天不适合+name+，+bad”
 *使用index查询good 和 bad
 *数值>=5取2个good，3~4取1个坏1个好，0~2取2坏
 *所有的再随机取0或1个，good or bad
 *-------end 2<a+b<10-----------
 *
 *----------a+b<=2------------
 *case a+b=0 嗯！如果你信我的话今天最好不要出门，当然我说的也不一定准...
 *case a+b=1 你今天不在工作状态，可以的话少写代码吧！
 *case a+b=2 今天不要勉强自己，累了就赶快去休息。
 *
 *
 **/

