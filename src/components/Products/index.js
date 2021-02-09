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
  ProductButton,
  ProductImg1,
} from "./ProductsElement";

function Products({ heading, data }) {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg>
                <ProductImg1 src={product.img} alt={product.alt} />{" "}
              </ProductImg>
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton href="https://gofood.link/u/gxB1b">
                    {product.button}
                </ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
}

export default Products;
