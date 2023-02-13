import "./aboutContent.css";
import React from 'react';
import {Link} from "react-router-dom";
import android1 from '../assets/about/android1.jpg';
import android2 from '../assets/about/android2.jpg';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>A Native Android Developer who Crafting innovative mobile experiences through code and creativity</p>

            <Link to="./contact">
                <button className="btn">Contact</button>  
            </Link>
        </div>

        <div className="right">

            <div className="img-container">

                <div className="img-stack top">
                    <img src={android1} className="img" alt="Android1"/>
                </div>

                <div className="img-stack bottom">
                    <img src={android2} className="img" alt="Android2"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutContent