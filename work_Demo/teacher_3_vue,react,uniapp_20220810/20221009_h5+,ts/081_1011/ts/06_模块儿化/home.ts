// 2022年10月11日14:20:55

interface Mydata {
    [key: string]: any
}

export default function (data: Mydata): Promise<any> {
    return new Promise<void>((resolve:Function, reject:Function) => {
        resolve(data)
    })
}

