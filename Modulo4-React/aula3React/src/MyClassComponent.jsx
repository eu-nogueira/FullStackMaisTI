import React, { Component } from "react";

class MyClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    IncrementCount = () => {
        this.setState = { count: this.state.count + 1 }
    }

    render() {
        return (
            <div>
                <p>Contagem: {this.state.count}</p>
                <button onClick={this.IncrementCount}>Incrementar</button>
            </div>
        )
    }
}

export default MyClassComponent