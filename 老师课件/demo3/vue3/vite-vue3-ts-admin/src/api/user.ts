import request from "../utils/request";
//获取用户左侧菜单权限列表

let getMenus = ():Promise<any>=>request(`menus`,"GET");

// 获取用户列表
let getUserList = (data:UserData):Promise<any> =>request(`users`,"GET",data)

// 添加用户
let addUser = (data:AddUserData):Promise<any>=>request(`users`,"POST",data)

// 根据id查询用户状态
let getUsers = (id:number)=>request(`users/${id}`,"GET")

// 编辑用户
let updateUser = (id:number,data:UpdateData)=>request(`users/${id}`,"PUT",data);

//删除用户
let removeUser = (id:number)=>request(`users/${id}`,"DELETE");

// 修改用户状态
let updateState = (id:number,type:boolean)=>request(`users/${id}/state/${type}`,"PUT")

// 分配角色
let setUserRoles = (id:number,data:SetRoleData) =>request(`users/${id}/role`,"PUT",data);

//获取数据报表
let getReportsList =()=>request(`reports/type/1`,"GET")
export {
    getMenus,
    getUserList,
    addUser,
    getUsers,
    updateUser,
    removeUser,
    updateState,
    setUserRoles,
    getReportsList
}