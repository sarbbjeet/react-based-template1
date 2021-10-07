import React from "react";
import styled from "styled-components";
const Container = styled.div`
  /* height: 100%; */
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  border: 5px solid white;
  text-align: center;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;
const Info = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;
const Button = styled.button`
  font-size: 16px;
  color: gray;
  text-transform: uppercase;
  font-family: "Courier New", Courier, monospace;
  padding: 10px;
  border: none;
  margin-top: 5px;
  border-radius: 5px;
`;
const Title = styled.p`
  font-size: 28px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 5px black;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

export default function Category(props) {
  const { item } = props;
  return (
    <Container>
      <Image src={item.image} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
}
