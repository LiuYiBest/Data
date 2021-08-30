import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import china from '../geo/china.json';

export const Chart6 = () => {
    const divRef = useRef(null);
    const colors = { '福建省': '#010d3d'};
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        // @ts-ignore
        //使用echarts注册中国地图
        echarts.registerMap('CN', china);
        myChart.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            series: [
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '福建省', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['福建省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '福建省', value: 100},
                    ],
                    itemStyle: {
                    }
                },

            ]
        }));
    }, []);

    return (
        <div className="bordered chart6">
            <h2>全国犯罪人员籍贯分布地</h2>
            <div className="wrapper">
                <div ref={divRef} className="chart"/>
                {/*legend*/}
                <div className="ring">
                    <div className="radar" />
                </div>
                <div className="notes">
                    <p>数据实时监控中</p>
                </div>
            </div>
        </div>
    );
};