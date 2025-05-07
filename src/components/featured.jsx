import React from 'react';
import Rescard from './rescard';
import './rescard.css';

function CoffeeCarousel() {
  const coffees = [
    {
      image: '/capp.jpg',
      name: 'Mannat Haveli',
      // description: '',
      // price: '8.50',
    },
    {
      image: '/e52a5566b4db383db9b5071cff5e508f.jpg',
      name: 'Neelkanth Star',
      // description: '',
      // price: '8.50',
    },
    {
      image: '/d21cd4dac4c920557d0a66dc54217c32.jpg',
      name: 'Usha Kiran Palace',
      // description: '',
      // price: '8.50',
    },
    {
      image: '/a9345bb5570ed0d9da242130d2f04691.jpg',
      name: 'Moti Mahal Delux',
      // description: '',
      // price: '8.50',
    },
    
  ];

  return (
    <div className="coffee-carousel-container">
      <h2 className="section-title">Flavors from Every Corner</h2>
      <p className="section-subtitle">
      Explore top-rated restaurants offering global tastes—because great food has no borders.      </p>
      <div className="coffee-carousel">
        {coffees.map((coffee, index) => (
          <Rescard
            key={index}
            image={coffee.image}
            name={coffee.name}
            description={coffee.description}
            price={coffee.price}
          />
        ))}
      </div>
    </div>
  );
}

export default CoffeeCarousel;
