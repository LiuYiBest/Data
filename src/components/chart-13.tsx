import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart13 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);

    const data = [
        {value: 0.08, name: '民生路'},
        {value: 0.16, name: '段家滩'},
        {value: 0.21, name: '东大街'},
        {value: 0.09, name: '五泉山'},
        {value: 0.12, name: '中山路'},
        {value: 0.15, name: '庆阳路'},
        {value: 0.19, name: '鼓楼街道'},
    ];
    useEffect(() => {
        setInterval(() => {
            initRender(data);
        }, 1500);
    }, []);

    const initRender = (data) => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            xAxis: {
                data: data.map(i => i.name),
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {color: '#5e606e'}
                },
                axisLabel: {
                    formatter(val) {
                        if (val.length > 2) {
                            const array = val.split('');
                            array.splice(2, 0, '\n');
                            return array.join('');
                        } else {
                            return val;
                        }
                    }
                },
            },

            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {color: '#5e606e'}
                },
                axisLabel: {
                    formatter(value) {
                        return (value * 100).toFixed(0) + '%';
                    }
                }
            },
            series: [{
                type: 'bar',
                data: data.map(i => i.value + Math.random() * .1),
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#0A97FB'
                },
                    {
                        offset: 1,
                        color: '#1E34FA'
                    }]),
            }]
        }));
    }
        useEffect(() => {
            myChart.current = echarts.init(divRef.current);
            initRender(data);
    }, []);

    return (
        <div ref={divRef} className="chart">

        </div>
    );
};