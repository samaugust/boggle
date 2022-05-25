import React, { Fragment } from 'react'

const EnteredWordList = ({ enteredWords, totalWords }) => {
  console.log('enteredword', enteredWords)
  return (
    <Fragment>
      <p>{enteredWords.length}/{totalWords}</p>
      <ul>
        {enteredWords.map(word => <li>{word}</li>)}
      </ul>
    </Fragment>
  )
}

export default EnteredWordList
