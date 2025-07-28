import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import fruits from "./assets/data";

function App() {
  return (
    <>
      <div className="container">
        {fruits.map((item) => (
          <div key={item.id} className="card">
            <h3 className="emoji">{item.emoji}</h3>
            <h1>{item.title}</h1>
            <h2>{item.vitamin}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
