import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import React, { useState } from 'react'
import { sliderItems } from '../data';
import { mobile } from '../responsive';


const Container = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        background-color: coral;
        position: relative;
        overflow: hidden;
        ${mobile({display: "none"})};

`

const Arrow = styled.div`
        width: 25px;
        height: 25px;
        background-color: #fff7f7;
        border-radius: 20%;
        display: flex;
        align-item: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${props => props.direction === "left" && "10px"};
        right: ${props => props.direction === "right" && "10px"};
        margin: auto;
        cursor: pointer;
        opacity: 0.5;
        z-index: 2;
`

const Wrapper = styled.div`
        height: 100%;
        display: flex;
        transition: all 1.5s ease;
        transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        background-color: #${props => props.bg};
`

const ImageConatiner = styled.div`
        height: 100%;
        flex: 1;
`

const InfoContainer = styled.div`
        flex: 1;
        padding: 50px;
`

const Image = styled.img`
        height: auto;
        min-height: 100%;
        // min-width: 1270px;
        height: 80%;

`

const Title = styled.h1`
        font-size: 70px;
`

const Desc = styled.p`
        margin: 50px 0px;
        font-size: 20px;
        fotn-weight: 500;
        letter-spacing: 3px;
`
const Button = styled.button`
        padding: 10px;
        font-size: 20px;
        background-color: transparent;
        cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const HandleClick = (direction) => {
      if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
      }

      else{
        setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
      }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={() => HandleClick("left")}>
            <ArrowLeftOutlinedIcon />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
              <Slide bg = {item.bg} key={item.id}>
              <ImageConatiner>
                <Image src = {item.img} />
              </ImageConatiner>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>Shop</Button>
              </InfoContainer>
              </Slide>   
          ))}
          
        </Wrapper>
        <Arrow direction="right" onClick={() => HandleClick("right")}>
            <ArrowRightOutlinedIcon />
        </Arrow>
        
    </Container>
  )
}

export default Slider