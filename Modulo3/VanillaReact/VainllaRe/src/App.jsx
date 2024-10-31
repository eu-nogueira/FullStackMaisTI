import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function Related() {
    one.textContent = 'Official web page (react.dev)'
    two.textContent = 'Next.js (Fullstack framework)'
    three.textContent = 'React Native (build native mobile apps with React)'
    four.style.color = 'transparent'
    WhyRe.style.backgroundColor = '#1C1C1C'
    CoreRe.style.backgroundColor = '#1C1C1C'
    RelaRe.style.backgroundColor = '#FFD700'
    WhyRe.style.color = 'white'
    CoreRe.style.color = 'white'
    RelaRe.style.color = 'black'
  }
  function Why() {
    one.textContent = 'React is extremely popular'
    two.textContent = 'It makes building complex, interactive UIs a breeze'
    three.textContent = "it's powerful & flexible"
    four.style.color = 'white'
    four.textContent = "It has a very active and versatile ecosystem"
    CoreRe.style.color = 'white'
    WhyRe.style.backgroundColor = '#FFD700'
    WhyRe.style.color = 'black'
    RelaRe.style.color = 'white'
    CoreRe.style.backgroundColor = '#1C1C1C'
    RelaRe.style.backgroundColor = '#1C1C1C'
  }
  function Core() {
    one.textContent = 'Components, JSX, Props'
    two.textContent = 'State'
    three.textContent = "Hooks(e.g., useEffect())"
    four.textContent = "Dynamic rendering"
    four.style.color = 'white'
    RelaRe.style.color = 'white'
    WhyRe.style.backgroundColor = '#1C1C1C'
    CoreRe.style.backgroundColor = '#FFD700'
    RelaRe.style.backgroundColor = '#1C1C1C'
    WhyRe.style.color = 'white'
    CoreRe.style.color = 'black'
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: '40px' }}>
          <img src="/OIP-removebg-preview.png" alt="logo js" width={80} height={70} />
        </div>
        <div>
          <h1 style={{ color: 'yellow' }}>Vanilla Javascript</h1>
          <p style={{ color: '#F0E68C', marginTop: -40 }}>i.e, JavaScript without any (UI) framework or library</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '5px', padding: '10px' }}>
        <div id='WhyRe' style={{ padding: '5px', backgroundColor: '#FFD700', borderRadius: '5px', cursor: 'pointer', color: 'black', transition: '1s' }} onClick={Why}>Why React</div>
        <div id='CoreRe' style={{ padding: '5px', backgroundColor: '#1C1C1C', borderRadius: '5px', cursor: 'pointer', transition: '1s' }} onClick={Core}>Core Features</div>
        <div id='RelaRe' style={{ padding: '5px', backgroundColor: '#1C1C1C', borderRadius: '5px', cursor: 'pointer', transition: '1s' }} onClick={Related}>Related Resources</div>
      </div>
      <div>
        <ul id='list' style={{ backgroundColor: '#363636', padding: '20px', marginLeft: '10px', marginTop: '-10px', borderRadius: '5px', marginBottom: '290px' }}>
          <li id='one'> React is extremely popular</li>
          <li id='two'> It makes building complex, interactive UIs a breeze</li>
          <li id='three'> it's powerful & flexible</li>
          <li id='four'> It has a very active and versatile ecosystem</li>
        </ul>
      </div>
    </div>
  )
}

export default App
