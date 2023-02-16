import "./navbar.css";
import { Link } from 'react-router-dom';
import React,{useState} from 'react'
import {FaBars,FaTimes} from "react-icons/fa";


const NavBar = () => {

  const [navClick, setNavClick] = useState(false);
  const[bgColor,setBgColor] = useState(false);

  const handleClick= ()=>{
    setNavClick(!navClick);
  };

  const changeColor =() =>{

    // If our website scrolled a fixed amount of pixel,then background changed
    if(window.scrollY >= 100){
      setBgColor(true);
    }else{
      setBgColor(false);
    }
  };

  window.addEventListener("scroll",changeColor);


  return (
    <div className={ bgColor? "header header-bg" : "header" }>
        <Link to={"/"}>
            <h2>S. Bhattacharya</h2>
        </Link>
        <ul className={navClick ? "nav-menu active":"nav-menu"}>
         <li>
          <Link to="/">Home</Link>
         </li>
         <li>
          <Link to="/about">About</Link>
         </li>
         <li>
          <Link to="/project">Project</Link>
         </li>
      
         <li>
          <Link to="/contact">Contact</Link>
         </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>

         {navClick ? 
         (<FaTimes size={20} style={{color:"#fff"}}/>
         ): (<FaBars size={20} style={{color:"#fff"}}/>)}
        
        </div>
    </div>
  )
}

export default NavBar