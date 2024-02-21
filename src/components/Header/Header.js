import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";

export const Header = () => {
  return (
    <div className="appContainer header flex jcb">
      <NavLink to="" className="flex flexc jcc">
        Nos offres
      </NavLink>
      <NavLink to="" className="flex flexc jcc">
        Nos projets
      </NavLink>
      <NavLink to="" className="flex flexc jcc">
        <img src={logo} className="logo" />
      </NavLink>
      <NavLink to="" className="flex flexc jcc">
        L'agence
      </NavLink>
      <NavLink to="" className="flex flexc jcc">
        Notre blog
      </NavLink>
    </div>
  );
};
