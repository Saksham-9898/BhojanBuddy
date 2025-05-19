import React from 'react';
import CoffeeCarousel from './featured'
import WhyChooseUs from './WhyChooseUs'
import TestimonialCarousel from './TestimonialCarousel'
import Footer from './Footer'
import HeroSection from './HeroSection'

function Home() {
  return (
    <>
      <div className="animate-fadeInUp"><HeroSection/></div>
      <div className="animate-fadeInUp"><CoffeeCarousel /></div>
      <div className="animate-fadeInUp"><WhyChooseUs /></div>
      <div className="animate-fadeInUp"><TestimonialCarousel /></div>
      <div className="animate-fadeInUp"><Footer /></div>
    </>
  )
}

export default Home;



