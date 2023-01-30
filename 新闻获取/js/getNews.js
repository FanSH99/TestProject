
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
            let num = 0;
            for (let i = 0; i < 100; i++) {
                j = arrRandom[i]
                if (j != 47 && j != 59 && j != 60) {
                    num = j;
                    if (j < 10) {
                        j = "00" + j;
                    }
                    if (j < 100 && j >= 10) {
                        j = "0" + j;
                    }
                    console.log(j, num);
                    let pageurl = "http://106.12.150.223:8000/v1_0/articles/8" + j;
                    let imglink = "http://106.12.150.223:8000/resources/images/" + num + '.jpg';
                    // console.log(imglink);
                    let res3 = await getAjax(pageurl);
                    getData(res3, imglink, num);
                }
            }
        } catch {
            console.log("网址连接错误,");
        }
    }
    getMsg();

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

    let year = new Date().getFullYear();
    function getData(res, img, num) {
        let time = year - new Date(res.data.pubdate).getFullYear();
        if (num % 4 == 0) {
            let news = `
       <div class="col list">
                <div class="topnew">
                    <div class="title">
                        <h3>${res.data.title}</h3>
                    </div>
                    <div class="titleimg">
                        <img src="${img}" alt="">
                         <img src="${img}" alt="">
                          <img src="${img}" alt="">
                    </div>
                </div>
                <p><span>${res.data.aut_name}</span><span>${res.data.read_count}阅读</span><span>${time}年前</span>
                </p>
            </div>`;
            $(".mainlist.news").append(news);

        }
        else if (num % 7 == 0) {
            let news = `
       <div class="col list">
                <div class="topnew">
                    <div class="title">
                        <h3>${res.data.title}</h3>
                    </div>
                    <div class="titleimg">
                       
                    </div>
                </div>
                <p><span>${res.data.aut_name}</span><span>${res.data.read_count}阅读</span><span>${time}年前</span>
                </p>
            </div>`;
            $(".mainlist.news").append(news);

        }
        else {
            let news = `
       <div class="col content">
                <div class="topnew">
                    <div class="title">
                        <h3>${res.data.title}</h3>
                    </div>
                    <div class="titleimg">
                        <img src="${img}" alt="">
                    </div>
                </div>
                <p><span>${res.data.aut_name}</span><span>${res.data.read_count}阅读</span><span>${time}年前</span>
                </p>
            </div>`;
            $(".mainlist.news").append(news);
        }

    }

}) 