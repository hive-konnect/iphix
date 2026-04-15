import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import water from '../assets/hero4.png';
import screen from '../assets/hero5.png';


const Gallery: React.FC = () => {

  // ✅ LOCAL IMAGES FROM PUBLIC FOLDER
  const galleryImages = [
    {
      id: 1,
      src: hero1,
      title: "Screen Repair",
      alt: "Phone screen repair"
    },
    {
      id: 2,
      src: hero2,
      title: "Internal Fix",
      alt: "Phone internal repair"
    },
    {
      id: 3,
      src: hero3, 
      title: "Diagnostics",
      alt: "Phone diagnostics"
    },
    {
      id: 4,
      src: water,
      title: "Water Damage Repair",
      alt: "Water damaged phone repair"
    },
    {
      id: 5,
      src: screen,
      title: "Screen Replacement",
      alt: "Screen replacement"
    }
  ];

  return (
    <section className="gallery-section">
      <div className="section-header">
        <h2>Recent <span>Repairs</span></h2>
        <p>See our craftsmanship in action — real devices we've restored.</p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        speed={800}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="gallery-swiper"
      >
        {galleryImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="gallery-item">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />

              <div className="gallery-overlay">
                <div className="overlay-content">
                  <i className="fas fa-search-plus"></i>
                  <span>{image.title}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .gallery-section {
          padding: 5rem 0;
          background: #0A0A0A;
          text-align: center;
        }

        .section-header h2 {
          font-size: 2rem;
          color: white;
        }

        .section-header span {
          color: #E31B23;
        }

        .section-header p {
          color: #aaa;
          margin-bottom: 2rem;
        }

        .gallery-swiper {
          width: 100%;
          padding: 2rem 0 3rem;
        }

        .gallery-item {
          position: relative;
          border-radius: 1.5rem;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4 / 3;
          box-shadow: 0 10px 25px rgba(0,0,0,0.4);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(227, 27, 35, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .overlay-content {
          color: white;
          text-align: center;
          transform: translateY(20px);
          transition: 0.3s ease;
        }

        .gallery-item:hover .overlay-content {
          transform: translateY(0);
        }

        .overlay-content i {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .overlay-content span {
          font-weight: 600;
        }

        .swiper-pagination-bullet {
          background: #E31B23;
        }

        .swiper-pagination-bullet-active {
          background: #E31B23;
        }

        @media (max-width: 768px) {
          .gallery-section {
            padding: 3rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
