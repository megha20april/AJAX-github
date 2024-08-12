import React, { useState } from 'react'
import Card from './Card'

function ButtonWithCard() {
    const [showCard, setShowCard] = useState(false)
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-blue-300 fixed inset-0">
      <button className=" p-3 bg-white rounded-3xl font-bold text-blue-900" onClick={() => setShowCard(prev => !prev)}>{showCard? 'Hide' : 'Show'} card</button>

        {showCard? <Card username="megha20april"/> : null}
    </div>
  )
}

export default ButtonWithCard
