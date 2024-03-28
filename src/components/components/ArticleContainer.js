import React from "react";

const ArticleContainer = ({ title, text, img }) => {
  // on récup title, text et img
  // on découpe le texte à 70car et le title à 18 pour qu'il passe sur une ligne
  let shortText = text.slice(0, 70);
  let shortTitle = title.slice(0, 18);
  return (
    //container de chaque article
    <div className="articleContainer flex flexc">
      {/* si y'a une image dans la db on la charge, sinon on charge l'image par défaut */}
      {img ? (
        <img
          src={img}
          alt="illustration de l'article"
          className="articleImg "
        />
      ) : (
        <img
          src="https://images.unsplash.com/photo-1623039405147-547794f92e9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aWNsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="illustration de l'article"
          className="articleImg "
        />
      )}

      {/* ici tout le container du text */}
      <div className="textContainer flex flexc jcb">
        <div className="articleTitle">
          {/* si le titre = au titre écourté on met le titre */}
          {shortTitle === title ? (
            <h3>{title}</h3>
          ) : (
            // sinon on met le titre écourté avec ...
            <h3>{shortTitle}...</h3>
          )}
        </div>
        <div>
          {/* ici le début de l'article avec pts de susp */}
          <p>{shortText}...</p>
        </div>
        <div className="btnContainer">
          <button className="button accentbtn">Lire plus</button>
        </div>
      </div>
    </div>
  );
};

export default ArticleContainer;
