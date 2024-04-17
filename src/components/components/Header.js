import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useState } from "react";

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalToggle = () => {
    setOpenModal(!openModal);
  };

  const handleNavLinkClick = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="appContainer header flex jcb">
        <NavLink
          to="/services"
          className="flex flexc jcc headerLink"
          activeClassName="active"
          onClick={handleNavLinkClick}
        >
          Nos services
        </NavLink>
        <NavLink
          // to="/projets"
          to="/attente"
          className="flex flexc jcc headerLink"
          activeClassName="active"
          onClick={handleNavLinkClick}
        >
          Nos projets
        </NavLink>
        <NavLink to="/" className="flex flexc jcc">
          <img src={logo} className="logo" alt="omniweb logo" />
        </NavLink>
        <NavLink
          to="/agence"
          className="flex flexc jcc headerLink"
          activeClassName="active"
          onClick={handleNavLinkClick}
        >
          L'agence
        </NavLink>
        <NavLink
          // to="/blog"
          to="/attente"
          className="flex flexc jcc headerLink"
          activeClassName="active"
          onClick={handleNavLinkClick}
        >
          Notre blog
        </NavLink>
      </div>
      {/* header burger */}
      <div className="appContainer headerBurger">
        <div className="headerBurgerContainer flex jcb">
          <NavLink to="/" className="flex flexc jcc headerLink">
            <img src={logo} className="logo" alt="omniweb logo" />
          </NavLink>
          {openModal === true ? (
            <div className="menuContainer1">
              <div className="list">
                <div onClick={handleModalToggle} className="cross">
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="ulContainer">
                  <ul>
                    <li>
                      <NavLink
                        to="/"
                        className="flex flexc jcc headerLink"
                        activeClassName="active"
                        onClick={handleNavLinkClick}
                      >
                        Accueil
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services"
                        className="flex flexc jcc headerLink"
                        activeClassName="active"
                        onClick={handleNavLinkClick}
                      >
                        Nos offres
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink
                        // to="/projets"
                        to="/attente"
                        className="flex flexc jcc headerLink"
                        activeClassName="active"
                        onClick={handleNavLinkClick}
                      >
                        Nos projets
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink
                        to="/agence"
                        className="flex flexc jcc headerLink"
                        activeClassName="active"
                        onClick={handleNavLinkClick}
                      >
                        L'agence
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink
                        to="/blog"
                        className="flex flexc jcc headerLink"
                        activeClassName="active"
                        onClick={handleNavLinkClick}
                      >
                        Notre blog
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="menuContainer" onClick={handleModalToggle}>
              <i className="fa-solid fa-bars"></i>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
