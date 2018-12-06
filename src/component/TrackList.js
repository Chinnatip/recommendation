import React, { Component } from 'react'
const TrackList = props => {
  const { track } = props
  const arrays = [...Array(track.length)] //[1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(arrays)
  return (
    <ul>
      {arrays.map((item, index) => (
        <li>
          List - {index + 1} <a href="">Buy Now</a>{' '}
        </li>
      ))}
    </ul>
  )
}

export default TrackList
