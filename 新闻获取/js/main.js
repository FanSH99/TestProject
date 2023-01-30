$(function () {
    let sendAjax1 = (url, method) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                method: method,
                success: res => {
                    console.log("获取数据成功");
                    /*   console.log(res); */
                    resolve(res)
                },
                error: (err) => {
                    console.log("数据请求失败");
                    console.log(err);
                    reject(err)
                }
            })
        })
    }
    let getAjax1 = url => sendAjax1(url);
    console.log(getAjax1);
    let getMsg1 = async () => {
        let res1 = await getAjax1("http://106.12.150.223:8000/v1_0/channels", "get");
        getData1(res1);
    }
    getMsg1();
    function getData1(res) {
        console.log(res);
        let title_link = "";
        let item_link = "";
        let html_link = "";
        res.data.channels.map((item, index) => {
            if (index < 2) {
                let tbutton = `<button class="navbtn" >${item.name}</button>`;
                $(".hnew span").eq(index).html(item.name)
                title_link += tbutton;

            }
            else {
                let tbutton = `<button class="navbtn hide">${item.name}</button>`;
                title_link += tbutton;
            }

            let button = `<button class="navbtn">${item.name}</button>`;
            item_link += button;

        });
        $(".navlinks .title .bottom").append(title_link)
        $(".navlinks .items .bottom").append(item_link);
        $("button").eq(1).addClass("active");
        $(".navlinks .items .bottom button").on("click", function () {
            let idx = $(this).index();
            console.log($(".navlinks .title button").eq(idx));
            let txt = $(this).html();
            $(".navlinks .title button").eq(idx).removeClass("hide");
            let title = `<div class="li">
                <span>${txt}</span>
            </div>`
            let htmls = `<div class="news app">
                    ${txt}
                    </div>
                </div>`
            $(".header-left").append(title);
            $(".bignew").append(htmls)
            addhtml();
        })

        $(".header .homeicon").on("click", function () {
            $(".navlinks").removeClass("hide");
        })
        $(".navlinks .btn").on("click", function () {
            $(".navlinks").addClass("hide");
        })

    }
    $(".navlinks .title .button").on("click", function () {
        $(this).addClass("edit");
        $(this).val("完成");
    })


    $(".footer .item").on("click", function () {
        $(this).addClass("on").siblings().removeClass("on");
        let idx = $(this).index();
        $(".mainlist").eq(idx).removeClass("hide").siblings().addClass("hide")
        $(".mainlist").eq(idx).addClass("active").siblings().removeClass("active");
    })

    function addhtml() {
        let w = $(".header .li").width();
        console.log(w);
        $(".line").css("width", w);
        let count = $(".header .li").length;
        console.log(count);
        $(".bignew").css("width", count * 100 + "%");
        $(".bignew .news").css("width", 100 / count + "%");
        $(".header .li span").on("click", function () {
            $(".header .li").stop();
            $(this).parent().children().addClass("active").parent().siblings().children().removeClass("active");
        })

        $('.header .li').on('mouseenter', function () {
            let liW = $(this).width();
            let idx = $(this).index();
            let htmlW = $(".mainlist .news").width();
            console.log(htmlW);
            $('.line').animate({ left: liW * idx + 'px' }, 0);
            $('.bignew').animate({
                left: -htmlW * idx + 'px',
            }, 0);
        })
        $('.header .li').on('click', function () {
            let idx = $(this).index();
            $(".main").eq(idx).addClass("show").siblings().removeClass("show");
        })
    }
    addhtml();




})






