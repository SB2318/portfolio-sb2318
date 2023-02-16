import "./hero.css";
import React from 'react'
import IntroImg from '../assets/intro_image.jpg'
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div classname="heroImg">

        <div className="mask">

            <img className="into-img" src={IntroImg} alt="Susmita Bhattacharya"/>
        </div>

        <div className="content">
            <h1>HI,I am an Android Developer</h1>
           <p>Final year undergraduate student at JGEC.</p>
           <div>

             <Link to="/project" class="btn">Projects</Link>
             <Link to="/contact" class="btn btn-light">Contact</Link>
           </div>
        </div>

    </div>
  )
}

export default HomeHero