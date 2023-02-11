import React from 'react';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import IntroPage from '../components/IntroPage';
import ProjectCard from '../components/ProjectCard';

const Project = () => {
  return (
    <div>

      <NavBar />
      <IntroPage heading="PROJECTS." text="Some of my most recent work."/>
      <ProjectCard/>
      <Footer />
    </div>
  )
}

export default Project