import { useParams } from "react-router-dom";
import { projects } from "../data/projects.js"
import { NavLink } from "react-router-dom";

const imageFolderPath = process.env.PUBLIC_URL + '/assets/images/';

function SingleProjectPage() {
  let { slug } = useParams();
  const project = projects.works.find(singleProject => singleProject.slug === slug);


    return (
        <div className="single-project-info">
             <div className="project-image">
                <img src={`${imageFolderPath}${project.infoImage}`} alt={project.title} />
                <h1>{project.title}</h1>
            </div>
            <div className="wrapper">
              <div className="top-links">
                <a className="more-link" href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                <a className="more-link" href={project.liveurl} target="_blank" rel="noopener noreferrer">View Live Site</a>
              </div>
              
              <div className="project-description">
                <div>
                  <h2>About the project</h2>
                  <p>{project.overview}</p>
                </div>

                  <div className="tools-used">
                      <p>Tools Used:</p>
                      <ul>
                          {project.tools.map((tool, i)  => (
                              <li key={i}>{tool}</li>
                          ))}
                      </ul>
                  </div>
              </div>
              <div className="dev-info">
                    <h2>Development</h2>
                    <div className="dev-grid">
                        <img src={`${imageFolderPath}${project.devImage}`} alt={project.title} />
                        <p>{project.devParagraph}</p>
                    </div>
              </div>
              <div className="design-info">
                    <h2>Design</h2>
                    <div className="design-grid">
                        <img src={`${imageFolderPath}${project.designImage}`} alt={project.title} />
                          <p>{project.designParagraph}</p>
                    </div>

              </div>


            
                
                <div className="page-links">
                  <NavLink className="more-link" exact to="/">Back to Home</NavLink>
                  <NavLink className="more-link" to="/all-projects/">See All Projects</NavLink>
                </div>
            </div>
        </div>
    )
}

export default SingleProjectPage
