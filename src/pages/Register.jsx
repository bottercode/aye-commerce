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
    width: 40%;
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
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.div`
    font-size: 12px;
    margin: 20px 0px;

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

const Register = () => {
  return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="first name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of the
                        above information i have shared according to the PRIVACY POLICY.
                    </Agreement>
                    <Button color="black">CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register