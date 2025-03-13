import './App.css'
import { useState } from 'react'

function App () {
  return (
    <div>
      <h1>Good Morning</h1>
      <button onClick={function () {
        alert(`I just got clicked`);
      }}>Increment</button>
    </div>
  )
}

export default App
