import React from "react";
import Cross from "../../assets/img/cross.png";

function ModalChronologie({ isOpen, dataChrono, handleCloseModal }) {
  return (
    <div className="backgroundModalChrono">
      <div className={`modalChrono ${isOpen ? "activeModal" : ""}`}>
        {isOpen && (
          <>
            <h2>{dataChrono.title}</h2>
            <p>{dataChrono.text}</p>
            <button onClick={handleCloseModal}>
              <img src={Cross} alt="Croix pour fermer le détail" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ModalChronologie;
