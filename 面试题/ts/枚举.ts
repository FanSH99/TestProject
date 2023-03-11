//Monday、Tuesday、Wednesday、Thursday、Friday、Saturday、Sunday

enum WeekChange {
    "日",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    'Sunday',
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
}
let date = new Date("2023-3-11 12:00:00")
let week = date.getDay();
// console.log(week); //getDay()获取星期几

/* 
枚举：enum 名称{
    
}
*/
console.log("今天星期几？英文格式:" + WeekChange[week + 7], "中文格式:星期" + WeekChange[week]);