import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ title, link }) => {
  return (
    <NavLink className="button flex jce" to={link}>
      <div className=" flex flexc jcc tac">{title}</div>
      <i className="fa-solid fa-arrow-right flex flexc jcc"></i>
    </NavLink>
  );
};

export default Button;
