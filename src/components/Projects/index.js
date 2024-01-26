import './index.css'
import ProjectContext from '../../Context/ProjectContext'

const Projects = () => (
  <ProjectContext.Consumer>
    {value => {
      const {projectList} = value
      return (
        <div>
          <h1 className="projects-heading">Projects</h1>
          {projectList.map(each => (
            <div className="projects-container">
              <div className="projects-card-container">
                <div className="project-data">
                  <h1 className="project-name">{each.projectName}</h1>
                  <p className="project-description">{each.description}</p>
                  <button className="view-project" type="button">
                    View Project
                  </button>
                </div>

                {/* image */}
                <img
                  className="project-img"
                  src={each.projectLink}
                  alt={each.projectName}
                />
              </div>
            </div>
          ))}
        </div>
      )
    }}
  </ProjectContext.Consumer>
)

export default Projects
