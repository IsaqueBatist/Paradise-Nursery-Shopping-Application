import React from 'react';
import plantIcon from "../../../assets/svg/product-listing-page/plant.svg";
import shoppingCartIcon from "../../../assets/svg/product-listing-page/shoppingcart.svg";
import "./styles.css"
const NavBar = () => {
  return (
    <header className="navbar">
      <div className="logoSection">
        <img src={plantIcon} alt="palntIcon" />
        <div className="sub-titles">
          <p>Paradise Nursery</p>
          <p>Where Green Meets Serenity</p>
        </div>
      </div>
      <nav className='nav'>
        <ul>
          <li><a href='/product-listing'>Plant</a></li>
        </ul>
      </nav>
      <div className="cartSection">
        <p>0</p>
        <img src={shoppingCartIcon} alt="shopping cart"/>

      </div>
    </header>
  );
};

export default NavBar;