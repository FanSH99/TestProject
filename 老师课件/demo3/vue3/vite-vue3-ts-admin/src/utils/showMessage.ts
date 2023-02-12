import { ElMessage } from "element-plus";
import 'element-plus/es/components/message/style/css'
function showMessage(message:string,type:MessageType){
    ElMessage({
        message:message,
        type:type
    })
}

export default showMessage;