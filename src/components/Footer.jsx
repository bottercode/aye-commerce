import { Facebook, GitHub, MailOutline, Phone, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})};
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>TELLO.</Logo>
            <Desc>dksbdjsn</Desc>
            <SocialContainer>
                <SocialIcon color="3b5998">
                    <Facebook></Facebook>
                </SocialIcon>

                <SocialIcon color="1DA1F2">
                    <Twitter></Twitter>
                </SocialIcon>

                <SocialIcon color="4078c0">
                    <GitHub></GitHub>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>    
            <Title>TELLO.</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men</ListItem>
                <ListItem>Women</ListItem>
                <ListItem>Kids</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>My Orders</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style = {{marginRight: "10px" }}/> India
            </ContactItem>
            <ContactItem>
                <MailOutline style = {{marginRight: "10px" }}/> jeeinfo69@gmail.com
            </ContactItem>
            
        </Right>
    </Container>
  )
}

export default Footer