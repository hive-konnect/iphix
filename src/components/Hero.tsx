import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

interface HeroProps {
  onQuoteClick: () => void;
  onAppointmentClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onQuoteClick, onAppointmentClick }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const phrases = [
    { text: "Fix it fast.", color: "#E31B23" },
    { text: "Fix it right.", color: "#FFFFFF" },
    { text: "Expert care.", color: "#E31B23" }
  ];
  
  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    const typeEffect = () => {
      const currentPhrase = phrases[currentPhraseIndex].text;
      
      if (!isDeleting && currentCharIndex <= currentPhrase.length) {
        setDisplayText(currentPhrase.substring(0, currentCharIndex));
        currentCharIndex++;
      }
      
      if (isDeleting && currentCharIndex >= 0) {
        setDisplayText(currentPhrase.substring(0, currentCharIndex));
        currentCharIndex--;
      }
      
      if (currentCharIndex === currentPhrase.length + 1) {
        isDeleting = true;
        setTimeout(() => {}, 1500);
      }
      
      if (currentCharIndex === 0 && isDeleting) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      }
    };
    
    const interval = setInterval(typeEffect, 100);
    const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 500);
    
    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  const heroImages = [
    "../assets/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
    "/images/hero4.jpg",
    "../assets/hero5.jpg",
    "../assets/hero3.jpg"
  ];

  return (
    <section id="home" className="hero">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1500}
        allowTouchMove={false}
        className="hero-slider"
      >
        {heroImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Phone repair ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hero-overlay"></div>
      
      <div className="hero-wrapper">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-icon">
                <i className="fas fa-certificate"></i>
              </span>
              <span className="badge-text">SAME-DAY REPAIR</span>
            </div>
            
            <div className="hero-title-section">
              <div className="hero-greeting">
                <i className="fas fa-microchip"></i> iPHIX
              </div>
              <h1 className="hero-main-title">
                We <span className="highlight">repair</span> your<br />
                device like <span className="highlight">family</span>
              </h1>
              <div className="hero-typed-wrapper">
                <div className="typed-container">
                  <span className="typed-prefix">→ </span>
                  <span className="typed-text">{displayText}</span>
                  <span className={`typed-cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
                </div>
              </div>
            </div>
            
            <div className="hero-description">
              <p>Expert repairs for all phones — from shattered screens to water damage. Free pickup & delivery, certified technicians.</p>
            </div>
            
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="stat-number">15k+</div>
                <div className="stat-label">Devices Fixed</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">4.98★</div>
                <div className="stat-label">Rating</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">2hr</div>
                <div className="stat-label">Avg Repair</div>
              </div>
            </div>
            
            <div className="hero-buttons">
              <button className="btn-primary" onClick={onAppointmentClick}>
                <i className="fas fa-calendar-check"></i>
                <span>Book Now</span>
              </button>
              <button className="btn-secondary" onClick={onQuoteClick}>
                <i className="fas fa-file-invoice"></i>
                <span>Get Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        
        .hero-slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        
        .hero-slider .swiper-slide {
          width: 100%;
          height: 100%;
        }
        
        .hero-slider .swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(227,27,35,0.3) 100%);
          z-index: 1;
        }
        
        .hero-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 5rem 1rem;
        }
        
        .hero-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .hero-content {
          width: 100%;
        }
        
        /* Mobile Styles (default) */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 0.4rem 0.8rem;
          border-radius: 40px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(227, 27, 35, 0.3);
        }
        
        .badge-icon {
          background: #E31B23;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
        }
        
        .badge-text {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        
        .hero-greeting {
          font-size: 0.85rem;
          color: #E31B23;
          margin-bottom: 0.75rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .hero-main-title {
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        
        .hero-main-title .highlight {
          color: #E31B23;
          position: relative;
          display: inline-block;
        }
        
        .hero-typed-wrapper {
          margin: 0.75rem 0;
        }
        
        .typed-container {
          display: inline-flex;
          align-items: center;
          background: rgba(0, 0, 0, 0.3);
          padding: 0.3rem 0.8rem;
          border-radius: 40px;
          backdrop-filter: blur(5px);
        }
        
        .typed-prefix {
          font-size: 1rem;
          color: #E31B23;
          font-weight: 600;
          margin-right: 0.3rem;
        }
        
        .typed-text {
          font-size: 1rem;
          font-weight: 700;
          color: white;
        }
        
        .typed-cursor {
          font-size: 1rem;
          font-weight: 300;
          margin-left: 2px;
        }
        
        .typed-cursor.visible { opacity: 1; }
        .typed-cursor.hidden { opacity: 0; }
        
        .hero-description {
          margin: 1rem 0;
        }
        
        .hero-description p {
          font-size: 0.85rem;
          line-height: 1.5;
          color: #D0D0D0;
        }
        
        .hero-stats {
          display: flex;
          gap: 1.5rem;
          margin: 1.5rem 0;
        }
        
        .stat-number {
          font-size: 1.3rem;
          font-weight: 800;
          color: #E31B23;
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.7rem;
          color: #9CA3AF;
          margin-top: 0.2rem;
        }
        
        .hero-buttons {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
        }
        
        .btn-primary, .btn-secondary {
          padding: 0.7rem 1.2rem;
          border-radius: 40px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
        }
        
        .btn-primary {
          background: #E31B23;
          color: white;
        }
        
        .btn-secondary {
          background: transparent;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          color: white;
        }
        
        /* Tablet */
        @media (min-width: 768px) {
          .hero-wrapper {
            padding: 6rem 2rem;
          }
          
          .hero-main-title {
            font-size: 3rem;
          }
          
          .typed-text, .typed-cursor {
            font-size: 1.3rem;
          }
          
          .hero-description p {
            font-size: 1rem;
            max-width: 80%;
          }
          
          .stat-number {
            font-size: 1.6rem;
          }
          
          .btn-primary, .btn-secondary {
            padding: 0.9rem 1.8rem;
            font-size: 0.95rem;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .hero-wrapper {
            padding: 8rem 2rem;
          }
          
          .hero-main-title {
            font-size: 4rem;
          }
          
          .hero-description p {
            max-width: 60%;
          }
        }
        
        /* Small Mobile */
        @media (max-width: 480px) {
          .hero-wrapper {
            padding: 4rem 0.8rem;
          }
          
          .hero-main-title {
            font-size: 1.5rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }
          
          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }
          
          .hero-stats {
            justify-content: space-between;
            gap: 0.5rem;
          }
          
          .stat-number {
            font-size: 1.1rem;
          }
          
          .stat-label {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;