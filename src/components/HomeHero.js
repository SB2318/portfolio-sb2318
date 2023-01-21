import "./hero.css";
import React from 'react'
import IntroImg from '../assets/intro_image.jpeg'
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div classname="heroImg">

        <div className="mask">

            <img className="into-img" src={IntroImg} alt="Susmita Bhattacharya"/>
        </div>

        <div className="content">
            <p>HI,I AM A SOFTWARE ENGINEER INTERN</p>
           <h1>A Passionate Android Developer</h1>
           <div>
             <Link to="/project" class="btn">Projects</Link>
             <Link to="/contact" class="btn btn-light">Contact</Link>
           </div>
        </div>

    </div>
  )
}

export default HomeHero