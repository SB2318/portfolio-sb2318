import React from 'react';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import IntroPage from '../components/IntroPage';

const About = () => {
  return (
    <div>
     <NavBar />
     <IntroPage heading="ABOUT" text="Crafting innovative mobile experiences through code and creativity"/>
     <Footer/>
    </div>
  )
}

export default About