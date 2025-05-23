import React, { useState } from 'react';
import './contact.css';


function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("All fields are required");
      setTimeout(() => setError(""), 2000);
      return;
    }
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
    setError("");
    setTimeout(() => setSubmitted(false), 2000); // Hide after 2 seconds
  };

  return (
    <div className='contact glow-bg animate-fadeInUp'>
        <div className='innercard animate-fadeInUp'>
            <div className='form animate-fadeInLeft'>
                <h1 className="animate-popIn">Contact Us</h1>
                <p className="animate-fadeInUp">Feel free to contact us any time.</p>
                <p className="animate-fadeInUp">We will get back to you as soon as possible</p>
                {!submitted && (
                  <form onSubmit={handleSubmit}>
                      <input type='text' placeholder='Name' className="animate-fadeInLeft" value={name} onChange={e => setName(e.target.value)} />
                      <input type='email' placeholder='Email' className="animate-fadeInLeft" value={email} onChange={e => setEmail(e.target.value)} />
                      <input type='text' placeholder='Message' className="animate-fadeInLeft" value={message} onChange={e => setMessage(e.target.value)} />
                      <button className='submit animate-popIn'>Submit</button>
                  </form>
                )}
                {submitted && (
                  <div className="contact-popup-success">
                    <span className="popup-tick">✔</span>
                    Submitted Successfully
                  </div>
                )}
                {error && (
                  <div className="contact-popup-error">
                    <span className="popup-cross">✖</span>
                    {error}
                  </div>
                )}
            </div>
            {!submitted && (
              <div className='info animate-fadeInRight'>
                  <h2 className="animate-popIn">Info</h2>
                  <p className="animate-fadeInUp">Email : support@bhojanbuddy.gmail.com</p>
                  <p className="animate-fadeInUp">9234******</p>
                  <p className="animate-fadeInUp">Rishihood University</p>
                  <p className="animate-fadeInUp">24/7 nhi h is university m </p>
              </div>
            )}
        </div>
    </div>
  )
}

export default Contact