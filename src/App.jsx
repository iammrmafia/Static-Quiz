import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './components/Quiz'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Quiz name="Static Quiz App"/>
     </div>
    </>
  )
}

export default App
