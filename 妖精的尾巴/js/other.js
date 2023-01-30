
window.onload = function () {

    function getEtabItem() {
        var lis = document.querySelectorAll('.eTitle>ul>li');
        var eTabitems = document.querySelectorAll('.eTabPinnel>.eTabitem');
        for (var i = 0; i < lis.length; i++) {
            lis[i].setAttribute('index', i)
            lis[i].onclick = function () {
                var index = this.getAttribute('index')
                for (var i = 0; i < lis.length; i++) {
                    lis[i].classList.remove('on');
                    eTabitems[i].classList.remove('on');

                }
                this.classList.add('on');
                for (var j = 0; j < eTabitems.length; j++) {
                    if (j == index) {
                        eTabitems[j].classList.add('on');
                    }
                }


            }
        }

    }
    getEtabItem();

    function getMEtabItem() {
        var lis = document.querySelectorAll('.mediaMain .eTitle>ul>li');
        var eTabitems = document.querySelectorAll('.mediaMain .eTabitem');
        for (var i = 0; i < lis.length; i++) {
            lis[i].setAttribute('index', i)
            lis[i].onclick = function () {
                var index = this.getAttribute('index')
                for (var i = 0; i < lis.length; i++) {
                    lis[i].classList.remove('on');
                    eTabitems[i].classList.remove('on');
                }
                this.classList.add('on');
                for (var j = 0; j < eTabitems.length; j++) {
                    if (j == index) {
                        eTabitems[j].classList.add('on');
                    }
                }
            }
        }

    }
    getMEtabItem();

    function getRecord() {
        var recordImg = document.querySelector('.mediaMain .music .record .recordImg');
        var point = document.querySelector('.mediaMain .music .record .point');
        var bf = document.querySelector('.mediaMain .music .mp3 .bf span');
        var flag = 1;
        var timer;
        var count = 0;
        var time1 = document.querySelector('.mediaMain .music .mp3 .bf p .time1');
        var time2 = document.querySelector('.mediaMain .music .mp3 .bf p .time2');
        var audio = document.querySelector('.mediaMain .music .mp3 .audio');
        console.log(audio);
        recordImg.onclick = function () {
            var time_1 = time1.innerHTML;
            var time_2 = time2.innerHTML;
            if (flag) {
                point.classList.add('on');
                timer = setInterval(function () {
                    time_2--;
                    if (time_2 < 0) {
                        time_2 = 52;
                        time_1--;
                    }
                    if (time_1 < 0) {
                        time_1 = 3;
                    }
                    audio.play();
                    time1.innerHTML = time_1;
                    time2.innerHTML = time_2;
                    if (time_1 <= 0 && time_2 <= 0) {
                        clearInterval(timer);
                        audio.pause();
                        bf.classList.remove('on');
                        flag = 1;
                    }
                    count += 2;
                    recordImg.style.transform = 'rotate(' + count + 'deg)'
                }, 1000);
                bf.classList.add('on');
                flag = 0;

            } else {
                audio.pause();
                point.classList.remove('on');
                clearInterval(timer);
                bf.classList.remove('on');
                flag = 1;
            }

        }

        bf.onclick = function () {
            var time_1 = time1.innerHTML;
            var time_2 = time2.innerHTML;
            if (flag) {
                point.classList.add('on');
                timer = setInterval(function () {
                    time_2--;
                    if (time_2 < 0) {
                        time_2 = 52;
                        time_1--;
                    }
                    if (time_1 < 0) {
                        time_1 = 3;
                    }
                    audio.play();
                    time1.innerHTML = time_1;
                    time2.innerHTML = time_2;
                    if (time_1 <= 0 && time_2 <= 0) {
                        clearInterval(timer);
                        audio.pause();
                        bf.classList.remove('on');
                        flag = 1;
                    }
                    count += 2;
                    recordImg.style.transform = 'rotate(' + count + 'deg)'
                }, 1000);
                bf.classList.add('on');
                flag = 0;

            } else {
                audio.pause();
                point.classList.remove('on');
                clearInterval(timer);
                bf.classList.remove('on');
                flag = 1;
            }
        }


    }
    getRecord();
}
