import React from "react";
import { NavLink } from "react-router-dom";
import Facebook from "../../assets/style/components/socials/Facebook";
import Instagram from "../../assets/style/components/socials/Instagram";
import LinkedIn from "../../assets/style/components/socials/LinkedIn";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="flex jcb dividerContainer">
        <div className="footerDivider">
          <h3>Pages</h3>
          <div className="links flex flexc jcb">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/projets">Nos projets</NavLink>
            <NavLink to="/services">Nos services</NavLink>
            <NavLink to="/agence">Notre agence</NavLink>
            <NavLink to="/blog">Notre blog</NavLink>
          </div>
        </div>

        <div className="footerDivider">
          <h3>Liens utiles</h3>
          <div className="links flex flexc jcb">
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/recrutement">Rejoignez-nous</NavLink>
            <NavLink to="/mentionslegales">Mentions légales</NavLink>
            <NavLink to="/cgu">CGU</NavLink>
          </div>
        </div>

        <div className="footerDividerContact">
          <h3>Contact</h3>
          <div className="links">
            <p>07 49 41 48 42</p>
            <p>contact@omnistos.fr</p>
          </div>
        </div>
      </div>

      <div className="bb bbfooter"></div>

      <div className="socialsLinks flex jcb">
        <a
          href="https://www.facebook.com/people/Omnistos/61556142703809/"
          target="_blank"
          rel="noreferrer"
          className="flex flexc jcc mauto"
        >
          <Facebook className="test" />
        </a>
        <a
          href="https://www.linkedin.com/company/102143905/admin/feed/posts/?feedType=following"
          target="_blank"
          rel="noreferrer"
          className="flex flexc jcc mauto"
        >
          <LinkedIn />
        </a>
        <a
          href="https://www.instagram.com/omnistos/"
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
