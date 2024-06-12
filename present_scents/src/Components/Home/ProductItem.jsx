import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProductItem = ({ product }) => {
  return (
    <ProductCard>
      <ProductImage src={product.image} alt={product.title} />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>{product.price}</ProductPrice>
      </ProductInfo>
    </ProductCard>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

const ProductCard = styled.div`
background-color: #fff;
border: 1px solid #e0e0e0;
border-radius: 8px;
overflow: hidden;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductImage= styled.img`
width: 100%;
height 200px;
object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 16px;
`;

const ProductTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  color: #333;
`;

const ProductDescription = styled.p`
  margin: 8px 0;
  color: #777;
`;

const ProductPrice = styled.p`
  margin: 0;
  font-size: 1.125rem;
  color: #000;
  font-weight: bold;
`;

export default ProductItem;