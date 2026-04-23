// src/components/MainContent.tsx
import React from 'react';
import './MainContent.css';

// Dữ liệu cho phần Danh mục Sản phẩm (Hàng 1)
const mainCategories = [
  {
    title: 'Ceiling Recessed',
    link: 'https://duragreenlighting.com.vn/product-category/ceiling-recessed/',
    imgSrc: 'https://duragreenlighting.com.vn/wp-content/uploads/2024/04/CEILING-RECESSED.png',
  },
  {
    title: 'Ceiling Surface',
    link: 'https://duragreenlighting.com.vn/product-category/ceiling-surface/',
    imgSrc: 'https://duragreenlighting.com.vn/wp-content/uploads/2024/04/CEILING-SURFACE.png',
  },
  {
    title: 'Cu em',
    link: 'https://duragreenlighting.com.vn/product-category/suspension/',
    // imgSrc: 'https://duragreenlighting.com.vn/wp-content/uploads/2024/04/SUSPENSTION.png',
    imgSrc: 'https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/675316674_1528743258596116_1080220613491630171_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a0f3c3&_nc_eui2=AeEHNjexNHHu3nVhveT93GR0heMNzWPMqkiF4w3NY8yqSBJ3X31VkCDw1WXApMYMMH4cHdQLK3JRhieaW0_jfG9F&_nc_ohc=h4zr29g9wdIQ7kNvwGgJC1r&_nc_oc=AdruG_9d7A7gNFz5wWwBVKJzSM0e-h4QZ38ufit4-B1SQ3efQyWUOgeDMglF8m-SvII&_nc_zt=23&_nc_ht=scontent.fsgn1-1.fna&_nc_gid=3Yy27_rTCF3ziCwAuEEUrQ&oh=00_Af0-DC-nh7YFxsZRdNCXqG1XhoOjMlSVybI4fgVw9qnkWw&oe=69EFB4A7'
  },
  {
    title: 'Wall, Floor & Table',
    link: 'https://duragreenlighting.com.vn/product-category/wall-floor-table/',
    // imgSrc: 'https://duragreenlighting.com.vn/wp-content/uploads/2024/04/WALL-FLOOR.png',
    imgSrc: 'https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/645427132_1477959250554430_2329477542097678824_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=S403DKpTCogQ7kNvwHG5fCF&_nc_oc=Adr2bYXHN8kdLZgtWX3VIOSFDWf8PM6ruNTDJrbpGHSvS2WOLxoeaO6IPTVLixrdsvo&_nc_zt=23&_nc_ht=scontent.fsgn1-1.fna&_nc_gid=-I5M-tuJIJK5XnZyaflNkw&oh=00_Af1urOgzD2vdxh8AAi4LIjSRbDqvIIlEIuDpGdueAyQDFA&oe=69EFB406'
  },
];

// Dữ liệu cho phần Danh mục Sản phẩm (Hàng 2)
const subCategories = [
  {
    title: 'Outdoor',
    link: 'https://duragreenlighting.com.vn/product-category/outdoor/',
    imgSrc: 'https://duragreenlighting.com.vn/wp-content/uploads/2024/05/Outdoor-Projector-1-1024x1024.webp',
  },
  {
    title: 'Track Lights',
    link: 'https://duragreenlighting.com.vn/product-category/track-lights/',
    imgSrc: 'https://duragreenlighting.com.vn/wp-content/uploads/2024/04/4022de5a99d4e3805c388fb97450ec9-1024x1024.png',
  },
  {
    title: 'Diệu Thư',
    link: 'https://duragreenlighting.com.vn/product-category/led-strip/',
    // imgSrc: 'https://duragreenlighting.com.vn/wp-content/uploads/2024/05/111.png',
    imgSrc: 'https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/618121084_1532536004713656_8023546562459392059_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH8CeI8S1KnIs8n9iSvBy2sibIKIHuNyO6Jsgoge43I7nZywRxlSSN9snMs7RyDj3LvObMgjqU_kIH54nVs84KX&_nc_ohc=fE15fXy4T00Q7kNvwHPECoP&_nc_oc=AdqtVX9pxZ0rUuyfFFDqu48ignRvFxeolBduPWEtIVxo46MKetoo9VRyedmvfbjkQZs&_nc_zt=23&_nc_ht=scontent.fsgn1-1.fna&_nc_gid=9qvWWdFlVs3QW0fSVwGJDw&oh=00_Af1RwxcyIHWjoP3NjffC9a4cuHZMUNk29H2dwIEz14cYrg&oe=69EFB6D5'
  },
  {
    title: 'Accessories',
    link: 'https://duragreenlighting.com.vn/product-category/control/',
    imgSrc: 'https://duragreenlighting.com.vn/wp-content/uploads/2024/04/CONTROL.png',
  },
];

// Dữ liệu cho phần Instagram Gallery
const instagramGallery = [
  {
    link: '#',
    imgSrc: 'https://duragreenlighting.com.vn/wp-content/uploads/2024/04/GARDEN.jpg',
  },
  {
    link: '#',
    imgSrc: 'https://duragreenlighting.com.vn/wp-content/uploads/2024/04/black-gift-box-1.jpg',
  },
  {
    link: '#',
    imgSrc: 'https://duragreenlighting.com.vn/wp-content/uploads/2024/04/CRAFTSMANSHIP-1.jpg',
  },
  {
    link: '#',
    imgSrc: 'https://duragreenlighting.com.vn/wp-content/uploads/2024/04/1713345932001.jpg',
  },
];

const MainContent: React.FC = () => {
  return (
    <div className="main-content">

      {/* 1. Phần Danh Mục Sản Phẩm */}
      <section className="categories-section">
        {mainCategories.map((item, index) => (
          <a key={index} href={item.link} className="category-item">
            <div className="category-img-container">
              <img src={item.imgSrc} alt={item.title} loading="lazy" />
            </div>
            <h2 className="category-title">{item.title}</h2>
          </a>
        ))}
      </section>

      <section className="categories-section sub-categories">
        {subCategories.map((item, index) => (
          <a key={index} href={item.link} className="category-item">
            <div className="category-img-container">
              <img src={item.imgSrc} alt={item.title} loading="lazy" />
            </div>
            <h2 className="category-title">{item.title}</h2>
          </a>
        ))}
      </section>

      {/* 2. Phần Why DuraGreen */}
      <section className="why-duragreen-section">
        <h2 className="section-title">Why DuraGreen</h2>
      </section>

      {/* 3. Phần Instagram Gallery */}
      <section className="instagram-section">
        <div className="instagram-title-container">
          <h2 className="section-title">Instagram</h2>
        </div>

        <div className="instagram-gallery">
          {instagramGallery.map((item, index) => (
            <a key={index} href={item.link} className="gallery-item" target="_blank" rel="noopener noreferrer">
              <img src={item.imgSrc} alt={`Instagram post ${index + 1}`} className="gallery-img" loading="lazy" />
              <div className="gallery-overlay"></div>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
};

export default MainContent;