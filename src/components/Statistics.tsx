import React from 'react';

const Statistics: React.FC = () => {
  const stats = [
    { number: "15,000+", label: "Devices Repaired" },
    { number: "4.98★", label: "Customer Rating" },
    { number: "2hr", label: "Avg Turnaround" },
    { number: "12 mo", label: "Warranty" }
  ];

  return (
    <div className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <style>{`
        .stats-section {
          background: linear-gradient(135deg, #0F0F0F, #111);
          border-radius: 1.5rem;
          padding: 2rem 1rem;
          margin: 2rem 0;
          border: 1px solid rgba(227, 27, 35, 0.3);
          width: 100%;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          text-align: center;
        }
        
        .stat-item h3 {
          font-size: 1.3rem;
          font-weight: 800;
          color: #E31B23;
        }
        
        .stat-item p {
          color: #9CA3AF;
          margin-top: 0.2rem;
          font-size: 0.7rem;
        }
        
        @media (min-width: 768px) {
          .stats-section {
            padding: 3rem 2rem;
            margin: 3rem 0;
          }
          
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
          
          .stat-item h3 {
            font-size: 2rem;
          }
          
          .stat-item p {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Statistics;