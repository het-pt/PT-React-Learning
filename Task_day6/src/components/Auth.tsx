import React, { useState } from "react";
import "./Auth.css";
const Auth = () => {
  const [islogin, setIsLogin] = useState<boolean>(false);

  const toggle = () => {
    setIsLogin(!islogin);
  };

  return (
    <>
      <div className="container">
        <button
          className={"btn " + (islogin ? "red" : "blue")}
          onClick={toggle}
        >
          {islogin ? "Logout" : "Login"}
        </button>
        <h1 className="title"> {islogin ? "Welcome back" : " Pls login"}</h1>
      </div>
    </>
  );
};

export default Auth;
