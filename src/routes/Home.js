import React from 'react';
import NavBar from "../components/NavBar";
import HomeHero from "../components/HomeHero";
import Footer from '../components/Footer';
import ProjectCardItem from '../components/ProjectCardItem'
const Home = () => {
  return (
    <div>
      <NavBar />
      <HomeHero/>
     <ProjectCardItem/>
      <Footer />
    </div>
  )
}

export default Home