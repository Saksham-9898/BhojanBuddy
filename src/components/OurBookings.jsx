import React, { useContext, useEffect, useState } from 'react';
import './ourbookings.css';
import StarIcon from './StarIcon';
import { AuthContext } from '../context/AuthContextObject';

// Dummy data for demonstration. Replace with real data fetching logic.
const dummyBookings = [
  {
    id: 1,
    restaurantName: 'Cafe Arabica',
    tableNumber: 5,
    bookingTime: '2025-07-07T18:00',
    bookingTill: '2025-07-07T20:00',
    people: 4,
    status: 'current',
  },
  {
    id: 2,
    restaurantName: 'Vintage Coffee House',
    tableNumber: 2,
    bookingTime: '2025-06-30T13:00',
    bookingTill: '2025-06-30T15:00',
    people: 2,
    status: 'past',
  },
];


function OurBookings() {
  // fallback: try both 'user' and 'currentUser' for compatibility
  const auth = useContext(AuthContext);
  const user = auth?.user || auth?.currentUser;
  console.log('AuthContext:', auth);
  console.log('User:', user);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(dummyBookings);
  }, []);

  const current = bookings.filter(b => b.status === 'current');
  const past = bookings.filter(b => b.status === 'past');

  return (
    <div className="bookings-container">
      <div className="bookings-header">
        <h2>Our Bookings</h2>
        <div className="stars-row">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} size={28} />
          ))}
        </div>
        <p className="luxury-text">Premium Table Reservations</p>
      </div>
      {!user && (
        <p style={{textAlign:'center',marginTop:'2rem'}}>Please log in to view your bookings.</p>
      )}
      {user && (
        <>
          <section>
            <h3>Current Bookings</h3>
            {current.length === 0 ? <p>No current bookings.</p> : (
              <div className="bookings-list">
                {current.map(b => (
                  <div className="booking-card" key={b.id}>
                    <div className="booking-card-top">
                      <img src="/table.jpg" alt="Table" className="table-img" />
                      <div className="booking-card-info">
                        <h4>{b.restaurantName}</h4>
                        <p><b>Table:</b> {b.tableNumber}</p>
                        <p><b>Time:</b> {new Date(b.bookingTime).toLocaleString()} - {new Date(b.bookingTill).toLocaleTimeString()}</p>
                        <p><b>People:</b> {b.people}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
          <section>
            <h3>Past Bookings</h3>
            {past.length === 0 ? <p>No past bookings.</p> : (
              <div className="bookings-list">
                {past.map(b => (
                  <div className="booking-card" key={b.id}>
                    <div className="booking-card-top">
                      <img src="/table.jpg" alt="Table" className="table-img" />
                      <div className="booking-card-info">
                        <h4>{b.restaurantName}</h4>
                        <p><b>Table:</b> {b.tableNumber}</p>
                        <p><b>Time:</b> {new Date(b.bookingTime).toLocaleString()} - {new Date(b.bookingTill).toLocaleTimeString()}</p>
                        <p><b>People:</b> {b.people}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

export default OurBookings;
