import React, { Component } from 'react'

export default class SelectButton extends Component {

  makeOptions = () => {
    return this.props.options.map(option => {
      return (
        <option value={option}>{option}</option>
      )
    })
  }

  render() {
    return (
      <select onChange={this.props.handleChange} className={this.props.type}>
        {this.makeOptions()}
      </select>
    )
  }
}