import React, { useState } from 'react';
import TextBox from './TextBox';
import QuestionList from './QuestionList';

const AIQuestionGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/generate', { // Flask URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }), // Send the prompt from the textbox
      });

      const data = await response.json(); // Parse the returned data from Flask

      if (data.status === 'success') {
        setQuestions(data.questions);  // Update the questions in the UI
        setError(null);                // Clear previous errors
      } else {
        setError(`Error: ${data.message}`);  // Display error if returned from Flask
        setQuestions([]); // Clear questions if there's an error
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setQuestions([]);  // Clear questions if there's an error
    }
  };

  return (
    <div className="container">
      <h1>AI Question Generator</h1>
      <TextBox prompt={prompt} setPrompt={setPrompt} />
      <button onClick={handleGenerate}>Generate Questions</button>

      {error && <p className="error">{error}</p>}

      <QuestionList questions={questions} />
    </div>
  );
};

export default AIQuestionGenerator;
