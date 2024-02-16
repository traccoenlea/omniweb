import React from "react";
import Button from "../Button/Button";
import logoOT from "../../assets/img/logo.png";

const Homepage = () => {
  return (
    <div>
      <h1>Titre Présentation OmniWeb</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipsicing tempor incididunt ut
        labore et dolore magna aliqua. Quis nostrud{" "}
        <span className="color">exercitation ullamco laboris nisi ut</span>
      </h2>

      <Button title="En savoir plus" />

      <hr></hr>

      <div style={{ border: "1px solid red" }} className="flex jcb">
        <div className="">
          <h1>Titre Nos Atouts</h1>
          <h3>
            Ici petite phrase sympathique pour dire qu'on est giga cools et que
            vraiment on fait un travail de
            <span className="color"> qualité</span>
          </h3>
          <img src={logoOT} className="logoomniteam"></img>
        </div>
        <div style={{ border: "1px solid green" }}>
          <div>
            <i
              className="fa-solid fa-arrow-right flex jcs"
              style={{ border: "2px solid purple" }}
            />
            <div className="">
              <h1 className="">Atout n°1</h1>
            </div>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipsicing tempor
              incididunt ut labore et dolore magna aliqua. Quis nostrud
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
