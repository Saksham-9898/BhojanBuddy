import React from 'react';
import './explore.css';
import MenuItem from './MenuItem';

const popularDishes = [
	{
		id: 1,
		name: 'Butter Chicken',
		description: 'Creamy, rich butter chicken in a tomato-based sauce',
		price: 299,
		image: '/d21cd4dac4c920557d0a66dc54217c32.jpg',
		category: 'Main Course',
		rating: 4.8,
	},
	{
		id: 2,
		name: 'Paneer Tikka',
		description: 'Marinated and grilled cottage cheese with spices',
		price: 249,
		image: '/e52a5566b4db383db9b5071cff5e508f.jpg',
		category: 'Starters',
		rating: 4.6,
	},
	{
		id: 3,
		name: 'Dal Makhani',
		description: 'Creamy black lentils slow-cooked to perfection',
		price: 199,
		image: '/a9345bb5570ed0d9da242130d2f04691.jpg',
		category: 'Main Course',
		rating: 4.7,
	},
	{
		id: 4,
		name: 'Biryani Special',
		description: 'Aromatic rice dish with authentic spices',
		price: 349,
		image: '/e26a4db96340fadb1c16e78c900b47bf.jpg',
		category: 'Main Course',
		rating: 4.9,
	},
];

function Explore() {
	return (
		<section className="explore-section animate-about-fadeIn">
			<h2>
				<span role="img" aria-label="explore">
					🍽️
				</span>{' '}
				Explore Restaurants & Cafés
			</h2>
			<p>
				Discover the finest dining experiences in your area. From local favorites
				to hidden gems.
			</p>
			<hr />

			<div className="explore-features">
				<h4>Popular Dishes</h4>
				<div className="explore-menu-grid">
					{popularDishes.map((dish) => (
						<MenuItem key={dish.id} item={dish} />
					))}
				</div>
			</div>

			<div className="explore-features">
				<h4>Featured Restaurants</h4>
				<ul className="explore-list">
					<li>
						<span className="restaurant-name">The Spice Garden</span>
						<span className="restaurant-rating">⭐ 4.8</span>
					</li>
					<li>
						<span className="restaurant-name">Café Boulevard</span>
						<span className="restaurant-rating">⭐ 4.6</span>
					</li>
					<li>
						<span className="restaurant-name">Royal Kitchen</span>
						<span className="restaurant-rating">⭐ 4.7</span>
					</li>
				</ul>
			</div>

			<div className="explore-coming">
				<h4>Coming Soon</h4>
				<span>
					An interactive restaurant & café explorer with live maps and smart
					recommendations!
				</span>
			</div>
		</section>
	);
}

export default Explore;
