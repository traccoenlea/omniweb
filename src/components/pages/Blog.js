import React, { useEffect, useState } from "react";
import ArticleContainer from "../components/ArticleContainer";
import { getArticles } from "../../apis/articles";

export const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getListOfArticles() {
      try {
        const data = await getArticles();

        setArticles(data);
      } catch (error) {
        console.error(error);
      }
    }

    getListOfArticles();
  }, []);

  return (
    <div className="appContainer">
      <div className="TitleContainerAccent mt60">
        <h1 className="Title">Notre blog</h1>
      </div>

      {articles.length === 0 ? (
        <h2>Les articles arrivent...</h2>
      ) : (
        <div className="flex flexf jcb">
          {articles.map((p, i) => (
            <div key={i} className="oneArticle">
              <ArticleContainer title={p.title} text={p.text} img={p.img} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
