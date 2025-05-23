import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about-section about-card animate-about-fadeIn">
      <div className="about-ceo-section animate-about-fadeIn" style={{marginBottom: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative'}}>
        <img 
          src="/CoF.jpeg" 
          alt="Co-Founder & CEO" 
          className="about-ceo-img animate-popIn"
          style={{
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 8px 32px #ff800044, 0 2px 8px #ff800033',
            margin: '0 auto 0 auto',
            display: 'block',
            border: '6px solid #ff8000',
            background: '#fff',
            position: 'relative',
            zIndex: 2
          }}
        />
        <div style={{
          width: 'fit-content',
          minWidth: '260px',
          maxWidth: '90vw',
          margin: '32px auto 0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 30,
        }}>
          <h3 className="about-ceo-name animate-popIn" style={{
            fontSize: '2.1rem',
            fontWeight: 800,
            color: '#fff',
            textAlign: 'center',
            margin: '0',
            letterSpacing: '0.8px', // Subtle, readable
            textShadow: '0 1px 2px #000', // Minimal, crisp shadow for legibility
            fontFamily: 'Poppins, Space Grotesk, sans-serif',
            textTransform: 'uppercase',
            border: 'none',
            background: 'rgba(20,20,20,0.80)', // Slightly lighter, less opaque
            padding: '12px 32px',
            borderRadius: '18px',
            display: 'inline-block',
            boxShadow: '0 2px 8px #000',
            outline: '2px solid #ff8000',
            transition: 'box-shadow 0.3s',
            // No animation for pulse by default
          }}>
            SAKSHAM SHARMA
          </h3>
        </div>
        <div style={{height: '18px'}}></div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '0 0 10px 0', zIndex: 2, position: 'relative'}}>
          <hr style={{width: '60px', border: 'none', borderTop: '1.5px dashed #ff8000', opacity: 0.7, borderRadius: '2px', margin: 0}} />
        </div>
        <div style={{height: '10px'}}></div>
        <div className="about-ceo-position animate-popIn" style={{
          fontSize: '1.13rem',
          fontWeight: 600,
          color: '#fff',
          textAlign: 'center',
          margin: '0 0 0 0',
          letterSpacing: '0.5px',
          textShadow: '0 1px 4px #ff800033',
          fontStyle: 'normal',
          fontFamily: 'Poppins, Space Grotesk, sans-serif',
          textTransform: 'capitalize',
          background: 'linear-gradient(90deg, rgba(255,128,0,0.08) 60%, rgba(0,0,0,0.08) 100%)', // Softer, more elegant
          borderRadius: '14px',
          display: 'inline-block',
          padding: '7px 24px',
          boxShadow: '0 1px 6px #ff800033',
          border: '1.5px solid #ff800055',
          transition: 'background 0.5s',
          zIndex: 10,
          position: 'relative',
        }}>
         Co-Founder & CEO : <span style={{fontWeight:700, textDecoration:'underline', color:'#ff8000'}}>Bhojan Buddy</span>
        </div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '14px 0 0 0', zIndex: 2}}>
          {/* <span style={{fontSize:'1.7rem', display:'block', textAlign:'center', color:'#ff8000'}}>🙏</span> */}
        </div>
        <div className="about-ceo-socials" style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          gap:'32px',
          margin:'18px 0 0 0',
          zIndex:2
        }}>
          <a href="https://www.linkedin.com/in/saksham---sharma/" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{
            color:'#fff',
            background:'#181f2f',
            borderRadius:'50%',
            width:'64px',
            height:'64px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            boxShadow:'0 4px 24px #fff2',
            transition:'transform 0.2s, box-shadow 0.2s',
            border:'3px solid #fff',
            outline:'2px solid #ff8000',
            outlineOffset:'-4px',
            cursor:'pointer',
            marginRight:'18px',
          }}
          onMouseOver={e => {e.currentTarget.style.transform='scale(1.08)';e.currentTarget.style.boxShadow='0 6px 32px #fff4';}}
          onMouseOut={e => {e.currentTarget.style.transform='scale(1)';e.currentTarget.style.boxShadow='0 4px 24px #fff2';}}
          >
            <img src="/linkedin.png" alt="LinkedIn" style={{width:'32px',height:'32px',display:'block',filter:'drop-shadow(0 0 6px #ff8000cc)'}} />
          </a>
          <a href="https://github.com/Saksham-9898" target="_blank" rel="noopener noreferrer" title="GitHub" style={{
            color:'#fff',
            background:'#181f2f',
            borderRadius:'50%',
            width:'64px',
            height:'64px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            boxShadow:'0 4px 24px #fff2',
            transition:'transform 0.2s, box-shadow 0.2s',
            border:'3px solid #fff',
            outline:'2px solid #ff8000',
            outlineOffset:'-4px',
            cursor:'pointer',
            marginRight:'18px',
          }}
          onMouseOver={e => {e.currentTarget.style.transform='scale(1.08)';e.currentTarget.style.boxShadow='0 6px 32px #fff4';}}
          onMouseOut={e => {e.currentTarget.style.transform='scale(1)';e.currentTarget.style.boxShadow='0 4px 24px #fff2';}}
          >
            <img src="/github.png" alt="GitHub" style={{width:'32px',height:'32px',display:'block',filter:'drop-shadow(0 0 6px #ff8000cc)'}} />
          </a>
          <a href="https://www.instagram.com/saksham._1809/" target="_blank" rel="noopener noreferrer" title="Instagram" style={{
            color:'#fff',
            background:'#181f2f',
            borderRadius:'50%',
            width:'64px',
            height:'64px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            boxShadow:'0 4px 24px #fff2',
            transition:'transform 0.2s, box-shadow 0.2s',
            border:'3px solid #fff',
            outline:'2px solid #ff8000',
            outlineOffset:'-4px',
            cursor:'pointer',
          }}
          onMouseOver={e => {e.currentTarget.style.transform='scale(1.08)';e.currentTarget.style.boxShadow='0 6px 32px #fff4';}}
          onMouseOut={e => {e.currentTarget.style.transform='scale(1)';e.currentTarget.style.boxShadow='0 4px 24px #fff2';}}
          >
            <img src="/instagram-new.png" alt="Instagram" style={{width:'32px',height:'32px',display:'block',filter:'drop-shadow(0 0 6px #ff8000cc)'}} />
          </a>
        </div>
        <div style={{width:'100%', display:'flex', justifyContent:'center', margin:'18px 0 0 0', zIndex:2}}>
          <span style={{fontSize:'1.1rem', color:'#fff', background:'rgba(0,0,0,0.13)', borderRadius:'8px', padding:'6px 18px', marginTop:'10px', fontWeight:500, letterSpacing:'0.5px', boxShadow:'0 1px 4px #0002'}}>On a mission to make local dining smarter & simpler.</span>
        </div>
      </div>
      {/* Main About Us content starts here */}
      {/* <div className="about-icon-bar animate-about-slideIn">
        <span className="about-main-icon">🍽️</span>
      </div> */}
      <h2 className="about-title animate-about-slideIn">Bhojan Buddy – <span className="about-accent">Your Trusted Food Companion</span> 🙏</h2>
      <hr className="about-hr animate-about-fadeIn" />
      <h3 className="about-subtitle animate-about-slideIn">Bhojan Buddy – <span className="about-accent">Your Trusted Guide for Every Meal</span> 😇🍛</h3>
      <p className="about-intro animate-about-fadeIn">
        <b>Have you ever thought – <span className="about-accent">"Where should I eat today?"</span> and found it hard to decide?</b> 🤔<br/>
        <b>Bhojan Buddy</b> is your <span className="about-accent">simple and smart solution</span> to that confusion! 🙌
      </p>
      <hr className="about-hr thin animate-about-fadeIn" />
      <h3 className="about-section-title animate-about-slideIn">✨ What Do We Do?</h3>
      <p className="about-desc animate-about-fadeIn">
        <b>Bhojan Buddy is a <span className="about-accent">smart restaurant finder platform</span></b> where you can <b>search for restaurants using filters based on:</b>
      </p>
      <ul className="about-list animate-about-fadeIn">
        <li>📍 <b>Location</b></li>
        <li>🍲 <b>Cuisine</b></li>
        <li>⭐ <b>Ratings</b></li>
      </ul>
      <p className="about-desc animate-about-fadeIn">
        <b>With just a few clicks, the <span className="about-accent">best restaurants</span> around you are right in front of you!</b><br/>
        Whether you're a street food lover, looking for a quiet cafe, or searching for a special dinner spot – <b>Bhojan Buddy</b> is always by your side. 🍴
      </p>
      <hr className="about-hr thin animate-about-fadeIn" />
      <h3 className="about-section-title animate-about-slideIn">🎯 Our Vision</h3>
      <p className="about-desc animate-about-fadeIn">
        <b>Our mission is to give you a platform that is <span className="about-accent">trusted, simple</span>, and only shows the <span className="about-accent">best options</span>.</b><br/>
        <b>Bhojan Buddy</b> was created so that you can confidently make the right choice – without wasting time or feeling confused.
      </p>
      <hr className="about-hr thin animate-about-fadeIn" />
      <h3 className="about-section-title animate-about-slideIn">🚀 Let's Begin the Journey of Taste</h3>
      <p className="about-desc animate-about-fadeIn">
        <b>Every meal can be a <span className="about-accent">memorable experience</span>, if you find the right place.</b><br/>
        With <b>Bhojan Buddy</b>, you can explore new flavors, new places – and turn every dine-out moment into something special.
      </p>
      <hr className="about-hr thin animate-about-fadeIn" />
      <h3 className="about-highlight animate-about-slideIn">💬 Bhojan Buddy – <span className="about-accent">Because You Deserve Not Just Food, But a Great Experience.</span></h3>
    </div>
  );
}

export default About;