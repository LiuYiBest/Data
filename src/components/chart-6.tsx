import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import china from '../geo/china.json';

export const Chart6 = () => {
    const divRef = useRef(null);
    const colors = {'福建省': '#ee6666', '广东省': '#1cdb7c', '浙江省': '#06E1EE'};
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        // @ts-ignore
        //使用echarts注册中国地图
        echarts.registerMap('CN', china);
        myChart.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            visualMap: {
                min: 800,
                max: 2000,
                text: ['人数统计'],
                realtime: false,
                top:200,
                left: 540,
                calculable: true,
                textStyle: {color: [ 'yellow']},
                inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered']
                }
            },
            series: [
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '福建省', value: 800},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['福建省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN',
                    data: [
                        {name: '广东省', value: 1900},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['广东省'],
                        borderColor: 'yellow',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN',
                    data: [
                        {name: '浙江省', value: 1300},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['浙江省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
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
                <div className="legend bordered">
                    <span className="icon" style={{background: colors['福建省']}}/>福建省
                    <span className="icon" style={{background: colors['广东省']}}/>广东省
                    <span className="icon" style={{background: colors['浙江省']}}/>浙江省
                </div>
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