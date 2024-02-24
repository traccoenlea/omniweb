import React from "react";

export const Chronologie = () => {
  let dataChrono = [
    {
      id: 1,
      title: "Mars 2023",
      text: "Mike et Tracco se rencontrent tavu.",
      left: true,
      right: false,
    },
    {
      id: 2,
      title: "Juillet 2023",
      text: "Flo, Mike et Léa parlent de créer une boite. gOn parle de Flo ?",
      left: false,
      right: true,
    },
    {
      id: 3,
      title: "Octobre 2023",
      text: "Examen passé, examen eu",
      left: true,
      right: false,
    },
    {
      id: 4,
      title: "Novembre 2023",
      text: "Direction la BGE et début de la formation CCPE",
      left: false,
      right: true,
    },
    {
      id: 5,
      title: "Février 2024",
      text: "Exams sur exams, CCPE acquis (trouver un moyen de le mettre en avant sans dire que c'est 1 sur 2) + Entrée en incubatest",
      left: true,
      right: false,
    },
  ];
  return (
    <div className="agencyContainer ">
      {dataChrono.map((d, i) => (
        <div key={i} className="flex stepContainer">
          {d.left ? (
            <div className="stepContainer flex">
              <div className="stepText">
                <h2>{d.title}</h2>
                <p>{d.text}</p>
              </div>
              <div className="middleContainer flex jcc">
                <div
                  className={`${d.left ? "topBorder" : ""} blankSpace`}
                ></div>
                <div className="verticalBorder"></div>
                <div
                  className={`${d.right ? "topBorder" : ""} blankSpace`}
                ></div>
              </div>
              <div className="stepNumber wideText flex jcc">{d.id}</div>
            </div>
          ) : (
            <div className="stepContainer flex">
              <div className="stepNumber wideText flex jcc">{d.id}</div>
              <div className="middleContainer flex jcc">
                <div
                  className={`${d.left ? "topBorder" : ""} blankSpace`}
                ></div>
                <div className="verticalBorder"></div>
                <div
                  className={`${d.right ? "topBorder" : ""} blankSpace`}
                ></div>
              </div>

              <div className="stepText">
                <h2>{d.title}</h2>
                <p>{d.text}</p>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="wideText flex jcc mt30">To be continued...</div>
    </div>
  );
};
