import React, { createContext, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../Context/Dataprovider";

//------------------------------------  STYLES  ------------------------------------//
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Product = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
`;

//------------------------------------  COMPONENT DEVELOPMENT  ------------------------------------//
export const ProductItem = ({ image, id }) => {
    
    //hook structuring
    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;

    //Return of the function
    return (
        <Product>
            <Image src={image} />
            <Info>
                <Icon>
                    <a href="#">
                        <box-icon name="search-alt-2"></box-icon>
                    </a>
                </Icon>
                <Icon>
                    <a>
                        <box-icon name="cart" onClick={() => addCarrito(id)} ></box-icon>
                    </a>
                </Icon>
            </Info>
        </Product>
    );
}