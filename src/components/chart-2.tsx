import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart2 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const data = [
        {name: '成都', 2011: 2, 2012: 3},
        {name: '北京', 2011: 2, 2012: 3},
        {name: '厦门', 2011: 2, 2012: 3},
        {name: '中山', 2011: 2, 2012: 3},
        {name: '深圳', 2011: 2, 2012: 3},
        {name: '泉州', 2011: 2, 2012: 3},
        {name: '南京', 2011: 2, 2012: 3},
        {name: '惠州', 2011: 2, 2012: 3},
        {name: '上海', 2011: 2, 2012: 3},
    ];
    useEffect(() => {
        setInterval(() => {
            const newData = [
                {name: '成都', 2011: 2, 2012: Math.random() * 10},
                {name: '北京', 2011: 2, 2012: 3},
                {name: '厦门', 2011: Math.random() * 10, 2012: 3},
                {name: '中山', 2011: 2, 2012: Math.random() * 10},
                {name: '深圳', 2011: Math.random() * 10, 2012: 3},
                {name: '福州', 2011: 2, 2012: Math.random() * 10},
                {name: '南京', 2011: Math.random() * 10, 2012: 3},
                {name: '惠州', 2011: 2, 2012: 3},
                {name: '上海', 2011: 2, 2012: 3},
            ];
            x(newData);
        }, 1000);
    }, []);
    const x = (data) => {
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
                    data: data.map(i => i[2011]),
                    itemStyle: {
                        normal: {
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
                    data: data.map(i => i[2012]),
                    itemStyle: {
                        normal: {
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
        x(data);
    }, []);

    return (
        <div className="bordered 破获排名">
            <h2>案发地级市统计</h2>
            <div ref={divRef} className="chart"/>
            <div className="legend">
                <span className="first"/> 侦察中
                <span className="second"/> 已破案
            </div>
        </div>
    );
};