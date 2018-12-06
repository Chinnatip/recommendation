import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { fetchNameStatics, fetchLogoutStatis } from '../store/global/Action'

class Greeting extends Component {
  constructor(props) {
    super(props)
    this.activeClick = this.activeClick.bind(this)
    this.logout = this.logout.bind(this)
  }
  activeClick(loginName, track) {
    alert(`Hello, ${loginName}`)
    this.props.initName({
      name: loginName,
      status: 'member',
      track: track,
      preference: 0
    })
  }
  logout() {
    alert(`Logout from recommend system`)
    this.props.logout()
  }
  render() {
    const { name, status } = this.props.statics
    if (status == `guest`) {
      return (
        <Fragment>
          <h1>Hello, {name}</h1>
          <h5>This is your first time to recommendation model, right ?</h5>
          <div>
            <Button
              type="primary"
              onClick={() => this.activeClick('Chinnatip', 'freelance')}
            >
              Login
            </Button>
          </div>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <h1>Hi, {name}</h1>
          <h5>Welcome again !!!</h5>
          <div>
            <Button>Recommend Me Some stuff</Button>
            <Button type="danger" onClick={() => this.logout()}>
              Logout
            </Button>
          </div>
        </Fragment>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    statics: state.statics
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initName: name => {
      dispatch(fetchNameStatics(name))
    },
    logout: () => {
      dispatch(fetchLogoutStatis())
    }
  }
}

// export default Recommend
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting)
