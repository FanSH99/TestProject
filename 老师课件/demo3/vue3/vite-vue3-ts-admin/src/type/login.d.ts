interface LoginParams {
    username:string,
    password:string
}
declare module 'nprogress';

interface MenusType{
    id:number,
    children:Array<any>,
    order:number,
    authName:string,
    path:string
}

type Patnname = "users" | "roles" |"rights" | "goods"|"params" | "categories" | "orders" | "reports"