import React from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    { name: "Michael T.", text: "Cracked screen fixed in 2 hours. Amazing service!", rating: 5 },
    { name: "Sarah J.", text: "Water damage repaired perfectly. iPHIX is magic!", rating: 5 },
    { name: "David K.", text: "Professional team, fair pricing. Highly recommend!", rating: 5 }
  ];

  return (
    <section id="reviews" className="reviews-section">
      <div className="section-header">
        <h2>Customer <span>Stories</span></h2>
        <p>Rated 4.9★ by over 2,000+ customers</p>
      </div>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="stars">
              {[...Array(review.rating)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
            <p>"{review.text}"</p>
            <strong>— {review.name}</strong>
          </div>
        ))}
      </div>

      <style>{`
        .reviews-section {
          padding: 3rem 0;
          width: 100%;
        }
        
        .reviews-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          width: 100%;
        }
        
        .review-card {
          background: #111;
          padding: 1rem;
          border-radius: 1rem;
          border-left: 3px solid #E31B23;
        }
        
        .stars {
          color: #E31B23;
          margin-bottom: 0.5rem;
          font-size: 0.8rem;
        }
        
        .review-card p {
          margin: 0.5rem 0;
          line-height: 1.4;
          color: #B0B0B0;
          font-size: 0.85rem;
        }
        
        .review-card strong {
          color: #E31B23;
          font-size: 0.8rem;
        }
        
        @media (min-width: 768px) {
          .reviews-section {
            padding: 5rem 0;
          }
          
          .reviews-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
          
          .review-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Reviews;