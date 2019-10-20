import React, { Component } from 'react'
import HogTile from './HogTile'

export default class HogList extends Component {

  generateHogTiles = () => {
    return this.props.hogs.map(hog => {
      return (
        <HogTile key={hog.name} name={hog.name} weight={hog.weight} isGreased={hog.greased} specialty={hog.specialty} medal={hog["highest medal achieved"]} />
      )
    })
  }

  render() {
    return (
      <div className="ui grid container">
        {this.generateHogTiles()}
      </div>
    )
  }
}