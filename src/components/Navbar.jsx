import { Badge, Search } from '@mui/icons-material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
      height: 60px;
      ${mobile({height: "50px"})};
`

const Wrapper = styled.div`
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      ${mobile({padding: "10px 0px"})};
`

const Left = styled.div`
      flex: 2;
`

const Center = styled.div`
      flex: 2;
      text-align: center; 
`

const Right = styled.div`
      flex: 2;
      display: flex;
      align-item: center;
      justify-content: flex-end;
      ${mobile({flex:2, justifyContent: "center"})};

`

const Language = styled.span`
      font-size: 14px;
      cursor: pointer;
      ${mobile({display: "none"})};
`

const SearchContainer = styled.div`
      border: 0.5px solid lightgray;
      display: flex;
      align-item: center;
      margin-left: 25px;
      padding: 5px;
`

const Input = styled.input`
      border: none;
      ${mobile({width: "50px"})};

`

const Logo = styled.h1`
      font-weight: bold;
      ${mobile({fontSize: "24px"})};
`

const Menu = styled.div`
      font-size: 14px;
      cursor: pointer;
      margin-left: 25px;
      ${mobile({fontSize: "12px", marginLeft: "10px"})};
`

const Navbar = () => {
  return (
    <Container> 
      <Wrapper>
        <Left> 
          <Language>
            EN
          </Language>
          
        </Left >
        <Center>
          <Logo>
            TELLO.
          </Logo>
        </Center>
        <Right>
          <Menu>Register</Menu>
          <Menu>Sign In</Menu>
          <Menu>
            <Badge badgecontent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Menu>
          <SearchContainer>
              <Input placeholder="Search"/> 
              <Search style={{color: "gray", fontSize: 16}}/>
          </SearchContainer>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar