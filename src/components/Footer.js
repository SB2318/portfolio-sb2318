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
          <p>This is me Susmita Bhattacharya. Software Engineer Intern at TopNotch IT Consultant.
           I am a dedicated and skilled Android developer who is committed to delivering high-quality  and user-friendly mobile applications.
          I enjoy discussing new projects and design challenges.</p>

          <div className="social-link">

          <FaLinkedin size={25} style={{color: "#fff", marginRight:"1rem"}}/>
          <FaTwitter size={25} style={{color: "#fff", marginRight:"1rem"}}/>
          <FaGithub size={25} style={{color: "#fff", marginRight:"1rem"}}/>
          </div>
        </div>
     </div>

    </div>
  )
}

export default Footer