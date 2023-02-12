declare namespace AxiosRequest {
    interface Params{
        [key:string]:any
    }
    interface Res{
        config:Params,
        data:Params,
        headers:Params,
        request:Params,
        status:number,
        statusText:string
    }
    interface RequestFun{
        (url:string,method:string,params:Params={}):Promise<Res>
    }
}