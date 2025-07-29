import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setcount] = useState<number>(0);
  const [display, setdisplay] = useState<string>("pls enter name");
  const [formdata, setformdata] = useState<string>("Form submitted");
  const increase = () => {
    setcount(count + 1);
  };

  const set_name = (e: React.ChangeEvent<HTMLInputElement>) => {
    setdisplay(e.target.value);
  };
  const display_click = () => {
    alert(display);
  };

  const decrease = () => {
    setcount(count - 1);
  };
  const form_display = () => {
    alert(formdata);
  };

  return (
    <>
      {count}
      <br />
      <button onClick={increase}> Increase Count</button>
      <button onClick={decrease}>Decrease </button>
      <input onChange={set_name} type="text" />
      <button onClick={display_click}>Display name </button>
      <form onSubmit={form_display}>
        <h1>These is form</h1>
        <button>Submit Form</button>
      </form>

      <Button title="Hello button" />
    </>
  );
}

export default App;
