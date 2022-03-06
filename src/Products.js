import React from 'react';
import products from './products.json'
import Product from './Components/Product';
import styled from 'styled-components';

function Products() {
  return (
    <div>
      <ProductsWrapper>
      {
        products.map((product,index)=>(
          <Product product={product} key={index}/>
        ))
      }
      </ProductsWrapper>
    </div>
  );
}

export default Products;

const ProductsWrapper = styled.div `
 text-align: center; 
 display: flex; 
`;