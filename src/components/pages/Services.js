import React, { useEffect, useState } from "react";
import Pack1 from "../../assets/img/text1.png";
import Pack2 from "../../assets/img/text2.png";
import Pack3 from "../../assets/img/text3.png";
import Pack4 from "../../assets/img/text4.png";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ServicesDesktop from "./ServicesDesktop";
import ServicesMobile from "./ServicesMobile";

export const Services = () => {
  //scroll en haut de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const width = window.innerWidth;

  // tableau offres communication
  let PacksCommunication = [
    {
      id: 1,
      type: "Communication",
      title: "Pack 1",
      text1: "Identité visuelle (logo et charte graphique)",
      text2: "Carte de visite",
      img: Pack1,
      className: "packContainer packPink mr5p mb5p mlR12 mR0",
      titleClassName: "titlePackContainer1",
      price: "1999,99€ HT*",
      modality: "* Prix fixé sans ajout ou modification de l'offre initiale.",
    },
    {
      id: 2,
      type: "Communication",
      title: "Pack 2",
      text1: "Identité visuelle et carte de visite",
      text2: "Carte de fidélité",
      text3: "Flyer ou affiche",
      img: Pack2,
      className: "packContainer packCom mb5p mR0",
      titleClassName: "titlePackContainer2",
      price: "2399,99€ HT*",
      modality: "* Prix fixé sans ajout ou modification de l'offre initiale.",
    },
    {
      id: 3,
      type: "Communication",
      title: "Pack 3",
      text1: "Identité visuelle et carte de visite",
      text2: "Carte de fidélité",
      text3: "Flyer ou affiche",
      text4: "Plaquette 1 pli",
      img: Pack3,
      className: "packContainer packCom mr5p mb5p mR0",
      titleClassName: "titlePackContainer2",
      price: "3399,99€ HT*",
      modality: "* Prix fixé sans ajout ou modification de l'offre initiale.",
    },
    {
      id: 4,
      type: "Communication",
      title: "Pack 4",
      text1: "Sur-mesure",
      img: Pack4,
      className: "packContainer packPink mb5p mrR12",
      titleClassName: "titlePackContainer1",
      price: "Prix sur devis",
      modality: "",
    },
  ];

  // tableau offres web
  let PacksWeb = [
    {
      id: 1,
      type: "Web",
      title: "Landing page",
      text1: "Zoning",
      text2: "Wireframe",
      text3: "Maquette et prototypage",
      text4: "Programmation",
      img: Pack1,
      className: "packContainer packPink mr5p mb5p mlR12 mR0",
      titleClassName: "titlePackContainer1",
      price: "1089,99 HT*",
      modality: "* Prix fixé sans ajout ou modification de l'offre initiale.",
    },
    {
      id: 2,
      type: "Web",
      title: "Site vitrine",
      text1: "Zoning",
      text2: "Wireframe",
      text3: "Maquette et prototypage",
      text4: "Programmation",
      img: Pack2,
      className: "packContainer packCom mb5p mR0",
      titleClassName: "titlePackContainer2",
      price: "1499,99 HT*",
      modality: "* Prix fixé sans ajout ou modification de l'offre initiale.",
    },
    {
      id: 3,
      type: "Web",
      title: "Site e-commerce",
      text1: "Zoning",
      text2: "Wireframe",
      text3: "Maquette et prototypage",
      text4: "Programmation et administration",
      img: Pack3,
      className: "packContainer packCom mr5p mb5p mR0",
      titleClassName: "titlePackContainer2",
      price: "3699,99 HT*",
      src: "",
      modality: "* Prix fixé sans ajout ou modification de l'offre initiale.",
    },
    {
      id: 4,
      type: "Web",
      title: "Site sur-mesure",
      text1: "Zoning",
      text2: "Wireframe",
      text3: "Maquette et prototypage",
      text4: "Programmation et administration",
      img: Pack4,
      className: "packContainer packPink mb5p mrR12",
      titleClassName: "titlePackContainer1",
      price: "Prix sur devis",
      modality: "",
    },
  ];

  return (
    <div className="appContainer">
      <ScrollToTopButton />
      {/* container de la page */}
      <div className="servicesContainer">
        {/* container section packs communnication */}
        <div className="Container">
          {/* container de titre et texte de présentation */}
          <div className="presentationContainer">
            {/* Arrière plan titre */}
            <div className="TitleContainerAccent">
              <h1 className="Title">Communication</h1>
            </div>
            <p className="presentation">
              <span className="color">"Communication is key" </span>, c'est une
              phrase que vous avez dû souvent entendre. Elle prend effet, non
              seulement, dans votre communication interne (au sein même de votre
              structure) ou externe (pour vos clients, prospects, partenaires,
              fournisseurs) mais aussi lors de la création de communications
              print ou digitales. <br />
              (On en entend aussi parler lors de communication verbale la
              plupart du temps ! )
            </p>
          </div>
          {/* Container des packs communication */}

          {width <= 900 ? (
            <ServicesMobile packs={PacksCommunication} />
          ) : (
            <div>
              <ServicesDesktop packs={PacksCommunication} />
            </div>
          )}
        </div>
        {/* partie web */}
        <div className="Container mt60">
          {/* container de titre et texte de présentation */}
          <div className="presentationContainer">
            {/* Arrière plan titre */}
            <div className="TitleContainerAccent">
              <h1 className="Title">Web</h1>
            </div>
            <p className="presentation">
              <span className="color">"Votre site parle pour vous" </span>, chez
              Omnistos, nous vous livrons un site qui vous ressemble et qui fera
              parler de vous, mais qui pourra aussi parler pour vous. Votre site
              web, c'est votre image sur le web, pour vous retrouver, comprendre
              ce que vous proposer et plaire à vos futurs prospects.
            </p>
          </div>
          {/* Container des packs web */}

          {width <= 900 ? (
            <ServicesMobile packs={PacksWeb} />
          ) : (
            <div>
              <ServicesDesktop packs={PacksWeb} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
