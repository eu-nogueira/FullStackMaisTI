import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './MySite/Home'
import About from './MySite/About'
import Services from './MySite/Services'
import Contact from './MySite/Contact'
import './MySite/new.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
