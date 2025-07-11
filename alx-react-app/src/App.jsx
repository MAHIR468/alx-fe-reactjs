import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <p>Bienvenue dans mon premier projet React avec Vite 🎉</p>
      <button onClick={() => setCount(count + 1)}>
        Compteur : {count}
      </button>
    </div>
  )
}

export default App
