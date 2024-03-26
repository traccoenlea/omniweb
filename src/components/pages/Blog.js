import React, { useEffect, useState } from "react";
import ArticleContainer from "../components/ArticleContainer";
import { getArticles } from "../../apis/articles";

export const Blog = () => {
  const [articles, setArticles] = useState([]);

  const [page, setPage] = useState(1);

  const [maxPage, setMaxPage] = useState(0);

  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    async function getListOfArticles() {
      try {
        const data = await getArticles();

        setArticles(data);

        console.log(data.length);
        setMaxPage(Math.ceil(data.length / 6));
        return "ok";
      } catch (error) {
        console.error(error);
      }
    }

    getListOfArticles();
  }, []);

  if (page === 1 && articles.length !== 0 && pagination.length === 0) {
    console.log("on passe là");
    for (let x = 0; x <= 5; x++) {
      // console.log(articles[x]);
      let newArticle = articles[x];
      setPagination((pagination) => [...pagination, newArticle]);
    }
  }

  // console.log("pagination : " + pagination);

  function handleNext() {
    console.log("on arrive après");
    if (page + 1 <= maxPage) {
      console.log("c possible");
      setPage(page + 1);
    }
  }

  function handlePrevious() {
    console.log("on arrive avant");
    if (page !== 1 && page !== 0) {
      setPage(page - 1);
    }
  }

  return (
    <div className="appContainer">
      <div className="TitleContainerAccent mt60">
        <h1 className="Title">Notre blog</h1>
      </div>
      <div className="flex flexf jcb">
        {pagination.map((a, i) => (
          <div key={i} className="oneArticle">
            <ArticleContainer title={a.title} text={a.text} img={a.img} />
          </div>
        ))}
      </div>
      <br />
      <div className="flex">
        {page === 1 ? (
          <div>
            <button onClick={handleNext}>Next</button>
          </div>
        ) : (
          <div className="flex ">
            <div>
              <button onClick={handlePrevious}>Previous</button>
            </div>
            <div>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}
        <div>
          Page {page} sur {maxPage}
        </div>
      </div>
    </div>
  );
};
