import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalService from "../components/ModalService";

const ServicesMobile = ({ packs }) => {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleClickModal = (index) => {
    setOpenModalIndex(index);
  };
  return (
    <Swiper
      slidesPerView={"auto"}
      modules={[Pagination]}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      spaceBetween={50}
      className="containerPacks swiper-wrapper"
    >
      {packs.map((d, i) => (
        <SwiperSlide key={i} className={d.className}>
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
        </SwiperSlide>
      ))}
      {openModalIndex !== null && (
        <ModalService
          key={openModalIndex}
          isOpen={openModalIndex !== null}
          dataWeb={packs[openModalIndex]}
          handleCloseModal={() => setOpenModalIndex(null)}
        />
      )}
    </Swiper>
  );
};

export default ServicesMobile;
