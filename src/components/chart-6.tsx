import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import china from '../geo/china.json';

export const Chart6 = () => {
    const divRef = useRef(null);
    // const colors = {'青海省': '#010d3d', '甘肃省': '#010d3d', '四川省': '#010d3d'};
    const colors = { '福建省': '#010d3d'};
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        // @ts-ignore
        //使用echarts注册地图
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
                    // label: {show: false, color: 'white'},
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
                        // borderColor: '#01A7F7',
                    }
                },

            ]
        }));
    }, []);

    return (
        <div className="bordered 籍贯">
            <h2>全国犯罪人员籍贯分布地</h2>
            <div className="wrapper">
                <div ref={divRef} className="chart"/>
                {/*legend*/}
                <div className="ring">
                    <div className="radar" />
                </div>
                {/*<div className="legend bordered">*/}
                    {/*<span className="icon" style={{}}/>福建省*/}
                    {/*<span className="icon" style={{background: colors['四川省']}}/>四川籍*/}
                    {/*<span className="icon" style={{background: colors['青海省']}}/>青海籍*/}

                {/*</div>*/}

                <div className="notes">
                    <p>数据实时监控中</p>
                </div>
            </div>
        </div>
    );
};