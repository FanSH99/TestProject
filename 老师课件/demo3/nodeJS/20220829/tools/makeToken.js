let makeToken = ()=>{
    let str = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let token = ''
    for(let i=0;i<20;i++){
        let index = Math.floor(Math.random()*str.length);
        let t = str[index]
        token+=t;
    }
    return token
}

module.exports = makeToken;