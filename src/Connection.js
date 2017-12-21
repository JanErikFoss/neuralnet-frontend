import React, { Component } from "react"

export default class Network extends Component {
  componentWillMount() {
    const { n1, n2, weight } = this.props.connection
    this.setState({ n1, n2, weight })
  }

  render() {
    return (
      <div>
      </div>  
    )
  }
}

// <LineTo from={this.props.n1} to={this.props.n2} />
