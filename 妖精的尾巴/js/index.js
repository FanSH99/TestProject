window.onload = function () {

    var right_nav = document.querySelector('.right_nav');
    function change() {
        var h = window.getComputedStyle(right_nav, null).height;
        h = parseFloat(h);
        var wh = window.innerHeight;
        var scale = wh / h;
        right_nav.style.zoom = scale;
    }
    window.onresize = function () {
        change();
    }

    function getNavRight() {
        var btn = document.querySelector('.right_nav .btn');
        var flag = 1;
        var toTop = document.querySelector('.right_nav .toTop');
        var pic = document.querySelector('.right_pic');
        var news = document.querySelector('.news');
        var original = document.querySelector('.original');
        var assist = document.querySelector('.assist');
        var explore = document.querySelector('.explore');
        var gamebanner = document.querySelector('.gamebanner');
        var media = document.querySelector('.media');
        btn.onclick = function () {
            if (flag) {
                btn.classList.replace('close', 'open');
                right_nav.style.right = '-220px';
                flag = 0;
            } else {
                btn.classList.replace('open', 'close')
                right_nav.style.right = '0';
                flag = 1;
            }
        }
        var pagelist = [news, original, assist, explore, gamebanner, media];
        var navRlis = document.querySelectorAll('.right_nav>ul>li');
        for (var i = 0; i < navRlis.length; i++) {
            navRlis[i].setAttribute('index', i);
            navRlis[i].onclick = function () {
                var index = this.getAttribute('index');
                for (var j = 0; j < navRlis.length; j++) {
                    navRlis[j].classList.remove('on');
                }
                this.classList.add('on');
                /* if (flag) {
                    flag = 0;
                    getTop(document, pagelist[index].offsetTop, function () {
                        flag = 1;
                    });
                } */
                getTop(window, pagelist[index].offsetTop);

            }
        }
        /* if (flag) {
            flag = 0;
            toTop.onclick = function () {
                getTop(document, 0, function () {
                    flag = 1;
                });
            }
        } */

        toTop.onclick = function () {
            getTop(window, 0);
        }
        document.onscroll = function () {
            var pageY = window.pageYOffset;
            var newT = pic.offsetTop;
            if (pageY >= newT) {
                pic.classList.add('hide');
                right_nav.classList.remove('hide');
            } else {
                pic.classList.remove('hide');
                right_nav.classList.add('hide');
            }
        }
    }
    getNavRight();
    function getTop(obj, end, callback) {

        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var header = obj.pageYOffset;
            var speed = (end - header) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (header == end || header > end || header < 0) {
                clearInterval(obj.timer);
                callback && callback();
            }
            var newT = speed + header;
            window.scrollTo(0, newT);
        }, 15)
    }

    function getTips() {
        var tips = document.querySelector('.banner>.tips');
        var bigTips = document.querySelector('.bigTips');
        /* var tipTitle = document.querySelector('.bigTips .showTips h2'); */
        var btn = document.querySelector('.bigTips .showTips h2 .btn');
        var tipMasks = document.querySelector('.tipMasks');
        tips.onmouseover = function () {
            bigTips.classList.add('on');
            tipMasks.classList.add('on');
        }
        btn.onclick = function () {
            bigTips.classList.remove('on');
            tipMasks.classList.remove('on');
        }


    }
    getTips()

    function getNews() {
        var lis = document.querySelectorAll('.news>.news-left>.news-ltop>ul>li');
        var uls = document.querySelectorAll('.news-lbottom>ul');
        for (var i = 0; i < lis.length; i++) {
            lis[i].setAttribute('index', i);
            lis[i].onmouseover = function () {
                for (var i = 0; i < lis.length; i++) {
                    lis[i].className = '';
                    uls[i].className = '';
                }
                this.className = 'on';
                var index = this.getAttribute('index');
                uls[index].className = 'dis';


            }
        }
    }
    getNews();
    function getAssist() {
        var lis = document.querySelectorAll('.assist>.center>.as_left >ul>li');
        var roleImg = document.querySelector('.assist .as_role img');
        var roleName = document.querySelector('.assist .as_role h2');
        var roleTig = document.querySelector('.assist .as_role p')
        for (var i = 0; i < lis.length; i++) {
            lis[i].setAttribute('index', i);
            lis[i].onclick = function () {
                for (var i = 0; i < lis.length; i++) {
                    lis[i].className = '';
                }
                this.className = 'on';
                var index = this.getAttribute('index');
                for (var j = 0; j < arrRole.length; j++) {
                    if (index == j) {
                        roleImg.src = arrRole[j]['roleImg'];
                        roleName.innerHTML = arrRole[j]['roleName'];
                        roleTig.innerHTML = arrRole[j]['roleTig'];

                    }
                }
            }
        }
    }
    getAssist();

    function getOriginal() {
        var lis = document.querySelectorAll('.original .ori-bottom>ul>li');
        var orimain = document.querySelector('.original  .ori-main')
        var orilimg = document.querySelectorAll('.original  .ori-limg');
        var roleMofa = document.querySelector('.original .ori-lmissage .roleMofa');
        var rolePosition = document.querySelector('.original .ori-lmissage .rolePossition');
        var roleMessage = document.querySelector('.original .ori-lmissage .roleMessage');
        var roleBg = document.querySelector('.original .ori-lmissage .roleBg');
        var roleImg = document.querySelector('.original .ori-role .roleImg');
        var skillImgs = document.querySelectorAll('.original .ori-rmain .ori-rtips img');
        var skills = document.querySelectorAll('.original .ori-rmain .ori-rtips span');
        var skillbriefs = document.querySelectorAll('.original .ori-rmain .ori-bright li');

        for (var m = 0; m < skillImgs.length; m++) {
            skillImgs[m].setAttribute('data-skill', m);
            skillImgs[m].onmouseenter = function () {
                var dataskill = this.getAttribute('data-skill');
                skillbriefs[dataskill].classList.add('on');
            }
            skillImgs[m].onmouseleave = function () {
                var dataskill = this.getAttribute('data-skill');
                skillbriefs[dataskill].classList.remove('on');
            }
        }
        for (var i = 0; i < lis.length; i++) {
            lis[i].setAttribute('index', i);
            lis[i].onclick = function () {
                var index = +this.getAttribute('index');
                for (var j = 0; j < lis.length; j++) {
                    lis[j].classList.remove('on');
                }
                this.classList.add('on');
                var index1;
                if (index >= lis.length - 1) {
                    index1 = 0;
                }
                else {
                    index1 = index + 1;;
                }
                // console.log(index, index1);
                // console.log(arrSkill[index1]['datename']);
                orilimg[0].setAttribute('date-name', arrSkill[index]['datename']);
                orilimg[1].setAttribute('date-name', arrSkill[index1]['datename']);
                orimain.setAttribute('date-name', arrSkill[index]['datename']);
                orimain.setAttribute('date-index', arrSkill[index]['dateindex']);
                roleMofa.innerHTML = arrSkill[index]['roleMofa'];
                rolePosition.innerHTML = arrSkill[index]['rolePosition'];
                roleMessage.innerHTML = arrSkill[index]['roleMessage'];
                roleBg.innerHTML = arrSkill[index]['roleBg'];
                /*  console.log(arrSkill[index]['roleImgSrc']); */
                roleImg.src = arrSkill[index]['roleImgSrc'];
                skillImgs[0].src = arrSkill[index]['skillImg1'];
                skillImgs[1].src = arrSkill[index]['skillImg2'];
                skillImgs[2].src = arrSkill[index]['skillImg3'];
                skillImgs[3].src = arrSkill[index]['skillImg4'];
                skillImgs[4].src = arrSkill[index]['skillImg5'];
                skillImgs[5].src = arrSkill[index]['skillImg6'];
                skills[0].innerHTML = arrSkill[index]['skill1'];
                skills[1].innerHTML = arrSkill[index]['skill2'];
                skills[2].innerHTML = arrSkill[index]['skill3'];
                skills[3].innerHTML = arrSkill[index]['skill4'];
                skills[4].innerHTML = arrSkill[index]['skill5'];
                skills[5].innerHTML = arrSkill[index]['skill6'];
                skillbriefs[0].innerHTML = arrSkill[index]['skillbrief1'];
                skillbriefs[1].innerHTML = arrSkill[index]['skillbrief2'];
                skillbriefs[2].innerHTML = arrSkill[index]['skillbrief3'];
                skillbriefs[3].innerHTML = arrSkill[index]['skillbrief4'];
                skillbriefs[4].innerHTML = arrSkill[index]['skillbrief5'];
                skillbriefs[5].innerHTML = arrSkill[index]['skillbrief6'];
            }
        }
    }
    getOriginal();

    function getExplore() {
        var lis = document.querySelectorAll('.explore>.center>ul>li');
        for (var i = 0; i < lis.length; i++) {
            lis[i].onclick = function () {
                for (var i = 0; i < lis.length; i++) {
                    lis[i].className = 'dis';
                }
                this.className = 'on';
            }

        }
    }
    getExplore();
    function getSwiper() {
        var swiper_wraper = document.querySelector('.gamebanner .swiper .swiper-ul');
        var slide = document.querySelectorAll('.gamebanner .swiper .slide');
        var swiperNav = document.querySelectorAll('.gamebanner .circle ul li');
        var count = 0;
        for (var i = 0; i < slide.length; i++) {
            slide[i].setAttribute('index', i)
        }
        var timer = setInterval(function () {
            /*   clearInterval(timer); */
            if (count >= 4) {
                count = 0;
            }
            for (var i = 0; i < slide.length; i++) {
                var index = slide[i].getAttribute('index');
                slide[i].classList.remove('on');
                swiperNav[i].classList.remove('on');
                if (index == count) {
                    slide[index].classList.add('on');
                    swiperNav[index].classList.add('on');
                }
            }
            var translate = 990 * count;
            swiper_wraper.style.transform = 'translateX(-' + translate + 'px';
            count++;
        }, 2000);
        for (var i = 0; i < swiperNav.length; i++) {
            swiperNav[i].setAttribute('data-index', i);
            swiperNav[i].onclick = function () {
                for (var i = 0; i < swiperNav.length; i++) {
                    swiperNav[i].classList.remove('on');
                }

                this.classList.add('on');
                var date_index = this.getAttribute('date-index');
                swiper_wraper.style.transform = 'translateX(-' + 990 * date_index + 'px';
            }
        }
    }
    /* getSwiper(); ----上面的轮播有弊端，用下面的，*/

    function getSlide() {
        var gamebanner = document.querySelector('.gamebanner')
        var swiper = document.querySelector('.gamebanner .swiper');
        var ol = document.createElement('ol');
        swiper.appendChild(ol);
        ol.className = 'circle';
        var swiperUl = document.querySelector('.gamebanner  .swiper-ul');
        var slide = document.querySelectorAll('.gamebanner  .slide');
        var lbtn = document.querySelector('.gamebanner  .lbtn');
        var rbtn = document.querySelector('.gamebanner  .rbtn');
        var swiperW = swiper.offsetWidth;
        // var slideW = getComputedStyle(swiper, null).width;  ---不用这个，因为这个有单位。 900px
        // console.log(swiperW, slideW);//900 900px
        var circle = document.querySelector('.gamebanner .circle');
        // console.log(slide);
        for (var n = 0; n < slide.length; n++) {
            var cli = document.createElement('li');
            circle.appendChild(cli);
        }
        var clis = document.querySelectorAll('.circle li');
        clis[0].className = 'on';
        for (var cr = 0; cr < clis.length; cr++) {
            clis[cr].setAttribute('index', cr);
            clis[cr].onclick = function () {
                var index = this.getAttribute('index');
                circleRun(clis, index);
                animate(swiperUl, -index * swiperW);
                i = index;
                cir = index;
                circleRun(clis, index);
                animate(swiperUl, -index * swiperW);
            }
        }
        var copySlide = slide[0].cloneNode(true);
        // console.log(copySlide);
        swiperUl.appendChild(copySlide);
        // console.log(swiperUl);
        var nslide = document.querySelectorAll('.slide');
        // console.log(nslide, nslide.length);
        // console.log(slide.length);
        swiperUl.style.width = swiperW * nslide.length + 'px';
        gamebanner.onmouseenter = function () {
            lbtn.style.display = 'block'
            rbtn.style.display = 'block'
        }
        swiper.onmouseenter = function () {
            clearInterval(timer);
        }
        swiper.onmouseleave = function () {
            timer = setInterval(function () {
                rbtn.onclick();
            }, 2500);
        }
        gamebanner.onmouseleave = function () {
            lbtn.style.display = 'none'
            rbtn.style.display = 'none'

        }

        var i = 0;
        var cir = 0;
        var flag = true;
        rbtn.onclick = function () {
            if (flag) {
                flag = false;
                if (i >= nslide.length - 1) {
                    // console.log('i=' + i);
                    i = 0;
                    swiperUl.style.left = '0px';
                }
                i++;
                cir++;
                // console.log(i);
                animate(swiperUl, -i * swiperW, function () {
                    flag = true;
                });
                if (cir >= clis.length) {
                    cir = 0;
                }
                circleRun(clis, cir);
            }

        }
        lbtn.onclick = function () {
            if (flag) {
                flag = false;
                if (i <= 0) {
                    console.log('i=' + i);
                    i = nslide.length - 1;
                    swiperUl.style.left = -i * swiperW + 'px';
                }
                i--;
                cir--;
                console.log(i);
                animate(swiperUl, -i * swiperW, function () {
                    flag = true;
                });
                if (cir < 0) {
                    cir = clis.length - 1;
                }
                circleRun(clis, cir);
            }

        }
        var timer = setInterval(function () {
            rbtn.onclick();
        }, 2500)
        // console.log('w=' + swiperUl.offsetLeft);

    }
    getSlide();
    function circleRun(lis, num) {
        for (var i = 0; i < lis.length; i++) {
            lis[i].classList.remove('on');
        }
        lis[num].classList.add('on');
    }
    function animate(obj, end, callback) {
        clearInterval(timer);
        var timer;
        timer = setInterval(function () {
            var header = obj.offsetLeft;
            var speed = (end - header) / 10;
            if (header == end) {
                clearInterval(timer);
                callback && callback();
            }
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            newL = speed + header;
            obj.style.left = newL + 'px';
        }, 1)
    }
}