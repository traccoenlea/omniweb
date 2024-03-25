import React from "react";
import Button from "../components/Button/Button";
// import Atouts from "../components/Atouts";
// import ImgAtout from "../../assets/img/imgAtouts.jpg";
import ImgHp from "../../assets/img/hautparleur.png";
import ImgHelp from "../../assets/img/help.png";

const Homepage = () => {
  // tableau offres communication
  let AtoutsTab = [
    {
      id: 1,
      title: "Atout n°1",
      text: "bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla blabla bla blabla bla",
      icon: "fa-regular fa-clock",
    },
    {
      id: 2,
      title: "Atout n°2",
      text: "bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla blabla bla blabla bla",
      icon: "fa-regular fa-handshake",
    },
    {
      id: 3,
      title: "Atout n°3",
      text: "bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla blabla bla blabla bla",
      icon: "fa-regular fa-comments",
    },
  ];

  return (
    <div>
      <div className="appContainer">
        {/* Présentation container */}
        <div className="PresentationContainer">
          {/* présentation container 1 */}
          <div className="PresentationPart1">
            <div>
              <div className="TitleContainerAccent">
                <h1 className="Title">Titre n°1</h1>
              </div>
              <h3 className="maxw90 mb5 H3Presentation">
                Lorem ipsum dolor sit amet, incididunt aliqua, incididunt
                aliqua. Quis nostrud{" "}
                <span className="color">
                  exercitation ullamco laboris nisi ut
                </span>
              </h3>
            </div>
            <div>
              <Button title="En savoir plus" />
            </div>
          </div>
          <img src={ImgHp} alt="" className="Illustration1" />
        </div>

        <div className="bb"></div>

        <div className="mt60">
          <div className="TitleContainerAccent">
            <h2 className="Title">Titre n°2</h2>
          </div>
          {/* liste atouts */}
          <div className="AtoutsContainer">
            {AtoutsTab.map((d, i) => (
              <div key={i} className="Atout">
                <div className="IconTitleContainer">
                  <i className={d.icon}></i>
                  <div className="TitleAtoutContainer">
                    <h3 className="Title">{d.title}</h3>
                  </div>
                </div>
                <div className="TextAtoutContainer">
                  <p>{d.text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* liste atouts fin*/}
        </div>
        <div className="bb"></div>
        {/* Service */}
        <div className="ServiceContainer">
          {/* service container 1 */}
          <div className="ServicePart1">
            <div>
              <div className="TitleContainerAccent">
                <h1 className="Title">Titre n°3</h1>
              </div>
              <h3 className="maxw80 mb5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
                <span className="color">
                  exercitation ullamco laboris nisi ut
                </span>
              </h3>
            </div>
            <Button title="En savoir plus" />
          </div>
          <img src={ImgHelp} alt="" className="Illustration2" />
        </div>

        {/* Service fin */}
        <div className="bb"></div>
        {/* RS début */}
        <div className="socials Test">
          <div className="TitleContainerAccent">
            <h2 className="Title">Titre n°4</h2>
          </div>
          <div className=" flex jcb cards">
            <div className=" flex flexc jcc tac card1">
              <i class="fa-brands fa-instagram"></i>
              {/* <LucideInstagram size={65} className="iconInstagram" /> */}
              <p>Instagram</p>
            </div>
            <div className=" flex flexc jcc tac card2">
              <i class="fa-brands fa-facebook-f"></i>
              {/* <LucideFacebook size={65} className="iconFacebook" /> */}
              <p>Facebook</p>
            </div>
            <div className=" flex flexc jcc tac card3">
              <i class="fa-brands fa-linkedin-in"></i>
              {/* <LucideLinkedin size={50} className="iconLinkedin" /> */}
              <p>LinkedIn</p>
            </div>
          </div>
        </div>
        {/* RS fin */}
      </div>
    </div>
  );
};

export default Homepage;
