import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <footer className='footer'>
    <div className="footer-columns">
    <div className='company-brand'>
        <h2>Cafe scene</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto praesentium perspiciatis autem, cupiditate, minima harum odit neque cum tempora excepturi et assumenda quae explicabo nesciunt facilis hic obcaecati quasi libero!</p>
    </div>
    <div>
        <h3>Quick links</h3>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a>About us</a></li>
            <li><a>Contact</a></li>
            <li><a>Privacy policy</a></li>
            <li><a>Terms and conditions</a></li>
        </ul>
    </div>
    <div>
        <h3>Contact</h3>
        <ul>
            <li> Email: support@cafefinder.com</li>
            <li> Phone: +1-234-567-8910</li>
            <li> Location: Somewhere on Earth</li>
        </ul>
    </div>
    <div>
        <h3>Follow us</h3>
        <ul>
            <li><a>Instagram</a></li>
            <li><a>Twitter</a></li>
        </ul>
    </div>


    <div className="footer-bottom">
        &copy; 2025 CafeFinder. All rights reserved.
      </div>
    </div>
    </footer>
    </>
  )
}

export default Footer