import React from "react";
import Button from "../components/Button/Button";
import Atouts from "../components/Atouts";
import ImgAtout from "../../assets/img/imgAtouts.jpg";

const Homepage = () => {
  return (
    <div>
      <div className="appContainer">
        <div className="TitleHomepageContainer">
          <h1 className="TitleHomepage">Titre Présentation OmniWeb</h1>
        </div>
        <h3 className="maxw80 mb5">
          Lorem ipsum dolor sit amet, consectetur adipsicing tempor incididunt
          ut labore et dolore magna aliqua. Quis nostrud{" "}
          <span className="color">exercitation ullamco laboris nisi ut</span>
        </h3>

        <Button title="En savoir plus" />

        <div className="bb"></div>

        <div className="AtoutsContainer flex jcb">
          <div className="">
            <div className="TitleAtoutsContainer">
              <h2 className="TitleAtouts">Titre Nos Atouts</h2>
            </div>
            <h3 className="wideText maxw90 mb5">
              "Ici petite phrase sympathique pour dire qu'on est giga cools et
              que vraiment on fait un travail de
              <span className="color"> qualité</span>"
            </h3>
            <h3 className="wideText">OmniTeam.</h3>
          </div>
          <div className="br"></div>

          <div className="atoutsListe">
            <Atouts />
          </div>
        </div>

        <div className="bb"></div>

        <div className="flex jcb ais mt5 mb5">
          <div className="">
            <div className="TitleServiceContainer">
              <h2 className="TitleService">Titre nos services COMM & WEB</h2>
            </div>
            <h3 className="DescriptionService">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h3>
            <Button title="En savoir plus" />
          </div>
          <div className="max60 flex jcfe">
            <img src={ImgAtout} alt="" className="borderCard" />
          </div>
        </div>
      </div>

      <div className="socials">
        <h2>Où nous trouver ?</h2>
        <div className="cards flex jcb">
          <div className="card1 flex flexc jcc tac">
            <i class="fa-brands fa-instagram"></i>
            {/* <LucideInstagram size={65} className="iconInstagram" /> */}
            <p>Instagram</p>
          </div>
          <div className="card2 flex flexc jcc tac">
            <i class="fa-brands fa-facebook-f"></i>
            {/* <LucideFacebook size={65} className="iconFacebook" /> */}
            <p>Facebook</p>
          </div>
          <div className="card3 flex flexc jcc tac">
            <i class="fa-brands fa-linkedin-in"></i>
            {/* <LucideLinkedin size={50} className="iconLinkedin" /> */}
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
