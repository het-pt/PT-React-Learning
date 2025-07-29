import React from "react";

type Buttontype = {
  title: string;
};

const Button = ({ title }: Buttontype) => {
  return (
    <div>
      <button>{title}</button>
    </div>
  );
};

export default Button;
