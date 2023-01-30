
$(function () {
    let sendAjax = (url) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                // method:"method",
                success: res => {
                    // console.log(url + "\t获取数据成功");
                    resolve(res);
                },
                error: (err) => {
                    console.log("数据请求失败");
                    console.log(err);
                    reject(err);
                }
            })
        })
    }
    let getAjax = url => sendAjax(url);
    let getMsg = async () => {
        try {
            let arrRandom = getRandom();
            for (let i = 0; i < 100; i++) {
                j = arrRandom[i]
                if (j != 47 && j != 59 && j != 60) {

                    if (j < 10) {
                        j = "00" + j;
                    }
                    if (j < 100 && j >= 10) {
                        j = "0" + j;
                    }
                    console.log(j);
                    let pageurl = "http://106.12.150.223:8000/v1_0/articles/8" + j;
                    let res3 = await getAjax(pageurl);
                    getData(res3);
                }
            }
        } catch {
            console.log("网址连接错误,请查看代码是否有错，注意不要漏写或多写变量");
        }
    }
    getMsg();


    function getData(res) {
        let arr = getImgRandom();
        console.log(arr);
        let classname, imglist;
        if (arr.length == 0) {
            imglist = `<img src="" alt="">`;
            classname = "list";
        }
        if (arr.length == 1) {

            imglist = `<img src="http://106.12.150.223:8000/resources/images/${arr[0]}.jpg" alt="">`;
            classname = "content";
        }
        if (arr.length == 3) {
            imglist = `<img src="http://106.12.150.223:8000/resources/images/${arr[0]}.jpg" alt=""><img src ="http://106.12.150.223:8000/resources/images/${arr[1]}.jpg" alt=""><img src="http://106.12.150.223:8000/resources/images/${arr[2]}.jpg" alt="">`;
            classname = "list";
        }
        console.log(res, classname, imglist);
        getNews(res, classname, imglist);
    }
    function getNews(res, classname, imglist) {
        console.log(res, classname, imglist);
        let year = new Date().getFullYear();
        let time = year - new Date(res.data.pubdate).getFullYear();
        let news = `
       <div class="col ${classname}">
                <div class="topnew">
                    <div class="title"><h3>${res.data.title}</h3></div>
                    <div class="titleimg">${imglist}</div>
                </div>
                <p><span>${res.data.aut_name}</span><span>${res.data.read_count}阅读</span><span>${time}年前</span></p>
            </div>`;
        $(".mainlist .news").append(news);
    }
    function getRandom() {
        let arrRandom = [];
        for (let i = 0; i < 100; i++) {
            let randouNum = Math.floor(Math.random() * 100)
            let isHas = false;
            for (let j = 0; j < arrRandom.length; j++) {
                if (arrRandom[j] == randouNum) {
                    i--;
                    isHas = true;
                    break;
                }
            }
            if (isHas == false) {
                arrRandom[arrRandom.length] = randouNum
            }
        }
        console.log(arrRandom);
        return arrRandom;
    }
    function getImgRandom() {
        let random = Math.floor(Math.random() * 4);
        let arr = [];
        if (random == 0) {
            arr = [];
        }
        if (random == 1 || random == 2) {
            let num2 = Math.floor(Math.random() * 100);
            arr.push(num2);
        }
        if (random == 3) {
            for (let i = 0; i < 3; i++) {
                let num3 = Math.floor(Math.random() * 100);
                let isHas = false;
                for (let j = 0; j < arr.length; j++) {
                    if (arr[j] == num3) {
                        i--;
                        isHas = true;
                        break;
                    }
                }
                if (isHas == false) {
                    arr[arr.length] = num3
                }
            }
        }
        console.log(random, arr, arr.length);
        return arr;
    }
}) 