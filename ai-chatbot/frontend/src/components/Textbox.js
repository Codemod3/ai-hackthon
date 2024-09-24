import React from 'react';

const TextBox = ({ prompt, setPrompt }) => {
  return (
    <textarea
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      placeholder="Enter your topic here..."
      className="textbox"
    />
  );
};

export default TextBox;
