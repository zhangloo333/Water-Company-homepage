'use client';

import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
  return (
    <AntFooter style={{ 
      backgroundColor: '#152A4B',
      color: '#ffffff',
      textAlign: 'center',
      padding: '20px 0',
      marginTop: '50px'
    }}>
      <div className="max-w-7xl mx-auto">
        <div style={{ fontSize: '9pt', fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
          Copyright by Nanjing Venture Technology Co,. Ltd.<br />
          苏ICP备08014974号
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
