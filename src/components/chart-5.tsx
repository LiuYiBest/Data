import React from 'react';

export const Chart5 = () => {
    return (
        <div className="chart5">
            <h2>往年行政犯罪案例</h2>
            <table>
                <thead>
                <tr>
                    <th>年份</th><th>破案数</th><th>抓获犯人</th><th>行政拘留</th><th>现勘录入</th>
                    <th>视侦录入</th><th>合计</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>2019</td><td>59</td><td>45</td><td>24</td><td>35</td><td>57</td><td>220</td>
                </tr>
                <tr>
                    <td>2020</td><td>52</td><td>47</td><td>20</td><td>33</td><td>47</td><td>199</td>
                </tr>
                <tr>
                    <td>2021</td><td>41</td><td>32</td><td>24</td><td>35</td><td>37</td><td>169</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};