import React from "react";
import styled from "styled-components";
import { categories } from "../../data";
import CategoryItem from "./CategoryItem";

//------------------------------------  STYLES  ------------------------------------//
const Container = styled.div`
    padding: 4vh 0;
`;

const Title = styled.div`
    display: flex;
    padding-bottom: 4vh;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    color: #1F4D18;
    font-size:clamp(10px, 2.5vh, 100px);
`;

const Category = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

//------------------------------------  COMPONENT DEVELOPMENT  ------------------------------------//
const Categories = () => {
    return (
        <Container>
            <Title> CATEGORIAS</Title>
            <Category>
                {categories.map((item) => (
                    <CategoryItem item={item} key={item.id} />
                ))}
            </Category>
        </Container>
    );
};

export default Categories;
