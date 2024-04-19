import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import ModalService from "../components/ModalService";

const ServicesMobile = ({ packs }) => {
  const [openDetailIndex, setOpenDetailIndex] = useState(null);

  const handleClickDetail = (index) => {
    setOpenDetailIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="packMobileContainer">
      {packs.map((d, i) => (
        <div key={i} className="packMobile">
          {/* partie titre + chevron */}
          <div className="topPart">
            <div className={d.titleClassName}>
              <h2 className="">{d.title}</h2>
            </div>
            <i
              className="fa-solid fa-chevron-down"
              onClick={() => handleClickDetail(i)}
            ></i>
          </div>

          {openDetailIndex !== null && openDetailIndex === i && (
            // partie contenu + contact + prix
            <div key={openDetailIndex} className="bottomPart">
              {/* container detail pack */}
              <div className="bottomLeftPart">
                {d.text1 && (
                  <div className="textDetail">
                    <i className="fa-solid fa-circle-check"></i>
                    <p>{d.text1}</p>
                  </div>
                )}
                {d.text2 && (
                  <div className="textDetail">
                    <i className="fa-solid fa-circle-check"></i>
                    <p>{d.text2}</p>
                  </div>
                )}
                {d.text3 && (
                  <div className="textDetail">
                    <i className="fa-solid fa-circle-check"></i>
                    <p>{d.text3}</p>
                  </div>
                )}
                {d.text4 && (
                  <div className="textDetail">
                    <i className="fa-solid fa-circle-check"></i>
                    <p>{d.text4}</p>
                  </div>
                )}
                <div className="contactMsg">
                  <p>
                    {/* Vous êtes intéréssé ?{" "} */}
                    <NavLink to="/contact" className="msg">
                      Contactez-nous
                    </NavLink>
                  </p>
                </div>
              </div>
              <div className="priceContainer">
                <p>{d.price}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesMobile;
