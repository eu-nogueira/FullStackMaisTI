import { ThemeProvider } from './component/theme'
import ThemeSwitcher from './component/ThemeSwitcher'

function App() {


  return (
    <>
      <ThemeProvider>
        <h1>Exemplo de Tema com useContext</h1>
        <ThemeSwitcher />
      </ThemeProvider>
    </>
  )
}

export default App