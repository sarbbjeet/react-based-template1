import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#73808355, #965acf22),
    url("./images/background2.jpg");
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  width: 40%;
  border-radius: 5px;
  padding: 20px;
`;

const FormTitle = styled.h1`
  font-family: "Antic Slab", serif;
  font-size: 32px;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  padding: 5px;
  min-width: 40%;
  margin: 10px 10px 10px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: 2px solid teal;
  background-color: white;
  padding: 8px;
  border-radius: 5px;
  &:hover {
    background-color: teal;
  }
`;

const Link = styled.a`
  width: 100%;
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <FormTitle>User Login</FormTitle>
        <Form>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Link>Already have an account</Link>
          <Button>Login</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}
