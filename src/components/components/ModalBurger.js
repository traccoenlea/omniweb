import React from "react";
import { NavLink } from "react-router-dom";

function ModalBurger(modalOpen) {
  return (
    <div className="backgroundBurger">
      <div className={`modalBurger ${modalOpen ? "active" : ""}`}>
        {modalOpen && (
          <>
            <ul>
              <li>
                <NavLink to="/offre" className="">
                  Nos offres
                </NavLink>
              </li>

              <li>
                <NavLink to="/projets" className="">
                  Nos projets
                </NavLink>
              </li>
              <li>
                <NavLink to="/agence" className="">
                  L'agence
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="">
                  Notre blog
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default ModalBurger;
