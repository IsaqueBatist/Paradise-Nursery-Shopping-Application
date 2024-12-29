import React from 'react';
import ShoppingCartCard from '../../components/commom/ShoppingCartCard.tsx';
import './styles.css';
import Button from '../../components/layout/Button/Button.tsx';


const ShoppingCartPage = (props) => {
  
  const items = [
    {
      image: 'https://via.placeholder.com/150',
      name: 'Product 1',
      price: 20,
      quantity: 1
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Product 2',
      price: 20,
      quantity: 1,
    }
  ]
  return (
    <div className='shopping-cart-page'>
      <h2>Total Cart Amount: $0</h2>
      <div className="cart-items">
        {items ? (items.map((item, index) => {
          return (
            <ShoppingCartCard 
              key={index}
              price={item.price}
              name={item.name}
              image={item.image}
            />
          )
        })) : ('No items in cart')}
      </div>
      <div className="buttons-section">
        <Button content='Continue Shopping' />
        <Button content='Checkout' />
      </div>
    </div>
  );
};

export default ShoppingCartPage;