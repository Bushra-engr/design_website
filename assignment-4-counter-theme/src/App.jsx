import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="container">
        <h1>Counter & Theme Switcher</h1>

        <div className="counter-box">
          <h2>Counter</h2>
          <div className="count">{count}</div>

          <div className="buttons">
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increase}>Increase</button>
          </div>
        </div>

        <div className="theme-box">
          <h2>Theme Switch</h2>
          <p>Current Theme: {darkMode ? "Dark" : "Light"}</p>

          <button onClick={toggleTheme}>
            Switch to {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;