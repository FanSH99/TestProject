import request from '../utils/request';

// 编辑提交参数
let updateParams = (id: number | undefined, attrId: number, data: ParamsData) => request(`categories/${id}/attributes/${attrId}`, 'PUT', data);

export {
    updateParams
}
