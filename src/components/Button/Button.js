import React from "react";

const Button = ({ title }) => {
  return (
    <div className="button flex jce">
      <div className=" flex flexc jcc tac">{title}</div>
      <i className="fa-solid fa-arrow-right flex flexc jcc"></i>
    </div>
  );
};

export default Button;
