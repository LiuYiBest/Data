import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOption} from '../shared/base-echart-option';

export const Chart2 = () =>{
    const divRef =useRef(null);
    //挂载之后
    useEffect(()=>{
        let myChart = echarts.init(divRef.current);
        myChart.setOption({
            ...baseEchartOption,
            grid:{
                x: px(100),
                y:px(40),
                x2:px(40),
                y2:px(40)
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
            },
            series: [
                {
                    name: '破案排名1',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: '破案排名2',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        });
    },[])
    return (
        <div className="border fuck">
        <h2>案件破获查明</h2>
        <div ref={divRef} className="chart">
        </div>
    </div>
    )
}