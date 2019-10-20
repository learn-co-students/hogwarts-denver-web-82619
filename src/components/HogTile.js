import React, { Component } from 'react'

export default class HogTile extends Component {

  state = {
    showDetails: false
  }

  toggleDetails = () => {
    this.setState(prevState => {
      return { showDetails: !prevState.showDetails }
    })
  }

  showDetails = () => {
    if (this.state.showDetails) {
      return (
        <div>
          <p>Weight: {this.props.weight}</p>
          <p>{this.props.isGreased ? "Greased" : "Ungreased"}</p>
          <p>Specialty: {this.props.specialty}</p>
          <p>Medal: {this.props.medal}</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="ui eight wide column" onClick={this.toggleDetails}>
        <img src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/pig.png" alt={this.props.name} />
        <p>{this.props.name}</p>
        {this.showDetails()}
      </div>
    )
  }
}

// const nameToImageName = (name) => {
//   return name.toLowerCase().replace(/ /g, "_")
// }
