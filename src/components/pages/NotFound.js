import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ErrorImg from "../../assets/img/404Img.jpg";

export const NotFound = () => {
  //scroll en haut de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="appContainer errContainer">
      <div className="errText">
        <img src={ErrorImg} alt="animation d'attente" className="errImg" />
        {/* <div> */}
        <p>Erreur 404</p>
        <p>La page que vous cherchez est introuvable</p>
        {/* </div> */}

        <p className="errBackHome">
          Retour à la page{" "}
          <NavLink to="/" className="errNavLink">
            d'accueil
          </NavLink>
        </p>
      </div>
    </div>
  );
};
