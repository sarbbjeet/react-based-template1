import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Info = styled.div`
  display: flex;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #55535387;
  display: none;
  transition: all 0.5s ease;
  z-index: 2;
`;

const Circle = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  z-index: 0;
`;

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  height: 350px;
  margin: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  &:hover ${Info} {
    display: flex;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Icon = styled.div`
  margin: 10px;
  background-color: #fff;
  border-radius: 50%;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.3);
  }
  /* box-shadow: 1px 1px currentColor; */
`;

export default function Product(props) {
  const { product } = props;

  return (
    <Container>
      <Image src={product.image} />
      <Circle />
      <Info>
        <Icon>
          <SearchIcon />
        </Icon>
        <Icon>
          <FavoriteIcon />
        </Icon>
        <Icon>
          <ShoppingCartIcon />
        </Icon>
      </Info>
    </Container>
  );
}
