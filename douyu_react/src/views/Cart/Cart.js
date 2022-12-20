import NavBar from '../../components/NarBar/NavBar'
// 引入依赖
import ExcelJS from 'exceljs'
import FileSaver from 'file-saver';

export default function Cart() {
    // 导出Excel
    const exportExcel = () => {
        // 创建工作簿
        const _workbook = new ExcelJS.Workbook();
        // 添加工作表
        const _sheet1 = _workbook.addWorksheet("sheet1");

        _sheet1.columns = [
            { header: "名次", key: "sort", width: 10 },
            { header: "班级", key: "class", width: 20 },
            { header: "姓名", key: "name", width: 20 },
            { header: "得分", key: "score", width: 10 },
        ];
        //添加数据
        _sheet1.addRow({ sort: 1, class: "前端三班", name: "Buer", score: 99 });
        _sheet1.addRow({ sort: 2, class: "前端一班", name: "Jack", score: 86 });
        _sheet1.addRow({ sort: 3, class: "前端一班", name: "Mary", score: 58 });
        // 读取行
        _sheet1.getColumn("score").eachCell((cell, rowIdx) => {
            console.log(cell.value, rowIdx);
            // 得分, 1
            // 99, 2
            // 86, 3
        });
        // 读取列
        _sheet1.getColumn("score").eachCell((cell, rowIdx) => {
            console.log(cell.value, rowIdx);
            // 得分, 1
            // 99, 2
            // 86, 3
        });
        // 获取第一行
        const _titleCell = _sheet1.getRow(1);
        // 设置第一行的高度
        _titleCell.height = 30;
        // 设置第一行的字体样式
        _titleCell.font = {
            name: "黑体",
            bold: true,
            size: 14,
            color: {
                argb: "FF999999",
            },
        };
        // 设置第一行的对齐方式（水平垂直）
        _titleCell.alignment = {
            vertical: "middle",
            horizontal: "center",
        };
        // 设置边框线的样式
        _titleCell.border = {
            top: {
                style: "medium",
                color: {
                    argb: "FFEBEEF5",
                },
            },
            left: {
                style: "medium",
                color: {
                    argb: "FFEBEEF5",
                },
            },
            bottom: {
                style: "medium",
                color: {
                    argb: "FFEBEEF5",
                },
            },
            right: {
                style: "medium",
                color: {
                    argb: "FFEBEEF5",
                },
            },
        };
        // 设置单元的样式
        _titleCell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: {
                argb: "FFF5F7FA",
            },
        };
        // 导出表格
        _workbook.xlsx.writeBuffer().then((buffer) => {
            let _file = new Blob([buffer], {
                type: "application/octet-stream",
            });
            FileSaver.saveAs(_file, "ExcelJS.xlsx");
        });
    };
    return (
        <div className='page'>
            <NavBar >购物车</NavBar>
            <h1>购物车</h1>
            <button onClick={() => {
                exportExcel();
            }}>导出为Excel</button>
        </div>
    )
}