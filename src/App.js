import { useState, useEffect } from 'react';
import Router from "./router";
import './App.css';

function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  console.log(width);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
