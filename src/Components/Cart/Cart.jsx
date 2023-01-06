import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../Context/Dataprovider";

//------------------------------------  STYLES  ------------------------------------//
const Cars = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: clamp(10px, 2.5vh, 100px);
`;

const Car = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 30vmin;
  width: 98vmin;
  margin: 1vw;
`;

const Image = styled.img`
  width: 30%;
  height: 100%;
  object-fit: contain;
`;

const TextCar = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const IntCar = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.div``;

const Price = styled.div``;

const BottonCar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90px;
  height: 30px;
  border: 1px solid #646464;
  border-radius: 7%;
  transform: scale(0.8);
  cursor:pointer;
  @media (min-width: 767px) {
    transform: scale(1);
  }
`;

const Cant = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #64646476;
  border: 1px solid #646464;
  width: 30px;
  height: 30px;
`;

const RemoveItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #646464;
  background-color: #64646476;
  border-radius: 7%;
  transform: scale(0.8);
  cursor:pointer;
  @media (min-width: 767px) {
    transform: scale(1);
  }
`;

const TotalCar = styled.div`
  font-weight: 700;
`;

const Button = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  margin: 20px;
  padding: 2%;
  width: 50%;
  font-weight: 600;
  cursor:pointer;
`;

export const Cart = () => {
    const value = useContext(DataContext);
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    const rest = id => {
        carrito.forEach(item=>{
            if (item.id === id) {
                item.cantidad===1 ? item.cantidad = 1: item.cantidad -=1;
            }
            setCarrito([...carrito])
        })
    }

    //Funcion de 
    const sum = id => {
        carrito.forEach(item=>{
            if (item.id === id) {
                item.cantidad +=1;
            }
            setCarrito([...carrito])
        })
    }

    const removeProduct = id => {
        if(window.confirm("¿Desea eliminar el producto?")) {
            carrito.forEach((item, index) => {
                if (item.id === id) {
                    item.cantidad = 1;
                    carrito.splice (index, 1)
                }
            })
            setCarrito([...carrito])
        }   
    }

    console.log(carrito)

    return (
        <Cars>
            <Car>
                {carrito.length === 0 ? (
                    <h2
                        style={{
                            textAlign: "center",
                            fontSize: "clamp(0px, 2.5vh, 100px)",
                        }}
                    >
                        No tiene nada en el carro de compra
                    </h2>
                ) : (
                    <>
                        {carrito.map((product) => ( 
                            <CarContainer>
                                <Image src={product.image} key={product.id} />
                                <TextCar>
                                    <Title>{product.title} </Title>
                                    <Price>${product.price} </Price>
                                </TextCar>
                                <IntCar>
                                    <BottonCar>
                                        <box-icon name="chevron-up" onClick={()=> sum(product.id)} ></box-icon>
                                        <Cant>{product.cantidad}</Cant>
                                        <box-icon name="chevron-down" onClick={()=> rest(product.id)}  ></box-icon>
                                    </BottonCar>
                                    <RemoveItem onClick={() => removeProduct(product.id)}>
                                        <box-icon name="trash"></box-icon>
                                    </RemoveItem>
                                </IntCar>
                            </CarContainer>
                        ))}
                    </>
                )}

                <TotalCar>Total:$1000000</TotalCar>
            </Car>
            <Button>Realizar el pago</Button>
        </Cars>
    );
};
