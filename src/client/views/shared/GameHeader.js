import React from 'react'

const GameHeader = ({ gameTitle = 'mousetrapped', boardDimension = 6, minLetter = 6, minPlayers = 3, gameDuration = 180, dicPenalty = 0, minWordCount = 'high', frequencyType = 'prolific', inviteOnly = false }) => {
  const title = <h1 className="game-title">{gameTitle}</h1>
  const description = (
    <p>
      <b>{boardDimension}x{boardDimension}</b>{', '}
      <b>{minLetter}</b>{'+ letters, '}
      <b>{minPlayers}</b>{'+ players, '}
      <b>{(dicPenalty === 0 ? 'no' : `${dicPenalty} point`)}</b>{' dictionary penalty'}
      {minWordCount !== 'default' && <span>, <b>{minWordCount}</b>{' word count'}</span>}
      {inviteOnly && <span>, <b>private</b></span>}
    </p>
  )
  return (
    <div className="game-header">
      {title}
      {description}
    </div>
  )
}

export default GameHeader
