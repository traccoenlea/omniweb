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

        <p>
          En conformité avec le règlement n°2016/679, dit Règlement général pour
          la protection des données (RGPD) et la loi n°78-17 du 6 janvier 1978
          modifiée relative à l'informatique, aux fichiers et aux libertés, les
          données à caractère personnel recueillies sur le site de l’entreprise
          font l’objet d’une déclaration auprès du Délégué à la Protection des
          données (DPO) de l’entreprise. Elles sont exclusivement à usage
          interne de l’entreprise. Les données personnelles collectées par
          l’entreprise peuvent l’être pour différentes finalités, selon les
          pages du site et les formulaires de recueil concernés. Principalement,
          il s’agit de la gestion des demandes d’informations. Les données sont
          conservées pendant toute la durée de la relation établie, et jusqu’à 3
          ans maximum après, selon la nature de la relation concernée. Les
          données ainsi collectées ne seront ni cédées, ni échangées ou louées.
          Conformément aux textes susvisés, vous disposez d'un droit
          d’opposition, d'accès, de rectification, de suppression, de limitation
          ou de portabilité portant sur les données vous concernant. Ces droits
          peuvent être exercés en vous adressant à : Léa TRACCOEN. Correspondant
          Informatique et libertés, au 07 49 41 48 42 en précisant dans l’objet
          du courrier « Droit des personnes » et en joignant la copie de votre
          justificatif d’identité :
          <br />
          soit directement sur le site, par courriel :
          <span className="color"> contact@omnistos.fr </span>
          <br />
          soit en écrivant au :{" "}
          <span className="color">4 rue des Buisses, 59800 Lille</span>
          <br />
        </p>
      </div>
    </div>
  );
};
