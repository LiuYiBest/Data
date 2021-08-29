import React from 'react';
import './home.scss';
import headerBg from '../images/header.jpg'
console.log(headerBg)

export const Home = () => {
    return (
        <div className="home">
            <header style={{backgroundImage:`url(${headerBg})`}}></header>
            <main>
                <section className="section1">
                    <div className="border fuck">
                        <h2>派出所管辖统计</h2>
                        <div className="chart">
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
