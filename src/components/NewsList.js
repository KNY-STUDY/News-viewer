// API를 요청하고 뉴스데이터가 들어 있는 배열을 컴포넌트 배열로 변환하여 렌더링 해주는 컴포넌트
import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from 'axios';
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
    box-sizing: border-box; padding-bottom: 3rem; width: 500px; margin: 0 auto; margin-top: 2rem;
    @media screen and (max-width: 500px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {
    
    const [loading, response, error] = usePromise(() => {
        const query = category === "all" ? '' : `&category=${category}`;
        return axios.get (
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`,
        );
    }, [category]);


    // 대기 중일 때
    if(loading) {
        return<NewsListBlock>대기중....</NewsListBlock>;
    }

    // 아직 response 값이 설정되지 않았을때
    if(!response) {
        return null;
    }

    // 에러 발생
    if (error) {
        return <NewsListBlock>에러발생!</NewsListBlock>
    }
    
    // response 값이 유효할 때
    const {articles} = response.data;

    return (
       <NewsListBlock>
           {articles.map(article => (
            <NewsItem key={article.url} article={article} />
           ))}
       </NewsListBlock> 
    )
}

export default NewsList;









