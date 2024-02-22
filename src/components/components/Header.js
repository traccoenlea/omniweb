import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";

export const Header = () => {
  return (
    <div className="appContainer header flex jcb">
      <NavLink to="/offre" className="flex flexc jcc">
        Nos offres
      </NavLink>
      <NavLink to="/projets" className="flex flexc jcc">
        Nos projets
      </NavLink>
      <NavLink to="/" className="flex flexc jcc">
        <img src={logo} className="logo" alt="omniweb logo" />
      </NavLink>
      <NavLink to="/agence" className="flex flexc jcc">
        L'agence
      </NavLink>
      <NavLink to="/blog" className="flex flexc jcc">
        Notre blog
      </NavLink>
    </div>
  );
};
