import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../Context/Dataprovider";
import ReactWhatsapp from 'react-whatsapp';

//------------------------------------  STYLES  ------------------------------------//
const Cars = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: clamp(10px, 2.1vh, 100px);
  @media (min-width: 767px) {
    font-size: clamp(10px, 2.5vh, 100px);
  }
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
  width: 100vmin;
  padding:2vmin 0;
  border-bottom: 1px solid #20202029;
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

const Title = styled.div`
  font-weight: 600;`;

const Price = styled.div``;

const BottonCar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 75px;
  height: 25px;
  border: 1px solid #646464;
  border-radius: 7%;
  transform: scale(0.7);
  cursor:pointer;
  @media (min-width: 767px) {
    transform: scale(1);
  }
`;

const Cant = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b9b9b976;
  border: 1px solid #646464;
  width: 25px;
  height: 25px;

`;

const RemoveItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #646464;
  background-color: #b9b9b976;
  border-radius: 7%;
  transform: scale(0.6);
  cursor:pointer;
  @media (min-width: 767px) {
    transform: scale(1);
  }
`;

const TotalCar = styled.div`
  font-weight: 700;
`;

const Button = styled.div`
`;

//------------------------------------  COMPONENT DEVELOPMENT  ------------------------------------//
export const Cart = () => {

  //hook structuring
  const value = useContext(DataContext);
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  // function that increments the position of the selected size
  const sumsize = id => {
    carrito.forEach(item => {
      if (item.id === id) {
        item.position === 3 ? item.position = 3 : item.position += 1;
      }
      setCarrito([...carrito])
    })
  }

  // function that decrease the position of the selected size
  const restsize = id => {
    carrito.forEach(item => {
      if (item.id === id) {
        item.position === 0 ? item.position = 0 : item.position -= 1;
      }
      setCarrito([...carrito])
    })
  }

  //Function to reduce quantity of products
  const rest = id => {
    carrito.forEach(item => {
      if (item.id === id) {
        item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
      }
      setCarrito([...carrito])
    })
  }

  //Function to increase quantity of products
  const sum = id => {
    carrito.forEach(item => {
      if (item.id === id) {
        item.cantidad += 1;
      }
      setCarrito([...carrito])
    })
  }

  //Product remove function
  const removeProduct = id => {
    if (window.confirm("¿Quieres suspender el producto?")) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          carrito.splice(index, 1)
        }
      })
      setCarrito([...carrito])
    }
  }

  //Return of the function
  return (
    <Cars>
      <Car>

        {/* //Return message in case the shopping cart is empty */}
        {carrito.length === 0 ? (
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(0px, 2.5vh, 100px)",
              color: "gray",
              padding: "30vh 0",
              fontWeight: "lighter"
            }}
          >
            No ha añadido nada al carro de compra
          </h2>
        ) : (
          <>
            {/* //Function that is in charge of traversing the data of the products and materializing them */}
            {carrito.map((product) => (
              <CarContainer>
                <Image src={product.image} key={product.id} />
                <TextCar>
                  <Title>{product.title} </Title>
                  <Price>${product.price} </Price>
                </TextCar>
                <IntCar>
                  <BottonCar>
                    <box-icon name="chevron-up" onClick={() => sum(product.id)} ></box-icon>
                    <Cant>{product.cantidad}</Cant>
                    <box-icon name="chevron-down" onClick={() => rest(product.id)} ></box-icon>
                  </BottonCar>
                  <BottonCar>
                    <box-icon name="chevron-up" onClick={() => sumsize(product.id)} ></box-icon>
                    <Cant>{product.size[product.position]}</Cant>
                    <box-icon name="chevron-down" onClick={() => restsize(product.id)} ></box-icon>
                  </BottonCar>
                  <RemoveItem onClick={() => removeProduct(product.id)}>
                    <box-icon name="trash"></box-icon>
                  </RemoveItem>
                </IntCar>
              </CarContainer>
            ))}
          </>
        )}
        <TotalCar>Valor total de la compra: $ {total}</TotalCar>
      </Car>
      {/* //Button that redirects to WhatsApp to complete the purchase with the direct seller */}
      <ReactWhatsapp style={{
        backgroundColor: "black",
        color: "#fefefe",
        margin: "20px",
        padding: "2vh",
        width: "50%",
        cursor: "pointer",
        fontWeight: "600",
        transform: "50%"
      }} number="57-320-804-46-12" message={`Buen día, me encuentro interesado en los siguientes productos:  ${carrito.map((item) =>
        item.cantidad + " " + item.title
      )} con un precio total de $${total}. En breve nos comunicaremos contigo para confirmar el proceso de pago y envío de los productos`} > <Button>Redirigir a la aplicación WhatsApp</Button> </ReactWhatsapp>
    </Cars>
  );
};
