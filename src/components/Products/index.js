import React from "react";
import {
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductsContainer,
  ProductsHeading,
  ProductTitle,
  ProductWrapper,
} from "./ProductsElement";

function Products({ heading, data }) {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
}

export default Products;
