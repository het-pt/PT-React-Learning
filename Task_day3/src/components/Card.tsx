import React from "react";
import "./Card.css";
type CardProps = {
  title: string;
  des: string;
  img_url: string;
};
const Card = ({ title, des, img_url }: CardProps) => {
  return (
    <>
      <div className="card">
        <img src={img_url} alt="" className="img" />
        <h3 className="title">{title}</h3>
        <p className="des">{des}</p>
      </div>
    </>
  );
};

export default Card;
