import React from 'react';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import { useCustomStore } from '../hooks-store/custom-store';

const Products = (props) => {
  // const [globalState, dispatch] = useCustomStore(); legit, but we not interested in dispatch
  const globalState = useCustomStore()[0];

  return (
    <ul className='products-list'>
      {globalState.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
