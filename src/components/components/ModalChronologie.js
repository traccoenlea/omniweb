import React from "react";
import Cross from "../../assets/img/cross.png";

function ModalChronologie({ isOpen, dataChrono, handleCloseModal }) {
  return (
    <div className={`modalChrono ${isOpen ? "active" : ""}`}>
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
  );
}

export default ModalChronologie;
