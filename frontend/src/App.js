import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {environment} from './env.js';

function App() {
  const [text, setText] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const env = environment;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Sending request with text:', text);

      const formData = new FormData();
      formData.append('text', text);

      const response = await fetch(env.fastAPIUrl+'convert', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response:', data);
      setConvertedText(data.result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App list-group-item justify-content-center align-items-center mx-auto" style={{ width: '400px', backgroundColor: 'white', marginTop: '15px' }}>
      <br />
      <br />
      <h2 className="card text-white bg-primary mb-1" style={{ maxWidth: '50rem' }}>
        Text Converter
      </h2>
      <div className="card-body" style={{ maxWidth: '50rem' }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card text-white bg-dark"><center>Type Your Text</center></h5>
          <h5 className="card text-white bg-dark"><center>Converted Text</center></h5>
        </div>
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="mb-2">
            <input
              type="text"
              className="form-control titleIn"
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Text"
            />
          </div>
          <button type="submit" className="btn btn-outline-primary mx-2" style={{ borderRadius: '50px', fontWeight: 'bold' }}>
            Convert to Uppercase
          </button>
          <br/>
        </form>
        <div className="d-flex justify-content-between align-items-center" style={{ maxWidth: '50rem' }}>
          <div style={{ maxWidth: '10rem' }}>
            <h5 className="card text-white bg-dark"><center>{text}</center></h5>
          </div>
          <br />
          <div style={{ maxWidth: '10rem' }}>
            <h5 className="card text-white bg-dark"><center>{convertedText}</center></h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;