import portrait from '../images/sarahb.jpg'
import React from 'react';
import Fade from 'react-reveal/Fade';

function About() {
    return (
        <div id="about" className="content-section" >
            <Fade bottom>
            <div>
                <h2>About Me</h2>
            </div>
            <div className = "about-content">
                
                <section>
                    <p> Hi, I’m Sarah Bains! I’m a Front-End Developer from Vancouver Island, BC. My love for computer science started after I attended the University of Waterloo’s CEMC Workshop in Computer Science for Young Women as a teen. Now, I am a recent graduate from BCIT’s Front End Web Developer program. During my time in the program, I developed (no pun intended) a passion for front-end coding and the problem solving aspect that comes with it. Currently, I am seeking a front-end web development job where I want to explore and challenge myself with new technologies and opportunities. </p>
                </section>
                <div>
                    <img src={portrait} alt="A photo of me sitting" />
                </div>
            </div>

            </Fade>
        </div>
    )
}

export default About
