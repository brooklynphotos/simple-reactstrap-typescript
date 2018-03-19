import 'bootstrap/dist/css/bootstrap.css'

import * as React from 'react'
import './App.css'

import Greet from './components/greet'

const logo = require('./logo.svg')

const techStack = ['React', 'Typescript', 'Webpack', 'Bootstrap']

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Greet techs={techStack} />
      </div>
    )
  }
}

export default App
