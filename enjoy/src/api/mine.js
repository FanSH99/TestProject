import { requestGet, requestPost } from "@/utils/request";


let getUser = () => requestGet('/api/front/user');

let uploadHeader = (data) => requestPost('/api/front/upload/image?model=maintain&pid=0', data)

export {
    getUser,
    uploadHeader,
}
