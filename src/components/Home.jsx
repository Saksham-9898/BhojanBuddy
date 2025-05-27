import React from 'react';
import CoffeeCarousel from './featured'
import WhyChooseUs from './WhyChooseUs'
import TestimonialCarousel from './TestimonialCarousel'
import Footer from './Footer'
import HeroSection from './HeroSection'
import HowItWorks from './how it works';
import MenuItem from './MenuItem';

const sampleMenuItems = [
  {
    id: 1,
    name: 'Butter Chicken',
    description: 'Creamy, rich butter chicken with naan bread',
    price: 299,
    image: '/d21cd4dac4c920557d0a66dc54217c32.jpg'
  },
  {
    id: 2,
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese with spices',
    price: 249,
    image: '/e52a5566b4db383db9b5071cff5e508f.jpg'
  },
  {
    id: 3,
    name: 'Dal Makhani',
    description: 'Creamy black lentils cooked overnight',
    price: 199,
    image: '/a9345bb5570ed0d9da242130d2f04691.jpg'
  }
];

function Home() {
  return (
    <>
      <div className="animate-fadeInUp"><HeroSection/></div>
      <div className="animate-fadeInUp"><CoffeeCarousel /></div>
      <div className="animate-fadeInUp"><WhyChooseUs /></div>
      <div className="animate-fadeInUp"><HowItWorks /></div>
      
      {/* Featured Menu Items */}
      <div className="menu-section animate-fadeInUp">
        <h2>Popular Dishes</h2>
        <div className="menu-grid">
          {sampleMenuItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      
      <div className="animate-fadeInUp"><TestimonialCarousel /></div>
      <div className="animate-fadeInUp"><Footer /></div>
    </>
  )
}

export default Home;



