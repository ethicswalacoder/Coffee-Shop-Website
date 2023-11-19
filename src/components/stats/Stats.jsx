import React from 'react';
import coffeeShop from "../../assets/images/coffee-shop.svg";
import experience from "../../assets/images/experience.svg";
import coffeeCup from "../../assets/images/coffee-cup.svg";
import chef from "../../assets/images/chef.svg";
import "./stats.css";

const Stats = () => {
  return (
   <section className="status section">
    <div className="stats__grid container grid">
        <div className="stats__item">
            <div className="stats__img-wrapper">
                <img src={coffeeShop} alt="" className="stats__img" />
            </div>
            <div>
                <p className="stats__no">1500</p>
                <h3 className="stats__title"> + Total Branches</h3>
            </div>
        </div>
        <div className="stats__item">
            <div className="stats__img-wrapper">
                <img src={coffeeCup} alt="" className="stats__img" />
            </div>
            <div>
                <p className="stats__no">250</p>
                <h3 className="stats__title"> + Happy Customers</h3>
            </div>
        </div>
        <div className="stats__item">
            <div className="stats__img-wrapper">
                <img src={chef} alt="" className="stats__img" />
            </div>
            <div>
                <p className="stats__no">120</p>
                <h3 className="stats__title"> + Professional Chefs</h3>
            </div>
        </div>
        <div className="stats__item">
            <div className="stats__img-wrapper">
                <img src={coffeeShop} alt="" className="stats__img" />
            </div>
            <div>
                <p className="stats__no">50</p>
                <h3 className="stats__title">+ Years Of Experience</h3>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Stats
