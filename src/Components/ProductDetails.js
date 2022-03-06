import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import products from '../products.json'

function ProductDetails(props) {
    const name = props.match.params.name; //obtenir les infos de passes au nom que nous avons attribué dans la Route
    const produit = products.filter((p) => p.name === name)[0];
    const history = useHistory();

    return (
        produit &&
        <ProductsWrapper>
            <Container>
                <ContentBox>
                    <Content1>
                        <img src={produit.img} width="600" height="600" alt={produit.name} />
                    </Content1>
                    <Content2>
                        <H1>{produit.name}</H1>
                        <H3>Description:</H3>
                        <span>{produit.description}</span>
                        <H3>Price:</H3>
                        <span>{produit.price} DT</span>
                        <H3>Like:</H3>
                        <span>{produit.likes}</span>
                    </Content2>
                </ContentBox>
                <Footer>
                    <Button onClick={() => history.push('/products')}>Go to prodcuts list</Button>
                </Footer>
            </Container>
        </ProductsWrapper>

    );
}

export default ProductDetails;

const ProductsWrapper = styled.div`
  text-align: center;
  display: flex;
`;
const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.5fr 0.5fr;
  grid-template-areas:
    "content content"
    "footer footer";
  text-align: left;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1.2fr 1fr;
    grid-template-areas:
      "content"
      "footer";
  }
  color: black;
`;
const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const Content1 = styled.div`
  background: transparent !important;
  padding: 0.25rem;
  width: 40%;
  height: 100%;
`;
const Content2 = styled.div`
background: transparent !important;
padding: 0.25rem;
width: 60%;
height: 100%;
`;;
const Footer = styled.footer`
  background: transparent;
  grid-area: footer;
  padding: 0.25rem;
  text-align: right !important;
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const H1 = styled.h1`
  font-size: 3.5em;
  font-weight: bold;
`;

const H3 = styled.h3`
  color: palevioletred;
  font-size: 1.25em;
  font-weight: bold;
`;
const Span = styled.span`
  color: grey;
  font-size: 1.25em;
`;