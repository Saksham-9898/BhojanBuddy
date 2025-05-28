import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBell, FaUser } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

function Navbar() {
  const [query, setQuery] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // You'll need to implement actual auth logic
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Your order #123 is on the way!", type: "order" },
    { id: 2, text: "50% off on your next order!", type: "promo" }
  ]);
  const mapRef = useRef(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [distance, setDistance] = useState("");

  // Load Google Maps script
  useEffect(() => {
    if (showMap && !window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = () => setMapLoaded(true);
      document.body.appendChild(script);
    } else if (showMap && window.google) {
      setMapLoaded(true);
    }
  }, [showMap]);

  // Get user location
  useEffect(() => {
    if (showMap && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => setUserLocation(null)
      );
    }
  }, [showMap]);

  // Initialize map and search for restaurants
  useEffect(() => {
    if (mapLoaded && userLocation && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: userLocation,
        zoom: 15,
      });
      // Marker for user
      new window.google.maps.Marker({
        position: userLocation,
        map,
        label: 'You',
      });
      // Search for restaurants
      const service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: userLocation,
        radius: 2000,
        type: ['restaurant'],
        keyword: query,
      }, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setRestaurants(results);
          results.forEach(place => {
            const marker = new window.google.maps.Marker({
              position: place.geometry.location,
              map,
              title: place.name,
            });
            marker.addListener('click', () => setSelectedRestaurant(place));
          });
        }
      });
      // Directions
      setDirectionsRenderer(new window.google.maps.DirectionsRenderer({ map }));
      setDirectionsService(new window.google.maps.DirectionsService());
    }
  }, [mapLoaded, userLocation, query]);

  // Draw route and show distance
  useEffect(() => {
    if (selectedRestaurant && directionsService && directionsRenderer && userLocation) {
      directionsService.route({
        origin: userLocation,
        destination: selectedRestaurant.geometry.location,
        travelMode: 'DRIVING',
      }, (result, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(result);
          const leg = result.routes[0].legs[0];
          setDistance(leg.distance.text);
        }
      });
    }
  }, [selectedRestaurant, directionsService, directionsRenderer, userLocation]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setShowMap(true);
      setSelectedRestaurant(null);
      setDistance("");
    }
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
    setShowNotifications(false);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowProfileDropdown(false);
  };

  return (
    <>
      <nav className='navbar'>
      <div className="logo">
        <Link to="/" className="logo-link">Bhojan Buddy</Link>
      </div>
      <ul className="nav-links">
        <li><Link to='/'>Home</Link></li>  
        <li><Link to='/explore'>Explore</Link></li>
        <li><Link to='/About'>About Us</Link></li>  
        <li><Link to='/Contact'>Contact</Link></li> 
      </ul>
      <div className="nav-right">
        <form onSubmit={handleSearch} style={{display:'flex',alignItems:'center',gap:8}}>
          <input
            type="text"
            className="search-bar"
            placeholder="Search Restaurants..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-button">Search</button>
        </form>

        {/* Cart Icon */}
        <div className="nav-icon">
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>

        {/* Notifications Icon */}
        <div className="nav-icon">
          <div className="notifications-icon" onClick={toggleNotifications}>
            <FaBell />
            {notifications.length > 0 && <span className="notification-dot"></span>}
          </div>
          {showNotifications && (
            <div className="notifications-dropdown">
              <h3>Notifications</h3>
              {notifications.map(notification => (
                <div key={notification.id} className={`notification-item ${notification.type}`}>
                  {notification.text}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Profile Icon */}
        <div className="nav-icon">
          <div className="profile-icon" onClick={toggleProfileDropdown}>
            <FaUser />
          </div>
          {showProfileDropdown && isLoggedIn && (
            <div className="profile-dropdown">
              <Link to="/orders">My Orders</Link>
              <Link to="/favorites">Favorites</Link>
              <Link to="/settings">Profile Settings</Link>
              <button onClick={() => setIsLoggedIn(false)} className="logout-btn">
                Log Out
              </button>
            </div>
          )}
          {showProfileDropdown && !isLoggedIn && (
            <div className="profile-dropdown">
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
      {showMap && (
        <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:24,flexDirection:'column',alignItems:'center'}}>
          <div ref={mapRef} style={{width:800,height:400,borderRadius:16,boxShadow:'0 4px 32px #0002',marginBottom:16}}></div>
          {restaurants.length > 0 && (
            <div style={{marginTop:8}}>
              <b>Nearby Restaurants:</b>
              <ul style={{listStyle:'none',padding:0}}>
                {restaurants.map((r) => (
                  <li key={r.place_id} style={{margin:'8px 0'}}>
                    <button style={{background:'#fff',color:'#232323',borderRadius:8,padding:'6px 16px',border:'1px solid #eee',cursor:'pointer',fontWeight:600}} onClick={()=>setSelectedRestaurant(r)}>
                      {r.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedRestaurant && distance && (
            <div style={{marginTop:12,fontWeight:600,fontSize:'1.1rem',color:'#00bcd4'}}>
              Distance to <b>{selectedRestaurant.name}</b>: {distance}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;
