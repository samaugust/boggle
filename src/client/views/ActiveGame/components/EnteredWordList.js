import React from 'react'

const EnteredWordList = ({ enteredWords, totalWords }) => {

  return (
    <>
      <p className="word-count">{enteredWords.length} / {totalWords}</p>
      <ul>
        {enteredWords.map(word => <li>{word}</li>)}
      </ul>
    </>
  )
}

export default EnteredWordList
