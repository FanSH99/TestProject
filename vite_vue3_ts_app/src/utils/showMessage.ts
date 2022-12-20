import { ElMessage } from 'element-plus';
// 样式，必须引入，否则不显示。
import 'element-plus/es/components/message/style/css'
function showMessage(message: string, type: MessageType) {
    ElMessage({
        message: message,
        type: type,
    })
}

export {
    showMessage
};