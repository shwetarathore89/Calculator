import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (buttonValue) => {
    try {
      if (buttonValue === '=') {
        setValue(eval(value));
      } else if (buttonValue === 'AC') {
        setValue('');
      } else if (buttonValue === 'DE') {
        setValue(value.slice(0, -1));
      } else {
        setValue(value + buttonValue);
      }
    } catch (error) {
      setValue('Error');
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={() => handleButtonClick('AC')} />
            <input type="button" value="DE" onClick={() => handleButtonClick('DE')} />
            <input type="button" value="." onClick={() => handleButtonClick('.')} />
            <input type="button" value="/" onClick={() => handleButtonClick('/')} />
          </div>
          <div>
            <input type="button" value="7" onClick={() => handleButtonClick('7')} />
            <input type="button" value="8" onClick={() => handleButtonClick('8')} />
            <input type="button" value="9" onClick={() => handleButtonClick('9')} />
            <input type="button" value="*" onClick={() => handleButtonClick('*')} />
          </div>
          <div>
            <input type="button" value="4" onClick={() => handleButtonClick('4')} />
            <input type="button" value="5" onClick={() => handleButtonClick('5')} />
            <input type="button" value="6" onClick={() => handleButtonClick('6')} />
            <input type="button" value="+" onClick={() => handleButtonClick('+')} />
          </div>
          <div>
            <input type="button" value="00" onClick={() => handleButtonClick('00')} />
            <input type="button" value="0" onClick={() => handleButtonClick('0')} />
            <input type="button" value="=" className="equal" onClick={() => handleButtonClick('=')} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
