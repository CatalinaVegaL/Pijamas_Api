import React from "react";
import styled from "styled-components";
import Logo from "../../Resources/Logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Container = styled.div``;

const Head = styled.div`
    height: 8vh;
    display: flex;
    position: relative;
    margin: 2vh;
`;

const ImgContainer = styled.div`
    cursor: pointer;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Image = styled.img`
    height: 100%;
    object-fit: cover;
    object-position: center center;
`;

const IconContainer = styled.div`
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 95%;
    transform: translate(-30%, -30%);
    font-size: clamp(0px, 1.5vh, 100px);
`;

const ItemTotal = styled.div`
    height: 2.5vh;
    width: 2.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translate(70%, -50%);
    color: white;
    background-color: green;
`;

const Nav = styled.div`
    display: Flex;
    align-items: center;
    background-color: #83a573ce;
    height: 5vh;
    cursor: pointer;
    font-size: clamp(10px, 2.5vh, 100px);
`;

const ProductList = styled.div`
    flex: 1;
    display: Flex;
    justify-content: center;
    border-right: 1px solid #646464;
    color: black;
`;

// const Male = styled.div`
//   flex: 1;
//   display: Flex;
//   justify-content: center;
//   color:black;
// `;

// const Children = styled.div`
//   flex: 1;
//   display: Flex;
//   justify-content: center;
//   border-left: 1px solid #646464;
//   color:black;
// `;

export const Header = () => {
    return (
        <Container>
            <Head>
                <Link to={`/`}>
                    <ImgContainer>
                        <Image src={Logo} />
                    </ImgContainer>
                </Link>
                <IconContainer>
                    <box-icon name="cart"></box-icon>
                    <ItemTotal>0</ItemTotal>
                </IconContainer>
            </Head>
            <Nav>
            <Link to={`/productos`}>
                <ProductList>Productos</ProductList>
                </Link>
                {/* <Male>Productos</Male>
                <Children>Productos</Children> */}
            </Nav>
        </Container>
    );
};
