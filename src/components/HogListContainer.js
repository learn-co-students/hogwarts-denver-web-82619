import React, { Component } from 'react'
import HogList from './HogList'
import SelectButton from './SelectButton'

export default class HogListContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: "All",
      sort: "None",
      hogs: props.hogs
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.className]: event.target.value
    })

    this.setState(prevState => {
      let tempHogs = [...this.props.hogs]
      
      if (prevState.filter === "Greased") {
        tempHogs = tempHogs.filter(hog => hog.greased)
      } else if (prevState.filter === "Ungreased") {
        tempHogs = tempHogs.filter(hog => !hog.greased)
      }
  
      if (prevState.sort === "Name") {
        tempHogs.sort((a, b) => {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        })
      } else if (prevState.sort === "Weight") {
        tempHogs.sort((a, b) => {
          return b.weight - a.weight
        })
      }

      return { hogs: tempHogs }
    })
  }
  
  filterOptions = ["All", "Greased", "Ungreased"]
  sortOptions = ["None", "Name", "Weight"]

  render() {
    return (
      <div>
        <SelectButton handleChange={this.handleChange} type="filter" options={this.filterOptions} />
        <SelectButton handleChange={this.handleChange} type="sort" options={this.sortOptions} />
        <HogList hogs={this.state.hogs} />
      </div>
    )
  }
}