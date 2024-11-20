function Nav() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'black', padding: '30px' }}>
                <ul style={{ display: 'flex', gap: '40px', listStyle: 'none' }}>
                    <li><img src="./cruz-03.svg" alt="cruz" /></li>
                    <li><h2>Ana Clara Galli</h2></li>
                </ul>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '30px', marginRight: '100px', alignItems: 'center' }}>
                    <li><a href="#">Kits</a></li>
                    <li><a href="#">Onde Comprar</a></li>
                    <li><a href="#">Fale Comigo</a></li>
                    <li style={{ backgroundColor: '#881212', padding: '5px', borderRadius: '5px' }}><a href="#">Comprar agora</a></li>
                </ul>
            </div>
    </div>
    )
}

export default Nav