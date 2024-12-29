import React, { useEffect, useState } from 'react';
import './styles.css';
import CardItem from '../../components/layout/CardItem/CardItem.tsx';
import getPlants from '../../utils/getplants.ts';
import PlantsArray from '../../interfaces/plantsArrayinterface.ts';

const ProductListingPage = (props) => {
  const [plantsArray, setPlantsArray] = useState<PlantsArray[]>([]);
  const [addToCart, setAddToCart] = useState<PlantsArray[]>([]);

  useEffect(() => {
    const plantsArray = getPlants();
    setPlantsArray(plantsArray);
  }, [])
  return (
    <div className='product-listing-page'>
      {plantsArray.map((category) => {
        return (
          <div className='category-container' key={category.category}>
            <h2 className='category-titlle'>{category.category}</h2>
            <div className='plants-container'>
              {category.plants.map((plant) => {
                return (
                  <CardItem
                    key={plant.name}
                    plant={plant}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListingPage;