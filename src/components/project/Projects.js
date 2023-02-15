import './projectCard.css';
import React,{Component} from 'react';




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

        <a href={this.props.view} target="_blank" className="btn">
          View
        </a>

        <a href={this.props.source} target="_blank" className="btn">
          Source
        </a>

      </div>

  </div>
    )

    }
}

export default Projects;
