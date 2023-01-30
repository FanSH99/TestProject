
window.onload = function () {

    function getNavs() {
        var lis = document.querySelectorAll('nav>.center>ul>li');
        for (var i = 0; i < lis.length; i++) {
            lis[i].onclick = function () {
                for (var i = 0; i < lis.length; i++) {
                    lis[i].className = '';
                }
                this.className = 'on';
            }
        }
        var btn = document.querySelector('.topList .li3::after');
        console.log(btn);
    }
    getNavs();

    function getTopLists() {

        var btn = document.querySelector('.topList .li3::after');
        console.log(btn);
        var toplis = document.querySelectorAll('.topList ul li ')
        console.log(toplis);
        var dls = document.querySelectorAll('dl');
        console.log(dls);
        for (var i = 0; i < dls.length; i++) {
            dls[i].onmouseover = function () {
                for (var i = 0; i < dls.length; i++) {
                    dls[i].classList.remove('on');
                }
                console.log(aaaa);
                this.classList.add('on');
            }
        }
    }
    getTopLists();
}