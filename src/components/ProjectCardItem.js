import './projectCard.css';
import React,{Component} from 'react';
import Projects from './Projects';
import ProjectCardData from './ProjectCardData';

class ProjectCardItem extends Component {

    render(){

    return(
    <div class='work-container'>

        <h1 className="project-heading">
            I have worked on the following projects.
        </h1>

        <div className='project-container'>
           {
            ProjectCardData.map((val,ind)=>{
              return (
                <Projects 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
                />
                )
            })
           }
        </div>

        </div>
    )

    }
}

export default ProjectCardItem;
