import React from "react";

export const Projects = () => {
  return (
    <div className="appContainer">
      <h1>Nos projets Communication</h1>
      <h2>
        Petite phrase trop chouette pour présenter les projets{" "}
        <span className="color">Communication</span>.
      </h2>

      <div className="flex flexc ">
        <div className="flex jcb">
          <div
            style={{
              border: "1px solid purple",
              width: "30%",
              aspectRatio: "3/2",
            }}
          >
            Petite div
          </div>
          <div style={{ border: "1px solid purple", width: "30%" }}>
            Petite div
          </div>{" "}
          <div style={{ border: "1px solid purple", width: "30%" }}>
            Petite div
          </div>
        </div>
        <div className="flex jcb">
          <div
            style={{
              border: "1px solid purple",
              width: "30%",
              height: "200px",
            }}
          >
            Petite div
          </div>
          <div style={{ border: "1px solid purple", width: "30%" }}>
            Petite div
          </div>{" "}
          <div style={{ border: "1px solid purple", width: "30%" }}>
            Petite div
          </div>
        </div>
      </div>
    </div>
  );
};
