/* 
包的需求:
     1. 时间格式化
     2. 数组的排序
     3. 数组的去重

初始化包的基本结构
    1. 新建 beiyou-tools 文件夹，作为包的根目录。
    2. 在 beiyou-tools 中，新建如下三个文件：
        package.json    (包管理配置文件)
        index.js        (包的入口文件)
        README.md       (包的说明文档，大写字母)

package.json 的说明        
    {
        "name": "day2",     // 检索下载时，包的名称;和所在文件夹名称无关;官网检索，避免重名
        "version": "1.0.0", // 初始化版本号
        "main": "01-包.js", // 包的入口文件

                            // 官网搜索时，提示信息。
        "description": "简短的描述信息",   
                            
                            // 检索时的关键字，是字符串组成的数组
        "keywords": ["beiyou", "tools", "date"], 
        "license": "ISC"    // 遵循的开源许可协议，默认即可
    }

*/