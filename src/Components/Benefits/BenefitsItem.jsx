import styled from "styled-components";

//------------------------------------  STYLES  ------------------------------------//
const Container = styled.div`
    width: 40vh;
    border: 2px solid #83a573;
    margin: 2vh 2vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

const ContainerImg = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 50%;
`;

const Cont = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: clamp(10px, 1.5vh, 100px);
    padding: 4%;
`;

const Title = styled.h1`
    color: #1f4d18;
`;

const Desc = styled.h1`
    font-weight: normal;
`;

//------------------------------------  COMPONENT DEVELOPMENT  ------------------------------------//
const BenefitsItem = ({ item }) => {
     //Return of the function
    return (
        <Container>
            <ContainerImg>
                <Image src={item.img} />
            </ContainerImg>
            <Cont>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
            </Cont>
        </Container>
    );
};

export default BenefitsItem;
