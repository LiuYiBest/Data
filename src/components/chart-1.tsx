import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOption} from '../shared/base-echart-option';
import {createEchartsOptions} from '../shared/create-echarts-options';

//使用echarts图表
export const Chart1 = () =>{
    const divRef =useRef(null);
    const myChart = useRef(null);
    const data=[
        {name: '福州市', 2020: 3, 2021: 2},
        {name: '厦门市', 2020: 2, 2021: 4},
        {name: '莆田市', 2020: 3, 2021: 6},
        {name: '杭州市', 2020: 1, 2021: 7},
        {name: '义乌市', 2020: 7, 2021: 3},
        {name: '温州市', 2020: 5, 2021: 2},
        {name: '广州市', 2020: 2, 2021: 1},
        {name: '佛山市', 2020: 3, 2021: 4},
        {name: '惠州市', 2020: 4, 2021: 3},
    ]
    useEffect(()=>{
        setInterval(()=>{
            const newData=[
                {name: '福州市', 2020: 4, 2021: Math.random() * 10},
                {name: '厦门市', 2020: Math.random() * 3, 2021: 4},
                {name: '莆田市', 2020: Math.random() * 10, 2021: 3},
                {name: '杭州市', 2020: 2, 2021: Math.random() * 10},
                {name: '义乌市', 2020: Math.random() * 10, 2021: 3},
                {name: '温州市', 2020: 6, 2021: Math.random() * 10},
                {name: '广州市', 2020: Math.random() * 10, 2021: 3},
                {name: '佛山市', 2020: 1, 2021: 2},
                {name: '惠州市', 2020: 4, 2021:  Math.random() * 8},
            ];
            initRender(newData);
        },2000)
    })
    const initRender = (data) => {
        myChart.current.setOption(createEchartsOptions({
            ...baseEchartOption,
            color: '#1076fa',
            xAxis: {
                data: data.map(i=>i.name),
                axisTick:{show:false},
                nameTextStyle:{
                    fontStyle:'italic'
                },
                axisLabel:{
                    fontSize: px(12),
                    formatter(val){
                        if (val.length>2){
                            const array = val.split('')
                            array.splice(2,0,'\n');
                            return array.join('');
                        }else {
                            return val;
                        }
                    }
                },
            },
            yAxis: {
                splitLine:{show:false},
                axisLine:{
                    show:true,
                    lineStyle:{color:'#707992'}
                },
                nameTextStyle:{
                    fontStyle:'italic'
                },
                axisLabel:{
                    fontSize: px(12)
                }
            },
            series: [{
                name: '统计',
                type: 'bar',
                data:  data.map(i=>i[2021]),
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#0A97FB'
                },
                    {
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
        <div className="bordered chart1">
        <h2>派出所管辖统计</h2>
        <div ref={divRef} className="chart">
        </div>
    </div>
    )
}
