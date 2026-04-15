import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onQuoteClick: () => void;
  onAppointmentClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onQuoteClick, onAppointmentClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo" onClick={(e) => handleSmoothScroll(e, '#home')}>
            <div className="logo-wrapper">
              <img 
                src="/logo.png" 
                alt="iPHIX Logo" 
                className="logo-image"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.setAttribute('style', 'display: flex');
                }}
              />
              <div className="logo-fallback" style={{ display: 'none' }}>
                <i className="fas fa-mobile-alt"></i>
              </div>
            </div>
            <span className="logo-text">iPHIX</span>
          </a>
          
          <div className="nav-links-desktop">
            <a href="#home" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
            <a href="#services" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a>
            <a href="#about" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a>
            <button className="nav-quote-btn" onClick={onQuoteClick}>Get Quote</button>
            <button className="nav-book-btn" onClick={onAppointmentClick}>Book Appointment</button>
          </div>
          
          <div className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        
        <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-menu">
            <div className="mobile-nav-header">
              <div className="mobile-logo">
                <img src="/image.png" alt="Logo" className="mobile-logo-img" />
                <span>iPHIX</span>
              </div>
            </div>
            <div className="mobile-nav-links">
              <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="mobile-nav-link">Home</a>
              <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="mobile-nav-link">Services</a>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="mobile-nav-link">About</a>
            </div>
            <div className="mobile-nav-buttons">
              <button className="mobile-quote-btn" onClick={onQuoteClick}>Get Quote</button>
              <button className="mobile-book-btn" onClick={onAppointmentClick}>Book Appointment</button>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(227, 27, 35, 0.3);
        }
        
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0.8rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          cursor: pointer;
        }
        
        .logo-wrapper {
          background: #E31B23;
          border-radius: 12px;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .logo-image {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }
        
        .logo-fallback {
          color: white;
          font-size: 1.2rem;
        }
        
        .logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #FFFFFF, #E31B23);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        
        .mobile-logo-img {
          width: 30px;
          height: 30px;
          object-fit: contain;
        }
        
        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .nav-link {
          color: #E0E0E0;
          text-decoration: none;
          font-weight: 500;
          cursor: pointer;
        }
        
        .nav-link:hover {
          color: #E31B23;
        }
        
        .nav-quote-btn, .nav-book-btn {
          padding: 0.5rem 1.2rem;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.85rem;
          border: none;
        }
        
        .nav-quote-btn {
          background: transparent;
          border: 1.5px solid #E31B23;
          color: #E31B23;
        }
        
        .nav-book-btn {
          background: #E31B23;
          color: white;
        }
        
        .mobile-menu-btn {
          display: none;
          cursor: pointer;
        }
        
        .menu-icon {
          width: 24px;
          height: 20px;
          position: relative;
        }
        
        .menu-icon span {
          position: absolute;
          width: 100%;
          height: 2px;
          background: white;
          transition: all 0.3s ease;
        }
        
        .menu-icon span:nth-child(1) { top: 0; }
        .menu-icon span:nth-child(2) { top: 9px; }
        .menu-icon span:nth-child(3) { top: 18px; }
        
        .mobile-menu-btn.active .menu-icon span:nth-child(1) {
          transform: rotate(45deg);
          top: 9px;
        }
        
        .mobile-menu-btn.active .menu-icon span:nth-child(2) { opacity: 0; }
        .mobile-menu-btn.active .menu-icon span:nth-child(3) {
          transform: rotate(-45deg);
          top: 9px;
        }
        
        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          z-index: 999;
          transition: right 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .mobile-nav-overlay.active {
          right: 0;
        }
        
        .mobile-nav-menu {
          width: 100%;
          max-width: 350px;
          padding: 2rem;
          text-align: center;
        }
        
        .mobile-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 2rem;
          font-size: 1.5rem;
          font-weight: 800;
        }
        
        .mobile-logo span {
          background: linear-gradient(135deg, #FFFFFF, #E31B23);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .mobile-nav-link {
          display: block;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          text-decoration: none;
          color: white;
        }
        
        .mobile-nav-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .mobile-quote-btn, .mobile-book-btn {
          padding: 0.8rem;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.9rem;
          border: none;
        }
        
        .mobile-quote-btn {
          background: transparent;
          border: 1.5px solid #E31B23;
          color: #E31B23;
        }
        
        .mobile-book-btn {
          background: #E31B23;
          color: white;
        }
        
        @media (max-width: 968px) {
          .nav-links-desktop {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .nav-container {
            padding: 0.8rem 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;