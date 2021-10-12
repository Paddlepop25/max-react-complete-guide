import React from 'react';
import Card from '../UI/Card';
import './ProductItem.css';
import { useCustomStore } from '../../hooks-store/custom-store';

const ProductItem = (props) => {
  const dispatch = useCustomStore()[1];

  const toggleFavHandler = () => {
    console.log(props.id);
    dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className='product-item'>
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
