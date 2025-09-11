import { useState } from 'react'
import Calc from './comp/Calc'



import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Calc/>
    </>
  )
}

export default App
