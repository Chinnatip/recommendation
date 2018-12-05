import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './route/Home'
import About from './route/About'
import Post from './route/Post'
import Project from './route/Project'
import Recommend from './component/Recommend'
//
import 'antd/dist/antd.css'
import styled from 'styled-components'

const Brand = styled.div`
  vertical-align: middle;
  display: flex;
  align-items: center;
  h4 {
    margin-bottom: 0;
  }
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'chin',
      rec: 'REC01'
    }
    this.activeClick = this.activeClick.bind(this)
  }
  activeClick(text) {
    alert(text)
    this.setState({
      rec: 'REC03'
    })
  }
  componentDidMount() {
    this.setState({
      name: 'bodin'
    })
  }
  render() {
    return (
      <div className="my-app">
        <nav
          className="navbar is-light"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <Brand className="navbar-brand">
              <a className="navbar-item" href="https://www.kohlife.com">
                <img
                  src="data:image/png;base64,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"
                  alt="Recommendation"
                />
              </a>
              <h4>Recommedation App {this.state.name}</h4>
            </Brand>
            <div className="navbar-menu">
              <div className="navbar-end">
                <a href="/" className="navbar-item">
                  Home
                </a>
                <a
                  onClick={() => this.activeClick('hello')}
                  className="navbar-item"
                >
                  click
                </a>
                <a href="/posts" className="navbar-item">
                  Posts
                </a>
                <a href="/projects" className="navbar-item">
                  Projects
                </a>
                <a href="/about" className="navbar-item">
                  About
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="App container">
          <Recommend record={this.state.rec} />
          <Route exact path="/" component={Home} name={this.state.name} />
          <Route exact path="/about" component={About} />
          <Route exact path="/posts" component={Post} />
          <Route exact path="/projects" component={Project} />
        </div>
      </div>
    )
  }
}

export default App
