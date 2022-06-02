import React, { useState } from 'react'
import './reset.css'
import './App.sass'

import ActiveGame from './views/ActiveGame/ActiveGame'
import CompletedGame from './views/CompletedGame/CompletedGame'
import NavBar from './views/shared/NavBar'

const App = () => {

  const [gameStatus, setGameStatus] = useState('active')

  let view = null
  if (gameStatus === 'active') view = <ActiveGame setGameStatus={setGameStatus}/>
  if (gameStatus === 'complete') view = <CompletedGame/>

  return (
    <div className="app">
      {!['pregame', 'active'].includes(gameStatus) && <NavBar/>}
      {view}
    </div>
  )
}

export default App
