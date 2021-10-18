import {px} from './px';

export const baseEchartOption ={
    textStyle:{
        fontSize:px(12),
        const:'#79839E',
    },
    title:{show:false},
    legend:{show: false},
    // 通过 grid 属性来控制直角坐标系内绘图网格四周边框位置
    grid:{
        x: px(40),
        y:px(40),
        x2:px(40),
        y2:px(40)
    },
}