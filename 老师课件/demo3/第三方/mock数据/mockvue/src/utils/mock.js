// 引入mockjs 
import Mock from 'mockjs';

// 模拟轮播图数据接口 参数一模拟的数据接口地址 参数二请求方式 参数三 模拟返回数据
Mock.mock("/get/banner","get",{
    "list|3-5":[
        Mock.Random.image('300x200',Mock.Random.color()),
    ]
})

// 模拟首页分类导航

Mock.mock('/get/navlist',"post",{
    name:"navList",
    "list|10":[
        {
            title:"限时秒杀",
            imgurl:Mock.Random.image('50x50',Mock.Random.color())
        }
    ]
})

// 模拟商品列表
Mock.mock('/get/list',"get",{
    "list|10-20":[
        {
            "name|1":[
                "LOFREE洛斐 奶茶无线蓝牙键鼠套装 ",
                "JBL T230NC TWS 真无线蓝牙耳机 入耳式自适主动降噪音乐耳机防水防汗苹果安卓通用 手机带麦游戏耳机 暗夜黑",
                "CAMILA&KORALI品牌包包女包斜挎单肩小包女式"
            ],
            "price|1-200":200,
            "olprice|150-200":200,
            "imgurl|1":[
                Mock.Random.image('200x100',Mock.Random.color()),
                Mock.Random.image('200x100',Mock.Random.color()),
                Mock.Random.image('200x100',Mock.Random.color()),
                Mock.Random.image('200x100',Mock.Random.color())
            ]
        }
    ]
})

/* 
mock数据步骤：
1. 下载安装mockjs
npm i mockjs

2. 创建mockjs文件
 在mockjs中编写接口

3. 在mainjs入口文件引入mock.js
*/