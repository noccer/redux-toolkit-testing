import React from "react";
import { Link } from "react-router-dom";
import { Article, useGetArticlesQuery } from "../services/article";

type ArticlesPageProps = {};

const ArticlesPage: React.FC<ArticlesPageProps> = ({ children }) => {
  const { data: articles, error, isLoading } = useGetArticlesQuery(undefined);

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : articles ? (
        <>
          <h1>We Found {articles.length} Articles</h1>
          <ul>
            {articles.map((article: Article) => {
              return (
                <li key={article.id}>
                  <Link to={`/articles/${article.id}`}>
                    {article.attributes.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        "No Data"
      )}
    </div>
  );
};

export default ArticlesPage;
