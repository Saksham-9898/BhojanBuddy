import React from 'react';
import CoffeeCarousel from './featured'
import WhyChooseUs from './WhyChooseUs'
import TestimonialCarousel from './TestimonialCarousel'
import HeroSection from './HeroSection'
import HowItWorks from './how it works';

function Home() {
  return (
    <>
      <div className="animate-fadeInUp"><HeroSection/></div>
      <div className="animate-fadeInUp"><CoffeeCarousel /></div>
      <div className="animate-fadeInUp"><WhyChooseUs /></div>
      <div className="animate-fadeInUp"><HowItWorks /></div>
      <div className="animate-fadeInUp"><TestimonialCarousel /></div>
    </>
  )
}

export default Home;



