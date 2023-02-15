import React from 'react';
import NavBar from "../components/nav/NavBar";
import Footer from '../components/footer/Footer';
import IntroPage from '../components/IntroPage';
import AboutContent from '../components/about/AboutContent';

const About = () => {
  return (
    <div>
     <NavBar />
     <IntroPage heading="ABOUT" text="Crafting innovative mobile experiences through code and creativity"/>
     <AboutContent/>
     <Footer/>
    </div>
  )
}

export default About