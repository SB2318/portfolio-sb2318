import React from 'react';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import IntroPage from '../components/IntroPage';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>

      <NavBar />
      <IntroPage heading="Contact Me" text="Let's have a chat"/>
      <ContactForm/>
      <Footer />
    </div>
  )
}

export default Contact