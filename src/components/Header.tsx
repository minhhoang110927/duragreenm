import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, Drawer } from 'antd'; // Import thêm Drawer
import { SearchOutlined, DownOutlined, MenuOutlined } from '@ant-design/icons'; // Import MenuOutlined
import type { MenuProps } from 'antd';
import './Header.css';

const items: MenuProps['items'] = [
  {
    key: '/products',
    label: <span>Sản phẩm <DownOutlined style={{ fontSize: '10px', marginLeft: '5px' }} /></span>,
    popupClassName: 'mega-menu-2-cols', 
    children: [
      { key: '/product-category/ceiling-recessed', label: 'Ceiling Recessed' },
      { key: '/product-category/ceiling-surface', label: 'Ceiling Surface' },
      { key: '/product-category/suspension', label: 'Suspension' },
      { key: '/product-category/wall-floor-table', label: 'Wall, Floor & Table' },
      { key: '/product-category/track-lights', label: 'Track Lights' },
      { key: '/product-category/led-strip', label: 'Led Strip' },
      { key: '/product-category/outdoor', label: 'Outdoor' },
      { key: '/product-category/accessories', label: 'Accessories' },
    ],
  },
  { key: '/circular-pro', label: 'Circular-Pro Products' },
  {
    key: '/why-duragreen',
    label: <span>Why DuraGreen <DownOutlined style={{ fontSize: '10px', marginLeft: '5px' }} /></span>,
    children: [
      { key: '/projects', label: 'Projects' },
      { key: '/difference', label: 'Difference' },
    ],
  },
  { key: '/catalogue', label: 'Tài liệu Catalogue' },
  { key: '/contact', label: 'Contact us' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State quản lý menu mobile
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
    setMobileMenuOpen(false); // Đóng menu mobile sau khi click chuyển trang
  };

  const isHomePage = location.pathname === '/';
  const headerClass = (!isHomePage || isScrolled) ? 'scrolled' : 'transparent';

  return (
    <header className={`custom-header ${headerClass}`}>
      
      {/* Mobile Menu Toggle Icon (Chỉ hiện trên Mobile) */}
      <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
        <MenuOutlined />
      </div>

      {/* Cột 1: Logo */}
      <div className="header-col logo-container">
        <Link to="/">
          <img 
            src="https://duragreenlighting.com.vn/wp-content/uploads/2024/04/Primary-duragreen1.png" 
            alt="DuraGreen Logo" 
            className="logo-img"
          />
        </Link>
      </div>

      {/* Cột 2: Menu Desktop (Sẽ bị ẩn trên Mobile) */}
      <div className="header-col menu-container desktop-menu">
        <Menu
          mode="horizontal"
          items={items}
          onClick={handleMenuClick}
          selectedKeys={[location.pathname]}
          disabledOverflow={true}
        />
      </div>

      {/* Cột 3: Search */}
      <div className="header-col search-container">
        <SearchOutlined className="search-icon" />
      </div>

      {/* Drawer: Bảng menu trượt cho Mobile */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={300}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="inline" /* Đổi sang mode inline để sổ dọc trên mobile */
          items={items}
          onClick={handleMenuClick}
          selectedKeys={[location.pathname]}
          style={{ borderRight: 'none' }}
        />
      </Drawer>

    </header>
  );
};

export default Header;