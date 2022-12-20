interface UserData {
    query?: string,
    pagenum: number,
    pagesize: number,
}

interface AddUser {
    username: string,
    password: string,
    email: string,
    mobile: string,
}

interface updateUser {
    email?: string,
    mobile?: string,
}

interface UserRole {
    create_time: number,
    eamil: string,
    id: number,
    mg_state: boolean,
    mobile: string,
    role_name: string,
    username: string,
}

interface SetRole {
    rid: number | string,
}