import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { lists } from '../static/RecoomList'
import { Button } from 'antd'
import { fetchPreferenceStatics } from '../store/global/Action'
import TrackList from './TrackList'

const selectList = (lists, track) => {
  return lists[track]
}

class Recommend extends Component {
  constructor(props) {
    super(props)
    this.activeChange = this.activeChange.bind(this)
  }
  activeChange(change) {
    this.props.preferenceUpdate(change)
  }
  render() {
    const { track, preference } = this.props.statics
    const itemTrack = lists[track]
    const active = preference !== 0 ? preference : itemTrack[0]
    return (
      <Fragment>
        {itemTrack.map((item, index) => {
          if (item == active) {
            return <Button type="primary">{item}</Button>
          } else {
            return (
              <Button type="dashed" onClick={() => this.activeChange(item)}>
                {item}
              </Button>
            )
          }
        })}
        <TrackList track={active} />
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    statics: state.statics
  }
}
function mapDispatchToProps(dispatch) {
  return {
    preferenceUpdate: item => {
      dispatch(fetchPreferenceStatics(item))
    }
  }
}
// export default Recommend
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommend)
