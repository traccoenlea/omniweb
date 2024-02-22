import React from "react";
import { NavLink } from "react-router-dom";
import Facebook from "../../assets/style/components/socials/Facebook";
import Instagram from "../../assets/style/components/socials/Instagram";
import LinkedIn from "../../assets/style/components/socials/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex jcb ">
        <div className="footerDivider">
          <h3>Pages</h3>
          <div className="links flex flexc jcb">
            <NavLink to="">Accueil</NavLink>
            <NavLink to="">Nos projets</NavLink>
            <NavLink to="">Nos services</NavLink>
            <NavLink to="">L'agence</NavLink>
            <NavLink to="">Blog</NavLink>
          </div>
        </div>

        <div className="footerDivider">
          <h3>Liens utiles</h3>
          <div className="links flex flexc jcb">
            <NavLink to="">Contact</NavLink>
            <NavLink to="">Rejoignez-nous</NavLink>
            <NavLink to="">Mentions légales</NavLink>
            <NavLink to="">GCU</NavLink>
          </div>
        </div>

        <div className="footerDivider">
          <h3>Contact</h3>
          <p>Lorem ipsum machin chouette</p>
        </div>
      </div>

      <div className="bb bbfooter"></div>

      <div className="socialsLinks flex jcb">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          className="flex flexc jcc mauto"
        >
          <Facebook className="test" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          className="flex flexc jcc mauto"
        >
          <LinkedIn />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          className="flex flexc jcc mauto"
        >
          <Instagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
