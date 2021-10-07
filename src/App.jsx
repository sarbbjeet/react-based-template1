import NavBar from "./components/navbar";
import styled from "styled-components";
import Banner from "./components/banner";
import Categories from "./components/categories";
import Products from "./components/products";
import Newsletter from "./components/newsletter";

function App() {
  const Main = styled.div`
    height: 100vh;
  `;
  const Container = styled.div`
    margin: 5px 20px;
  `;
  return (
    <Main>
      <NavBar />
      <Container>
        <Banner />
        <Categories />
        <Products />
        <Newsletter />
      </Container>
    </Main>
  );
}

export default App;
