import request from '../utils/request';

let getMenus = (): Promise<any> => request("/menus", "GET");


let getUserList = (data: UserData): Promise<any> => request("/users", "GET", data);

let addUser = (data: AddUser): Promise<any> => request("users", "POST", data);

let queryUser = (id: number): Promise<any> => request(`users/${id}`, "GET");

let changeUser = (id: number, data: updateUser) => request(`users/${id}`, 'PUT', data);

let deleteUser = (id: number) => request(`users/${id}`, 'DELETE');

let updateState = (id: number, type: boolean) => request(`users/${id}/state/${type}`, 'PUT')
export {
    getMenus,
    getUserList,
    addUser,
    queryUser,
    changeUser,
    deleteUser,
    updateState
}