import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 100vh;
    background: url("https://images.unsplash.com/photo-1578264271517-a3e0f4f67312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlZ2lzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60");
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})};
`
const Title = styled.div`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.h1`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    margin-bottom: 10px;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: #494d5f;
    font-weight: 800;
    color: ${props => props.color = "white"};
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button color="black">Log In</Button>
                    <Link>Forgot Password?</Link>
                    <Link>CREATE A NEW ACCCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
  )
}

export default Login