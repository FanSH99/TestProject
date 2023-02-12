interface UserData{
    query?:string,
    pagenum:number,
    pagesize:number
}

interface AddUserData{
    username:string,
    password:string,
    email:string,
    mobile:string
}
interface UpdateData{
    email?:string,
    mobile?:string
}

interface UserRow{
    create_time:number,
    email:string,
    id:number,
    mg_state:boolean,
    mobile:string,
    role_name:string,
    username:string
}

interface SetRoleData{
    rid:number
}