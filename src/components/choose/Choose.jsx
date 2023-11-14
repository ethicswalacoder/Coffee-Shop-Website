import React from 'react'
import chooseImg from "../../assets/images/choose.jpg";
import coffeeMug from "../../assets/images/coffee-mug.svg"; 
import coffeeBeans2 from "../../assets/images/coffee-beans-2.svg"; 
import coffeeBeans3 from "../../assets/images/coffee-beans-3.svg"; 
import "./choose.css";


const Choose = () => {
  return (
   <section className="choose section">
    <div className="choose__grid container grid">
        <div className="choose__content">
            <h2 className="section__title title-left" data-title='Why choose Us'>
                Coffero Most Out of Your Favorite  Coffee House
            </h2>
            <p className="choose__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat fuga natus dolores sit, ut, illo odio distinctio maiores aut consectetur 
                qui laudantium ad nemo tempore quod voluptatibus alias odit doloremque believable.
            </p>
            <div className="choose__details grid">
                <div className="choose__details-item">
                    <div className="choose__details-img-wrapper">
                        <img src={coffeeMug} alt="" className="choose__details-img" />
                    </div>
                    <div>
                        <h3 className="choose__details-title">Awesome Aroma </h3>
                            <p className="choose__details-description">
                                There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected
                            </p>
                       
                    </div>
                </div>

                <div className="choose__details-item">
                    <div className="choose__details-img-wrapper">
                        <img src={coffeeBeans2} alt="" className="choose__details-img" />
                    </div>
                    <div>
                        <h3 className="choose__details-title"> Pure Grades </h3>
                            <p className="choose__details-description">
                                There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected
                            </p>
                      
                    </div>
                </div>
                <div className="choose__details-item">
                    <div className="choose__details-img-wrapper">
                        <img src={coffeeBeans3} alt="" className="choose__details-img" />
                    </div>
                    <div>
                        <h3 className="choose__details-title"> Healthy Coffee </h3>
                            <p className="choose__details-description">
                                There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected
                            </p>
                      
                    </div>
                </div>
            </div>
        </div>
        

           <img src={chooseImg} alt="" className="choose__img" />
         
    </div>
   </section>
  )
}

export default Choose
