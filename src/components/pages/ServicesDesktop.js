import React, { useState } from "react";
import ModalService from "../components/ModalService";

const ServicesDesktop = ({ packs }) => {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleClickModal = (index) => {
    setOpenModalIndex(index);
  };

  return (
    <div>
      <div className="containerPacks">
        {packs.map((d, i) => (
          <div key={i} className={d.className}>
            {/* partie gauche du pack */}
            <div className="leftPart">
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
            <div className="rightPart">
              <img className="ImgId" src={d.img} alt="numéro du pack" />
            </div>
          </div>
        ))}
      </div>
      {openModalIndex !== null && (
        <ModalService
          key={openModalIndex}
          isOpen={openModalIndex !== null}
          dataWeb={packs[openModalIndex]}
          handleCloseModal={() => setOpenModalIndex(null)}
        />
      )}
    </div>
  );
};

export default ServicesDesktop;
