import { useState } from 'react'

function App() {
  const [button, ativaButton] = useState('button1')
  const [content, setContent] = useState(
    <ul>
      <li>React is extremely popular</li>
      <li>It makes building complex, interactive UIs a breeze</li>
      <li>It's powerful & flexible</li>
      <li>It has a very active and versatile ecosystem</li>
    </ul>
  );

  const ativaBotao = (button) => {
    ativaButton(button)

    if (button == 'button1') {
      setContent(
        <ul>
          <li>React is extremely popular</li>
          <li>It makes building complex, interactive UIs a breeze</li>
          <li>It's powerful & flexible</li>
          <li>It has a very active and versatile ecosystem</li>
        </ul>
      )
    } else if (button == 'button2') {
      setContent(
        <ul>
          <li>Components, JSX & Props</li>
          <li>State</li>
          <li>Dynamic rendering</li>
          <li>Hooks (e.g., useEffect())</li>
        </ul>
      )
    } else if (button == 'button3') {
      setContent(
        <ul>
          <li>Official web page (react.dev)</li>
          <li>Next.js (Fullstack framework)</li>
          <li>React Native (build native mobile apps with React)</li>
        </ul>
      )
    }
  }
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <button onClick={() => ativaBotao('button1')}>Why React?</button>
          <button onClick={() => ativaBotao('button2')}>Core Features</button>
          <button onClick={() => ativaBotao('button3')}>Related Resources</button>
        </div>
        <div>
          {content}
        </div>
      </div>
    )
  }
export default App
