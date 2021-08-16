import React from "react";
import { useParams } from "react-router-dom";
import { Article, useGetArticleByIdQuery } from "../services/article";

type ArticlePageProps = {};

const ArticlePage: React.FC<ArticlePageProps> = () => {
  const { id } = useParams();
  const { data: article, error, isLoading } = useGetArticleByIdQuery(id);

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : article ? (
        <>
          <h1>{article.attributes.title}</h1>
        </>
      ) : (
        "No Data"
      )}
    </div>
  );
};

export default ArticlePage;
