import React from "react";

const ArticleContainer = ({ title, text, img }) => {
  let shortText = text.slice(0, 50);
  let shortTitle = title.slice(0, 20);
  return (
    <div className="articleContainer flex flexc">
      {img ? (
        "oui"
      ) : (
        <img
          src="https://images.unsplash.com/photo-1623039405147-547794f92e9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aWNsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="illustration de l'article"
          className="articleImg "
        />
      )}

      <div className="textContainer">
        {shortTitle === title ? <h3>{title}</h3> : <h3>{shortTitle}...</h3>}
        <p>{shortText}...</p>
        <button className="">Lire plus</button>
      </div>
    </div>
  );
};

export default ArticleContainer;
