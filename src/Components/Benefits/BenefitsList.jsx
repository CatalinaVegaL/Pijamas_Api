import React from "react";
import styled from "styled-components";
import { benefits } from "../../data";
import BenefitsItem from "./BenefitsItem";

//------------------------------------  STYLES  ------------------------------------//
const Container = styled.div`
  background-color: #e5e5e57f;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4vh 0;
`;

//------------------------------------  COMPONENT DEVELOPMENT  ------------------------------------//
const Benefits = () => {
  return (
    <Container>
        {benefits.map((item)=> (
          <BenefitsItem item={item} key={item.id} />
        ))}
    </Container>
  );
};

export default Benefits;
