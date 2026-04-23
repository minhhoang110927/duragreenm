import React from 'react';
import { Row, Col, Input, Button } from 'antd';

const Footer: React.FC = () => {
  return (
    <div style={{ background: '#111', color: '#fff', padding: '60px 50px' }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={6}>
          <h3>Navigation</h3>
          <p>Products</p>
          <p>Why DuraGreen</p>
          <p>Projects</p>
        </Col>
        <Col xs={24} md={6}>
          <h3>Information</h3>
          <p>About Us</p>
          <p>Contact us</p>
          <p>Downloads</p>
          <p>Warranty</p>
        </Col>
        <Col xs={24} md={6}>
          <h3>Contact</h3>
          <p>hoangminh.tran2139@gmail.com</p>
          <p>+84 982994297</p>
          <p>65 Nguyen Du, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam</p>
        </Col>
        <Col xs={24} md={6}>
          <h3>Join us</h3>
          <div style={{ display: 'flex', marginTop: '15px' }}>
            <Input placeholder="Email" style={{ borderRadius: 0 }} />
            <Button type="primary" style={{ borderRadius: 0, background: '#444', border: 'none' }}>Submit</Button>
          </div>
        </Col>
      </Row>
      <div style={{ textAlign: 'center', marginTop: '40px', borderTop: '1px solid #333', paddingTop: '20px' }}>
        © 2024 DuraGreen | Terms & Conditions
      </div>
    </div>
  );
};

export default Footer;