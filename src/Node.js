import React, { Component } from "react"

import { Circle } from "react-shapes"

import Connection from "./Connection"

export default class Network extends Component {
  componentWillMount() {
    const connections = this.props.node.getConnections()
    this.setState({ connections })
  }

  render() {
    return (
      <div>
        <Circle r={15} fill={{color:"darkred"}} stroke={{color:'#E65243'}} strokeWidth={3} />
        {this.state.connections.map(con => <Connection connection={con} key={Math.random()+Date.now()} />)}
      </div>
    )
  }
}
