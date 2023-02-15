import React from 'react';
import NavBar from "../components/nav/NavBar";
import HomeHero from "../components/HomeHero";
import Footer from '../components/footer/Footer';
import ProjectCardItem from '../components/project/ProjectCardItem'
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