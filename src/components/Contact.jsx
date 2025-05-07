import React from 'react';
import './contact.css';


function Contact() {
  return (
    <div className='contact'>
        <div className='innercard'>
            <div className='form'>
                <h1>Contact Us</h1>
                <p>Feel free to contact us any time.</p>
                <p>We will get back to you as soon as possible</p>
                <form>
                    <input type='text' placeholder='Name'/>
                    <input type='email' placeholder='Email'/>
                    <input type='text' placeholder='Message'/>
                    <button className='submit'>Submit</button>
                </form>
            </div>
            <div className='info'>
                <h2>Info</h2>
                <p>Email : support@bhojanbuddy.gmail.com</p>
                <p>9234******</p>
                <p>Rishihood University</p>
                <p>24/7 nhi h is university m </p>
            </div>
        </div>

    </div>
  )
}

export default Contact