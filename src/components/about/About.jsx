import React from 'react';
import aboutImg from "../../assets/images/about-img.jpg"
import {FiCheckCircle} from 'react-icons/fi';
import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about" >
        <div className="about__grid container grid">
            <div className="about__img-wrapper">
                <img src={aboutImg} alt="" className="about__img" />
            </div>
            <div className="about__content">
                <h2 className="section__title title-left" data-title="About Us">
                    Fresh quality And Organic Tasty Coffee House For You
                </h2>
                <p className="about__description">

                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly believable.
                </p>
                <div className="about__details grid">
                    <p className="about__details-description">
                        <FiCheckCircle />
                        At vero eos et accusums et injhj odio
                    </p>
                    <p className="about__details-description">
                        <FiCheckCircle />
                        Etat vero eos et accusums et injhj odio kj mkjy miuoo
                    </p>
                    <p className="about__details-description">
                        <FiCheckCircle />
                        Vol vero eos et accusums et injhj odio knin loi
                    </p>
                </div>
                <a href="#team" className="btn">Our Experts</a>
            </div>
        </div>
    </section>
  )
}

export default About
