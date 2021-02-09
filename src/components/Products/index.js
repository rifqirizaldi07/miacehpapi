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
  ProductButtonLink,
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
                <ProductButton>
                  <ProductButtonLink href="https://gofood.link/u/gxB1b">
                    {product.button}
                  </ProductButtonLink>
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
