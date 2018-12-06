import React, { Fragment, Component } from 'react'
import Recommend from '../component/Recommend'
import Greeting from '../component/Greeting'

const Home = () => {
  return (
    <Fragment>
      <Greeting />
      <hr />
      <Recommend />
    </Fragment>
  )
}

export default Home
