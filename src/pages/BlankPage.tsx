import React from 'react';

const BlankPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div style={{ paddingTop: '120px', minHeight: '60vh', textAlign: 'center' }}>
      <h1>{title}</h1>
      <p>Nội dung trang này sẽ được xây dựng sau.</p>
    </div>
  );
};

export default BlankPage;