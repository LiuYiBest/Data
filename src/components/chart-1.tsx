import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOption} from '../shared/base-echart-option';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart1 = () =>{
    const divRef =useRef(null);
    useEffect(()=>{
        let myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            ...baseEchartOption,
            color: '#1076fa',
            xAxis: {

                data: ['广州', '湖南', '福建', '云南', '山东', '四川','浙江'],
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

                name: '销量',
                type: 'bar',
                data: [45, 20, 26, 34, 17, 30,12,17],
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
    },[])
    return (
        <div className="bordered chart1">
        <h2>派出所管辖统计</h2>
        <div ref={divRef} className="chart">
        </div>
    </div>
    )
}