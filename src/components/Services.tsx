import React, { useEffect, useRef } from 'react';
import { servicesData } from '../data/servicesData';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.service-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-in');
            }, index * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="section-header">
        <h2>Our <span>Repair Services</span></h2>
        <p>Precision repairs for every issue — transparent pricing, genuine parts.</p>
      </div>
      <div className="services-wrapper">
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card"
              data-delay={index * 100}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="service-overlay"></div>
              </div>
              <div className="service-info">
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-hover-effect"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 4rem 0;
          width: 100%;
          overflow: hidden;
        }
        
        .services-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 280px));
          gap: 1.5rem;
          justify-content: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .service-card {
          position: relative;
          background: #111;
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(227, 27, 35, 0.2);
          width: 100%;
          max-width: 280px;
          margin: 0 auto;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-card.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Alternate animation direction for even cards */
        .service-card:nth-child(even) {
          transform: translateX(50px);
        }
        
        .service-card:nth-child(even).animate-in {
          transform: translateX(0);
        }
        
        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: #E31B23;
          box-shadow: 0 20px 35px rgba(227, 27, 35, 0.2);
        }
        
        .service-image {
          position: relative;
          height: 160px;
          overflow: hidden;
        }
        
        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .service-card:hover .service-image img {
          transform: scale(1.1);
        }
        
        .service-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%);
        }
        
        .service-info {
          padding: 1rem;
          position: relative;
        }
        
        .service-icon {
          font-size: 1.5rem;
          color: #E31B23;
          margin-bottom: 0.5rem;
          transition: transform 0.3s ease;
        }
        
        .service-card:hover .service-icon {
          transform: scale(1.1);
        }
        
        .service-info h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        
        .service-info p {
          color: #9CA3AF;
          font-size: 0.8rem;
          line-height: 1.4;
        }
        
        .service-hover-effect {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: #E31B23;
          transition: width 0.4s ease;
        }
        
        .service-card:hover .service-hover-effect {
          width: 100%;
        }
        
        /* Mobile specific */
        @media (max-width: 768px) {
          .services-section {
            padding: 3rem 0;
          }
          
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 260px));
            gap: 1rem;
            justify-content: center;
          }
          
          .service-card {
            max-width: 260px;
          }
          
          .service-image {
            height: 140px;
          }
          
          .service-info {
            padding: 0.8rem;
          }
          
          .service-info h3 {
            font-size: 1rem;
          }
          
          .service-info p {
            font-size: 0.75rem;
          }
        }
        
        @media (max-width: 560px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
          }
          
          .service-card {
            max-width: 100%;
          }
          
          .service-image {
            height: 120px;
          }
          
          .service-icon {
            font-size: 1.2rem;
          }
          
          .service-info h3 {
            font-size: 0.85rem;
          }
          
          .service-info p {
            font-size: 0.7rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
        
        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .service-card {
            max-width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          
          .service-image {
            width: 100px;
            height: 100px;
            flex-shrink: 0;
          }
          
          .service-info {
            flex: 1;
            padding: 0.8rem;
          }
          
          .service-icon {
            font-size: 1rem;
            margin-bottom: 0.2rem;
          }
          
          .service-info h3 {
            font-size: 0.9rem;
            margin-bottom: 0.2rem;
          }
          
          .service-info p {
            font-size: 0.7rem;
            -webkit-line-clamp: 2;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;