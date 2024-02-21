import React from "react";

const Atouts = () => {
  let atouts = [
    {
      id: 1,
      icon: "fa-solid fa-arrow-right",
      text: "Le premier atout est avant tout le premier.",
      after: 1,
    },
    {
      id: 2,
      icon: "fa-solid fa-arrow-right",
      text: "Le premier atout est avant tout le premier.",
      after: 1,
    },
    {
      id: 3,
      icon: "fa-solid fa-arrow-right",
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
                  <i className={`${a.icon} flex jcc`} />
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
