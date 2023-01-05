import React from "react";
import styled from "styled-components";
import Logo from "../../Resources/Logo.svg";

const Container = styled.div`
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
`;

const ItemTotal = styled.div`
    height:2.5vh;
    width:2.5vh;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translate(70%, -50%);
    color:white;
    background-color:green;
`;

export const Header = () => {
    return (
        <Container>
            <ImgContainer href="#">
                <Image src={Logo} />
            </ImgContainer>
            <IconContainer>
                <box-icon name="cart"></box-icon>
                <ItemTotal>0</ItemTotal>
            </IconContainer>
        </Container>
    );
};
