import { useState } from 'react'

const ThreeCounter = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)

  return (
    <div>
      <button onClick={() => setCounter1(counter1 + 1)}>first Increment</button>
      <button onClick={() => setCounter2(counter2 + 2)}>second Increment</button>
      <button onClick={() => setCounter3(counter3 + 3)}>third Increment</button>
      <p>counter : {counter1}</p>
      <p>counter : {counter2}</p>
      <p>counter : {counter3}</p>
    </div>
  )
}

export default ThreeCounter