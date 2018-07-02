import React, { Component } from 'react';

class About extends Component {
  render(){
    return(

        <div className="Item-list">
          <p>
          Alex's Super Duper Cool Store Where We Offer Super Duper Awesome Stuff.<br></br>
          Working with Amazon Go!<br></br>
          </p>
          <iframe width="560" height="315" title="About Video"
            src="https://www.youtube.com/embed/NrmMk1Myrxc?rel=0"
            frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
          </iframe>
        </div>
    )
  }
}

export default About;
