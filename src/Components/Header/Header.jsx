import React, { useContext } from "react";
import styled from "styled-components";
import Logo from "../../Resources/Logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DataContext } from "../../Context/Dataprovider";

//------------------------------------  STYLES  ------------------------------------//
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

//------------------------------------  COMPONENT DEVELOPMENT  ------------------------------------//
export const Header = () => {
  
  const value = useContext(DataContext);
  const [carrito] = value.carrito;

  return (
    <Container>
      <Head>
        <Link to={`/`}>
          <ImgContainer>
            <Image src={Logo} />
          </ImgContainer>
        </Link>
        <Link to={`/carrito`}>
          <IconContainer>
            <box-icon name="cart"></box-icon>
            <ItemTotal>{carrito.length}</ItemTotal>
          </IconContainer>
        </Link>
      </Head>
      <Nav>
          <Link to={`/productos/femenino`} style={{
            flex: "1",
            display: "Flex",
            textDecoration:"none"}}>
          <ProductList>Femenino</ProductList>
          </Link>
          <Link to={`/productos/masculino`} style={{
            flex: "1",
            display: "Flex",
            textDecoration:"none"}}>
          <ProductList>Masculino</ProductList>
          </Link>
          <Link to={`/productos/infantil`} style={{
            flex: "1",
            display: "Flex",
            textDecoration:"none"}}>
          <ProductList>Infantil</ProductList>
          </Link>

      </Nav>
    </Container>
  );
};
