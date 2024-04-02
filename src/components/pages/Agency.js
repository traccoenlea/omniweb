import React from "react";
import { Chronologie } from "../components/Chronologie";

export const Agency = () => {
  return (
    <div className="appContainer">
      <div className="agencyContainer">
        <div className="TitleContainerAccent mt60">
          <h1 className="Title">Notre agence</h1>
        </div>

        <Chronologie />
      </div>
    </div>
  );
};
