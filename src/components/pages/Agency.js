import React, { useEffect } from "react";
import { Chronologie } from "../components/Chronologie";
import ScrollToTopButton from "../components/ScrollToTopButton";

export const Agency = () => {
  //scroll en haut de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="appContainer">
      <ScrollToTopButton />
      <div className="agencyContainer">
        <div className="TitleContainerAccent mt60">
          <h1 className="Title">Notre agence</h1>
        </div>

        <Chronologie />
      </div>
    </div>
  );
};
