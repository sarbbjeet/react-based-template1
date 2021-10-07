import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  height: 40vh;
  background-color: #eeeeee;
`;

const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-size: 50px;
  letter-spacing: 1px;
`;
const Desc = styled.div`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 20px;
  color: grey;
`;
const InputContainer = styled.div`
  display: flex;
  /* border: 1px solid red; */
  width: 30%;
  height: 40px;
  background-color: white;
  margin-top: 10px;
`;
const Input = styled.input`
  flex: 9;
  border: none;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  letter-spacing: 1px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: teal;
  color: white;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 2px black;
  }
`;

export default function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
}
