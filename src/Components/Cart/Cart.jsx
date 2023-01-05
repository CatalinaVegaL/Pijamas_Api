import React from "react";
import styled from "styled-components";
import Card from "../../Resources/Male_1.png";

const Cars = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    font-size: clamp(10px, 2.5vh, 100px);
`;

const Car = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;

const CarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    height:30vmin;
    width:98vmin;
    margin:1vw ;
    @media (min-width: 767px) {
    }
`;

const Image = styled.img`
    width: 20%;
    height:100%;
`;

const TextCar = styled.div`
    width:55%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const IntCar = styled.div`
    width:25%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
`;

const Title = styled.div``;

const Price = styled.div``;

const BottonCar = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:90px;
    height:30px;
    border: 1px solid #646464;
    border-radius:7%;   
    transform: scale(0.8);
    @media (min-width: 767px) {
        transform: scale(1);
    }
    `;

const Cant = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#64646476;
    border: 1px solid #646464;
    width:30px;
    height:30px;
`;

const RemoveItem = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:30px;
    height:30px;
    border: 1px solid #646464;
    border-radius:7%;
    background-color:#64646476;
    transform: scale(0.8);
    @media (min-width: 767px) {
        transform: scale(1);
    }
`;

const TotalCar = styled.div`
    font-weight:700;
    `;

const Button = styled.div`
    background-color:black;
    color:white;
    text-align:center;
    margin:20px;
    padding:2%;
    width:50%;
    font-weight:600;
`;

export const Cart = () => {
    return (
        <Cars>
            <Car>
                <CarContainer>
                    <Image src={Card} />
                    <TextCar>
                        <Title>Titulo Titulo Titulo Titulo Titulo Titulo </Title>
                        <Price>$PRECIO</Price>
                    </TextCar>
                    <IntCar>
                        <BottonCar>
                            <box-icon name="chevron-up"></box-icon>
                            <Cant>1</Cant>
                            <box-icon name="chevron-down"></box-icon>
                        </BottonCar>
                        <RemoveItem>
                            <box-icon name="trash"></box-icon>
                        </RemoveItem>
                    </IntCar>
                </CarContainer>
                <TotalCar>Total:$1000000</TotalCar>
            </Car>
            <Button>Realizar el pago</Button>
        </Cars>
    );
};
