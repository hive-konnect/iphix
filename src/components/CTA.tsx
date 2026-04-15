import React from 'react';

interface CTAProps {
  onQuoteClick: () => void;
  onAppointmentClick: () => void;
}

const CTA: React.FC<CTAProps> = ({ onQuoteClick, onAppointmentClick }) => {
  return (
    <section id="quote-section" data-aos="fade-up">
      <div className="cta-row">
        <div className="cta-block">
          <i className="fas fa-file-invoice-dollar" style={{ fontSize: '2.5rem', color: '#E31B23' }}></i>
          <h3>Request a Quote</h3>
          <p>Tell us the issue, get a fair price estimate within hours.</p>
          <button className="btn-large" onClick={onQuoteClick}>
            <i className="fas fa-arrow-right"></i> Get Quote →
          </button>
        </div>
        <div className="cta-block">
          <i className="fas fa-calendar-check" style={{ fontSize: '2.5rem', color: '#E31B23' }}></i>
          <h3>Book Appointment</h3>
          <p>Select a time slot, and we'll confirm instantly.</p>
          <button className="btn-large" onClick={onAppointmentClick}>
            <i className="fas fa-check-circle"></i> Schedule Now →
          </button>
        </div>
      </div>

      <style>{`
        .cta-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin: 2rem 0;
        }
        .cta-block {
          background: linear-gradient(135deg, #1A1A1A, #0F0F0F);
          padding: 2.5rem;
          border-radius: 2rem;
          text-align: center;
          border: 1px solid #E31B23;
          transition: 0.3s;
        }
        .cta-block:hover {
          transform: translateY(-5px);
        }
        .cta-block h3 {
          margin: 1rem 0;
        }
        .cta-block p {
          color: #9CA3AF;
        }
        .btn-large {
          background: #E31B23;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          display: inline-block;
          margin-top: 1rem;
          color: white;
          text-decoration: none;
          transition: 0.2s;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 1rem;
        }
        .btn-large:hover {
          background: #c01018;
          transform: translateY(-2px);
        }
        @media (max-width: 800px) {
          .cta-row {
            grid-template-columns: 1fr;
          }
          .cta-block {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;