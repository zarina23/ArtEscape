import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apicalls from './apicalls.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Apicalls />
    </>
  )
}

export default App
