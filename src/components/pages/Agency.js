import React, { useEffect } from "react";
import { Chronologie } from "../components/Chronologie";

export const Agency = () => {
  return (
    <div className="appContainer">
      <div className="agencyContainer">
        <div className="TitleAgencyContainer">
          <h1 className="TitleAgency">L'agence OmniWeb</h1>
        </div>

        <Chronologie />
      </div>
    </div>
  );
};
