import React, { Component } from "react"

import { Rectangle } from "react-shapes"

import Node from "./Node"

export default class Network extends Component {
  componentWillMount() {
    const nodes = this.props.layer.getNodes()
    this.setState({ nodes })
  }

  render() {
    return (
      <div style={{  }}>
        <Rectangle width={600} height={75} fill={{color:"#2409ba"}} strokeWidth={3} />
        {this.state.nodes.map(node => <Node node={node} key={Math.random()+Date.now()} />)}
      </div>
    )
  }
}
