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
                    <input type='text' placeholder='write your name'/>
                    <input type='email' placeholder='write your Email'/>
                    <input type='text' placeholder='type your message'/>
                    <button className='submit'>Submit</button>
                </form>
            </div>
            <div className='info'>
                <h2>Info</h2>
                <p>Email : dvuifnhviu</p>
                <p>7067909690</p>
                <p>Address</p>
                <p>Time</p>
            </div>
        </div>

    </div>
  )
}

export default Contact