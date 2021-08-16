import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const SIDEKICK_TOKEN = import.meta.env.VITE_TOKEN;
const TEAM_ID = 2;

export interface Tag {
    id: number;
    type: string;
    attributes: {
        color: string;
        name: string;
    }
}

export interface Tags {
    data: Tag[];
}

export interface User {
    data: {
        id: number;
        type: string;
        attributes: {
            name: string;
            email: string;
            avatar: string;
        }
    }
}

export interface Article {
    id: number;
    attributes: {
        title: string;
        body: string;
    },
    type: string;
    relationships: {
        tags: Tags;
        author: User;
    }
}

export interface Articles {
    data: Article[];
}

interface ArticleResponse { data: Article}
interface ArticlesResponse { data: Articles }



export const articleApi = createApi({
    reducerPath: 'articlesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE,
        prepareHeaders(headers) {
            headers.set('authorization', `Bearer ${SIDEKICK_TOKEN}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getArticles: builder.query<Articles, undefined>({
            query: () => `workspaces/${TEAM_ID}/articles`,
            transformResponse: (response: ArticlesResponse) => {
                return response.data;
            }
        }),
        getArticleById: builder.query<Article, number>({
            query: (id: number) => `workspaces/${TEAM_ID}/articles/${id}`,
            transformResponse: (response: ArticleResponse) => {
                return response.data;
            }
        })
    })
});

export const { useGetArticlesQuery, useGetArticleByIdQuery } = articleApi;