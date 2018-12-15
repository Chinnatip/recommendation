import React, { Component, Fragment } from 'react'

class NavButton extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { title, link } = this.props
    return (
      <a href={link} className="navbar-item">
        {title}
      </a>
    )
  }
}
export default NavButton
