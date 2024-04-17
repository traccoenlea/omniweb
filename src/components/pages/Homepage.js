import React, { useEffect } from "react";
import Button from "../components/Button/Button";
import ImgHp from "../../assets/img/hautparleur.png";
import ImgHelp from "../../assets/img/help.png";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  //scroll en haut de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // tableau offres communication
  let AtoutsTab = [
    {
      id: 1,
      title: "Atout n°1",
      text: "Vous êtes différent des autres, c'est pour cela que nous nous engageons à faire du sur-mesure pour chaque client.",
      icon: "fa-solid fa-sliders",
    },
    {
      id: 2,
      title: "Atout n°2",
      text: "Nous travaillons ensemble pour réussir à transformer votre image en identité graphique pour votre communication.",
      icon: "fa-regular fa-handshake",
    },
    {
      id: 3,
      title: "Atout n°3",
      text: "Nous sommes une équipe disponible pour échanger avec vous des prémices à la réalisation de toute votre communication.",
      icon: "fa-regular fa-comments",
    },
  ];

  return (
    <div>
      <div className="appContainer">
        <ScrollToTopButton />
        {/* Présentation container */}
        <div className="PresentationContainer">
          {/* présentation container 1 */}
          <div className="PresentationPart1">
            <div>
              <div className="TitleContainerAccent">
                <h1 className="Title">Omnistos, kézako ?</h1>
              </div>
              <h3 className="maxw90 mb5 H3Presentation">
                Nous sommes une{" "}
                <span className="color">agence de communication </span> qui vous
                accompagne et vous conseille lors de la création de vos{" "}
                <span className="color">supports de communication</span> (print,
                digital et site web).
              </h3>
            </div>
            <Button title="Contactez-nous" link="/contact" />
          </div>
          <img src={ImgHp} alt="" className="Illustration1" />
        </div>

        <div className="bb"></div>

        <div className="mt60">
          <div className="TitleContainerAccent">
            <h2 className="Title">Nos atouts</h2>
          </div>
          {/* liste atouts */}
          <div className="AtoutsContainer">
            {AtoutsTab.map((d, i) => (
              <div key={i} className="Atout">
                <div className="IconTitleContainer">
                  <i className={d.icon}></i>
                  <div className="TitleAtoutContainer">
                    <h3 className="TitleAtout">{d.title}</h3>
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
                <h1 className="Title">Nos services</h1>
              </div>
              <h3 className="maxw80 mb5">
                Nous vous proposons de créer vos supports de communication{" "}
                <span className="color">print </span>
                (cartes de visite, affiches, flyers, plaquettes...),{" "}
                <span className="color">digitaux </span>
                (posts et bannières réseaux sociaux...) et votre{" "}
                <span className="color">site web </span>
                (vitrine, e-commerce, blog, sur-mesure).
              </h3>
            </div>
            <Button title="En savoir plus" link="/services" />
          </div>
          <img src={ImgHelp} alt="" className="Illustration2" />
        </div>

        {/* Service fin */}
        <div className="bb"></div>
        {/* RS début */}
        <div className="socials">
          <div className="TitleContainerAccent">
            <h2 className="Title">Nos réseaux</h2>
          </div>
          <div className="cards flex jcb">
            <NavLink
              to="https://www.instagram.com/omnistos/"
              target="_blank"
              rel="noreferrer"
              className="card1 flex flexc jcc tac"
            >
              <i className="fa-brands fa-instagram"></i>
              <p>Instagram</p>
            </NavLink>
            <NavLink
              className="card2 flex flexc jcc tac"
              to="https://www.facebook.com/people/Omnistos/61556142703809/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
              <p>Facebook</p>
            </NavLink>
            <NavLink
              className="card3 flex flexc jcc tac"
              to="https://www.linkedin.com/company/102143905/admin/feed/posts/?feedType=following"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
              <p>LinkedIn</p>
            </NavLink>
          </div>
        </div>
        {/* RS fin */}
      </div>
    </div>
  );
};

export default Homepage;
