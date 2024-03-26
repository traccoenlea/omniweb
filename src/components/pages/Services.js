import React, { useState } from "react";
import ModalService from "../components/ModalService";

export const Services = () => {
  //ouvrir la modal
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleClickModal = (index) => {
    setOpenModalIndex(index);
  };

  // tableau offres communication
  let PacksCommunication = [
    {
      id: 1,
      title: "Pack 1",
      text1: "Identité visuelle",
      text2: "Carte de visite",
      className: "packPink mr5p mb5p",
      price: "2000€ HT",
      modality:
        "* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi.",
    },
    {
      id: 2,
      title: "Pack 2",
      text1: "Pack 1",
      text2: "Carte de fidélité",
      text3: "Flyer/Affiche",
      className: "packCom mb5p",
      price: "2000€ HT",
      modality:
        "* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi.",
    },
    {
      id: 3,
      title: "Pack 3",
      text1: "Pack 2",
      text2: "Plaquette",
      className: "packCom mr5p mb5p",
      price: "2000€ HT",
      modality:
        "* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi.",
    },
    {
      id: 4,
      title: "Pack 4",
      text1: "Pack sur-mesure",
      className: "packPink mb5p",
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
      className: "packPink mr5p mb5p",
      price: "2000€ HT",
      modality:
        "* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi.",
    },
    {
      id: 2,
      title: "Pack 2",
      text1: "Pack 1",
      text2: "Carte de web",
      text3: "Flyer/Affiche",
      className: "packCom mb5p",
      price: "2000€ HT",
      modality:
        "* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi.",
    },
    {
      id: 3,
      title: "Pack 3",
      text1: "Pack 2 Plaquette",
      text2: "Plaquette",
      className: "packCom mr5p mb5p",
      price: "2000€ HT",
      modality:
        "* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi.",
    },
    {
      id: 4,
      title: "Pack 4",
      text1: "Pack sur-mesure",
      className: "packPink mb5p",
      price: "2000€ HT",
      modality:
        "* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi.",
    },
  ];

  return (
    <div className="appContainer">
      {/* container de la page */}
      <div className="servicesContainer">
        {/* container section packs communnication */}
        <div className="Container">
          {/* container de titre et texte de présentation */}
          <div className="presentationContainer">
            {/* Arrière plan titre */}
            <div className="titleServicesContainer">
              <h1 className="titleServices">Nos services</h1>
            </div>
            <p className="presentation">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
              lacus viverra vitae congue eu consequat ac. Odio ut sem nulla
              pharetra diam.
            </p>
          </div>
          {/* Container des packs communication */}
          <>
            <div className="containerPacks">
              {PacksCommunication.map((d, i) => (
                <div key={i} className={d.className}>
                  {/* partie gauche du pack */}
                  <div className="leftPart">
                    <div className="titlePackContainer">
                      <h2 className="titlePack">{d.title}</h2>
                    </div>
                    <div className="offrePackContainer">
                      <p className="offrePack">{d.text1}</p>
                      <p className="offrePack">{d.text2}</p>
                      <p className="offrePack">{d.text3}</p>
                    </div>
                    <button
                      className="buttonPack wideText"
                      onClick={() => handleClickModal(i)}
                    >
                      <i className="fa-solid fa-arrow-right"></i>Voir plus
                    </button>
                  </div>
                  {/* partie droite du pack */}
                  <div className="rightPart">
                    <p className="idPack wideText">{d.id}</p>
                  </div>
                </div>
              ))}
            </div>
            {openModalIndex !== null && (
              <ModalService
                key={openModalIndex}
                isOpen={openModalIndex !== null}
                dataWeb={PacksCommunication[openModalIndex]}
                handleCloseModal={() => setOpenModalIndex(null)}
              />
            )}
          </>
        </div>
        {/* partie web */}
        <div className="Container">
          {/* container de titre et texte de présentation */}
          <div className="presentationContainer">
            {/* Arrière plan titre */}
            <div className="titleServicesContainer">
              <h1 className="titleServices">Nos services</h1>
            </div>
            <p className="presentation">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
              lacus viverra vitae congue eu consequat ac. Odio ut sem nulla
              pharetra diam.
            </p>
          </div>
          {/* Container des packs web */}
          <>
            <div className="containerPacks">
              {PacksWeb.map((d, i) => (
                <div key={i} className={d.className}>
                  {/* partie gauche du pack */}
                  <div className="leftPart">
                    <div className="titlePackContainer">
                      <h2 className="titlePack">{d.title}</h2>
                    </div>
                    <div className="offrePackContainer">
                      <p className="offrePack">{d.text1}</p>
                      <p className="offrePack">{d.text2}</p>
                      <p className="offrePack">{d.text3}</p>
                    </div>
                    <button
                      className="buttonPack wideText"
                      onClick={() => handleClickModal(i)}
                    >
                      <i className="fa-solid fa-arrow-right"></i>Voir plus
                    </button>
                  </div>
                  {/* partie droite du pack */}
                  <div className="rightPart">
                    <p className="idPack wideText">{d.id}</p>
                  </div>
                </div>
              ))}
            </div>
            {openModalIndex !== null && (
              <ModalService
                key={openModalIndex}
                isOpen={openModalIndex !== null}
                dataWeb={PacksWeb[openModalIndex]}
                handleCloseModal={() => setOpenModalIndex(null)}
              />
            )}
          </>
        </div>
      </div>
    </div>
  );
};
