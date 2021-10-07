import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

export default function NavBar(props) {
  const { custom } = props;
  const [iconColor, seticonColor] = useState("primary");

  const Container = styled.div`
    height: 8vh;
    background-color: #ee7700;
    display: flex;
    padding: 0 20px;
    align-items: center;
  `;
  const Left = styled.div`
    flex: 1;
  `;
  const Center = styled.div`
    flex: 1;
    text-align: center;
  `;
  const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;
  `;
  const Lang = styled.span``;
  const SearchGroup = styled.div`
    display: flex;
    align-items: center;
  `;
  const Input = styled.input`
    max-width: 200px;
    margin: 0 10px;
  `;
  const Icon = styled.span`
    cursor: pointer;
  `;
  const MenuItem = styled.div`
    margin-right: 10px;
    text-transform: uppercase;
    cursor: pointer;
  `;
  return (
    <Container>
      <Left>
        <SearchGroup>
          <Lang>En</Lang>
          <Input placeholder="..search" className="form-control"></Input>
          <Icon
            onMouseOver={() => seticonColor("secondary")}
            onMouseOut={() => seticonColor("primary")}
            {...custom}
          >
            <SearchIcon color={iconColor} sx={{ fontSize: "28px" }} />
          </Icon>
        </SearchGroup>
      </Left>
      <Center>ECommerce</Center>
      <Right>
        <MenuItem>Register</MenuItem>
        <MenuItem>login</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon color="primary" sx={{ fontSize: "28px" }} />
          </Badge>
        </MenuItem>
      </Right>
    </Container>
  );
}
