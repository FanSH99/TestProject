import request from '../utils/request';
let getTableList = () => request("reports/type/1", "GET");

export {
    getTableList
}