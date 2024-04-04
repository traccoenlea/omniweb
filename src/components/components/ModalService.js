import React from "react";
import Cross from "../../assets/img/cross.png";

function ModalService({ isOpen, dataWeb, handleCloseModal }) {
  return (
    // background de la modal
    <div className="backgroundModal">
      {/* container de la modal */}
      <div className={`modalServ ${isOpen ? "active" : ""}`}>
        {isOpen && (
          <>
            <div className="modalServContainer">
              {/* titre */}
              <div className="titleContainer">
                <h2 className="titleServModal">{dataWeb.title}</h2>
              </div>
              {/* détails */}
              <div className="detailContainer">
                {dataWeb.text1 && (
                  <div className="detail">
                    <i className="fa-solid fa-circle-check"></i>
                    <p>{dataWeb.text1}</p>
                  </div>
                )}
                {dataWeb.text2 && (
                  <div className="detail">
                    <i className="fa-solid fa-circle-check"></i>
                    <p>{dataWeb.text2}</p>
                  </div>
                )}
                {dataWeb.text3 && (
                  <div className="detail">
                    <i className="fa-solid fa-circle-check"></i>
                    <p>{dataWeb.text3}</p>
                  </div>
                )}
              </div>
              {/* le prix */}
              <div className="priceContainer">
                <h3 className="price">{dataWeb.price}</h3>
              </div>
              {/* les modalités */}
              <div className="modalityContainer">
                <p className="modality">{dataWeb.modality}</p>
              </div>
            </div>
            {/* bouton de fermeture */}
            <button onClick={handleCloseModal}>
              <img src={Cross} alt="Croix pour fermer le détail" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ModalService;
