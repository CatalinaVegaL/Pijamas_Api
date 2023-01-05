import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../Context/Dataprovider";
import { ProductItem } from "./ProductItem";

const Products = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProductList = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;

  console.log(productos);

  return (
    <Products>
      {productos.map((producto) => (
        <ProductItem
          key={producto.id}
          id={producto.id}
          title={producto.title}
          price={producto.price}
          image={producto.image}
          category={producto.category}
          cantidad={producto.cantidad}
        />
      ))}
    </Products>
  );
};
