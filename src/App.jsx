import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='Title'>
        <h2>Click + to Increment or - to Decrement</h2>
      </div>
      
      <div className="counter">
        <button onClick={() => setCount((count) => count - 1)}> - </button>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}> + </button>
      </div>

    </div>
  )
}

export default App
