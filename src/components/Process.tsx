import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { number: 1, title: "Book", description: "Schedule online or request a quote", icon: "fa-calendar-alt" },
    { number: 2, title: "Diagnostic", description: "Certified techs diagnose the issue", icon: "fa-stethoscope" },
    { number: 3, title: "Repair", description: "Fast & precise component repair", icon: "fa-tools" },
    { number: 4, title: "Ready", description: "Collect your fully repaired device", icon: "fa-hand-peace" }
  ];

  return (
    <section className="process-section">
      <div className="section-header">
        <h2>How it <span>Works</span></h2>
        <p>Simple, transparent, and fast</p>
      </div>
      <div className="steps-container">
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-icon">
                <i className={`fas ${step.icon}`}></i>
              </div>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-section {
          padding: 3rem 0;
          background: #0A0A0A;
          width: 100%;
        }
        
        .steps-container {
          width: 100%;
          overflow-x: auto;
          padding: 0.5rem 0;
        }
        
        .steps-container::-webkit-scrollbar {
          height: 3px;
        }
        
        .steps-container::-webkit-scrollbar-track {
          background: #1A1A1A;
          border-radius: 10px;
        }
        
        .steps-container::-webkit-scrollbar-thumb {
          background: #E31B23;
          border-radius: 10px;
        }
        
        .steps-grid {
          display: flex;
          gap: 1rem;
          min-width: min-content;
          padding: 0.5rem;
        }
        
        .step {
          background: linear-gradient(135deg, #111, #1A1A1A);
          border-radius: 1rem;
          padding: 1.2rem;
          min-width: 200px;
          text-align: center;
          border: 1px solid rgba(227, 27, 35, 0.2);
        }
        
        .step-icon {
          font-size: 1.5rem;
          color: #E31B23;
          margin-bottom: 0.5rem;
        }
        
        .step-number {
          width: 35px;
          height: 35px;
          background: #E31B23;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 800;
          margin: 0 auto 0.5rem;
        }
        
        .step h3 {
          font-size: 1rem;
          margin-bottom: 0.3rem;
        }
        
        .step p {
          color: #9CA3AF;
          font-size: 0.75rem;
        }
        
        @media (min-width: 768px) {
          .process-section {
            padding: 5rem 0;
          }
          
          .steps-container {
            overflow-x: visible;
          }
          
          .steps-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            min-width: auto;
          }
          
          .step {
            min-width: auto;
            padding: 1.5rem;
          }
          
          .step-icon {
            font-size: 2rem;
          }
          
          .step-number {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
          }
        }
        
        @media (max-width: 480px) {
          .step {
            min-width: 170px;
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;