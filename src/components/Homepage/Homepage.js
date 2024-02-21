import React from "react";
import Button from "../Button/Button";
import Atouts from "../Atouts";

const Homepage = () => {
  return (
    <div>
      <div className="appContainer">
        <h1 className="heading">
          <div className="accentbg primarytxt flex jcc">
            Titre Présentation OmniWeb
          </div>
        </h1>
        <h3 className="maxw80">
          Lorem ipsum dolor sit amet, consectetur adipsicing tempor incididunt
          ut labore et dolore magna aliqua. Quis nostrud{" "}
          <span className="color">exercitation ullamco laboris nisi ut</span>
        </h3>

        <Button title="En savoir plus" />

        <div className="bb"></div>

        <div className="flex jcb">
          <div className="">
            <h2>Titre Nos Atouts</h2>
            <h3 className="wideText">
              Ici petite phrase sympathique pour dire qu'on est giga cools et
              que vraiment on fait un travail de
              <span className="color"> qualité</span>
            </h3>
            <h3 className="wideText">OmniTeam.</h3>
          </div>
          <div className="br"></div>

          <div className="atoutsListe">
            <Atouts />
          </div>
        </div>

        <div className="bb"></div>

        <div className="flex jcb">
          <div>
            <h2>Titre nos services COMM & WEB</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            <Button title="En savoir plus" />
          </div>
          <div>
            <img
              src="https://shorturl.at/bBDUW"
              alt=""
              className="borderCard"
            />
          </div>
        </div>
      </div>

      <div className="socials">
        <h2>Où nous trouver ?</h2>
        <div className="cards flex jcb">
          <div className="card flex flexc jcc tac">Insta</div>
          <div className="card flex flexc jcc tac">Facebook</div>
          <div className="card flex flexc jcc tac">LinkedIn</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
