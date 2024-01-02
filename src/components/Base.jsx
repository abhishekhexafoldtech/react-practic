

import { useState } from 'react'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  const [namee, setNamee] = useState('abcd')
  const [data, setData] = useState('')

  function sendData(data) {
    setData(data)
    console.log(data)
  }

  return (
    <>
    <h1>Hello {namee} | {data}</h1>

      <Card 
       name='abhi' 
       sendData={sendData}
      />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <button onClick={()=> setNamee('xyz')}>
          click me
        </button>
      </div>
    </>
  )
}

export default App
