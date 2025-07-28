import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState<string>("");
  const input_display = () => {
    alert("hello " + name);
  };

  const update = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <form onSubmit={input_display}>
        <h1>Enter Your Name :</h1>
        <input type="text" onChange={update} />
        <br />
        <button>Click me !</button>
      </form>
    </>
  );
}

export default App;
