import React from "react";
import styled from "styled-components";
import { categories } from "../utils/data.json";
import Category from "./category";

const Container = styled.div`
  display: flex;
  height: 65vh;
  justify-content: space-between;
`;

export default function Categories() {
  return (
    <Container>
      {categories.map((c) => (
        <Category key={c.id} item={c} />
      ))}
    </Container>
  );
}
