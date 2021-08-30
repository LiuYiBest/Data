import React from 'react';
import './home.scss';
import headerBg from '../images/header.jpg'
import {Chart1} from '../components/chart-1'
import {Chart2} from '../components/chart-2'

export const Home = () => {
    return (
        <div className="home">
            <header style={{backgroundImage:`url(${headerBg})`}}></header>
            <main>
                <section className="section1">
                    <Chart1 />
                    <Chart2 />
                </section>
                <section className="border section2">

                </section>
                <section className="border section3"></section>
                <section className="border section4"></section>
                <section className="border section5"></section>
            </main>
        </div>
    );
};
