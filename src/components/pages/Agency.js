import React from "react";
import { Chronologie } from "../components/Chronologie";

export const Agency = () => {
  return (
    <div className="appContainer">
      <div className="agencyContainer">
        <div className="TitleAgencyContainer">
          <h1 className="TitleAgency">L'agence OmniWeb</h1>
        </div>

        <Chronologie />

        {/* <div className="agencyContainer">
        <div className="stepContainer flex">
          <div className="stepText">
            <h1>Titre ici</h1>
            <p>Le texte qui va bien ici.</p>
          </div>
          <div className="stepLine">
            <div className="top"></div>
            <div className="left"></div>
          </div>
          <div className="stepNumber">1</div>
        </div>
      </div> */}

        {/* <div className="agencyContainer flex">
        <div className="leftContainer">Left</div>
        <div className="middleContainer flex jcc">
          <div className="blankSpace topBorder"></div>
          <div className="verticalBorder"></div>
          <div className="blankSpace"></div>
        </div>
        <div className="rightContainer">Right</div>
      </div> */}

        {/*  <div className="agencyContainer ">
        <div className="flex">
          <div className="leftContainer">
            <h2>Titre</h2>
            <p>Le texte trop chouette.</p>
          </div>
          <div className="middleContainer flex jcc">
            <div className="blankSpace"></div>
            <div className="verticalBorder"></div>
            <div className="blankSpace topBorder"></div>
          </div>
          <div className="rightContainer" style={{ fontSize: "10rem" }}>
            1
          </div>
        </div>

        <div className="flex">
          <div className="leftContainer">
            <h2>Titre</h2>
            <p>Le texte trop chouette.</p>
          </div>
          <div className="middleContainer flex jcc">
            <div className="blankSpace topBorder"></div>
            <div className="verticalBorder"></div>
            <div className="blankSpace "></div>
          </div>
          <div className="rightContainer" style={{ fontSize: "10rem" }}>
            1
          </div>
        </div>
      </div>*/}
      </div>
    </div>
  );
};
