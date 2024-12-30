import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ShoppingCartCard from '../../components/commom/ShoppingCartCard.tsx';
import './styles.css';
import Button from '../../components/layout/Button/Button.tsx';
import ItemsInCart from '../../interfaces/itemsInCart.ts';
import getAmountOfCart from '../../utils/getAmount.ts';

const ShoppingCartPage = () => {
  const [totalAmount, setTotalAmount] = useState(0)   
  const items = useSelector((state: { cart: { items: ItemsInCart[] } }) => state.cart.items)
  const navigate = useNavigate()

  useEffect(() => {
    const amount = getAmountOfCart(items)
    setTotalAmount(amount)
  }, [items])

  return (
    <div className='shopping-cart-page'>
      <h2>Total Cart Amount: ${totalAmount}</h2>
      <div className="cart-items">
        {items ? (items.map((item, index) => {
          return (
            <ShoppingCartCard 
              key={index}
              description={item.description}
              quantity={item.quantity}
              cost={item.cost}
              name={item.name}
              image={item.image}
            />
          )
        })) : ('No items in cart')}
      </div>
      <div className="buttons-section">
        <Button content='Continue Shopping' onClick={() => navigate('/product-listing')} />
        <Button content='Checkout' onClick={() => alert('This functionality will come back soon')} />
      </div>
    </div>
  );
};

export default ShoppingCartPage;