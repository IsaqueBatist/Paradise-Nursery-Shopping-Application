import React from 'react';
import './styles.css';
import Button from '../Button/Button.tsx';

interface CardItemProps{
  image: string;
  name: string;
  price: string;
  description: string;
}

const CardItem = ({image, name, price, description}: CardItemProps) => {
  return (
    <div className='card-item'>
      <div className="sale">
        <p>SALE</p>
      </div>
      <div className="card-header">
        <h2>{name}</h2>
      </div>
      <div className="card-body">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <p className='card-price'>${price}</p>
        <p className='card-description'>{description}</p>
        <Button content='Add to cart' />

      </div>
    </div>
  );
};

export default CardItem;