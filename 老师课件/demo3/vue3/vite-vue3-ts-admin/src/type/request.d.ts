type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";
interface Params {
    [key:string]:any
}
type MessageType = 'success' | 'warning' | 'info' | 'error';