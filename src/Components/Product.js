import React, { Component, useState } from 'react';
import styled from 'styled-components';


function Product(props) {
    const[likes,setlikes] = useState(0);
    const addLikes=()=>{setlikes(likes+1)};
    return (
        <div>
            <ProductFrame>
                <ProductImageWrapper>
                    <ProductImage src={props.product.img}>
                    </ProductImage>
                </ProductImageWrapper>
                <ProductInfoWrapper>
                    <span>{props.product.name}</span>
                    <span>{props.product.price}</span>
                    <span>likes : {likes}</span>
                </ProductInfoWrapper>
                <button onClick={addLikes}>Like</button>
            </ProductFrame>
         </div>
    );
}

export default Product;


const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 150px;
  min-width: 150px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 150px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center`;