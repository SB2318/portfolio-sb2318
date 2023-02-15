import React from 'react';
import NavBar from "../components/nav/NavBar";
import Footer from '../components/footer/Footer';
import IntroPage from '../components/IntroPage';
import ProjectCardItem from '../components/project/ProjectCardItem';

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