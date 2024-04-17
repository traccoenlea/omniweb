import React, { useEffect, useState } from "react";
import ModalService from "../components/ModalService";
import Pack1 from "../../assets/img/text1.png";
import Pack2 from "../../assets/img/text2.png";
import Pack3 from "../../assets/img/text3.png";
import Pack4 from "../../assets/img/text4.png";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Swiper, SwiperSlide } from "swiper/react";
import ServicesDesktop from "./ServicesDesktop";
import ServicesMobile from "./ServicesMobile";

export const Services = () => {
  //scroll en haut de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //ouvrir la modal

  const width = window.innerWidth;

  // tableau offres communication
  let PacksCommunication = [
    {
      id: 1,
      title: "Pack 1",
      text1: "Identité visuelle",
      text2: "Carte de visite",
      img: Pack1,
      className: "packContainer packPink mr5p mb5p mlR12 mR0",
      titleClassName: "titlePackContainer1",
      price: "2000€ HT",
      modality:
        "* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi.",
    },
    {
      id: 2,
      title: "Pack 2",
      text1: "Pack 1",
      text2: "Flyer/Affiche",
      text3: "Flyer/Affiche",
      img: Pack2,
      className: "packContainer packCom mb5p mR0",
      titleClassName: "titlePackContainer2",
      price: "2000€ HT",
      modality:
        "* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi.",
    },
    {
      id: 3,
      title: "Pack 3",
      text1: "Pack 2",
      text2: "Plaquette",
      img: Pack3,
      className: "packContainer packCom mr5p mb5p mR0",
      titleClassName: "titlePackContainer2",
      price: "2000€ HT",
      modality:
        "* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi.",
    },
    {
      id: 4,
      title: "Pack 4",
      text1: "Sur-mesure",
      img: Pack4,
      className: "packContainer packPink mb5p mrR12",
      titleClassName: "titlePackContainer1",
      price: "2000€ HT",
      modality:
        "* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi.",
    },
  ];

  // tableau offres web
  let PacksWeb = [
    {
      id: 1,
      title: "Pack 1",
      text1: "Identité web",
      text2: "Carte de visite",
      img: Pack1,
      className: "packContainer packPink mr5p mb5p mlR12 mR0",
      titleClassName: "titlePackContainer1",
      price: "2000€ HT",
      modality:
        "* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi.",
    },
    {
      id: 2,
      title: "Pack 2",
      text1: "Pack 1",
      // text2: "Carte de web",
      text3: "Flyer/Affiche",
      img: Pack2,
      className: "packContainer packCom mb5p mR0",
      titleClassName: "titlePackContainer2",
      price: "2000€ HT",
      modality:
        "* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi.",
    },
    {
      id: 3,
      title: "Pack 3",
      text1: "Pack 2",
      text2: "Plaquette",
      img: Pack3,
      className: "packContainer packCom mr5p mb5p mR0",
      titleClassName: "titlePackContainer2",
      price: "2000€ HT",
      src: "",
      modality:
        "* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi.",
    },
    {
      id: 4,
      title: "Pack 4",
      text1: "Pack sur-mesure",
      img: Pack4,
      className: "packContainer packPink mb5p mrR12",
      titleClassName: "titlePackContainer1",
      price: "2000€ HT",
      modality:
        "* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi.",
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
          <>
            {/* <div className="containerPacks"> */}
            {/* {PacksWeb.map((d, i) => (
              <div key={i} className={d.className}>
                {/* partie gauche du pack */}
            {/* <div className="leftPart">
                  <div className={d.titleClassName}>
                    <h2 className="titlePack">{d.title}</h2>
                  </div>
                  <div className="offrePackContainer">
                    <p className="offrePack">{d.text1}</p>
                    <p className="offrePack">{d.text2}</p>
                  </div>
                  <button
                    className="buttonPack wideText"
                    onClick={() => handleClickModal(i)}
                  >
                    <i className="fa-solid fa-arrow-right"></i>Voir plus
                  </button>
                </div>
                {/* partie droite du pack */}
            {/* <div className="rightPart">
                  <img className="ImgId" src={d.img} alt="numéro du pack" />
                </div>
              </div>  */}
            {/* ))} */}
            {/* </div> */}
            {/* {openModalIndex !== null && (
              <ModalService
                key={openModalIndex}
                isOpen={openModalIndex !== null}
                dataWeb={PacksWeb[openModalIndex]}
                handleCloseModal={() => setOpenModalIndex(null)}
              />
            )} */}
          </>
        </div>
      </div>
    </div>
  );
};
