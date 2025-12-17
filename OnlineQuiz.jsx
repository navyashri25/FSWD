import React, { useState } from "react";

const questions = [
  {
    question: "Which language is used for React?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript"
  },
  {
    question: "What is JSX?",
    options: ["JavaScript XML", "Java Syntax", "JSON XML", "Java Extra"],
    answer: "JavaScript XML"
  },
  {
    question: "Which hook is used for state?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState"
  }
];

function OnlineQuiz() {
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (qIndex, option) => {
    if (submitted) return;
    setSelected({ ...selected, [qIndex]: option });
  };

  const handleSubmit = () => {
    let total = 0;
    questions.forEach((q, index) => {
      if (selected[index] === q.answer) {
        total++;
      }
    });
    setScore(total);
    setSubmitted(true);
  };

  const handleRestart = () => {
    setSelected({});
    setScore(0);
    setSubmitted(false);
  };

  return (
    <div className="quiz-container">
      <h1>Online Quiz</h1>

      {questions.map((q, qIndex) => (
        <div className="question-card" key={qIndex}>
          <h3>{q.question}</h3>

          {q.options.map((option, index) => (
            <label key={index} className="option">
              <input
                type="radio"
                name={`question-${qIndex}`}
                checked={selected[qIndex] === option}
                onChange={() => handleSelect(qIndex, option)}
                disabled={submitted}
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      {!submitted && (
        <button className="submit-btn" onClick={handleSubmit}>
          Submit Quiz
        </button>
      )}

      {submitted && (
        <>
          <h2 className="score">
            Your Score: {score} / {questions.length}
          </h2>
          <button className="restart-btn" onClick={handleRestart}>
            Restart Quiz
          </button>
        </>
      )}
    </div>
  );
}

export default OnlineQuiz;
