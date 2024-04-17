import React, { useEffect, useState } from "react";
import ModalChronologie from "./ModalChronologie";
import { getAgencyStory } from "../../apis/agency";

export const Chronologie = () => {
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const [story, setStory] = useState([]);
  const [mobile, setMobile] = useState(false);

  const handleClickModal = (index) => {
    setOpenModalIndex(index);
  };

  useEffect(() => {
    async function getWidth() {
      const width = window.innerWidth;
      if (width <= 900) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

    async function getStory() {
      try {
        const data = await getAgencyStory();
        setStory(data);
      } catch (error) {
        console.error(error);
      }
    }
    getWidth();
    getStory();
  }, []);

  // console.log("mobile:", mobile);
  // console.log("story:", story);

  return (
    <div className="agencyContainer ">
      {story.map((d, i) => (
        <div key={i} className="flex stepContainer">
          {mobile ? (
            <>
              <div className="middleContainer flex jcc">
                <div className="verticalBorder"></div>
                <div className="topBorder blankSpace"></div>
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
            </>
          ) : (
            <>
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
                      className={`${
                        d.id % 2 === 1 ? "topBorder" : ""
                      } blankSpace`}
                    ></div>
                    <div className="verticalBorder"></div>
                    <div
                      className={`${
                        d.id % 2 === 0 ? "topBorder" : ""
                      } blankSpace`}
                    ></div>
                  </div>
                  <div className="stepNumber wideText flex jcfs">{d.id}</div>
                </div>
              ) : (
                <div className="stepContainer flex">
                  <div className="stepNumber wideText flex jcfs">{d.id}</div>
                  <div className="middleContainer flex jcc">
                    <div
                      className={`${
                        d.id % 2 === 1 ? "topBorder" : ""
                      } blankSpace`}
                    ></div>
                    <div className="verticalBorder"></div>
                    <div
                      className={`${
                        d.id % 2 === 0 ? "topBorder" : ""
                      } blankSpace`}
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
            </>
          )}
          {openModalIndex === i && (
            <ModalChronologie
              key={i}
              isOpen={openModalIndex === i}
              dataChrono={d}
              handleCloseModal={() => setOpenModalIndex(null)}
            />
          )}
        </div>
      ))}
      <div className="wideText flex jcc mt30">To be continued...</div>
    </div>
  );
};
