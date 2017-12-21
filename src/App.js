import React, { Component } from "react"

import NetworkComponent from "./Network"
import Network from "./NeuralNet"

export default class App extends Component {

  componentWillMount() {
    const network = new Network({ print: false }, [5, 7, 3])

    this.setState({ network })
    //network.activate([0, 2, 4])
  }

  render() {
    return (
      <div>
        <NetworkComponent network={this.state.network} />
      </div>
    )
  }
}
