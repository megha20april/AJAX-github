import { useState } from 'react'
import ButtonWithCard from './Components/ButtonWithCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ButtonWithCard />
    </>
  )
}

export default App
