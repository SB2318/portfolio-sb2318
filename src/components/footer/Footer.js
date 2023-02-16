import "./footer.css";

import React from 'react'
import {FaHome,FaMailBulk,FaPhone,FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footerMain">
     
     <div className="footer-container">
        
        <div className="left">

          <div className="location">
            <FaHome size={20} style={{color: "#fff",marginRight:"1rem",marginTop:"1.4rem"}}/>
              <p>J.G.E.C, Jalpaiguri,735102</p>
          </div>
      

        <div className="email">
            <h4>
          <FaMailBulk size={20} style={{color: "#fff", marginRight:"1rem",marginTop:"0.8rem"}}/>
            susmitabhattacharya2023@gmail.com
          </h4>
          </div>
          </div>
       
        <div className="right">
          <h4>About Me</h4>
          <p>This is me Susmita Bhattacharya.Software Engineer Intern at TopNotch IT Consultant. Currently pursuing B.Tech at Information Technology from J.G.E.C.
            I am a dedicated Android developer who is committed to delivering high-quality  and user-friendly mobile applications.
          I enjoy discussing new projects and design challenges.</p>

          <div className="social-link">

          <a href="https://www.linkedin.com/in/s-bhattacharya-3687621b7/" target="_blank">
          <FaLinkedin size={25} style={{color: "#fff", marginRight:"1rem"}}/>
          </a>

          <a href="https://mobile.twitter.com/SUSMITA2360" target="_blank">
          <FaTwitter size={25} style={{color: "#fff", marginRight:"1rem"}}/>
          </a>
          
          <a href="https://github.com/SB2318" target="_blank">
          <FaGithub size={25} style={{color: "#fff", marginRight:"1rem"}}/>
          </a>

          </div>
        </div>
     </div>

    </div>
  )
}

export default Footer