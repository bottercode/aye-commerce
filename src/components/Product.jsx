import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartCheckoutOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
    opacity: 0; 
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: gray;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`

const Container = styled.div`
        flex: 1;
        margin: 5px;
        min-width: 280px;
        height: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F6F6FF;
        position: relative;

        &:hover ${Info} {
            opacity: 1;
        }
`

const Circle = styled.div`
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
`
const Image = styled.div`
    height: 75%;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover{
        background-color: #CCE1f2;
        transform: scale(1.1);
    }
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src = {item.img} />
        <Info>
            <Icon>
                <ShoppingCartCheckoutOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product