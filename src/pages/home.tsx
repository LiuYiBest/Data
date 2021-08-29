import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.jpg'
import * as echarts from 'echarts';
//抽离自适应宽度函数
const px = (n)=>n/2420*(window as any).pageWidth;


export const Home = () => {
    const divRef =useRef(null);
    //挂载之后
    useEffect(()=>{
        console.log(divRef.current)
        var myChart = echarts.init(divRef.current);
        myChart.setOption({
            title:{show:false},
            legend:{show:false},
            xAxis: {
                data: ['福州', '厦门', '莆田', '漳州', '龙岩', '泉州','三明','南平'],
                axisTick:{show:false},
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

            grid:{
              x: px(40),
              y:px(40),
              x2:px(40),
              y2:px(40)
            },
            yAxis: {
                splitLine:{show:false},
                axisLabel:{
                    fontSize: px(12)
                }
            },
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20,12,17]
            }]
        });
    },[])
    return (
        <div className="home">
            <header style={{backgroundImage:`url(${headerBg})`}}></header>
            <main>
                <section className="section1">
                    <div className="border fuck">
                        <h2>派出所管辖统计</h2>
                        <div ref={divRef} className="chart">
                        </div>
                    </div>
                </section>
                <section className="border section2"></section>
                <section className="border section3"></section>
                <section className="border section4"></section>
                <section className="border section5"></section>
            </main>
        </div>
    );
};
