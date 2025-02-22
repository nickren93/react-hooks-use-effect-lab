import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }
  
  
  useEffect(() => {
    /*
    let timeOutFunction
    if(timeRemaining>0){
      timeOutFunction = setTimeout(() => {
        setTimeRemaining(timeRemaining-1)}, 1000)
    }else{
      timeOutFunction = setTimeRemaining(10)
      onAnswered(false)
    }

    return function cleanup(){
      clearTimeout(timeOutFunction)
    }
    */
    const timeOutFunction = setTimeout(() => {
      if(timeRemaining > 1){
        setTimeRemaining(timeRemaining-1)
      }else{
        setTimeRemaining(10)
        onAnswered(false)
      }
    }, 1000)
    
    return function cleanup(){
      clearTimeout(timeOutFunction)
    }

  }, [timeRemaining])
  

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
