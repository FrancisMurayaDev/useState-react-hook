import './App.css'
import { useState } from 'react'

function App () {
  const [number, setNumber] = useState(1);

  function handleClick () {
    setNumber(number + 1);
  }
  return (
    <div>
      <h1>Good Morning - {number}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default App
