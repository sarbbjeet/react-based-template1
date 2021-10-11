import React from "react";
import styled from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
const Container = styled.div`
  margin: 0px 30px;
  display: flex;
  height: 30vh;
  justify-content: space-between;
  /* border: 1px solid red; */
`;
const Left = styled.div`
  flex: 2;
`;
const Right = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 2;
`;

const Logo = styled.h2`
  font-family: "Courier New", Courier, monospace;
`;
const Desc = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border-radius: 50%;
  color: white;
  transition: all 0.4s;
  background-color: #${(props) => props.color};
  &:hover {
    transform: scale(1.2);
  }
`;

const LinkTitle = styled.h3`
  font-family: "Courier New", Courier, monospace;
  font-size: 22px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  height: 70%;
  flex-direction: column;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  margin-bottom: 5px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    text-shadow: 1px 1px 2px red;
  }
`;

const ContactContainer = styled.div`
  margin-top: 20px;
`;
const ContactDetail = styled.div`
  margin-bottom: 8px;
  font-size: 17px;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>My Shop.</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
          dolorem suscipit odit cupiditate rerum nam ad, illo impedit iste at
          obcaecati.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <LinkTitle>Useful links</LinkTitle>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Shirts</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <LinkTitle>Contact</LinkTitle>
        <ContactContainer>
          <ContactDetail>
            <RoomIcon style={{ marginRight: "10px" }} />7 Tennyson
            Street,Middlesbrough
          </ContactDetail>
          <ContactDetail>
            <PhoneIcon style={{ marginRight: "10px" }} /> +44849384
          </ContactDetail>
          <ContactDetail>
            <EmailIcon style={{ marginRight: "10px" }} /> mail@id.com
          </ContactDetail>
        </ContactContainer>
      </Right>
    </Container>
  );
}
