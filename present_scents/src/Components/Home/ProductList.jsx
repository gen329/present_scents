import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const products = [
  {
    title: 'I Am Enough',
    description: '',
    price: '',
    image: ''
  },
  {
    title: 'I Will Rest',
    description: '',
    price: '',
    image: '',
  },
  {
    title: 'I Am Worthy',
    description: '',
    price: '',
    image: '',
  },
];

const ProductList = () => {
  return (
    <ProductListContainer>
      {products.map(product => (
        <ProductItem key={product.title} product={product} />
      ))}
    </ProductListContainer>
  );
};

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

export default ProductList;