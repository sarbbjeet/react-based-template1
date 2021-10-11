import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/navbar";
import Newsletter from "../components/newsletter";
import Products from "../components/products";

const Container = styled.div`
  margin: 30px 30px 0px;
`;
const ProductsTitle = styled.h1``;
const FilterContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
`;
const FilterText = styled.h5``;
const Select = styled.select`
  margin-left: 10px;
`;
const Option = styled.option``;

export default function ProductsList() {
  return (
    <>
      <NavBar />
      <Container>
        <ProductsTitle>Dresses</ProductsTitle>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
              <Option>Color</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Green</Option>
              <Option>Yellow</Option>
            </Select>
            <Select>
              <Option>Sizes</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
}
