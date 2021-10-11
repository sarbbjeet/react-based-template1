import { fontFamily, height } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/navbar";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
const Container = styled.div`
  margin: 0 30px;
  min-height: 60vh;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
`;
const CartTitle = styled.h1`
  text-align: center;
  font-family: "Antic Slab", serif;
  font-size: 32px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Bottom = styled.div`
  padding: 10px 0px;
  display: flex;
`;
const TopButton = styled.button`
  flex: 1;
  padding: 10px 0px;
  border: 2px solid teal;
  background-color: white;
  border-radius: 5px;
`;
const TopText = styled.div`
  flex: 3;
  text-align: center;
`;
const Link = styled.a`
  margin-left: 20px;
  color: gray;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 120px;
  height: 120px;
`;
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.span`
  margin: 5px 5px;
`;
const CartDetail = styled.div`
  flex: 1;
`;
const OrderSummary = styled.div`
  flex: 1;
  border: 1px solid #ddeeee;
  border-radius: 10px;
`;
const Amount = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  font-family: "Antic Slab", serif;
  font-size: 22px;
`;
const CountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const CountValue = styled.span`
  font-size: 20px;
  font-family: "Antic Slab", serif;
  color: gray;
  padding: 5px;
`;
const Counter = styled.div`
  cursor: pointer;
`;

const Hr = styled.hr`
  color: gray;
  margin: 10px;
`;

const OrderTitle = styled.h1`
  font-family: "Antic Slab", serif;
  text-align: center;
`;
const OrderDetails = styled.div`
  margin-top: 20px;
`;
const Item = styled.div`
  display: flex;
  padding: 0px 20px;
`;
const ItemHeader = styled.p`
  flex: 1;
`;
const ItemValue = styled.p`
  flex: 1;
  text-align: end;
`;
export default function Cart() {
  return (
    <>
      <NavBar />
      <Container>
        <Wrapper>
          <CartTitle>Your Bag</CartTitle>
          <Top>
            <TopButton>Continue shopping</TopButton>
            <TopText>
              <Link>Shopping Bag(2)</Link>
              <Link>Your Wishlist(0)</Link>
            </TopText>
            <TopButton>Checkout now</TopButton>
          </Top>
          <Bottom>
            <ProductContainer>
              <Product>
                <ProductDetail>
                  <Image src="./images/shoe.png" />
                  <Details>
                    <Text>
                      <b>Product:</b> JESSIE THUNDER SHOES
                    </Text>
                    <Text>
                      <b>ID:</b> 83894893
                    </Text>
                    <Text
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: "black",
                      }}
                    ></Text>
                    <Text>
                      <b>Size:</b> 37.5
                    </Text>
                  </Details>
                </ProductDetail>
                <CartDetail>
                  <CountContainer>
                    <Counter>
                      <AddIcon />
                    </Counter>
                    <CountValue>2</CountValue>
                    <Counter>
                      <RemoveIcon />
                    </Counter>
                  </CountContainer>
                  <Amount>
                    <AttachMoneyIcon /> 30
                  </Amount>
                </CartDetail>
              </Product>
              <Hr />

              <Product>
                <ProductDetail>
                  <Image src="./images/t-shirt.jpg" />
                  <Details>
                    <Text>
                      <b>Product:</b> HAKURA T-SHIRT
                    </Text>
                    <Text>
                      <b>ID:</b> VY789232
                    </Text>
                    <Text
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: "gray",
                      }}
                    ></Text>
                    <Text>
                      <b>Size:</b> L
                    </Text>
                  </Details>
                </ProductDetail>
                <CartDetail>
                  <CountContainer>
                    <Counter>
                      <AddIcon />
                    </Counter>
                    <CountValue>2</CountValue>
                    <Counter>
                      <RemoveIcon />
                    </Counter>
                  </CountContainer>
                  <Amount>
                    <AttachMoneyIcon /> 20
                  </Amount>
                </CartDetail>
              </Product>
            </ProductContainer>
            <OrderSummary>
              <OrderTitle>Order Summary</OrderTitle>
              <OrderDetails>
                <Item>
                  <ItemHeader>Subtotal</ItemHeader>
                  <ItemValue>
                    <AttachMoneyIcon /> 80
                  </ItemValue>
                </Item>
                <Item>
                  <ItemHeader>Estimated Shipping</ItemHeader>
                  <ItemValue>
                    <AttachMoneyIcon /> 5.49
                  </ItemValue>
                </Item>
                <Item>
                  <ItemHeader>Shipping Discount</ItemHeader>
                  <ItemValue>
                    <AttachMoneyIcon /> -5.49
                  </ItemValue>
                </Item>

                <Item>
                  <ItemHeader
                    style={{
                      fontWeight: "bold",
                      fontSize: "25px",
                      fontFamily: "Antic Slab",
                    }}
                  >
                    Total
                  </ItemHeader>
                  <ItemValue
                    style={{
                      fontWeight: "bold",
                      fontSize: "25px",
                      fontFamily: "Antic Slab",
                    }}
                  >
                    <AttachMoneyIcon style={{ fontSize: "30px" }} /> 80
                  </ItemValue>
                </Item>
              </OrderDetails>
            </OrderSummary>
          </Bottom>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}
