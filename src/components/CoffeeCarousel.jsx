import React from 'react';
import CoffeeCard from './coffeecard';
import './coffeecard.css';

function CoffeeCarousel() {
  const coffees = [
    {
      image: '/capp.jpg',
      name: 'Cappuccino',
      description: 'Coffee 50% | Milk 50%',
      price: '8.50',
    },
    {
      image: '/e52a5566b4db383db9b5071cff5e508f.jpg',
      name: 'Chai Latte',
      description: 'Coffee 50% | Milk 50%',
      price: '8.50',
    },
    {
      image: '/d21cd4dac4c920557d0a66dc54217c32.jpg',
      name: 'Macchiato',
      description: 'Coffee 50% | Milk 50%',
      price: '8.50',
    },
    {
      image: '/a9345bb5570ed0d9da242130d2f04691.jpg',
      name: 'Expresso',
      description: 'Coffee 50% | Milk 50%',
      price: '8.50',
    },
    
  ];

  return (
    <div className="coffee-carousel-container">
      <h2 className="section-title">Enjoy a new blend of coffee style</h2>
      <p className="section-subtitle">
        Explore all flavours of coffee with us. There is always a new cup worth experiencing
      </p>
      <div className="coffee-carousel">
        {coffees.map((coffee, index) => (
          <CoffeeCard
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
