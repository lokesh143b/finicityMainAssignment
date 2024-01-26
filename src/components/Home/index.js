import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import {v4} from 'uuid'

import {FaInstagramSquare, FaLinkedin} from 'react-icons/fa'
import {MdLocalPostOffice} from 'react-icons/md'

import Header from '../Header'
import Projects from '../Projects'

import ProjectContext from '../../Context/ProjectContext'

class Home extends Component {
  state = {
    projectName: '',
    projectLink: '',
    description: '',
  }

  onChangeProjectName = event => {
    this.setState({projectName: event.target.value})
  }

  onChangeProjectLink = event => {
    this.setState({projectLink: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value})
  }

  renderDescription = () => {
    const {description} = this.state

    return (
      <div className="input-container">
        <label className="label" htmlFor="projectDescription">
          Description
        </label>
        <textarea
          onChange={this.onChangeDescription}
          className="description"
          id="projectDescription"
          value={description}
        />
      </div>
    )
  }

  renderProjectLink = () => {
    const {projectLink} = this.state

    return (
      <div className="input-container">
        <label className="label" htmlFor="projectLink">
          project link
        </label>
        <input
          onChange={this.onChangeProjectLink}
          className="input"
          id="projectLink"
          value={projectLink}
        />
      </div>
    )
  }

  renderProjectName = () => {
    const {projectName} = this.state
    return (
      <div className="input-container">
        <label className="label" htmlFor="projectName">
          project name
        </label>
        <input
          onChange={this.onChangeProjectName}
          className="input"
          id="projectName"
          value={projectName}
        />
      </div>
    )
  }

  render() {
    return (
      <ProjectContext.Consumer>
        {value => {
          const {addProject} = value

          const onSubmitProject = event => {
            event.preventDefault()

            const {projectName, projectLink, description} = this.state

            const newProject = {
              id: v4(),
              projectName,
              projectLink,
              description,
            }

            addProject(newProject)
            this.setState({projectName: '', projectLink: '', description: ''})
          }

          return (
            <div className="home-container">
              <Header />
              <div className="home-top-container">
                <div className="home-details-container">
                  <h1 className="home-heading1">UI/UX Designer</h1>
                  <h1 className="home-heading2">
                    Hello, my name is Madelyn Torff
                  </h1>
                  <p className="home-description">
                    Short text with details about you, what you do or your
                    professional career. You can add more information on the
                    about page.
                  </p>
                  <div className="home-btns-container">
                    <Link to="/projects">
                      <button className="projects-btn" type="button">
                        Projects
                      </button>
                    </Link>
                    <button className="linkedin-btn" type="button">
                      Linkedin
                    </button>
                  </div>
                </div>
                <div className="img-container">
                  <img
                    src="https://res.cloudinary.com/dssfuaou4/image/upload/v1704389148/pexels-artem-beliaikin-1832323-removebg-preview_osbjkj.png"
                    alt="home"
                  />
                </div>
              </div>
              {/* add projects */}
              <div className="add-projects-container">
                <h1 className="add-projects-heading">Add projects</h1>

                <form className="form-container" onSubmit={onSubmitProject}>
                  {this.renderProjectName()}
                  {this.renderProjectLink()}
                  {this.renderDescription()}

                  <button className="add-btn" type="submit">
                    Add
                  </button>
                </form>
              </div>

              {/* projects */}

              <Projects />

              {/* footer */}
              <div className="footer-container">
                <FaInstagramSquare className="icon-size" />
                <FaLinkedin className="icon-size" />
                <MdLocalPostOffice className="icon-size" />
              </div>
              <p className="footer-description">
                Copyright © 2024. All rights reserved
              </p>
            </div>
          )
        }}
      </ProjectContext.Consumer>
    )
  }
}

export default Home
