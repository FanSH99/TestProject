import { postRequest, requestGet } from "@/utils/requset";

let getUserProFile = (data)=> requestGet(`/v1/user`,data);

let uploadFile = (user_id,data)=> postRequest(`/eus/v1/users/${user_id}/avatar`,data)
export {
    getUserProFile,
    uploadFile
}