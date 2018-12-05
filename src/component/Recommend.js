import React, { Fragment, Component } from 'react'

const Recommend = props => {
  console.log('rec', props.record)
  const { record } = props
  if (record == 'REC01') {
    return <h1>BODIN</h1>
  } else {
    return (
      <div>
        <h1>GIFT</h1>
      </div>
    )
  }
}

export default Recommend
