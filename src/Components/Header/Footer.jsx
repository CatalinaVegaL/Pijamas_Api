import React from 'react'
import styled from "styled-components";

//------------------------------------  STYLES  ------------------------------------//
const Container = styled.div`
    background-color: #83a573;
    font-size: clamp(10px, 1.5vh, 100px);
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content:center;
`;

const Text = styled.div`
    margin: 5vh;
`;

//------------------------------------  COMPONENT DEVELOPMENT  ------------------------------------//
export const Footer = () => {
    return (
        <Container>
            <Text>©2023 Pijamas | Buen Dormir</Text>
            <Text>Desarrollado por: Catalina Vega</Text>
        </Container>
    )
}
