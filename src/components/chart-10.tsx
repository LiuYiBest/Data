import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart10 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const data=[
        {name: '交通事故', 2020: 5, 2021: 2},
        {name: '合同诈骗', 2020: 2, 2021: 4},
        {name: '借贷纠纷', 2020: 3, 2021: 6},
        {name: '危险驾驶', 2020: 1, 2021: 7},
        {name: '故意伤人', 2020: 7, 2021: 3},
        {name: '侵犯财产', 2020: 5, 2021: 1},
    ]
    useEffect(()=>{
        setInterval(()=>{
            const newData=[
                {name: '交通事故', 2020: 4, 2021: Math.random() * 10},
                {name: '合同诈骗', 2020: Math.random() * 10, 2021: 4},
                {name: '借贷纠纷', 2020: Math.random() * 10, 2021: 3},
                {name: '危险驾驶', 2020: 2, 2021: Math.random() * 10},
                {name: '故意伤人', 2020: Math.random() * 10, 2021: 2},
                {name: '侵犯财产', 2020: 6 , 2021: Math.random() * 10},
            ];
            initRender(newData);
        },2000)
    })

    const initRender = (data) => {
        myChart.current.setOption(createEchartsOptions({
                xAxis: {
                    data: data.map(i=>i.name),
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
                    }
                },
                series: [{
                    type: 'bar',
                    data:  data.map(i=>i[2021]),
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0A97FB'
                    }, {
                        offset: 1,
                        color: '#1E34FA'
                    }]),
                }]
            }))
        }

useEffect(()=>{
    myChart.current = echarts.init(divRef.current);
    initRender(data);
},[])


    return (
        <div ref={divRef} className="chart">

        </div>
    );
};