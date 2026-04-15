import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>About <span>iPHIX</span></h2>
        <p>Redefining phone repair with precision</p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>Founded in 2018, iPHIX has grown into one of the most trusted phone repair destinations.</p>
          <p>Our certified technicians have repaired over 15,000 devices — from iPhones to Androids.</p>
          <div className="about-stats">
            <div><h4>15k+</h4><span>Devices fixed</span></div>
            <div><h4>4.98★</h4><span>Rating</span></div>
            <div><h4>12 mo</h4><span>Warranty</span></div>
          </div>
        </div>
        <div className="about-img">
          <img src="/images/about-shop.jpg" alt="iPHIX shop" />
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 3rem 0;
          width: 100%;
        }
        
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: #111;
          border-radius: 1.5rem;
          padding: 1.5rem;
          border: 1px solid rgba(227, 27, 35, 0.2);
          width: 100%;
        }
        
        .about-text p {
          color: #B0B0B0;
          line-height: 1.5;
          margin-bottom: 0.8rem;
          font-size: 0.85rem;
        }
        
        .about-stats {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        
        .about-stats div h4 {
          color: #E31B23;
          font-size: 1.3rem;
        }
        
        .about-stats div span {
          font-size: 0.7rem;
          color: #9CA3AF;
        }
        
        .about-img img {
          width: 100%;
          border-radius: 1rem;
          height: auto;
        }
        
        @media (min-width: 768px) {
          .about-section {
            padding: 5rem 0;
          }
          
          .about-content {
            flex-direction: row;
            align-items: center;
            gap: 2rem;
            padding: 2rem;
          }
          
          .about-text {
            flex: 1;
          }
          
          .about-img {
            flex: 1;
          }
          
          .about-text p {
            font-size: 0.95rem;
          }
          
          .about-stats div h4 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;