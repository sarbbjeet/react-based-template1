import { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { slides } from "../utils/data.json";
export default function Banner() {
  const [SlideIndex, setSlideIndex] = useState(0);
  const handleSlide = (dir) => {
    dir === "left"
      ? setSlideIndex(SlideIndex > 0 ? SlideIndex - 1 : 2)
      : setSlideIndex(SlideIndex < 2 ? SlideIndex + 1 : 0);
  };
  const Container = styled.div`
    display: flex;
    overflow: hidden;
    /* background-color: #74695f; */
    position: relative;
  `;
  const Arrow = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #fff7f7;
    border-radius: 50%;
    top: 50%;
    bottom: 50%;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
  `;
  const Wrapper = styled.div`
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => -100 * props.count}vw);
  `;
  const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 90vh;
  `;
  const BannerImage = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
  `;
  const Image = styled.img`
    height: 90%;
  `;
  const InfoContainer = styled.div`
    flex: 1;
    text-transform: uppercase;
  `;
  const Header = styled.h1`
    letter-spacing: 3px;
  `;
  const Para = styled.p`
    letter-spacing: 4px;
    margin: 25px 0;
  `;
  const Button = styled.button`
    opacity: 0.8;
    text-transform: uppercase;
  `;

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleSlide("left")}>
        <ArrowBackIosIcon sx={{ fontSize: "50px" }} />
      </Arrow>
      <Wrapper count={SlideIndex}>
        {slides.map((s) => (
          <Slide key={s.id}>
            <BannerImage>
              <Image src={s.image} />
            </BannerImage>
            <InfoContainer>
              <Header>{s.title}</Header>
              <Para>{s.desc}</Para>
              <Button>{s.btn_text}</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleSlide("right")}>
        <ArrowForwardIosIcon sx={{ fontSize: "50px" }} />
      </Arrow>
    </Container>
  );
}
