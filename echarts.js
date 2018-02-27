var myChart = echarts.init(document.getElementById('main'));
var myChart2 = echarts.init(document.getElementById('main2'));

var option = {
    color: ['#1E80D9', '#0BE632'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['预警总数', '未处理预警数'],
        bottom: 8,
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        axisTick: {
            show: true
        },
        data: ['出省预警', '停留点预警', '风险区域预警', '未上线预警']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '预警总数',
            type: 'bar',
            barWidth :'20',
            data: [320, 332, 301, 334]
        },
        {
            name: '未处理预警数',
            type: 'bar',
            barWidth :'20',
            data: [220, 182, 191, 234]
        }
    ]
};


option2 = {
    color: ['#EE8213', '#037ACA'],
    title: {
        text: '最近15天趋势图',
        top: '10',
        left: '45%'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['平均值','预警值'],
        right: '10%',
        top: '20',
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['9.16','9.17','9.18','9.19','9.20','9.21','9.22','9.23']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'平均值',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10, 13],
        },
        {
            name:'预警值',
            type:'line',
            data:[1, 5, 2, 5, 3, 2, 0, 2],
        }
    ]
};
myChart.setOption(option);
myChart2.setOption(option2);

window.onresize = function () {
    myChart.resize();
    myChart2.resize();
}