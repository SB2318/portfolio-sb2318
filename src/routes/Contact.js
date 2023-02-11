import React from 'react';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import IntroPage from '../components/IntroPage';

const Contact = () => {
  return (
    <div>

      <NavBar />
      <IntroPage heading="Contact Me" text="Let's have a chat"/>
      <Footer />
    </div>
  )
}

export default Contact