import React from "react";
import "./Button.css";
type ButtonProps = {
  title: string;
  color: string;
  onClick: () => void;
};
const Button = ({ title, color, onClick }: ButtonProps) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
