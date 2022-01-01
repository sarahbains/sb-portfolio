import { projects } from "../data/projects.js"
import SingleProject from "../components/SingleProject.js"
import { NavLink } from "react-router-dom";

function ProjectsPage() {
    return (
        <div className="all-projects wrapper">
            <h2 className="title">All projects</h2>
            <div className="featured-projects">

                <div>{projects.works.map((work, i ) => <SingleProject key={i} 
                                                                    project = {work} /> )}</div> 
            </div>

            <NavLink className="more-link" exact to="/">Back to Home</NavLink>
        </div>

        
    )
}

export default ProjectsPage
