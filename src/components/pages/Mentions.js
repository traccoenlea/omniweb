import React, { useEffect } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";

export const Mentions = () => {
  //scroll en haut de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="appContainer flex flexc jcc">
      <ScrollToTopButton />
      <div className="mentionsContainer">
        <div className="TitleContainerAccent">
          <h1 className="Title">Mentions Légales</h1>
        </div>
        <ul>
          <li>Nom, Prénom du Directeur de publication : Léa TRACCOEN</li>
          <li>
            Coordonnées commerciales :
            <ul className="soustitre">
              <li>4 rue des Buisses, 59800 Lille</li>
              <li>Tél. : 07 49 41 48 42</li>
              <li>Email : contact@omnistos.fr</li>
            </ul>
          </li>
          <li>Bénéficiaire d’un CAPE jusqu’au 11/03/2025 maximum</li>
          <li>Espace des Entrepreneurs</li>
          <li>Siret 418 541 553 000 32</li>
          <li>Le TVA intracommunautaire : FR 23 418 541 553</li>
          <li>Le code NAF : 8899B</li>
          <li>Site réalisé par l'agence de communication Omnistos</li>
          <li>Centre serveur</li>
          <li>
            Ce site est hébergé par la société Vercel Inc., située 340 S Lemon
            Ave #4133 Walnut, CA 91789, et joignable au (559) 288-7060.
          </li>
          <li>Représentant légal : Michaël Van Bouchotte</li>
        </ul>
      </div>
    </div>
  );
};
