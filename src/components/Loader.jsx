import React, { useEffect, useState } from 'react';
import './loader.css';

function Loader() {
  const [percent, setPercent] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const bhojan = 'BHOJAN';
  const buddy = ' BUDDY';

  useEffect(() => {
    if (percent < 100) {
      const timer = setTimeout(() => setPercent(percent + 1), 10);
      return () => clearTimeout(timer);
    }
  }, [percent]);

  useEffect(() => {
    if (visibleChars < (bhojan.length + buddy.length)) {
      const timer = setTimeout(() => setVisibleChars(visibleChars + 1), 80);
      return () => clearTimeout(timer);
    }
  }, [visibleChars, bhojan.length, buddy.length]);

  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="loader-spinner"></div>
        <div className="loader-bar-container">
          <div className="loader-bar-bg">
            <div className="loader-bar-fill" style={{ width: `${percent}%` }}></div>
          </div>
          <div className="loader-bar-label">{percent}%</div>
        </div>
        <div className="loader-title-big">
          {/* BHOJAN letters */}
          {bhojan.split('').map((char, i) => (
            <span
              key={i}
              className="loader-bhojan loader-letter"
              style={{
                opacity: i < visibleChars ? 1 : 0,
                transition: 'opacity 0.18s',
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {char}
            </span>
          ))}
          {/* BUDDY letters, all in one span for color */}
          <span className="loader-buddy">
            {buddy.split('').map((char, i) => (
              <span
                key={i}
                className="loader-letter"
                style={{
                  opacity: (i + bhojan.length) < visibleChars ? 1 : 0,
                  transition: 'opacity 0.18s',
                  animationDelay: `${(i + bhojan.length) * 0.08}s`,
                  color: '#fff', // Force white color for all BUDDY letters
                }}
              >
                {char}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
