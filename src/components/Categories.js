import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
    {
      name: "all",
      text: "전체보기"
    },
    {
      name: "business",
      text: "비즈니스"
    },
    {
      name: "entertainment",
      text: "엔터테인먼트"
    },
    {
      name: "health",
      text: "건강"
    },
    {
      name: "science",
      text: "과학"
    },
    {
      name: "sports",
      text: "스포츠"
    },
    {
      name: "technology",
      text: "기술"
    }
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: auto;
    margin: 0 auto;
    justify-content: center;
    background-color: #6d96ff;
    @media screen and (max-width: 500px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: #fff;
    padding-bottom: 0.25rem;
    text-align: center;
    &:hover {
      color: #222;
      font-weight: bold;
    }

    ${props => props.active && css`
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
        color: #222;
        }
    `}

    & + & {
    margin-left: 1rem;
    }
`;

const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map((c) => (
                <Category
                    key={c.name}
                    //NavLink : v6에서 activeStyle, activeClassName 속성 삭제 isActive 선언 
                    className={({ isActive }) => (isActive ? 'active' : undefined)} 
                    //exact={c.name === 'all'}
                    to={c.name === 'all' ? '/' : `/${c.name}`}
                    end
                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    )
}

export default Categories