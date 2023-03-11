// 2022年10月13日14:11:11

// 发布订阅者模式，

interface Mybus {
    list: Array<Function>;
    emit(msg: any): void;
    on(callback: Function): void;
}
let obj: Mybus = {
    list: [],
    emit(msg) {
        this.list.forEach(callback => {
            callback(msg)
        })
    },
    on(callback) {
        this.list.push(callback)
    }
}

export default bus;