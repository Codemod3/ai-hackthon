import React from 'react';
import '../App.css'; // Correct import path for App.css

const QuestionList = ({ questions }) => {
  return (
    <div id="output">
      {questions.length > 0 ? (
        <ul>
          {questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default QuestionList;
