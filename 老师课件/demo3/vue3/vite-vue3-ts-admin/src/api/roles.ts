import request from "../utils/request";
// 获取角色列表
let getRolesList = ()=>request(`roles`,"GET");

//添加角色
let addRolesUser = (data:AddRolesData)=>request(`roles`,"POST",data);
// 根据id查询角色
let getRolesInfo = (id:number)=>request(`roles/${id}`,"GET");
// 编辑角色
let updateRoles = (id:number,data:AddRolesData)=>request(`roles/${id}`,"PUT",data);
//删除角色
let removeRoles = (id:number)=>request(`roles/${id}`,"DELETE");

// 删除角色指定权限
let romveRolesRights = (roleId:number,rightId:number)=>request(`roles/${roleId}/rights/${rightId}`,"DELETE");

// 获取权限列表
let getRightsList = (type:RightsType)=>request(`rights/${type}`,"GET")

// 分配权限
let setRights = (roleId:number,data:SetRights)=>request(`roles/${roleId}/rights`,"POST",data)
export {
    getRolesList,
    addRolesUser,
    getRolesInfo,
    updateRoles,
    removeRoles,
    romveRolesRights,
    getRightsList,
    setRights
}