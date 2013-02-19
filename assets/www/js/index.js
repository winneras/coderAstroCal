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
    var n = a;
    var b = type * astro * 2 + 1;
    for (var i = 0; i < 9 * b; i++){
        n = (a * n + b) % m;
    }
    return n;
}

var today = new Date();
var iday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

var weeks = ["日","一","二","三","四","五","六"];
var directions = ["北方","东北方","东方","东南方","南方","西南方","西方","西北方"];
var activities = [
{
    name:"写单元测试", 
    good:"写单元测试将减少出错",
    bad:"写单元测试会降低你的开发效率"
},

{
    name:"洗澡", 
    good:"你几天没洗澡了？",
    bad:"会把设计方面的灵感洗掉"
},

{
    name:"锻炼一下身体", 
    good:"",
    bad:"能量没消耗多少，吃得却更多"
},

{
    name:"抽烟", 
    good:"抽烟有利于提神，增加思维敏捷",
    bad:"除非你活够了，死得早点没关系"
},

{
    name:"白天上线", 
    good:"今天白天上线是安全的",
    bad:"可能导致灾难性后果"
},

{
    name:"重构", 
    good:"代码质量得到提高",
    bad:"你很有可能会陷入泥潭"
},

{
    name:"使用%t", 
    good:"你看起来更有品位",
    bad:"别人会觉得你在装逼"
},

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
    name:"晚上加班", 
    good:"晚上是程序员精神最好的时候",
    bad:""
},

{
    name:"在妹子面前吹牛", 
    good:"改善你矮穷挫的形象",
    bad:"会被识破"
},

{
    name:"撸管", 
    good:"避免缓冲区溢出",
    bad:"小撸怡情，大撸伤身，强撸灰飞烟灭"
},

{
    name:"浏览成人网站", 
    good:"重拾对生活的信心",
    bad:"你会心神不宁"
},

{
    name:"命名变量\"%v\"", 
    good:"",
    bad:""
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
    name:"晚上上线", 
    good:"晚上是程序员精神最好的时候",
    bad:"你白天已经筋疲力尽了"
},

{
    name:"修复BUG", 
    good:"你今天对BUG的嗅觉大大提高",
    bad:"新产生的BUG将比修复的更多"
},

{
    name:"设计评审", 
    good:"设计评审会议将变成头脑风暴",
    bad:"人人筋疲力尽，评审就这么过了"
},

{
    name:"需求评审", 
    good:"",
    bad:""
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

var tools = ["Eclipse写程序", "MSOffice写文档", "记事本写程序", "Windows8", "Linux", "MacOS", "IE", "Android设备", "iOS设备"];

var varNames = ["jieguo", "huodong", "pay", "expire", "zhangdan", "every", "free", "i1", "a", "virtual", "ad", "spider", "mima", "pass", "ui"];

var drinks = ["水","红茶","绿茶","咖啡","奶茶","可乐","牛奶","豆奶","果汁","果味汽水","苏打水","运动饮料","酸奶","酒"];

var astros = ["魔羯座","水瓶座","双鱼座","牡羊座","金牛座","双子座","巨蟹座","狮子座","处女座","天秤座","天蝎座","射手座"];

var myAstro = 9;

var astroIndex = pickAstroIndex(myAstro);

/*var db = window.openDatabase("userAstro", "1.0", "User Astro", 512);

function initDB(tx) {
     tx.executeSql('CREATE TABLE IF NOT EXISTS USER_ASTRO (id unique, data)');
     tx.executeSql('INSERT INTO USER_ASTRO (id, data) VALUES (1, 7)');
}
function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}

function successCB() {
    alert("success!");
}*/

function getTodayString() {
    return "今天是" + today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 星期" + weeks[today.getDay()];
}
function getAstro(m,d){   //有用说法现在应该用"102123444543"
    return m-(d<"102223444433".charAt(m-1)- -19);   //输出0～12的数字，0表示摩羯，1表示水瓶，依此类推，...，11是射手，12是摩羯。
}

// 生成今日运势
function pickTodaysLuck() {
    var numGood = random(iday, 98) % 3 + 2;
    var numBad = random(iday, 87) % 3 + 2;
    var eventArr = pickRandom(numGood + numBad);
	
    var specialSize = pickSpecials();
	
    for (var i = 0; i < numGood; i++) {
        addToGood(eventArr[i]);
    }
	
    for (var i = 0; i < numBad; i++) {
        addToBad(eventArr[numGood + i]);
    }
	
	
}

//Astro index for today
function pickAstroIndex(astro){ //astro is a number refer to the output of getAstro()
    var result = [];
    result[0] = randomAstro(iday,astro,11) % 10;
    result[1] = randomAstro(iday,astro,4) % 10;
    if(result[0] > 5){ result[0] = 5; }
    if(result[1] > 5){ result[1] =5 ; }
    return result;
}

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

// 从 activities 中随机挑选 size 个
function pickRandom(size) {
    var result = [];
	
    for (var i = 0; i < activities.length; i++) {
        result.push(parse(activities[i]));
    }
	
    for (var j = 0; j < activities.length - size; j++) {
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
    $('.good .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.good + '</div></li>');
}

// 添加到“不宜”
function addToBad(event) {
    $('.bad .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.bad + '</div></li>');
}

$(function(){
    $('.date').html(getTodayString());
    //db.transaction(initDB, errorCB, successCB);
    $('.astro').html(astros[myAstro] + '今日脑力指数：' + astroIndex[0] + '/5 今日体力指数：' + astroIndex[1] + '/5');
    $('.direction_value').html(directions[random(iday, 2) % directions.length]);
    $('.drink_value').html(drinks[random(iday, 5) % drinks.length]);
    pickTodaysLuck();
});