let makeToken = ()=>{
    let str = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let token  ="";
    for(let i=0;i<50;i++){
        let num = Math.floor(Math.random()*str.length);
        let s = str[num]
        token+=s
    }
    return token
}

module.exports = makeToken;