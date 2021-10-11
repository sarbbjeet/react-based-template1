import NavBar from ".././components/navbar";
import styled from "styled-components";
import Banner from ".././components/banner";
import Categories from ".././components/categories";
import Products from ".././components/products";
import Newsletter from ".././components/newsletter";
import Footer from ".././components/Footer";

const Container = styled.div`
  margin: 5px 20px;
`;
export default function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Banner />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
}
