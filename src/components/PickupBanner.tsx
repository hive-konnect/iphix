import React from 'react';

const PickupBanner: React.FC = () => {
  return (
    <div className="pickup-banner" data-aos="fade-up">
      <i className="fas fa-truck-fast" style={{ fontSize: '2rem', marginRight: '10px' }}></i>
      <strong>Free Pickup & Delivery:</strong> We'll collect your phone, repair it, and deliver it back. Or visit our physical shop — your choice!

      <style>{`
        .pickup-banner {
          background: #E31B23;
          border-radius: 1.5rem;
          padding: 2rem;
          text-align: center;
          margin: 2rem 0;
        }
      `}</style>
    </div>
  );
};

export default PickupBanner;