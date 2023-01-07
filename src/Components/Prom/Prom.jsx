import React from "react";
import styled from "styled-components";
import Family from "../../Resources/H_Family.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//------------------------------------  STYLES  ------------------------------------//
const Container = styled.div`
    height: 83vh;
    display: Flex;
    align-items: center;
    background-color: #83a57364;
`;

const ContainerLeft = styled.div`
    height: 100%;
    flex: 1;
    display: Flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Description = styled.div`
    margin-bottom: 10vh;
    width: 80%;
    font-size: clamp(10px, 2.5vh, 100px);
`;

const Botton = styled.div`
    display: Flex;
    align-items: center;
    justify-content: space-around;
    background-color: #83a573;
    width: 60%;
    border-radius: 3vh;
    cursor: pointer;
    hyphens: auto;
    padding: 2vh;
    font-weight: 600;
    font-size: clamp(10px, 2vh, 100px);
    color: black;
`;

const ContainerRight = styled.div`
    height: 100%;
    flex: 1;
    //z-index: -1;
`;

const Image = styled.img`
    object-fit: cover;
    object-position: center top;
    width: 100%;
    height: 100%;
`;

//------------------------------------  COMPONENT DEVELOPMENT  ------------------------------------//
const Prom = () => {
    return (
        <Container>
            <ContainerLeft>
                <Description>
                    La vida es demasiado corta como para que te niegues el placer de
                    disfrutar tus días de descanso y sueño usando una pijama que te
                    encante.
                </Description>
                <Link to={`/productos/Femenino`}>
                    <Botton>ENCUENTRA AQUÍ TU PIJAMA PERFECTA</Botton>
                </Link>
            </ContainerLeft>
            <ContainerRight>
                <Image src={Family} />
            </ContainerRight>
        </Container>
    );
};

export default Prom;
