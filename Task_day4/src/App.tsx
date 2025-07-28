import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <section className="container">
        <h1 className="title">Your Count is : {count}</h1>
        <div className="button-container">
          <Button title="increase" color="red" onClick={increase} />
          <Button title="decrease" color="blue" onClick={decrease} />
        </div>
      </section>
    </>
  );
}

export default App;
