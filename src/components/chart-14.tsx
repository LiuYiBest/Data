import React from 'react';

export const Chart14 = () => {
    return (


        <div className="chart10">
            <h2>作案手段分析</h2>
        <table>
            <thead>
            <tr>
                <th colSpan={2}>类型</th>
                <th>单数</th>
                <th>总计</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td rowSpan={4}>合同</td>
                <td>伪造合同</td>
                <td>10</td>
                <td rowSpan={4}>80</td>
            </tr>
            <tr>
                <td>合同诈骗</td>
                <td>20</td>
            </tr>
            <tr>
                <td>金融借款</td>
                <td>20</td>
            </tr>
            <tr>
                <td>责任纠纷</td>
                <td>30</td>
            </tr>
            <tr>
                <td rowSpan={2}>抢夺</td>
                <td>飞车抢夺</td>
                <td>22</td>
                <td rowSpan={2}>44</td>
            </tr>
            <tr>
                <td>徒手抢夺</td>
                <td>22</td>
            </tr>
            <tr>
                <td rowSpan={3}>交通</td>
                <td>醉驾</td>
                <td>40</td>
                <td rowSpan={3}>68</td>
            </tr>
            <tr>
                <td>行驶超速</td>
                <td>22</td>
            </tr>
            <tr>
                <td>肇事逃逸</td>
                <td>45</td>
            </tr>
            <tr>
                <td rowSpan={2}>诈骗</td>
                <td>贷款诈骗</td>
                <td>32</td>
                <td rowSpan={2}>102</td>
            </tr>
            <tr>
                <td>电信诈骗</td>
                <td>80</td>
            </tr>
            </tbody>
        </table>
            </div>
    );
};