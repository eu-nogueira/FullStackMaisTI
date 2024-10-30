import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: '40px' }}>
          <img src="/OIP-removebg-preview.png" alt="logo js" width={80} height={70} />
        </div>
        <div>
          <h1 style={{ color: 'yellow' }}>Vanilla Javascript</h1>
          <p style={{ color: 'yellow', marginTop: -40 }}>i.e, JavaScript without any (UI) framework or library</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '5px', padding: '10px'}}>
        <div style={{ padding: '5px', backgroundColor: 'gray', borderRadius: '5px', cursor: 'pointer' }}>Why React</div>
        <div style={{ padding: '5px', backgroundColor: 'gray', borderRadius: '5px', cursor: 'pointer' }}>Core Features</div>
        <div style={{ padding: '5px', backgroundColor: 'gray', borderRadius: '5px', cursor: 'pointer' }}>Related Resources</div>
      </div>
      <div>
        <ul style={{ backgroundColor: 'gray', padding: '20px', marginLeft: '10px', borderRadius: '5px', marginBottom: '250px' }}>
          <li className='one'> React is extremely popular</li>
          <li className='two'> It makes building complex, interactive UIs a breeze</li>
          <li className='three'> it's powerful & flexible</li>
          <li className='four'> It has a very active and versatile ecosystem</li>
        </ul>
      </div>
    </div>
  )
}

export default App
