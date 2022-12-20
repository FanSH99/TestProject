import request from '../utils/request';
// 获取角色列表--用户页面
let getRolesList = () => request('roles', "GET");
// 设置用户角色
let setUserRole = (id: number, data: SetRole) => request(`users/${id}/role`, 'PUT', data)
// 添加角色
let addUserRoles = (data: AddRolesData) => request(`roles`, 'POST', data);
// 查询当前角色权限
let queryRoleId = (id: number) => request(`roles/${id}`, 'GET');
// 修改角色
let editUserRole = (id: number, data: AddRolesData) => request(`roles/${id}`, 'PUT', data);
// 删除角色
let deleteRole = (id: number) => request(`roles/${id}`, 'DELETE')
// 删除某个角色权限
let deleteRihts = (roleId: number, rightId: number) => request(`roles/${roleId}/rights/${rightId}`, 'DELETE');

// 获取权限列表
let getRightsList = (type: RightData) => request(`rights/${type}`, 'GET');
// 分配权限
let setRights = (roleId: number, data: SetRights) => request(`roles/${roleId}/rights`, 'POST', data)
export {
    getRolesList,
    setUserRole,
    addUserRoles,
    queryRoleId,
    editUserRole,
    deleteRole,
    deleteRihts,
    getRightsList,
    setRights
}