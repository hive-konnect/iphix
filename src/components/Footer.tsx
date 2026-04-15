import React from 'react';

const Footer: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="footer-grid">
        <div>
          <h3 style={{ color: '#E31B23' }}>iPHIX</h3>
          <p>Precision phone repair with free pickup & delivery. Certified experts & physical shop.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <p><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a></p>
          <p><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a></p>
          <p><a href="#quote-section" onClick={(e) => handleSmoothScroll(e, '#quote-section')}>Quote & Booking</a></p>
        </div>
        <div>
          <h4>Contact & Shop</h4>
          <p><i className="fas fa-map-marker-alt"></i> William Street, Kalungi Plaza, Shop NO- 007</p>
          <p><i className="fas fa-phone"></i> +256 753 078 106</p>
          <p><i className="fas fa-envelope"></i> info@iphixug.com</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 iPHIX — All rights reserved. Redefining phone repair.</p>
      </div>

      <style>{`
        footer {
          background: #0A0A0A;
          padding: 3rem 2rem;
          border-top: 1px solid #222;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .footer-grid h4 {
          margin-bottom: 1rem;
          color: #E31B23;
        }
        .footer-grid p {
          margin-bottom: 0.5rem;
          color: #9CA3AF;
        }
        .footer-grid a {
          color: white;
          text-decoration: none;
          transition: 0.2s;
          cursor: pointer;
        }
        .footer-grid a:hover {
          color: #E31B23;
        }
        .social-links a {
          color: white;
          font-size: 1.5rem;
          margin-right: 1rem;
          transition: 0.2s;
        }
        .social-links a:hover {
          color: #E31B23;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #222;
          color: #6B7280;
          font-size: 0.8rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;