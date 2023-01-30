
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
}
getImgRandom();
