import React, { Component } from "react"

import Layer from "./Layer"

export default class Network extends Component {
  componentWillMount() {
    console.log("Network: ", this.props.network)
    const layers = this.props.network.getLayers()
    this.setState({ layers })
  }

  render() {
    return (
      <div style={{ width: 600 }}>
        {this.state.layers.map(layer => <Layer layer={layer} key={Math.random()+Date.now()} />)}
      </div>
    )
  }
}
