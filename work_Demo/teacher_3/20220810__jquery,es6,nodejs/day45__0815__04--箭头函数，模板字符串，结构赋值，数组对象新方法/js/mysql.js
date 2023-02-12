// 1 引入
const mysql = require('mysql');
// 2 创建链接配置
const conn = mysql.createConnection({
    host: 'localhost',   // 主机名 （服务器地址）
    user: 'root',    //用户名
    password: '123456',    // 密码
    database: 'selc',  // 写上自己要连接的数据库名字
})
// 3 建立链接
conn.connection()
// 4 生成sql语句 增删改查操作
let sql = 'select * from student'
//5  执行sql语句
conn.query(sql, (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    // 6 处理结果
    console.log(result)
    console.log("成功");
})


/* 
//创建数据库连接对象

var conn = new ActiveXObject("ADODB.Connection");

//创建数据集对象

var rs = new ActiveXObject("ADODB.Recordset");

try {

    //数据库连接串，具体配置请参考：http://www.connectionstrings.com/

    //如果不知道如何配置连接串，可以通过配置UDL文件后用文本编辑器打开获得

    var connectionstring = "Driver={MySQL ODBC 5.2w Driver};Server=localhost;Database=selc;User=root; Password=123456;Option=3;Port=3306";

    //打开连接

    conn.open(connectionstring);

    //查询语句

    var sql = " select * from student ";

    //打开数据集(即执行查询语句)

    rs.open(sql, conn);

    // (或者rs = conn.execute(sql);)

    //遍历所有记录

    while (!rs.eof) {

        //WScript是Windows 的脚本宿主对象，详细情况请在windows帮助里查找。

        //WScript.Echo输出记录的内容

        WScript.Echo(rs.Fields("id") + "\t" + rs.Fields("name") + "\n");

        //下一条记录

        rs.moveNext();

    }

    //关闭记录集

    rs.close();

    //关闭数据库连接

    conn.close();

} catch (e) {

    //异常报告

    WScript.Echo(e.message);
    console.log("失败了");

} finally {

    //

}
 */