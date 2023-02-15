import React from 'react';
import NavBar from "../components/nav/NavBar";
import Footer from '../components/footer/Footer';
import IntroPage from '../components/IntroPage';
import ContactForm from '../components/contact/ContactForm';

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