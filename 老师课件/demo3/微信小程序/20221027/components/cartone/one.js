// 导入behaviers
let stuBehaviors = require("../../behaviors/stu.js")
Component({
    // 注册behaviors 可以注册多个
    behaviors:[stuBehaviors],
    methods:{
        looklook(){
            console.log(this)
        }
    }
})