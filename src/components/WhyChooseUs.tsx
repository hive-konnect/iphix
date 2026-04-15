import React from 'react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    { icon: "fa-shield-alt", title: "12-Month Warranty", description: "All repairs backed by full warranty.", color: "#E31B23" },
    { icon: "fa-clock", title: "Same-Day Service", description: "Most repairs completed within 2-3 hours.", color: "#E31B23" },
    { icon: "fa-store", title: "Physical Shop", description: "Visit us in person — walk-ins welcome.", color: "#E31B23" },
    { icon: "fa-microchip", title: "Genuine Parts", description: "Premium components, no cheap copies.", color: "#E31B23" },
    { icon: "fa-truck-fast", title: "Free Pickup", description: "We come to you, anywhere in city.", color: "#E31B23" },
    { icon: "fa-user-check", title: "Certified Techs", description: "Expert technicians with years of experience.", color: "#E31B23" }
  ];

  return (
    <section className="why-section">
      <div className="section-header" data-aos="fade-left">
        <h2>Why <span>Choose iPHIX?</span></h2>
        <p>We don't just fix phones — we earn your trust.</p>
      </div>
      <div className="why-grid">
        {reasons.map((reason, index) => (
          <div 
            key={index} 
            className="why-card"
            data-aos="flip-right"
            data-aos-delay={index * 80}
          >
            <div className="why-icon-wrapper">
              <i className={`fas ${reason.icon}`}></i>
            </div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>

      <style>{`
        .why-section {
          padding: 5rem 0;
          background: linear-gradient(180deg, #0F0F0F 0%, #0A0A0A 100%);
        }
        
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .why-card {
          background: rgba(17, 17, 17, 0.8);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 1.5rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(227, 27, 35, 0.1);
        }
        
        .why-card:hover {
          transform: translateY(-8px) rotateX(5deg);
          border-color: #E31B23;
          background: rgba(227, 27, 35, 0.05);
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
        }
        
        .why-icon-wrapper {
          width: 70px;
          height: 70px;
          background: rgba(227, 27, 35, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          transition: all 0.3s ease;
        }
        
        .why-card:hover .why-icon-wrapper {
          background: #E31B23;
          transform: scale(1.1);
        }
        
        .why-icon-wrapper i {
          font-size: 2rem;
          color: #E31B23;
          transition: all 0.3s ease;
        }
        
        .why-card:hover .why-icon-wrapper i {
          color: white;
        }
        
        .why-card h3 {
          margin-bottom: 0.5rem;
        }
        
        .why-card p {
          color: #9CA3AF;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .why-section {
            padding: 3rem 0;
          }
          .why-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .why-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;