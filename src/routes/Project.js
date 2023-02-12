import React from 'react';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import IntroPage from '../components/IntroPage';
import ProjectCardItem from '../components/ProjectCardItem';

const Project = () => {
  return (
    <div>

      <NavBar />
      <IntroPage heading="PROJECTS." text="Some of my most recent work."/>
      <ProjectCardItem/>
      <Footer />
    </div>
  )
}

export default Project