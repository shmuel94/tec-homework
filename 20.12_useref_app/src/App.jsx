import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import GetFullDate from './components/GetFullDate'

function App() {
  const [insertCount, setinsertCount] = useState(15)

  return (
    <div className="App">
      <GetFullDate/>
        <input
        type="number"
        onChange={(evt) => {
          setinsertCount(Number(evt.target.value));
        }}
      />
      <Counter num = {insertCount}/>
    </div>
  )
}

export default App
