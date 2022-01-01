import { projects } from "../data/projects.js"
import SingleProject from "./SingleProject.js"
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

function FeaturedProjects() {

    return (
        <Fade bottom>
        <div id="projects" className="content-section">
            

            <div className="featured-projects">
                <h2> Featured Projects</h2>
                <div>{projects.works.filter(category => category.category == 'Featured Project').map((work, i ) => <SingleProject key={i} 
                                                                    project = {work} /> )}</div>
            </div>
            <NavLink className="more-link all-projects-link" to="/all-projects/">See All Projects</NavLink>
        </div>
        </Fade>
    )
}

export default FeaturedProjects
