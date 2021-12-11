import { useState } from "react";
import "./RandomNumberGenerator.css";
export default function RandomNumberGenerator() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);
  function handleClick(e) {
    e.preventDefault();
    setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return (
    <div className="wrapper">
      <form className="container" onSubmit={handleClick}>
        <div className="result">
          <label>Random number: {randomNumber}</label>
        </div>

        <div className="input-fields">
          <div className="input-field">
            <label>Min value:</label>
            <input
              type="number"
              required
              onChange={(e) => {
                setMin(parseInt(e.target.value));
              }}
            />
          </div>
          <div className="input-field">
            <label>Max value:</label>
            <input
              type="number"
              required
              onChange={(e) => {
                setMax(parseInt(e.target.value));
              }}
            />
          </div>
        </div>

        <button className="btn" type="submit">
          Generate random number
        </button>
      </form>
    </div>
  );
}
