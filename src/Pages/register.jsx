import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#eeeeee44, #00000066),
    url("./images/background1.jpg");
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;

const FormContainer = styled.div`
  width: 40%;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
`;
const FormTitle = styled.h1`
  font-family: "Antic Slab", serif;
  font-size: 32px;
  text-align: center;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Button = styled.button`
  background-color: white;
  border: 2px solid teal;
  padding: 8px;
  border-radius: 5px;
  width: 40%;
`;
const Agreement = styled.div`
  font-size: 16px;
  margin: 10px 5px;
`;
export default function Register() {
  return (
    <Container>
      <FormContainer>
        <FormTitle>Create an user account</FormTitle>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Country" />
          <Input placeholder="Contact Num" />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            molestiae. Saepe, error quo eveniet vitae ratione, dolor a sunt
          </Agreement>
          <Button>Register</Button>
        </Form>
      </FormContainer>
    </Container>
  );
}
