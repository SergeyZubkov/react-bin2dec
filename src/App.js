import {useState} from 'react';
import './App.css';

function App() {
  const [binNumber, setBinNumber] = useState('');
  const [error, setError] = useState('');
  const [decNumber, setDecNumber] = useState('');

  const validate = str => {
    str.trim();
    
    if ( str.split("").every(d => /[01]/g.test(d)) ) {
      setError('');
    } else {
      setError('допустимы цифры 0 и 1')
    }

    return str
  }

  const binToDec = () => {
    setDecNumber(
      binNumber.split("").reverse().reduce((r, d, i) => r += d * (2 ** i), 0)
    )
  }

  const  handleClick = e => {
    e.preventDefault();

    !error&&binToDec()
  }

  return (
    <div className="app">
      <h1>Bin2Dec</h1>
      <form>
        <h2>Введите двоичное число <br/>
            и получите его в десятичном виде
        </h2>
        <div className="bin-input-container">
          <input
            value={binNumber}
            onChange={e => setBinNumber( validate(e.target.value) )}
            placeholder="0101"
          />
          <div className='bin-input-error'>{error}</div>
        </div>
          <button onClick={handleClick}>
            Перевести
          </button>
          <div className="dec">{decNumber}</div>
      </form>
    </div>
  );
}

export default App;
