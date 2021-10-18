import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart12 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);

    // const data = [
    //     {value: 0.08, name: '民生路'},
    //     {value: 0.16, name: '段家滩'},
    //     {value: 0.21, name: '东大街'},
    //     {value: 0.09, name: '五泉山'},
    //     {value: 0.12, name: '中山路'},
    //     {value: 0.15, name: '庆阳路'},
    //     {value: 0.19, name: '鼓楼街道'},
    // ];
    const data = {
        1: [
            {value: 0.06, name: '民生路'},
            {value: 0.15, name: '段家滩'},
            {value: 0.13, name: '东大街'},
            {value: 0.06, name: '五泉山'},
            {value: 0.06, name: '中山路'},
            {value: 0.15, name: '庆阳路'},
            {value: 0.19, name: '鼓楼街道'},


        ],
        2: [
            {value: 0.08, name: '燕山街'},
            {value: 0.06, name: '二七街'},
            {value: 0.11, name: '八里桥'},
            {value: 0.11, name: '杏花街'},
            {value: 0.11, name: '盐市口'},
            {value: 0.09, name: '西凤路'},
            {value: 0.12, name: '安乐寺路'},
        ],
        3: [
            {value: 0.13, name: '文一路'},
            {value: 0.09, name: '天目山路'},
            {value: 0.08, name: '建国路'},
            {value: 0.10, name: '延安路'},
            {value: 0.09, name: '文祖街道'},
            {value: 0.09, name: '古城路'},
            {value: 0.09, name: '富强路'},
        ]
    };
    const render = data => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
            legend: {
                orient: 'vertical',
                left: 'left',
                top: 'center',
                textStyle: {color: 'white'},
                itemWidth: px(10),
                itemHeight: px(10),
                formatter(name) {
                    const value = data.find(i => i.name === name)?.value * 100 + '%';
                    return name + ' ' + value;
                }
            },
            series: [
                {
                    center: ['60%', '50%'],
                    type: 'pie',
                    radius: '80%',
                    label: {show: false},
                    labelLine: {show: false},
                    data: data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }));
    }


        useEffect(() => {
            myChart.current = echarts.init(divRef.current);
            render(data[1]);
            setInterval(() => {
                render(data[Math.ceil(Math.random() * 3)]);
            }, 2000);
    }, []);

    return (
        <div className="chart7-p1">
            <div className="chart">
                <div className="main" ref={divRef}/>
            </div>
        </div>
    );
};