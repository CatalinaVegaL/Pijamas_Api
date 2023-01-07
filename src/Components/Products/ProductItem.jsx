import React, { createContext, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../Context/Dataprovider";

//------------------------------------  STYLES  ------------------------------------//

const Product = styled.div`
    flex: 1;
    margin: 3.5vh 0vh;
    width: 270px;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction:column;
    font-size: clamp(10px, 2.5vh, 100px);
    @media (min-width: 767px) {
    margin:2vh;
}
`;

const ImgContainer = styled.div`
    height: 300px;
    width: 270px;
    background-color:#F5F5F5;
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius:10%;
    overflow:hidden;
`;

const Image = styled.img`
    height:100%;
`;

const Text = styled.div`
    width: 270px;
    text-align:justify;

`;

const Title = styled.div`
    margin-top:1.5vh;
    font-weight: bolder;
    height:9vh;
    @media (min-width: 767px) {
    margin-top:2vh;
}
`;

const Price = styled.div`
    margin-top:1.5vh;
    @media (min-width: 767px) {
    margin-top:2vh;
}
`;

const Icon = styled.div`
    background-color:#83a573d4;
    padding: 0.5vh;
    text-decoration: underline;
    margin-top:1.5vh;
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    &:hover {
        background-color: #83a573;
        transform: scale(1.1);
    }
    @media (min-width: 767px) {
    margin-top:2vh;
}
`;

//------------------------------------  COMPONENT DEVELOPMENT  ------------------------------------//
export const ProductItem = ({ title, image, price, id }) => {
    //hook structuring
    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;

    //Return of the function
    return (
        <Product>
            <ImgContainer><Image src={image} /></ImgContainer>
            <Text>
                <Title>{title}</Title>
                <Price>${price}</Price>
                <Icon onClick={() => addCarrito(id)}>Agregar al carrito
                        <box-icon type="solid" name="shopping-bag"></box-icon>
                </Icon>
            </Text>
        </Product>
    );
};
