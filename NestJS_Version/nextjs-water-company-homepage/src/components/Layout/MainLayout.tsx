'use client';

import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const { Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#152A4B' }}>
      <Header />
      <Layout style={{ backgroundColor: '#152A4B' }}>
        <div className="max-w-7xl mx-auto w-full flex" style={{ padding: '20px' }}>
          <Sidebar />
          <Content style={{ 
            marginLeft: '20px', 
            backgroundColor: 'transparent',
            flex: 1,
            color: '#ffffff'
          }}>
            {children}
          </Content>
        </div>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
