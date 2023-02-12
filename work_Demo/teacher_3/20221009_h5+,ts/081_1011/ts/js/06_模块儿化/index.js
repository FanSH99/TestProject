// 2022年10月11日14:17:01
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import request from './home';
let mybaby = {
    name: '派大星',
    age: '12',
    like: "抓水母"
};
console.log(mybaby);
let sayfun = (a, b) => {
    return a.length + b;
};
console.log(sayfun);
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield request({ code: 0, msg: "请求成功" });
        console.log(res);
    });
}
getData();
