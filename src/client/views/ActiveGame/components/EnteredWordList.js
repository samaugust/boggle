import React from 'react'

const EnteredWordList = ({ enteredWords, setEnteredWords, totalWords }) => {

  const deleteEnteredWord = (word) => {
    const newEnteredWords = enteredWords.filter((enteredWord) => word !== enteredWord)
    setEnteredWords(newEnteredWords)
  }

  return (
    <>
      <p className="word-count">{enteredWords.length} / {totalWords}</p>
      <ul className="entered-word-list">
        {enteredWords.map(word => <li className="entered-word" onClick={() => deleteEnteredWord(word)}>{word}</li>)}
      </ul>
    </>
  )
}

export default EnteredWordList
