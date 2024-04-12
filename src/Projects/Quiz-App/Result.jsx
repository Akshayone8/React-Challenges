const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswer = userAnswers.filter((Ans) => Ans).length;
  //   console.log(userAnswers); it will give array of true or false
  return (
    <>
      <h1>Result</h1>
      <p>
        You Answered {correctAnswer} out of {questions.length}
      </p>
      <button onClick={resetQuiz}>Reset</button>
      <ul>
        {questions.map((question, index) => {
          return (
            <li key={index} data-correct={userAnswers[index]}>
              Q{index} {question.question}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Result;
