import React, { useEffect } from "react";

export const Projects = () => {
  //scroll en haut de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>Projects</div>;
};
