import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../Context/Dataprovider";
import { ProductItem } from "./ProductItem";

//------------------------------------  STYLES  ------------------------------------//
const Products = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

//------------------------------------  COMPONENT DEVELOPMENT  ------------------------------------//
export const ProductListM = () => {

  //hook structuring
  const value = useContext(DataContext);
  const [products] = value.products;
  
  //Return of the function
  return (
    <Products>
      {products.map((product) => {
        if(product.category === "Masculina") {
          return (
            <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
            cantidad={product.cantidad}
          />
          )
        }
      })}
    </Products>
  );
};