import React, { useEffect } from "react";
import waitingImg from "../../assets/img/waitingImg.png";
import { NavLink } from "react-router-dom";

export const Waiting = () => {
  //scroll en haut de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="appContainer wtgContainer">
      <div className="wtgText">
        <img src={waitingImg} alt="animation d'attente" className="wtgImg" />
        {/* <div> */}
        <p>Ne vous en faites pas !</p>
        <p>Cette page est bientôt de retour</p>
        {/* </div> */}

        <p className="wtgBackHome">
          Retour à la page{" "}
          <NavLink to="/" className="wtgNavLink">
            d'accueil
          </NavLink>
        </p>
      </div>
    </div>
  );
};
