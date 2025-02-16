import React, { useState } from 'react';

export default function Form(props) {
  const [text, setText] = useState('');
  const [copiedMessage, setCopiedMessage] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClear = () => {
    let newText = '';
    setText(newText);
    setCopiedMessage(''); // Clear the copied message when clearing the text
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopiedMessage('Text Copied...');
    setTimeout(() => {
      setCopiedMessage(''); // Clear the message after 2 seconds
    }, 2000);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className="mb-3 my-5">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>{props.heading}</h2></label>
        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter your Text..." value={text} onChange={handleOnChange} rows="10"></textarea>
      </div>

      <div className="container">
        <button className="btn btn-primary" onClick={handleUpClick}>Upper Case</button>
        <button className="btn-primary btn mx-2" onClick={handleLoClick}>Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}> Clear All</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      </div>

      {copiedMessage && (
        <div className="container my-2">
          <p className="text-success">{copiedMessage}</p>
        </div>
      )}

      <div className="container my-3">
        <h4>Text Summary</h4>
        <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words</p>
        <p>{text.length} Characters</p>
      </div>
    </>
  );
}
