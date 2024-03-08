import React, { useEffect, useState } from "react";
import ModalChronologie from "./ModalChronologie";
import { getAgencyStory } from "../../apis/agency";

export const Chronologie = () => {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const [story, setStory] = useState([]);

  const handleClickModal = (index) => {
    setOpenModalIndex(index);
  };

  useEffect(() => {
    async function getStory() {
      try {
        const data = await getAgencyStory();
        setStory(data);
      } catch (error) {
        console.error(error);
      }
    }
    getStory();
  }, []);

  // let dataChrono = [
  //   {
  //     id: 1,
  //     title: "Mars 2023",
  //     text: "Mike et Tracco se rencontrent tavu. Lorem ipsum dolor sit amet, consectetur adipiscing elit Mike et Tracco se rencontrent tavu. Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  //     left: true,
  //     right: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Juillet 2023",
  //     text: "Flo, Mike et Léa parlent de créer une boite. gOn parle de Flo ? Lorem ipsum dolor sit amet, Flo, Mike et Léa parlent de créer une boite. gOn parle de Flo ? Lorem ipsum dolor sit amet, ",
  //     left: false,
  //     right: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Octobre 2023",
  //     text: "Examen passé, examen eu Lorem ipsum dolor sit amet, consectetur adipiscing elit Examen passé, examen eu Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  //     left: true,
  //     right: false,
  //   },
  //   {
  //     id: 4,
  //     title: "Novembre 2023",
  //     text: "Direction la BGE et début de la formation CCPE Lorem ipsum dolor sit amet, Direction la BGE et début de la formation CCPE Lorem ipsum dolor sit amet, ",
  //     left: false,
  //     right: true,
  //   },
  //   {
  //     id: 5,
  //     title: "Février 2024",
  //     text: "Exams sur exams, CCPE acquis (trouver un moyen de le mettre en avant sans dire que c'est 1 sur 2) + Entrée en incubatest Exams sur exams, CCPE acquis (trouver un moyen de le mettre en avant sans dire que c'est 1 sur 2) + Entrée en incubatest ",
  //     left: true,
  //     right: false,
  //   },
  // ];

  return (
    <div className="agencyContainer ">
      {story.map((d, i) => (
        <div key={i} className="flex stepContainer">
          {d.id % 2 === 1 ? (
            <div className="stepContainer flex">
              <div className="stepText">
                <div className="TitleDateContainer">
                  <h2 className="TitleDate">{d.date}</h2>
                </div>
                <p className="TextDate">{d.resume}</p>
                <button
                  className="ButtonChronoModal"
                  onClick={() => handleClickModal(i)}
                >
                  Voir plus
                </button>
              </div>

              <div className="middleContainer flex jcc">
                <div
                  className={`${d.id % 2 === 1 ? "topBorder" : ""} blankSpace`}
                ></div>
                <div className="verticalBorder"></div>
                <div
                  className={`${d.id % 2 === 0 ? "topBorder" : ""} blankSpace`}
                ></div>
              </div>
              <div className="stepNumber wideText flex jcfs">{d.id}</div>
            </div>
          ) : (
            <div className="stepContainer flex">
              <div className="stepNumber wideText flex jcfs">{d.id}</div>
              <div className="middleContainer flex jcc">
                <div
                  className={`${d.id % 2 === 1 ? "topBorder" : ""} blankSpace`}
                ></div>
                <div className="verticalBorder"></div>
                <div
                  className={`${d.id % 2 === 0 ? "topBorder" : ""} blankSpace`}
                ></div>
              </div>

              <div className="stepText">
                <div className="TitleDateContainer">
                  <h2 className="TitleDate">{d.date}</h2>
                </div>
                <p className="TextDate">{d.resume}</p>
                <button
                  className="ButtonChronoModal"
                  onClick={() => handleClickModal(i)}
                >
                  Voir plus
                </button>
              </div>
            </div>
          )}
          <ModalChronologie
            key={i}
            isOpen={openModalIndex === i}
            dataChrono={d}
            handleCloseModal={() => setOpenModalIndex(null)}
          />
        </div>
      ))}
      <div className="wideText flex jcc mt30">To be continued...</div>
    </div>
  );
};
