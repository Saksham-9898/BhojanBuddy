import React from 'react';
import './contact.css';


function Contact() {
  return (
    <div className='contact glow-bg animate-fadeInUp'>
        <div className='innercard animate-fadeInUp'>
            <div className='form animate-fadeInLeft'>
                <h1 className="animate-popIn">Contact Us</h1>
                <p className="animate-fadeInUp">Feel free to contact us any time.</p>
                <p className="animate-fadeInUp">We will get back to you as soon as possible</p>
                <form>
                    <input type='text' placeholder='Name' className="animate-fadeInLeft"/>
                    <input type='email' placeholder='Email' className="animate-fadeInLeft"/>
                    <input type='text' placeholder='Message' className="animate-fadeInLeft"/>
                    <button className='submit animate-popIn'>Submit</button>
                </form>
            </div>
            <div className='info animate-fadeInRight'>
                <h2 className="animate-popIn">Info</h2>
                <p className="animate-fadeInUp">Email : support@bhojanbuddy.gmail.com</p>
                <p className="animate-fadeInUp">9234******</p>
                <p className="animate-fadeInUp">Rishihood University</p>
                <p className="animate-fadeInUp">24/7 nhi h is university m </p>
            </div>
        </div>

    </div>
  )
}

export default Contact