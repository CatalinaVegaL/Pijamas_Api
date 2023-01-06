import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

//------------------------------------  STYLES  ------------------------------------//
const Container = styled.div`
    width: 35vh;
    height: 50vh;
    border: 2px solid #83a573;
    text-align: center;
    font-weight: bold;
    position: relative;
    margin: 2vh 4vh;
    font-size: clamp(10px, 2vh, 100px);
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.05);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    margin: 2vh;
    font-size: clamp(10px, 2.5vh, 100px);
    color: black;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #83a573;
    color: #000000;
    cursor: pointer;
    font-weight: 600;
    margin: 2vh;
    font-size: clamp(10px, 2vh, 100px);
`;

//------------------------------------  COMPONENT DEVELOPMENT  ------------------------------------//
const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.category}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>COMPRA AHORA</Button>
                </Info>
            </Link>
        </Container>
    );
};

export default CategoryItem;
