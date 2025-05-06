import React from 'react'
import './About.css';




function About() {

  return (
    <>
      <div className='about-section'>
        <div className='about-app'>
          <h1>About Bean Scene</h1>
          <p>Discover your next favorite café—where ambiance meets aroma.</p>
        </div>

        <div className='detail-card'>
          <div className='text-image card'>
            <p className='paragraph'>coffee shop finder app is designed to simplify the process of discovering the perfect coffee spot nearby. Whether you're in a new area or just looking to try something different, the app allows users to easily search for coffee shops based on location, ratings, and menu options. Users can also contribute by leaving reviews, sharing their favorite spots, and browsing through detailed menus, helping others find the best places for a caffeine fix. With its user-friendly interface and focus on local coffee culture, your app makes it easier for coffee lovers to explore, connect, and enjoy their favorite beverages in the most convenient way possible.</p>
            <img alt='cafe-image' src='/cafe image.jpg' />
          </div>
        </div>

        <div className='vision'>
          <h2 className='vision-heading'>Our Vision</h2>
          <p className='vision-details'>
            Bean Scene was created out of a simple frustration—finding a good café
            shouldn’t be a guessing game. I wanted to build a platform that makes discovering
            cozy, Wi-Fi-friendly cafés as easy as ordering your favorite brew.
            Whether you're working remotely, catching up with a friend, or just craving a
            peaceful vibe, Bean Scene helps you find the perfect spot.<br /><br />
            It’s more than a café finder—it's a way to connect people with the spaces that
            match their mood, purpose, and lifestyle.
          </p>
        </div>

        <div className="Images-section">
          <h2 className="Images-heading">Moodboard Vibes</h2>
          <div className="Images-scroll">
            <div className="Image-item">
              <img src="/vintage.jpg" alt="Vintage corners" />
              <p>Vintage corners</p>
            </div>
            <div className="Image-item">
              <img src="/working-zones.jpg" alt="Wi-Fi & Work Zones" />
              <p>Wi-Fi & Work Zones</p>
            </div>
            <div className="Image-item">
              <img src="/lighting.jpg" alt="Cozy lighting goals" />
              <p>Cozy lighting goals</p>
            </div>
            <div className="Image-item">
              <img src="/public/nature.jpg" alt="Nature & Nooks" />
              <p>Nature & Nooks</p>
            </div>
            <div className="Image-item">
              <img src="/outdoor-seating.jpg" alt="Patio & Outdoor Seating" />
              <p>Patio & Outdoor Seating</p>
            </div>
            <div className="Image-item">
              <img src="/decor.jpg" alt="Artistic Décor" />
              <p>Artistic Décor</p>
            </div>
            <div className="Image-item">
              <img src="/best-coffee.jpg" alt="best coffee" />
              <p>best coffee</p>
            </div>
            <div className="Image-item">
              <img src="/coffee.jpg" alt="Barista Craft" />
              <p>Barista Craft</p>
            </div>
          </div>
          
        </div>

       
        
      </div>
    </>
  )
}

export default About