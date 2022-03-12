import { useState } from 'react'
import logo from '../static/img/icons/logo.svg'
import Nav from './Nav'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <hr />
        <code>Inicio con React y Vite {count}</code>
        <button type="button" onClick={() => setCount((count) => count + 1)}>++</button>
      </header>

    </div>
  )
}

export default App