import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <footer className="footer" style={{background:'#181f2f', color:'#fff', padding:'56px 0 0 0', borderTop:'2px solid #232a3a', fontFamily:'Poppins, Space Grotesk, sans-serif', fontWeight:400, letterSpacing:'0.2px'}}>
  <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'flex-start', maxWidth:'1280px', margin:'0 auto', padding:'0 40px 32px 40px', gap:'40px'}}>
    <div style={{flex:'1 1 340px', minWidth:'260px', marginBottom:'24px', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center'}}>
      <img src="/Coffeemain2.png" alt="Bhojan Buddy Logo" style={{width:'54px',height:'54px',borderRadius:'12px',marginBottom:'12px',boxShadow:'0 2px 12px #ff800044'}} />
      <h2 style={{color:'#ff8000', fontWeight:900, fontSize:'2.2rem', marginBottom:'10px', letterSpacing:'1.2px', textTransform:'uppercase'}}>Bhojan Buddy</h2>
      <p style={{color:'#e0e0e0', fontSize:'1.09rem', lineHeight:'1.7', marginBottom:'0', maxWidth:'340px'}}>Discover top-rated restaurants near you. Filter by cuisine, rating, and more. Your trusted food companion for every meal.</p>
    </div>
    <div style={{flex:'1 1 180px', minWidth:'160px', marginBottom:'24px'}}>
      <h3 style={{color:'#ff8000', fontWeight:700, fontSize:'1.18rem', marginBottom:'16px', letterSpacing:'0.7px', textTransform:'uppercase'}}>Company</h3>
      <ul style={{listStyle:'none', padding:0, margin:0, color:'#e0e0e0', fontSize:'1.07rem', lineHeight:'2.1'}}>
        <li><a href="/about" style={{color:'#e0e0e0', textDecoration:'none', transition:'color 0.2s', fontWeight:500}} onMouseOver={e=>e.currentTarget.style.color='#ff8000'} onMouseOut={e=>e.currentTarget.style.color='#e0e0e0'}>About Us</a></li>
        <li><a href="/careers" style={{color:'#e0e0e0', textDecoration:'none', transition:'color 0.2s', fontWeight:500}} onMouseOver={e=>e.currentTarget.style.color='#ff8000'} onMouseOut={e=>e.currentTarget.style.color='#e0e0e0'}>Careers</a></li>
        <li><a href="/blog" style={{color:'#e0e0e0', textDecoration:'none', transition:'color 0.2s', fontWeight:500}} onMouseOver={e=>e.currentTarget.style.color='#ff8000'} onMouseOut={e=>e.currentTarget.style.color='#e0e0e0'}>Blog</a></li>
      </ul>
    </div>
    <div style={{flex:'1 1 180px', minWidth:'160px', marginBottom:'24px'}}>
      <h3 style={{color:'#ff8000', fontWeight:700, fontSize:'1.18rem', marginBottom:'16px', letterSpacing:'0.7px', textTransform:'uppercase'}}>Support</h3>
      <ul style={{listStyle:'none', padding:0, margin:0, color:'#e0e0e0', fontSize:'1.07rem', lineHeight:'2.1'}}>
        <li><a href="/contact" style={{color:'#e0e0e0', textDecoration:'none', transition:'color 0.2s', fontWeight:500}} onMouseOver={e=>e.currentTarget.style.color='#ff8000'} onMouseOut={e=>e.currentTarget.style.color='#e0e0e0'}>Contact</a></li>
        <li><a href="/privacy-policy" style={{color:'#e0e0e0', textDecoration:'none', transition:'color 0.2s', fontWeight:500}} onMouseOver={e=>e.currentTarget.style.color='#ff8000'} onMouseOut={e=>e.currentTarget.style.color='#e0e0e0'}>Privacy Policy</a></li>
        <li><a href="/terms" style={{color:'#e0e0e0', textDecoration:'none', transition:'color 0.2s', fontWeight:500}} onMouseOver={e=>e.currentTarget.style.color='#ff8000'} onMouseOut={e=>e.currentTarget.style.color='#e0e0e0'}>Terms & Conditions</a></li>
        <li><a href="/faq" style={{color:'#e0e0e0', textDecoration:'none', transition:'color 0.2s', fontWeight:500}} onMouseOver={e=>e.currentTarget.style.color='#ff8000'} onMouseOut={e=>e.currentTarget.style.color='#e0e0e0'}>FAQ</a></li>
      </ul>
    </div>
    <div style={{flex:'1 1 220px', minWidth:'180px', marginBottom:'24px'}}>
      <h3 style={{color:'#ff8000', fontWeight:700, fontSize:'1.18rem', marginBottom:'16px', letterSpacing:'0.7px', textTransform:'uppercase'}}>Contact</h3>
      <p style={{margin:'0 0 8px 0', color:'#e0e0e0', fontSize:'1.07rem'}}>Email: <a href="mailto:support@bhojanbuddy.com" style={{color:'#ff8000', textDecoration:'none', fontWeight:500}}>support@bhojanbuddy.com</a></p>
      <p style={{margin:'0 0 8px 0', color:'#e0e0e0', fontSize:'1.07rem'}}>Phone: <a href="tel:+12345678910" style={{color:'#ff8000', textDecoration:'none', fontWeight:500}}>+1-234-567-8910</a></p>
      <p style={{margin:'0', color:'#e0e0e0', fontSize:'1.07rem'}}>Location: Rishihood University</p>
    </div>
    <div style={{flex:'1 1 100%', display:'flex', flexDirection:'column', alignItems:'center', margin:'32px 0 0 0', padding:0}}>
      <h3 style={{color:'#ff8000', fontWeight:700, fontSize:'1.18rem', marginBottom:'16px', letterSpacing:'0.7px', textTransform:'uppercase', textAlign:'center'}}>Connect</h3>
      <div style={{display:'flex', gap:'28px', alignItems:'center', justifyContent:'center', marginBottom:'12px'}}>
        <a href="https://www.instagram.com/saksham._1809/" target="_blank" rel="noopener noreferrer" title="Instagram" style={{display:'inline-block'}}>
          <img src="/instagram.png" alt="Instagram" style={{width:'36px',height:'36px',borderRadius:'8px',boxShadow:'0 2px 8px #ff800088',background:'#fff'}} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" title="Twitter" style={{display:'inline-block'}}>
          <img src="/twitter.jpg" alt="Twitter" style={{width:'36px',height:'36px',borderRadius:'8px',boxShadow:'0 2px 8px #ff800088',background:'#fff'}} />
        </a>
        <a href="https://www.linkedin.com/in/saksham---sharma/" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{display:'inline-block'}}>
          <img src="/linkedin.png" alt="LinkedIn" style={{width:'36px',height:'36px',borderRadius:'8px',boxShadow:'0 2px 8px #ff800088',background:'#fff'}} />
        </a>
        <a href="https://github.com/Saksham-9898" target="_blank" rel="noopener noreferrer" title="GitHub" style={{display:'inline-block'}}>
          <img src="/github.png" alt="GitHub" style={{width:'36px',height:'36px',borderRadius:'8px',boxShadow:'0 2px 8px #ff800088',background:'#fff'}} />
        </a>
      </div>
      <div style={{color:'#b0b0b0', fontSize:'0.98rem', marginTop:'8px', textAlign:'center'}}>Follow us for updates & news</div>
    </div>
  </div>
  <hr style={{border:'none', borderTop:'1.5px solid #232a3a', margin:'0 0 18px 0', opacity:0.5}} />
  <div style={{textAlign:'center', color:'#b0b0b0', fontSize:'1.04rem', padding:'0 0 18px 0', letterSpacing:'0.2px', fontWeight:500}}>
    © {new Date().getFullYear()} <span style={{color:'#ff8000', fontWeight:700}}>Bhojan Buddy</span>. All rights reserved. | Designed with <span style={{color:'#ff8000'}}>passion</span> & <span style={{color:'#ff8000'}}>precision</span>.
  </div>
</footer>
    </>
  )
}

export default Footer