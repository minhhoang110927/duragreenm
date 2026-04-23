// src/components/HeroBanner.tsx
import React from 'react';
import './HeroBanner.css'; // Import file css ở trên

const HeroBanner: React.FC = () => {
  return (
    <section className="hero-section">
      
      {/* Lớp 1: Video Background */}
      <div className="hero-video-container">
        <video
          className="elementor-background-video-hosted"
          autoPlay
          muted
          playsInline
          loop
          src="https://duragreenlighting.co.uk/wp-content/uploads/2024/05/720-P-VIDEO.mp4"
        ></video>
      </div>

      {/* Lớp 2: Màng tối Overlay */}
      <div className="hero-overlay"></div>

      {/* Lớp 3: Nội dung (Cột chứa Title và Buttons) */}
      <div className="hero-content">
        <h1 className="hero-title">
          One installation frame | endless possibilities
        </h1>
        
        <div className="hero-buttons">
          <a href="https://duragreenlighting.com.vn/lights/" className="hero-btn">
            Products
          </a>
          <a href="https://duragreenlighting.com.vn/projects/" className="hero-btn">
            Projects
          </a>
        </div>
      </div>

    </section>
  );
};

export default HeroBanner;