import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOption} from '../shared/base-echart-option';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart1 = () =>{
    const divRef =useRef(null);
    //挂载之后
    useEffect(()=>{
        let myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            ...baseEchartOption,
            xAxis: {
                data: ['福州', '厦门', '莆田', '漳州', '龙岩', '泉州','三明','南平'],
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
                    lineStyle:{color:'#6e7079'}
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
                data: [5, 20, 36, 10, 10, 20,12,17]
            }]
        }));
    },[])
    return (
        <div className="bordered fuck">
        <h2>派出所管辖统计</h2>
        <div ref={divRef} className="chart">
        </div>
    </div>
    )


}