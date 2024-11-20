import { Component } from "react";

class Exerc extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
    componentDidMount() {
        console.log("Montado")
    }
    Increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Componente atualizado! Propriedades e estados anteriores: " + prevProps, prevState)
    }

    Decrement = () => {
        if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 })
    }
    }
    componentWillUnmount() {
        console.log("Componente será desmontado!")
    }

    Reset = () => {
        this.setState({ count: this.state.count - this.state.count })


    }

    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: '200px' }}>
                <h1>Contador: {this.state.count}</h1>
                <button onClick={this.Increment}>Incrementar</button>
                <button onClick={this.Decrement}>Decrementar</button>
                <button onClick={this.Reset}>Resetar</button>
            </div>
        )
    }
}

export default Exerc