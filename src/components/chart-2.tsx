import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart2 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const data = [
        {name: '成都', 2020: 2, 2021: 3},
        {name: '北京', 2020: 2, 2021: 3},
        {name: '厦门', 2020: 2, 2021: 3},
        {name: '中山', 2020: 2, 2021: 3},
        {name: '深圳', 2020: 2, 2021: 3},
        {name: '泉州', 2020: 2, 2021: 3},
        {name: '南京', 2020: 2, 2021: 3},
        {name: '惠州', 2020: 2, 2021: 3},
        {name: '上海', 2020: 2, 2021: 3},
    ];
    useEffect(() => {
        setInterval(() => {
            const newData = [
                {name: '成都', 2020: 2, 2021: Math.random() * 10},
                {name: '北京', 2020: 2, 2021: 3},
                {name: '厦门', 2020: Math.random() * 10, 2012: 3},
                {name: '中山', 2020: 2, 2021: Math.random() * 10},
                {name: '深圳', 2020: Math.random() * 10, 2012: 3},
                {name: '福州', 2020: 2, 2021: Math.random() * 10},
                {name: '南京', 2020: Math.random() * 10, 2012: 3},
                {name: '惠州', 2020: 2, 2021: 3},
                {name: '上海', 2020: 2, 2021: 3},
            ];
            initRender(newData);
        }, 1000);
    }, []);
    const initRender = (data) => {
        myChart.current.setOption(createEchartsOptions({
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                splitLine: {show: false},
                axisLabel: {show: false}
            },
            yAxis: {
                axisTick: {show: false},
                type: 'category',
                data: data.map(i => i.name),
                axisLabel: {
                }
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: data.map(i => i[2020]),
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#2034F9'
                            }, {
                                offset: 1,
                                color: '#04A1FF'
                            }]),
                        }
                    }
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: data.map(i => i[2021]),
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#B92AE8'
                            }, {
                                offset: 1,
                                color: '#6773E7'
                            }]),
                        }
                    }
                }
            ]
        }));

    };
    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
        initRender(data);
    }, []);

    return (
        <div className="bordered chart2">
            <h2>案发地级市统计</h2>
            <div ref={divRef} className="chart"/>
            <div className="legend">
                <span className="first"/> 侦察中
                <span className="second"/> 已破案
            </div>
        </div>
    );
};