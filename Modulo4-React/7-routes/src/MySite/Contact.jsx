import { Navigate } from "react-router-dom"

function Contact() {

    const goToHome = () => {
        Navigate('/Home')
    }

    return (
        <div>
        <h1 style={{textAlign: 'center', margin: 'Auto', marginTop: '150px'}}>Você pode entrar em contato com a Stretch Films Inc. da seguinte forma:

        Endereço: 464 Hudson Street #184, NYC, NY 10014, Estados Unidos
        
        E-mail: info@stretchfilms.com</h1>

        <button onClick={goToHome}>Home</button>
        </div>
    )
}

export default Contact