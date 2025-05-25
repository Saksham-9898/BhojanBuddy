import React from 'react';
import './explore.css';

function Explore() {
  return (
    <div
      className="explore-section animate-about-fadeIn"
    >
      <h2>
        <span role="img" aria-label="explore">🍽️</span> Explore Restaurants & Cafés
      </h2>
      <p>
        <b>Your taste adventure starts here.</b><br/>
        Discover new eateries, trending cuisines, and hidden gems near you. Whether you're on the hunt for a cozy café or a quick street-side snack, Bhojan Buddy makes it easy to find the perfect spot.
      </p>
      <hr />
      <div className="explore-features">
        <h4>💡 What you can do:</h4>
        <ul className="explore-list">
          <li>
            🔍 <b>Browse</b> by cuisine, location, vibe, or dietary preference
          </li>
          <li>
            🎯 <b>Filter</b> by budget, timing, ambience, ratings, and more
          </li>
          <li>
            ⭐ <b>Read reviews</b> and ratings from the Bhojan Buddy community
          </li>
          <li>
            📌 <b>Bookmark</b> your favorite places for future cravings
          </li>
        </ul>
      </div>
      <hr style={{width:'40%'}} />
      <div className="explore-coming">
        <h4>🚀 <span>Coming soon:</span></h4>
        <span>
          An interactive restaurant & café explorer with live maps and smart recommendations!
        </span>
      </div>
    </div>
  );
}

export default Explore;
