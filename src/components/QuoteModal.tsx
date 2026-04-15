import React, { useState } from 'react';
import emailjs from 'emailjs-com';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    device: '',
    issue: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send to email using EmailJS (you need to register at emailjs.com)
    const templateParams = {
      to_email: 'your-email@example.com', // Change this to your email
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      device: formData.device,
      issue: formData.issue,
      message: `Quote Request from ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDevice: ${formData.device}\nIssue: ${formData.issue}`
    };

    try {
      // Replace with your EmailJS credentials
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID');
      
      // For demo, we'll simulate success
      setTimeout(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        setTimeout(() => {
          onClose();
          setFormData({ name: '', email: '', phone: '', device: '', issue: '' });
          setSubmitStatus('idle');
        }, 2000);
      }, 1000);
    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `Hi iPHIX! I'd like to request a quote for my ${formData.device || 'device'}. Issue: ${formData.issue || 'repair'}. My name is ${formData.name}.`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>&times;</button>
          <h2>Request a Quote</h2>
          <p>Fill out the form below and we'll get back to you shortly.</p>
          
          {submitStatus === 'success' && (
            <div className="success-message">✓ Quote requested successfully! We'll contact you soon.</div>
          )}
          {submitStatus === 'error' && (
            <div className="error-message">✗ Something went wrong. Please try again or contact us via WhatsApp.</div>
          )}
          
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            <input type="text" name="device" placeholder="Phone Model (e.g., iPhone 14)" value={formData.device} onChange={handleChange} required />
            <textarea name="issue" placeholder="Describe the issue..." rows={4} value={formData.issue} onChange={handleChange} required></textarea>
            <button type="submit" disabled={isSubmitting} className="submit-btn">
              {isSubmitting ? 'Sending...' : 'Submit Quote Request'}
            </button>
          </form>
          
          <div className="whatsapp-option">
            <p>Or contact us directly on WhatsApp:</p>
            <button onClick={handleWhatsApp} className="whatsapp-btn">
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
 backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        .modal-content {
          background: #111;
          border-radius: 1.5rem;
          padding: 2rem;
          max-width: 500px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          border: 1px solid #E31B23;
          position: relative;
          animation: slideUp 0.3s ease;
        }
        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.8rem;
          cursor: pointer;
          color: white;
          transition: 0.2s;
        }
        .modal-close:hover {
          color: #E31B23;
        }
        .modal-content h2 {
          color: #E31B23;
          margin-bottom: 0.5rem;
        }
        .modal-content p {
          color: #9CA3AF;
          margin-bottom: 1.5rem;
        }
        .modal-content input,
        .modal-content textarea,
        .modal-content select {
          width: 100%;
          padding: 0.8rem;
          margin-bottom: 1rem;
          background: #1A1A1A;
          border: 1px solid #333;
          border-radius: 0.8rem;
          color: white;
          font-family: inherit;
        }
        .modal-content input:focus,
        .modal-content textarea:focus {
          outline: none;
          border-color: #E31B23;
        }
        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: #E31B23;
          border: none;
          border-radius: 2rem;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
        }
        .submit-btn:hover:not(:disabled) {
          background: #c01018;
          transform: translateY(-2px);
        }
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .whatsapp-option {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #333;
          text-align: center;
        }
        .whatsapp-btn {
          background: #25D366;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 2rem;
          color: white;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: 0.2s;
        }
        .whatsapp-btn:hover {
          transform: scale(1.05);
        }
        .success-message {
          background: rgba(76, 175, 80, 0.2);
          border: 1px solid #4CAF50;
          padding: 0.8rem;
          border-radius: 0.8rem;
          margin-bottom: 1rem;
          color: #4CAF50;
        }
        .error-message {
          background: rgba(227, 27, 35, 0.2);
          border: 1px solid #E31B23;
          padding: 0.8rem;
          border-radius: 0.8rem;
          margin-bottom: 1rem;
          color: #E31B23;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default QuoteModal;