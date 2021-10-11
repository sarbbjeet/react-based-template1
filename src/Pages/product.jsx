import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/navbar";
import Newsletter from "../components/newsletter";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Container = styled.div`
  margin: 0 30px;
`;
const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;
const ImageContainer = styled.div`
  flex: 1;
  /* border: 1px solid red; */
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  /* border: 1px solid green; */
  padding: 0 50px;
`;
const Title = styled.h1`
  font-family: "Fira Sans", sans-serif;
  color: grey;
  font-size: 35px;
`;
const Desc = styled.p`
  font-family: "Quicksand", sans-serif;
`;
const Price = styled.div`
  font-size: 30px;
  color: grey;
  display: flex;
  align-items: center;
  font-family: "Quicksand", sans-serif;
`;

const FilterContainer = styled.div`
  margin-top: 20px;
  display: flex;
`;
const Filter = styled.div`
  display: flex;
  margin-left: 20px;
  font-family: "Quicksand", sans-serif;
`;
const FilterText = styled.div`
  margin-right: 10px;
  font-size: 20px;
  font-family: "Quicksand", sans-serif;
  color: gray;
`;
const Select = styled.select`
  color: gray;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
`;
const Option = styled.option`
  color: gray;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
`;
const ColorFilter = styled.div`
  display: flex;
  align-items: center;
`;
const Color = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  margin-right: 8px;
  cursor: pointer;
  transition: all 0.4s;
  background-color: ${(props) => props.color};
  &:hover {
    transform: scale(1.2);
  }
`;

const CartContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
const AddCart = styled.div`
  margin-left: 50px;
  cursor: pointer;
  border: 2px solid teal;
  padding: 5px;
  font-size: 20px;
  text-align: center;
  border-radius: 2px;
  &:hover {
    background-color: #eeeeee;
  }
`;
const CountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Count = styled.div`
  cursor: pointer;
  color: gray;
`;
const Amount = styled.div`
  border: 2px solid teal;
  border-radius: 8px;
  padding: 3px;
  color: gray;
  font-family: "Quicksand", sans-serif;
  margin: 0 5px;
`;
export default function Product() {
  return (
    <>
      <NavBar />
      <Container>
        <Wrapper>
          <ImageContainer>
            <Image src="./images/jean.jpg" />
          </ImageContainer>
          <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              rem tenetur, vitae voluptas nihil aliquam ex aliquid eum neque
              facere voluptates totam! Sequi ab sint, deserunt magni non illum
              fugit.
            </Desc>
            <Price>
              <AttachMoneyIcon style={{ fontSize: "35px" }} />
              20
            </Price>
            <FilterContainer>
              <ColorFilter>
                <FilterText>Color:</FilterText>
                <Color color="black" />
                <Color color="blue" />
                <Color color="gray" />
              </ColorFilter>
              <Filter>
                <FilterText>Size:</FilterText>
                <Select>
                  <Option>Sizes</Option>
                  <Option>XS</Option>
                  <Option>S</Option>
                  <Option>M</Option>
                  <Option>L</Option>
                  <Option>XL</Option>
                </Select>
              </Filter>
            </FilterContainer>
            <CartContainer>
              <CountContainer>
                <Count>
                  <RemoveIcon />
                </Count>
                <Amount>10</Amount>
                <Count>
                  <AddIcon />
                </Count>
              </CountContainer>
              <AddCart>Add to cart </AddCart>
            </CartContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
}
