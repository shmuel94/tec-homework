import { useState } from 'react'
import './App.css'
import Reedit from './components/Reedit'
import ReeditIput from './components/ReeditIput'
import Unmount from './components/Unmount'

function App() {
 const [id,setId] = useState(0)
const [input, setInput] = useState("reactjs")

  return (
    <div className="App">
      <h1>use Effect</h1>
      <Unmount/>
      <Reedit/>
      <input onChange={(e)=>setInput(e.target.value)}/>
      <ReeditIput url ={input}/>
    </div>
  )
}

export default App
