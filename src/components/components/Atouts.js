import React from "react";
import Img1 from "../../assets/img/temps.png";
import Img2 from "../../assets/img/idee.png";
import Img3 from "../../assets/img/groupes.png";

const Atouts = () => {
  let atouts = [
    {
      id: 1,
      icon: "fa-solid fa-arrow-right",
      src: Img1,
      text: "Le premier atout est avant tout le premier.",
      after: 1,
    },
    {
      id: 2,
      icon: "fa-solid fa-arrow-right",
      src: Img2,
      text: "Le premier atout est avant tout le premier.",
      after: 1,
    },
    {
      id: 3,
      icon: "fa-solid fa-arrow-right",
      src: Img3,
      text: "Le premier atout est avant tout le premier.",
      after: 0,
    },
  ];
  return (
    <div>
      {atouts.map((a, i) => (
        <div>
          <div className="atoutsListe">
            <div className="atout">
              <div className="flex jcb">
                <div className="icon flex flexc jcc">
                  {/* <i className={`${a.icon} flex jcc`} /> */}
                  <img
                    src={a.src}
                    alt={`icon ${a.id}`}
                    className="iconsAtouts"
                  />
                </div>
                <div className="title">
                  <h4 className="">Atout n°{a.id}</h4>
                </div>
              </div>

              <div className="flex flex jcfe">
                <p className="text">{a.text}</p>
              </div>
            </div>
          </div>
          {a.after === 1 ? <div className="bb"></div> : ""}
        </div>
      ))}
    </div>
  );
};

export default Atouts;
