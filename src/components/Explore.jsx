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
	 <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
	   <h2 style={{fontWeight: 900, fontSize: '2.7rem', color: 'var(--accent)', letterSpacing: 1, marginBottom: 0}}>Discover & Explore</h2>
	   <p style={{color: 'var(--muted-text)', fontSize: '1.18rem', maxWidth: 650, margin: '0 auto', marginTop: 12}}>
		 Find the best restaurants, trending dishes, and unique dining experiences near you. Use smart filters, see top picks, and get inspired for your next meal!
	   </p>
	 </div>

	 {/* New: Search Bar */}
	 <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2.5rem'}}>
	   <input type="text" placeholder="Search for restaurants, cuisines, or dishes..." style={{
		 width: 340,
		 padding: '0.9rem 1.2rem',
		 borderRadius: 18,
		 border: '1.5px solid var(--card-border)',
		 fontSize: '1.08rem',
		 background: 'var(--card-bg)',
		 color: 'var(--primary-text)',
		 marginRight: 12
	   }} />
	   <button style={{
		 background: 'linear-gradient(90deg, #ff8000 0%, #ffb366 100%)',
		 color: '#fff',
		 border: 'none',
		 borderRadius: 18,
		 padding: '0.9rem 2.2rem',
		 fontWeight: 700,
		 fontSize: '1.08rem',
		 cursor: 'pointer',
		 boxShadow: '0 2px 8px #ff800022',
		 letterSpacing: 1
	   }}>Search</button>
	 </div>

	 <div className="explore-features" style={{marginBottom: '2.5rem'}}>
	   <div style={{display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center'}}>
		 <div style={{minWidth: 260, flex: 1}}>
		   <h4 style={{color: 'var(--accent)'}}>Quick Filters</h4>
		   <ul className="explore-filters">
			 <li>🍕 Pizza</li>
			 <li>🍣 Sushi</li>
			 <li>🥗 Healthy</li>
			 <li>☕ Cafés</li>
			 <li>🔥 Trending</li>
			 <li>🌱 Vegan</li>
			 <li>🍔 Burgers</li>
			 <li>🍽️ Fine Dining</li>
		   </ul>
		 </div>
		 <div style={{minWidth: 260, flex: 1}}>
		   <h4 style={{color: 'var(--accent)'}}>Find by Mood</h4>
		   <ul className="explore-filters">
			 <li>👨‍👩‍👧‍👦 Family Friendly</li>
			 <li>💻 Work & Study</li>
			 <li>🎉 Party</li>
			 <li>💑 Date Night</li>
			 <li>🕯️ Romantic</li>
			 <li>🧑‍🍳 Chef’s Special</li>
		   </ul>
		 </div>
		 {/* New: Trending Tags */}
		 <div style={{minWidth: 260, flex: 1}}>
		   <h4 style={{color: 'var(--accent)'}}>Trending Now</h4>
		   <ul className="explore-filters">
			 <li>🌮 Mexican Fiesta</li>
			 <li>🍦 Summer Desserts</li>
			 <li>🍲 Comfort Food</li>
			 <li>🥘 Chef’s Picks</li>
			 <li>🍻 Best for Groups</li>
			 <li>🥡 Takeaway Stars</li>
		   </ul>
		 </div>
	   </div>
	 </div>

	 {/* Modern: Featured Collections with Icons and Grid */}
	 <div className="explore-features" style={{marginBottom: '2.5rem'}}>
	   <h4 style={{color: 'var(--accent)', fontSize: '2rem', fontWeight: 900, marginBottom: '2rem'}}>Featured Collections</h4>
	   <div className="featured-collections-grid">
		 <div className="featured-collection-card">
		   <span className="featured-icon">🍳</span>
		   <h5>Best Breakfasts</h5>
		   <p>Start your day with top-rated breakfast spots near you.</p>
		 </div>
		 <div className="featured-collection-card">
		   <span className="featured-icon">💖</span>
		   <h5>Romantic Evenings</h5>
		   <p>Perfect places for a date or special night out.</p>
		 </div>
		 <div className="featured-collection-card">
		   <span className="featured-icon">👨‍👩‍👧‍👦</span>
		   <h5>Family Friendly</h5>
		   <p>Restaurants with great kids’ menus and play areas.</p>
		 </div>
		 <div className="featured-collection-card">
		   <span className="featured-icon">🌙</span>
		   <h5>Late Night Eats</h5>
		   <p>Find the best food after hours in your city.</p>
		 </div>
	   </div>
	 </div>

	 <div className="explore-features" style={{marginBottom: '2.5rem'}}>
	   <h4 style={{color: 'var(--accent)'}}>Top Rated Nearby</h4>
	   <ul className="explore-list">
		 <li>
		   <span className="restaurant-name">The Spice Garden</span>
		   <span className="restaurant-rating">⭐ 4.8 · 0.5 km</span>
		 </li>
		 <li>
		   <span className="restaurant-name">Café Boulevard</span>
		   <span className="restaurant-rating">⭐ 4.6 · 1.2 km</span>
		 </li>
		 <li>
		   <span className="restaurant-name">Royal Kitchen</span>
		   <span className="restaurant-rating">⭐ 4.7 · 2.0 km</span>
		 </li>
	   </ul>
	 </div>

	 <div className="explore-features" style={{marginBottom: '2.5rem'}}>
	   <h4 style={{color: 'var(--accent)'}}>Popular Dishes</h4>
	   <div className="explore-menu-grid">
		 {popularDishes.map((dish) => (
		   <MenuItem key={dish.id} item={dish} />
		 ))}
	   </div>
	 </div>

	 <div className="explore-features" style={{marginBottom: '2.5rem'}}>
	   <h4 style={{color: 'var(--accent)'}}>Why Use BhojanBuddy?</h4>
	   <ul className="explore-benefits">
		 <li>📍 Smart location-based recommendations</li>
		 <li>🕒 Real-time table availability & instant booking</li>
		 <li>⭐ Trusted reviews and ratings from real diners</li>
		 <li>🔄 Personalized suggestions based on your taste</li>
		 <li>💬 Chat with restaurants for special requests</li>
		 <li>💸 Exclusive deals and loyalty rewards</li>
	   </ul>
	 </div>
   </section>
	);
}

export default Explore;
