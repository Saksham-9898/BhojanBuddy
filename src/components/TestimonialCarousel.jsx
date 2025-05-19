import React from 'react';
import './testimonial.css';

const testimonials = [
	{
		name: 'Vishal Sharma',
		review:
			'I found an amazing Thai spot just 5 minutes from home — all thanks to this app!',
		image: '/review1.avif',
	},
	{
		name: 'Swati Mehta',
		review:
			'No more endless scrolling. I just filter by cuisine and rating — works like magic!',
		image: '/review2.avif',
	},
	{
		name: 'Bhavesh Bansal',
		review:
			'Perfect for foodies! I’ve discovered so many hidden gems I never knew existed.',
		image: '/review.avif',
	},
	{
		name: 'Nishchal Gupta',
		review:
			'Quick, simple, and super accurate. My go-to app whenever I’m hungry!',
		image: '/review3.avif',
	},
];

function TestimonialCarousel() {
	return (
		<div className="testimonial-section glow-bg animate-fadeInUp">
			<h2 className="testimonial-title animate-popIn">Customer Reviews</h2>
			<div className="testimonial-scroll-container animate-fadeInUp">
				{testimonials.map((testimonial, index) => (
					<div className="testimonial-card animate-fadeInLeft" key={index}>
						<img
							src={testimonial.image}
							alt={testimonial.name}
							className="testimonial-image animate-popIn"
						/>
						<p className="testimonial-review animate-fadeInUp">
							"{testimonial.review}"
						</p>
						<h4 className="testimonial-name animate-fadeInRight">- {testimonial.name}</h4>
					</div>
				))}
			</div>
		</div>
	);
}

export default TestimonialCarousel;
