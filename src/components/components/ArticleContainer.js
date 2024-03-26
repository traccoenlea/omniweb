import React from "react";

const ArticleContainer = ({ title, text, img }) => {
  let shortText = text.slice(0, 70);
  let shortTitle = title.slice(0, 18);
  return (
    <div className="articleContainer flex flexc">
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

      <div className="textContainer flex flexc jcb">
        <div>
          {shortTitle === title ? (
            <h3 className="articleTitle">{title}</h3>
          ) : (
            <h3 className="articleTitle">{shortTitle}...</h3>
          )}
        </div>
        <div>
          <p>{shortText}...</p>
        </div>
        <div>
          <button className="button accentbtn">Lire plus</button>
        </div>
      </div>
    </div>
  );
};

export default ArticleContainer;
