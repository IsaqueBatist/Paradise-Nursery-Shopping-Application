import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import LandingPage from '../pages/landing-page/LandingPage.tsx';
import ProductListingPage from '../pages/product-listing-page/ProductListingPage.tsx';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/product-listing' element={<ProductListingPage />} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;