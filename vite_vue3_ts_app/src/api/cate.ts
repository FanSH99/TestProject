import request from '../utils/request';

let getGoodsList = (data: CatesData) => request("categories", "GET", data);

export {
    getGoodsList
}