import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    const goToAbout = () => {
        navigate('/About')
    }
    const goToServices = () => {
        navigate('/Services')
    }
    const goToContact = () => {
        navigate('/Contact')
    }

    return (
        <div>
            <div style={{ textAlign: 'center', borderBottom: '1px solid black', height: '50px' }}>
                <button onClick={goToAbout}>About Us</button>
                <button onClick={goToServices}>Services</button>
                <button onClick={goToContact}>Contact</button>
            </div>
        </div>
    )
}

export default Home