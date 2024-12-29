import React from 'react';
import Button from '../layout/Button/Button.tsx';
import './styles.css';

interface ShoppingCartCardProps{
  price: number;
  name: string;
  image: string;
}

const ShoppingCartCard = ({price, name, image}: ShoppingCartCardProps) => {
  return (
    <div className='shopping-cart-card'>
      <div className="image-container">
        <img src={image} alt="palceholder" />
      </div>
      <div className="content-container">
        <h2>{name}</h2>
        <p>${price}</p>
        <div className="quantity-control">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <p>Total: ${price*2}</p>
        <Button messageType='error' content='Delete' />
      </div>
    </div>
  );
};

export default ShoppingCartCard;