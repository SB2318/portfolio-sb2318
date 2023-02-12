import './projectCard.css';
import React,{Component} from 'react';
import {NavLink} from "react-router-dom";
import tracky from '../assets/projects/trackyAssets/tracky_banner.png';


class Projects extends Component {

    render(){

    return(
      <div className='project-card'>
      <img src={this.props.imgsrc} alt={this.props.title}/>
      <h2 className='project-title'>{this.props.title}</h2>
      <div className='project-details'>
        <p>{this.props.text}</p>
      </div>

      <div className='pro-btns'>
        <NavLink to={this.props.view} className="btns">
          View
        </NavLink>

        <NavLink to={this.props.source} className="btns">
          Source
        </NavLink>

      </div>

  </div>
    )

    }
}

export default Projects;
