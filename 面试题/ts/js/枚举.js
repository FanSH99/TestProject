"use strict";
//Monday、Tuesday、Wednesday、Thursday、Friday、Saturday、Sunday
var WeekChange;
(function (WeekChange) {
    WeekChange[WeekChange["\u65E5"] = 0] = "\u65E5";
    WeekChange[WeekChange["\u4E00"] = 1] = "\u4E00";
    WeekChange[WeekChange["\u4E8C"] = 2] = "\u4E8C";
    WeekChange[WeekChange["\u4E09"] = 3] = "\u4E09";
    WeekChange[WeekChange["\u56DB"] = 4] = "\u56DB";
    WeekChange[WeekChange["\u4E94"] = 5] = "\u4E94";
    WeekChange[WeekChange["\u516D"] = 6] = "\u516D";
    WeekChange[WeekChange["Sunday"] = 7] = "Sunday";
    WeekChange[WeekChange["Monday"] = 8] = "Monday";
    WeekChange[WeekChange["Tuesday"] = 9] = "Tuesday";
    WeekChange[WeekChange["Wednesday"] = 10] = "Wednesday";
    WeekChange[WeekChange["Thursday"] = 11] = "Thursday";
    WeekChange[WeekChange["Friday"] = 12] = "Friday";
    WeekChange[WeekChange["Saturday"] = 13] = "Saturday";
})(WeekChange || (WeekChange = {}));
let date = new Date("2023-3-11 12:00:00");
let week = date.getDay();
// console.log(week); //getDay()获取星期几
/*
枚举：enum 名称{
    
}
*/
console.log("星期几？英文格式:" + WeekChange[week + 7], "中文格式:星期" + WeekChange[week]);
