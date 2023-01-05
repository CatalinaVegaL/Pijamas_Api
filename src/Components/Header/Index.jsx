import React from "react";
import styled from "styled-components";

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
    transform: translate(-50%, -50%);
`;

const Header = () => {
    return (
        <Container>
            <ImgContainer>
                <Image src={Logo} />
            </ImgContainer>
            <IconContainer>
                
            </IconContainer>
        </Container>
    );
};

export default Header;
