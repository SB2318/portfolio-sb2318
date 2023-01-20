import "./hero.css";
import React from 'react'
import IntroImg from '../assets/humsakal1.jpg'

const HomeHero = () => {
  return (
    <div classname="heroImg">

        <div className="mask">

            <img className="into-img" src={IntroImg} alt="Susmita Bhattacharya" width="500" height="500"/>
        </div>

        <div className="content">
            <p></p>
        </div>

    </div>
  )
}

export default HomeHero