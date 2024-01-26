import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {v4} from 'uuid'

import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Projects from './components/Projects'
import ProjectContext from './Context/ProjectContext'

const projects = [
  {
    id: v4(),
    projectName: 'Yoga',
    projectLink:
      'https://res.cloudinary.com/dssfuaou4/image/upload/v1704389303/pexels-elly-fairytale-3823207_1_hz3nx5.png',
    description:
      'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
  },
  {
    id: v4(),
    projectName: 'Books',
    projectLink:
      'https://res.cloudinary.com/dssfuaou4/image/upload/v1704389337/Rectangle_7_t0ch3x.png',
    description:
      'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
  },
  {
    id: v4(),
    projectName: 'Technology',
    projectLink:
      'https://res.cloudinary.com/dssfuaou4/image/upload/v1704389375/Rectangle_7_1_a7gptq.png',
    description:
      'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
  },
]

class App extends Component {
  state = {projectList: [...projects]}

  addProject = data => {
    console.log(data)
    this.setState(prevState => ({
      projectList: [...prevState.projectList, data],
    }))
  }

  render() {
    const {projectList} = this.state
    console.log(projectList)
    return (
      <ProjectContext.Provider
        value={{projectList, addProject: this.addProject}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </ProjectContext.Provider>
    )
  }
}

export default App
