import React, { useState } from 'react';
import './rescard.css';

const CUISINES = [
  'All Cuisines',
  'North Indian',
  'South Indian',
  'Chinese',
  'Italian',
  'Street Food',
  'Cafe',
  'Mughlai',
  'Continental',
];
const RATINGS = ['Any Rating', 5, 4, 3, 2, 1];
const PRICES = ['Any Price', '₹', '₹₹', '₹₹₹'];

const RESTAURANTS = [
  {
    image: '/capp.jpg',
    name: 'Mannat Haveli',
    cuisine: 'North Indian',
    rating: 5,
    price: '₹₹',
  },
  {
    image: '/e52a5566b4db383db9b5071cff5e508f.jpg',
    name: 'Neelkanth Star',
    cuisine: 'South Indian',
    rating: 4,
    price: '₹₹',
  },
  {
    image: '/d21cd4dac4c920557d0a66dc54217c32.jpg',
    name: 'Usha Kiran Palace',
    cuisine: 'Chinese',
    rating: 3,
    price: '₹',
  },
  {
    image: '/a9345bb5570ed0d9da242130d2f04691.jpg',
    name: 'Moti Mahal Delux',
    cuisine: 'Mughlai',
    rating: 5,
    price: '₹₹₹',
  },
  {
    image: '/review1.avif',
    name: 'Cafe Coffee Day',
    cuisine: 'Cafe',
    rating: 4,
    price: '₹',
  },
  {
    image: '/review2.avif',
    name: 'Pizza Italiano',
    cuisine: 'Italian',
    rating: 3,
    price: '₹₹',
  },
];

export default function RestaurantFilter({ onFilter }) {
  const [cuisine, setCuisine] = useState('All Cuisines');
  const [rating, setRating] = useState('Any Rating');
  const [price, setPrice] = useState('Any Price');

  function handleApply(e) {
    e.preventDefault();
    let filtered = RESTAURANTS.filter(r =>
      (cuisine === 'All Cuisines' || r.cuisine === cuisine) &&
      (rating === 'Any Rating' || r.rating >= Number(rating)) &&
      (price === 'Any Price' || r.price === price)
    );
    onFilter(filtered);
  }

  return (
    <form className="filter-section animate-fadeInUp" onSubmit={handleApply} style={{marginBottom: 32}}>
      <h3 style={{display:'flex',alignItems:'center',gap:8,fontWeight:700}}>
        <span style={{color:'#ff8000',fontSize:22}}> 5C2 </span> Filter Options
      </h3>
      <div style={{display:'flex',gap:24,flexWrap:'wrap',marginTop:16}}>
        <div style={{flex:1,minWidth:220}}>
          <label style={{fontWeight:600}}>Cuisine</label>
          <select value={cuisine} onChange={e=>setCuisine(e.target.value)}>
            {CUISINES.map(c=>(<option key={c}>{c}</option>))}
          </select>
        </div>
        <div style={{flex:1,minWidth:220}}>
          <label style={{fontWeight:600}}>Minimum Rating</label>
          <select value={rating} onChange={e=>setRating(e.target.value)}>
            {RATINGS.map(r=>(<option key={r}>{r}</option>))}
          </select>
        </div>
        <div style={{flex:1,minWidth:220}}>
          <label style={{fontWeight:600}}>Price Range</label>
          <select value={price} onChange={e=>setPrice(e.target.value)}>
            {PRICES.map(p=>(<option key={p}>{p}</option>))}
          </select>
        </div>
      </div>
      <button className="rescard-btn" type="submit" style={{marginTop:18,maxWidth:180}}>Apply Filters</button>
    </form>
  );
}

export { RESTAURANTS };
