import React, { Fragment, Component } from 'react'
import { Button } from 'antd'

const Home = () => {
  return (
    <Fragment>
      <h1>This is Home Page</h1>
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>
    </Fragment>
  )
}

export default Home
