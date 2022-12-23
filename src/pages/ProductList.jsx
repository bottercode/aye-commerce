import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from '../responsive'

const Container = styled.div``

const Title = styled.div`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})};
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0px"})};
`

const Select = styled.div`
    pading: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0px"})};
`

const Option = styled.div``

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcements />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <select>
                    <option disabled selected>
                        Color
                    </option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                    <select>
                        <option selected>Newest</option>
                        <option> Price(asc.)</option>
                        <option> Price(desc.)</option>
                    </select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList