export default {
  
    radar: {
      // shape: 'circle',
      indicator: [
        { name: '学生信息', max: 6500 },
        { name: '数据安全', max: 16000 },
        { name: '系统安全', max: 30000 },
        { name: '科技信息', max: 38000 },
        { name: '学籍信息', max: 52000 },
        { name: '大数据统计', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Actual Spending'
          }
        ]
      }
    ]
  };