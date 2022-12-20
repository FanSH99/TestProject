import NavBar from '../../components/NarBar/NavBar'
// 引入依赖
import ExcelJS from 'exceljs'
import FileSaver from 'file-saver';
import { getHomeList } from '../../utils/api'
export default function Mine() {
    // 导出Excel
    const exportExcel = async () => {
        let res = await getHomeList();
        console.log(res.data.data);
        // 创建工作簿
        const _workbook = new ExcelJS.Workbook();
        // 添加工作表
        const _sheet1 = _workbook.addWorksheet("sheet1");
        let columns = [];
        for (let ele in res.data.data[0]) {
            let obj = {
                header: ele,
                key: ele,
                width: 20
            }
            columns.push(obj)
        }
        _sheet1.columns = columns;
        _sheet1.addRows(res.data.data);

        // 获取第一行
        const _titleCell = _sheet1.getRow(1);
        // 设置第一行的高度
        _titleCell.height = 20;
        // 设置第一行的字体样式
        _titleCell.font = {
            name: "宋体",
            bold: true,
            size: 13,
            color: {
                argb: "FF999999",
            },
        };
        // 设置第一行的对齐方式（水平垂直）
        _titleCell.alignment = {
            vertical: "middle",
            horizontal: "center",
        };


        // _titleCell.fill = {
        //     type: "pattern",
        //     pattern: "solid",
        //     fgColor: {
        //         argb: "FFF5F7FA",
        //     },
        // };
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
            <NavBar >我的</NavBar>
            <h1>我的</h1>
            <button onClick={() => {
                exportExcel();
            }}>导出为Excel</button>
        </div>
    )
}