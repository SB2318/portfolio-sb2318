import './introPage.css';

import React,{Component} from 'react'

class IntroPage extends Component{

  render(){
  return (
    <div className='intro-page'>

        <div className='heading'>
           <h1>{this.props.heading}</h1>
           <p>{this.props.text}</p>
        </div>

    </div>
  )
  }
}

export default IntroPage