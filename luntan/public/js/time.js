function getTime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    month = month > 9 ? month : "0" + month;
    day = day > 9 ? day : "0" + day;
    hour = hour > 9 ? hour : "0" + hour;
    minute = minute > 9 ? minute : "0" + minute;
    second = second > 9 ? second : "0" + second;
    let time = year + "年" + month + "月" + day + "日" + " " + hour + ":" + minute + ":" + second;
    return time;
}
