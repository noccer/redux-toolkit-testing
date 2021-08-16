import React from "react";
import { useParams } from "react-router-dom";
import { useGetArticleByIdQuery } from "../services/article";

type ArticlePageProps = {};

interface IParams {
  id: string;
}

const ArticlePage: React.FC<ArticlePageProps> = () => {
  const { id } = useParams<IParams>();
  const {
    data: article,
    error,
    isLoading,
  } = useGetArticleByIdQuery(Number(id));

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
