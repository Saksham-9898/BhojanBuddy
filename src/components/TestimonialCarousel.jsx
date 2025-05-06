import React from 'react';
import './testimonial.css';

const testimonials = [
  {
    name: 'Alice Johnson',
    review: 'The coffee is absolutely amazing! Best café in town!',
    image: '/review1.avif'
  },
  {
    name: 'Sophie Lee',
    review: 'A cozy atmosphere and incredible coffee flavors.',
    image: '/review2.avif'
  },
  {
    name: 'David Smith',
    review: 'Fast service and great taste! I love their espresso.',
    image: '/review.avif'
  },
  {
    name: 'Mark Brown',
    review: 'The best place to chill and work while sipping great coffee.',
    image: '/review3.avif'
  },
];

function TestimonialCarousel() {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">What Our Customers Say</h2>
      <div className="testimonial-scroll-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-review">"{testimonial.review}"</p>
            <h4 className="testimonial-name">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialCarousel;
