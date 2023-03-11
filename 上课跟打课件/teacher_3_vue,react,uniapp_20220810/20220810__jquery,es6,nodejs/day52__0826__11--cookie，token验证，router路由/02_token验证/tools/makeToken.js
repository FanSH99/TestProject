/* 2022年8月26日09:51:46 */

let makeToken = () => {
    let str = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFHJKLZXCVBNM';
    let token = '';
    // 遍历20次每次生成一个字符
    for (let i = 0; i < 50; i++) {
        let num = Math.floor(Math.random() * str.length);
        // console.log(num);
        // 获取num下标的字符串
        let s = str[num];
        // console.log(s);
        token += s;
    }
    console.log(token);//of2zyEXe473nvUtA142e9H3xjrqLUvKO7eNZ3foWOgv61nLMOs
}

module.exports = makeToken;

makeToken();