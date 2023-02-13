import { requestPost } from "@/utils/request";

let getSms = (phone) => requestPost(`/api/front/sendCode`,phone);
let getLogin = (data) => requestPost('/api/front/login/mobile', data);

export {
    getSms,
    getLogin,
}