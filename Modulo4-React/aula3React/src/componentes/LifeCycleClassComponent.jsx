import { Component } from 'react'

class LifeCycleClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }  
    }
        ComponentDidMount() {
            console.log("Componente montado")
        }

        ComponentDidUpdate() {
            console.log("Componente atualizado! propriedades e estados anteriores:: " + prevProps, prevState)
        }
        ComponentDidUnmount() {
            console.log("Componente será desmontado!")
        }

        increment = () => {
            this.setState = { count: this.state.count + 1 }
        }
}