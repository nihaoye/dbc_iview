option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['9月15', '9月20', '9月25', '9月30', '10月5', '10月10', '10月15','10月20']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [40, 30, 40, 50, 30, 20, 10,20],
        type: 'line',
        lineStyle:{
            color:"#668DFF",
            width:4
        },
        areaStyle: {
            color:"#4977FC",
            opacity:0.5
        },
        itemStyle: {
            normal: {
                color: '#668DFF'
            }
        },
        smooth:true
    }]
};
