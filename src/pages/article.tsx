import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { useGetArticleByIdQuery } from "../services/article";
import gfm from "remark-gfm";

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
        <article className="my-12">
          <h1 className="text-4xl font-bold">{article.attributes.title}</h1>
          <div className="flex items-center space-x-4 my-8">
            <div className="rounded-full overflow-hidden w-12 h-12">
              <img
                src={article.relationships.author.data.attributes.avatar}
                className="w-12 h-12"
              />
            </div>
            <div>
              <p className="font-medium">
                {article.relationships.author.data.attributes.name}
              </p>
              <p className="text-sm text-gray-400">
                {article.relationships.author.data.attributes.email}
              </p>
            </div>
          </div>

          <ReactMarkdown
            remarkPlugins={[gfm]}
            linkTarget="_blank"
            skipHtml={true}
            children={article.attributes.body}
            className="prose"
          />
          <div className="flex flex-wrap space-x-4">
            {article.relationships.tags.data.map((tag) => {
              return (
                <div
                  key={`tag-${tag.id}`}
                  style={{ backgroundColor: `#${tag.attributes.color}` }}
                  className="text-white text-xs font-semibold inline-flex px-2 py-1 rounded"
                >
                  {tag.attributes.name}
                </div>
              );
            })}
          </div>
        </article>
      ) : (
        "No Data"
      )}
    </div>
  );
};

export default ArticlePage;
