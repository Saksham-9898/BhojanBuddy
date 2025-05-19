import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <footer className='footer glow-bg animate-fadeInUp'>
    <div className="footer-columns animate-fadeInUp">
    <div className='company-brand animate-fadeInLeft'>
        <h2 className="animate-popIn">Bhojan Buddy</h2>
        <p className="animate-fadeInUp">Discover top-rated restaurants near you by filtering your favorite cuisines. Quick, simple, and made for food lovers on the go.</p>
    </div>
    <div className="animate-fadeInUp">
        <h3 className="animate-popIn">Quick links</h3>
        <ul>
            <li><a href='#' className="animate-fadeInLeft">Home</a></li>
            <li><a className="animate-fadeInLeft">About us</a></li>
            <li><a className="animate-fadeInLeft">Contact</a></li>
            <li><a className="animate-fadeInLeft">Privacy policy</a></li>
            <li><a className="animate-fadeInLeft">Terms & conditions</a></li>
        </ul>
    </div>
    <div className="animate-fadeInUp">
        <h3 className="animate-popIn">Contact</h3>
        <ul>
            <li className="animate-fadeInUp"> Email: support@bhojanbuddy.com</li>
            <li className="animate-fadeInUp"> Phone: +1-234-567-8910</li>
            <li className="animate-fadeInUp"> Location: Rishihood University</li>
        </ul>
    </div>
    <div className="animate-fadeInUp">
        <h3 className="animate-popIn">Follow us</h3>
        <ul>
            <li className="animate-fadeInLeft"><a>Instagram</a></li>
            <li className="animate-fadeInLeft"><a>Twitter</a></li>
        </ul>
    </div>
    <div className="footer-bottom animate-fadeInUp">
        &copy; 2025 Bhojan Buddy. All rights reserved.
      </div>
    </div>
    </footer>
    </>
  )
}

export default Footer