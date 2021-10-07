import React from "react";
import styled from "styled-components";
import { products } from "../utils/data.json";
import Product from "./product.jsx";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  background-color: #eeeeee;
`;
export default function Products() {
  return (
    <Container>
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </Container>
  );
}
